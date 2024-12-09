import { ambiguousSearch as i } from "./harumi.js";
window.Harumi = { ambiguousSearch: i };
document.getElementById("version").textContent = "0.1.4";
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#do_search").addEventListener("click", () => {
    const a = document.querySelector("#era_text").value;
    if (a === "") {
      alert("年号を推定する文字列を入力してください");
      return;
    }
    const t = {}, c = document.querySelector("#era_start").value, s = document.querySelector("#era_end").value;
    (c !== "" || s !== "") && (t.range = `${c}-${s}`), t.enable_over_match = document.querySelector("#era_over_match").checked, t.tsuchinoe_inu_flag = document.querySelector("#tsuchinoe_inu").checked, t.tsuchinoto_mi_flag = document.querySelector("#tsuchinoto_mi").checked;
    const n = window.Harumi.ambiguousSearch(a, t);
    n.length === 0 && n.push({
      nengo: "結果なし"
    }), document.querySelector("#lists").innerHTML = n.reduce((o, e) => (o = `${o}<li class="list-group-item"><span class="display-5">${e.nengo}</span> <span class="lead">
    ${e.eto ? `干支: ${e.eto}` : ""} ${e.year ? `西暦: ${e.year}年` : ""}</span>
    ${e.condition ? `${e.condition}の年号` : ""} ${e.over_match ? "延長マッチ" : ""}</li>`, o), "");
  });
});
