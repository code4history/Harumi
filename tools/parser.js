const fs = require('fs-extra');
const CalendarConverter = require('julian-gregorian').default;
const path = require("path");
const kyuji = require("../src/kyuji");

const jikkans = '甲乙丙丁戊己庚辛壬癸'.split("");
const junishis = '子丑寅卯辰巳午未申酉戌亥'.split("");
const han2num_table = {
  "元": 1,
  "一": 1,
  "壱": 1,
  "壹": 1,
  "二": 2,
  "弐": 2,
  "貳": 2,
  "三": 3,
  "参": 3,
  "參": 3,
  "四": 4,
  "五": 5,
  "伍": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10,
  "拾": 10
};
const num2han_table = {
  "1": "一壱壹",
  "2": "二弐貳",
  "3": "三参參",
  "4": "四",
  "5": "五伍",
  "6": "六",
  "7": "七",
  "8": "八",
  "9": "九",
  "0": ""
}

const start = 645;
const koshi = 604;
const years = {};
const data = require('../data_src/data.json');
const eras = fs.readFileSync(path.resolve(__dirname, '../data_src/wareki.txt'), 'utf8').split(/\r?\n/);
const kyurekis = fs.readFileSync(path.resolve(__dirname, '../data_src/kyureki.csv'), 'utf8').split(/\r?\n/);
const gengos = fs.readFileSync(path.resolve(__dirname, '../data_src/gengo.csv'), 'utf8').split(/\r?\n/);
const duplicates = fs.readFileSync(path.resolve(__dirname, '../data_src/duplicate.csv'), 'utf8').split(/\r?\n/);
const era_hash = {};
const dup_hash = {};
duplicates.forEach(line => {
  const attrs = line.split(",");
  const hash = dup_hash[attrs[0]] = {};
  for (let i = 0; i < 3; i++) {
    if (attrs[1 + i * 2]) {
      hash[attrs[1 + i * 2]] = attrs[2 + i * 2];
    }
  }
});

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

for (let y = start; y <= 2030; y++) {
  const jikkan = jikkans[(y-koshi) % 10];
  const junishi = junishis[(y-koshi) % 12];

  years[zeroFill(y, 4)] = {
    eto: `${jikkan}${junishi}`,
    nengo: [],
    flag: 0
  };
}

Object.keys(era_hash).forEach(gengo => {
  const gengo_h = era_hash[gengo];
  if (gengo === '令和') gengo_h.end = 2030;
  const flag = gengo_h.structure.reduce((prev, curr) => {
    if (curr[2][1] !== '') return true;
    return prev;
  }, false);
  for (let y = gengo_h.start; y <= gengo_h.end; y++) {
    const gengo_y = y - gengo_h.start + 1;
    const nengo = `${gengo}${gengo_y}`;
    years[zeroFill(y, 4)].nengo.push(nengo);
    if (flag) years[zeroFill(y, 4)].flag++;
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
  } else if (kyureki.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)年/)) {
    const o_gengo = RegExp.$1;
    const o_nen = han2Num(RegExp.$2);
    if (!current.other_nengos) current.other_nengos = [];
    current.other_nengos.push(`${o_gengo}${o_nen}`);
    //console.log(`${o_gengo}${o_nen}`);
  } else {
    if (kyureki !== '') console.log(`Something bad? ##${kyureki}##`);
  }
});
//console.log(kyureki_temp);
kyureki_temp.forEach(kyureki => {
  const months_txt = kyureki.months;
  //console.log(kyureki);
  //console.log(months_txt);
  const gregorian = kyureki.gregorian;
  const julian = kyureki.julian;
  const other_nengos = kyureki.other_nengos;
  const eto = months_txt.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/)[0];
  //console.log(months_txt);
  const nengo_match = months_txt.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)年/);
  //if (!nengo_match) console.log(months_txt);
  const gengo = nengo_match[1];
  const nen = han2Num(nengo_match[2]);
  //console.log(`${gengo} ${nen}`);
  const year = zeroFill((gregorian || julian).match(/暦,(\d{3,4})\//)[1], 4);
  //console.log(eto);
  //console.log(year);
  if (years[year].eto !== eto) console.log(`Something wrong: ##${year} ${eto}##`);
  years[year].nengo.forEach( nengo => {
    const nengo_match = nengo.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)/);
    const l_gengo = nengo_match[1];
    const l_nen = han2Num(nengo_match[2]);
    if (l_gengo === gengo && nen !== l_nen) console.log(`Something wrong: ##${gengo} ${nen} != ${l_nen}##`);
    if (other_nengos) {
      other_nengos.forEach(other_nengo => {
        //console.log(other_nengo);
        const o_nengo_match = other_nengo.match(/([^一二三四五六七八九十0-9]{2,4})([元一二三四五六七八九十0-9]+)/);
        const o_gengo = o_nengo_match[1];
        const o_nen = han2Num(o_nengo_match[2]);
        if (l_gengo === o_gengo && o_nen !== l_nen) console.log(`Something wrong: ##${o_gengo} ${o_nen} != ${l_nen}##`);
      });
    }
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

const gengo_periods = gengos.map(line => {
  const line_list = line.split(",");
  const line_data = {
    main: line_list[0]
  };
  const [f_gregorian, f_about] = analyzeJorGdate(line_list[1]);
  const [t_gregorian, t_about] = analyzeJorGdate(line_list[2]);
  for (let i = 0; i < 3; i++) {
    const j = i * 2 + 3;
    if (line_list[j]) {
      line_data[line_list[j]] = line_list[j+1];
    }
  }
  if (f_gregorian) line_data.from_gregorian = f_gregorian;
  if (t_gregorian) line_data.to_gregorian = t_gregorian;
  if (f_about) line_data.from_about = f_about;
  if (t_about) line_data.to_about = t_about;

  return line_data;
})

//console.log(JSON.stringify(years));
//console.log(JSON.stringify(data));
//console.log(JSON.stringify(eras));
//console.log(JSON.stringify(era_hash, null, " "));
//console.log(JSON.stringify(gengo_periods));

// Export Western era vs Japan lunar calendar
fs.writeFile(path.join(__dirname,'../src/west_japan_cal.json'), JSON.stringify(years), 'utf-8');

// Export Gengo vs period
fs.writeFile(path.join(__dirname,'../src/gengo_periods.json'), JSON.stringify(gengo_periods), 'utf-8');

// Create ambiguous search data
const nengo_store = {};
const ambiguos_arr = [];
Object.keys(years).sort((a, b) => {
  return parseInt(a) - parseInt(b);
}).forEach(year => {
  const year_data = years[year];
  const store_base = {
    year,
    eto: year_data.eto
  };
  const nengo_exists = year_data.nengo.reduce((prev, x) => {
    const x_match = x.match(/^([^\d]{2,4})(\d+)$/);
    const nengo = x_match[1];
    const nen = parseInt(x_match[2]);
    nengo_store[nengo] = {nen, exist: 0};
    prev[nengo] = 1;
    return prev;
  }, {});
  Object.keys(nengo_store).forEach(nengo => {
    const store_data = Object.assign({}, store_base);
    if (!nengo_exists[nengo]) {
      nengo_store[nengo].exist++;
      if (nengo_store[nengo].exist < 3) {
        nengo_store[nengo].nen++;
        store_data.over_match = true;
      } else {
        delete nengo_store[nengo];
        return;
      }
    }
    const nen = `${nengo_store[nengo].nen}`;
    if (dup_hash[year] && dup_hash[year][`${nengo}${nen}`]) {
      store_data.condition = dup_hash[year][`${nengo}${nen}`];
    }
    store_data.nengo = `${nengo}${nen}`;
    let ambig_key = nengo;
    ambig_key += kyuji.shin2Kyus(nengo);
    ambig_key += year_data.eto;
    ambig_key += nen.split("").map((x, i,ar) => {
      const dig = ar.length - i;
      const dec2_3 = dig === 2 ? "十拾" + (x === "2" ? "廿" : x === "3" ? "卅丗" : "") : "";
      const wo_gan = dec2_3 + (dig === 2 && x === "1" ? '' : num2han_table[x]);
      return wo_gan + (ar.length == 1 && x === "1" ? "元" : "");
    }).join("");
    store_data.ambiguos = ambig_key;
    ambiguos_arr.push(store_data);
  });
  //console.log(year);
  //console.log(nengo_store);
});

//console.log(ambiguos);
//console.log(solid);

// Export Gengo vs period
fs.writeFile(path.join(__dirname,'../src/ambiguos_table.json'), JSON.stringify(ambiguos_arr), 'utf-8');

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

function analyzeJorGdate (data_txt = '') {
  const match = data_txt.match(/(j?)(\d{4})-(\d{2})-(\d{2})(a?)/);
  if (match) {
    let gregorian;
    const julian = !!match[1];
    const year = parseInt(match[2]);
    const month = parseInt(match[3]);
    const date = parseInt(match[4]);
    const about = !!match[5];
    if (julian) {
      const greg = CalendarConverter.fromJulianToGregorian(year, month, date);
      const g_match = greg.match(/(\d{3,4})-(\d{1,2})-(\d{1,2})/);
      gregorian = `${zeroFill(g_match[1], 4)}-${zeroFill(g_match[2])}-${zeroFill(g_match[3])}`;
    } else {
      gregorian = `${year}-${month}-${date}`;
    }
    return [gregorian, about];
  } else return [];
}

