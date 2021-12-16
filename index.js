const fs = require('fs-extra');

const jikkans = '甲乙丙丁戊己庚辛壬癸'.split("");
const junishis = '子丑寅卯辰巳午未申酉戌亥'.split("");
const month_convert = {
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10,
  "十一": 11,
  "十二": 12
};

const start = 645;
const koshi = 604;
const years = {};
const data = require('./data.json');
const eras = fs.readFileSync('./wareki.txt', 'utf8').split(/\r?\n/);
const kyurekis = fs.readFileSync('./kyureki.csv', 'utf8').split(/\r?\n/);
const era_hash = {};

const era_group = ['', '', ''];
eras.forEach((era) => {
  const era_g_match = era.match(/^(:+)([^:]*)$/);
  if (era_g_match) {
    const level = era_g_match[1];
    const name = era_g_match[2];
    if (level.length === 1) {
      era_group.splice(0, 3, name, "", "");
    } else if (level.length === 2) {
      era_group.splice(1, 2, name, "");
    } else {
      era_group[2] = name;
    }
  } else {
    const gengo_match = era.match(/([^\-\d]{2,4})(-?\d+-?\d*)/g);
    gengo_match.forEach((gengo_each) => {
      const g_match = gengo_each.match(/([^\-\d]{2,4})(-?)(\d+)-?(\d*)/);
      const gengo = g_match[1];
      const start = g_match[2] ? '' : g_match[3];
      const end = g_match[2] ? g_match[3] : g_match[4];
      if (!era_hash[gengo]) era_hash[gengo] = {
        start: parseInt(start),
        end: parseInt(end),
        structure: []
      };
      era_hash[gengo].structure.push([start, end, era_group.join(',').split(',')]);
      if (start && (!era_hash[gengo].start || start && era_hash[gengo].start > parseInt(start))) era_hash[gengo].start = parseInt(start);
      if (end && (!era_hash[gengo].end || era_hash[gengo].end < parseInt(end))) era_hash[gengo].end = parseInt(end);
    })
  }
});

for (let y = start; y <= 2025; y++) {
  const jikkan = jikkans[(y-koshi) % 10];
  const junishi = junishis[(y-koshi) % 12];

  years[`${y}`] = {
    eto: `${jikkan}${junishi}`,
    nengo: [],
    flag: 0
  };
}

Object.keys(era_hash).forEach(gengo => {
  const gengo_h = era_hash[gengo];
  const flag = gengo_h.structure.reduce((prev, curr) => {
    if (curr[2][1] !== '') return true;
    return prev;
  }, false);
  for (let y = gengo_h.start; y <= gengo_h.end; y++) {
    const gengo_y = y - gengo_h.start + 1;
    const nengo = `${gengo}${gengo_y}`;
    years[`${y}`].nengo.push(nengo);
    if (flag) years[`${y}`].flag++;
  }
});

Object.keys(years).forEach(year => {
  const nengos = years[year].nengo;
  if (years[year].flag > 1) {
    years[year].flag = true;
    //console.log(year);
    //console.log(nengos);
  } else {
    delete years[year].flag;
  }
});

let current;
const kyureki_temp = [];
kyurekis.forEach(kyureki => {
  if (kyureki.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/)) {
    current = {
      months: kyureki
    };
    kyureki_temp.push(current);
  } else if (kyureki.match(/^(西|ユリウス|グレゴリオ)暦/)) {
    if (RegExp.$1 === 'ユリウス') {
      current.julian = kyureki;
    } else {
      current.gregorian = kyureki;
    }
  } else {
    console.log(`Something bad? ##${kyureki}##`);
  }
});
console.log(kyureki_temp);
kyureki_temp.forEach(kyureki => {
  const months_txt = kyureki.months;
  console.log(kyureki);
  console.log(months_txt);
  const gregorian = kyureki.gregorian;
  const eto = months_txt.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/)[0];
  const year = gregorian.match(/暦,(\d{3,4})\//)[1];
  //console.log(eto);
  //console.log(year);
  if (years[year].eto !== eto) console,log(`Something wrong: ##${year} ${eto}##`);
  const wareki = years[year].wareki = {
    small: [],
    months: {},
    lunar: true
  };

  const months = months_txt.match(/(閏?)(十[一二]?|[一二三四五六七八九])月(※?)/g).map(month => {
    const m_match = month.match(/(閏?)(十[一二]?|[一二三四五六七八九])月(※?)/);
    const uruu = !!m_match[1];
    const num = month_convert[m_match[2]];
    const small = !!m_match[3];
    if (uruu) wareki.uruu = num;
    const month_txt = `${uruu ? 'u' : ''}${num}`;
    if (small) wareki.small.push(month_txt);
    return month_txt;
  });
  //console.log(months);

  const mstart_base = gregorian.match(/(?:(\d{3,4})\/)?(1[012]?|0?[1-9])[\/月](3[01]|[012]?[0-9])日?/g);
  const mstarts = mstart_base.map(mstart_txt => {
    const ms_match = mstart_txt.match(/(?:(\d{3,4})\/)?(1[012]?|0?[1-9])[\/月](3[01]|[012]?[0-9])日?/);
    const s_year = ms_match[1];
    const next = !!(s_year && parseInt(s_year) === parseInt(year) + 1);
    const s_month = `${ms_match[2].length === 2 ? '' : '0'}${ms_match[2]}`;
    const s_date = `${ms_match[3].length === 2 ? '' : '0'}${ms_match[3]}`;
    return `${next ? 'n' : ''}${s_month}${s_date}`;
  });

  months.forEach((month, index) => {
    const mstart = mstarts[index];
    years[year].wareki.months[month] = {start_gregorian: mstart};
  });
  //console.log(mstart_base);
});



console.log(JSON.stringify(years));
//console.log(JSON.stringify(data));
//console.log(JSON.stringify(eras));
//console.log(JSON.stringify(era_hash, null, " "));