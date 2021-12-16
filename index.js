const fs = require('fs-extra');
const CalendarConverter = require('julian-gregorian').default;

const jikkans = '甲乙丙丁戊己庚辛壬癸'.split("");
const junishis = '子丑寅卯辰巳午未申酉戌亥'.split("");
const han2num_table = {
  "元": 1,
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10
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
//console.log(kyureki_temp);
kyureki_temp.forEach(kyureki => {
  const months_txt = kyureki.months;
  //console.log(kyureki);
  //console.log(months_txt);
  const gregorian = kyureki.gregorian;
  const julian = kyureki.julian;
  const eto = months_txt.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/)[0];
  //console.log(months_txt);
  const nengo_match = months_txt.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)年/);
  const gengo = nengo_match[1];
  const nen = han2Num(nengo_match[2]);
  //console.log(`${gengo} ${nen}`);
  const year = (gregorian || julian).match(/暦,(\d{3,4})\//)[1];
  //console.log(eto);
  //console.log(year);
  if (years[year].eto !== eto) console.log(`Something wrong: ##${year} ${eto}##`);
  years[year].nengo.forEach( nengo => {
    const nengo_match = nengo.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)/);
    const l_gengo = nengo_match[1];
    const l_nen = han2Num(nengo_match[2]);
    if (l_gengo === gengo && nen !== l_nen) console.log(`Something wrong: ##${gengo} ${nen} != ${l_nen}##`);
  });
  const wareki = years[year].wareki = {
    months: [],
    lunar: true
  };

  const months = months_txt.match(/(閏?)(十[一二]?|[一二三四五六七八九])月(※?)/g).map(month => {
    const m_match = month.match(/(閏?)(十[一二]?|[一二三四五六七八九])月(※?)/);
    const uruu = !!m_match[1];
    const num = han2Num(m_match[2]);
    const small = !!m_match[3];
    if (uruu) wareki.uruu = num;
    const month_txt = `${uruu ? 'u' : ''}${num}`;
    const ret = {
      name: month_txt
    };
    if (small) ret.small = true;
    return ret;
  });
  //console.log(months);

  const mstart_base = (gregorian || julian).match(/(?:(\d{3,4})\/)?(1[012]?|0?[1-9])[\/月](3[01]|[012]?[0-9])日?/g);
  const mstarts = mstart_base.map(mstart_txt => {
    const ms_match = mstart_txt.match(/(?:(\d{3,4})\/)?(1[012]?|0?[1-9])[\/月](3[01]|[012]?[0-9])日?/);
    let n_year = parseInt(ms_match[1] || year);
    let n_month = parseInt(ms_match[2]);
    let n_date = parseInt(ms_match[3]);
    if (!gregorian) {
      const greg = CalendarConverter.fromJulianToGregorian(n_year, n_month, n_date);
      const greg_match = greg.match(/(\d{3,4})-(\d{1,2})-(\d{1,2})/);
      n_year = parseInt(greg_match[1]);
      n_month = parseInt(greg_match[2]);
      n_date = parseInt(greg_match[3]);
    }
    const s_year = zeroFill(n_year, 4);
    const s_month = zeroFill(n_month);
    const s_date = zeroFill(n_date);

    return `${s_year}-${s_month}-${s_date}`;
  });

  months.forEach((month, index) => {
    month.start_gregorian = mstarts[index];
    years[year].wareki.months.push(month);
  });
  //console.log(mstart_base);
});




//console.log(JSON.stringify(years));
//console.log(JSON.stringify(data));
//console.log(JSON.stringify(eras));
//console.log(JSON.stringify(era_hash, null, " "));

function zeroFill(val, digits = 2) {
  const txt = `${val}`;
  return `${'0'.repeat(digits - txt.length)}${txt}`;
}

function han2Num(han) {
  const match = han.match(/^(?:(?:([二三四五六七八九]?)(十))?([元一二三四五六七八九]?)|([0-9]+))$/);
  if (match && match[4]) return parseInt(match[4]);
  let ret = 0;
  if (match && match[2]) {
    ret += match[1] ? han2num_table[match[1]] * 10 : 10;
  }
  if (match && match[3]) {
    ret += han2num_table[match[3]];
  }
  //console.log(`${han} ${ret}`);
  return ret;
}