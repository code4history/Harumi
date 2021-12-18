const gengo_periods = require("./gengo_periods");
const west_japan_cal = require("./west_japan_cal");
const solid = require("./solid");
const ambiguos = require("./ambiguos");
const kyuji = require("./kyuji");
const JSONPath = require("jsonpath-plus").JSONPath;

function ambiguousSearch(text) {
  const chars = text.split("");

  let regexes = chars.map(char => {
    return `@property.match(/${char}/)`;
  }).join(" && ");
  regexes = `$[?(${regexes})]`;

  const candidates = JSONPath({path: regexes, json: ambiguos}).map(year => {
    return Object.assign({ year }, west_japan_cal[year]);
  });
  const results = candidates.reduce((prev, year_data) => {
    year_data.nengo.forEach(nengo => {
      const nengo_match = nengo.match(/^([^\d]{2,4})\d+$/);
      let gengo = nengo_match[1];
      gengo += kyuji.shin2Kyus(gengo);
      const target = gengo.split("").reduce((prev, char) => {
        return text.match(new RegExp(char)) || prev;
      }, false);
      if (target) prev.push({
        year: parseInt(year_data.year),
        nengo,
        eto: year_data.eto
      });
    });
    return prev;
  }, []);
  return results;
}

module.exports = {
  ambiguousSearch
};





//JSONPath.JSONPath({path: '$..book[?(@.author.match(/R/i) && @.author.match(/\\./))]', json: jsonobj2})

