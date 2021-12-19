const gengo_periods = require("./gengo_periods.json");
const west_japan_cal = require("./west_japan_cal.json");
const ambiguos_table = require("./ambiguos_table.json");
const kyuji = require("./kyuji");
const JSONPath = require("jsonpath-plus").JSONPath;

function ambiguousSearch(text, options = {}) {
  const chars = text.split("");
  const ignore_over_match = options.ignore_over_match || false;
  const range = options.range || '';
  const range_match = range.match(/^(\d+)-(\d+)$/);
  const since = range_match ? range_match[1] : '';
  const till = range_match ? range_match[2] : '';

  let regexes = chars.map(char => {
    return `@.match(/${char}/)`;
  }).join(" && ");
  regexes = `$.*[?(@property === "ambiguos" &&${regexes})]^`;

  return JSONPath({path: regexes, json: ambiguos_table}).reduce((prev, candidate) => {
    const year = parseInt(candidate.year);
    if ((since && parseInt(since) > year) || (till && parseInt(till) < year)) return prev;
    if (ignore_over_match && candidate.over_match) return prev;

    const result = Object.assign({}, candidate);
    delete result.ambiguos;
    result.year = year;
    prev.push(result);
    return prev;
  }, []);
}

module.exports = {
  ambiguousSearch
};