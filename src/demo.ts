import { ambiguousSearch } from './index';

// グローバルに公開
window.Harumi = { ambiguousSearch };

// バージョン情報を表示
document.getElementById('version')!.textContent = import.meta.env.APP_VERSION;

// イベントリスナーの設定
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#do_search")!.addEventListener("click", () => {
    const era_text = (document.querySelector("#era_text") as HTMLInputElement).value;
    if (era_text === "") {
      alert("年号を推定する文字列を入力してください");
      return;
    }
    const options = {};
    const era_start = (document.querySelector("#era_start") as HTMLInputElement).value;
    const era_end = (document.querySelector("#era_end") as HTMLInputElement).value;
    if (era_start !== '' || era_end !== '') {
      options.range = `${era_start}-${era_end}`;
    }
    options.enable_over_match = (document.querySelector("#era_over_match") as HTMLInputElement).checked;
    options.tsuchinoe_inu_flag = (document.querySelector("#tsuchinoe_inu") as HTMLInputElement).checked;
    options.tsuchinoto_mi_flag = (document.querySelector("#tsuchinoto_mi") as HTMLInputElement).checked;
    const results = window.Harumi.ambiguousSearch(era_text, options);
    if (results.length === 0) {
      results.push({
        nengo: "結果なし"
      });
    }
    document.querySelector("#lists")!.innerHTML = results.reduce((prev, curr) => {
      prev = `${prev}<li class="list-group-item"><span class="display-5">${curr.nengo}</span> <span class="lead">
    ${curr.eto ? `干支: ${curr.eto}` : ''} ${curr.year ? `西暦: ${curr.year}年` : ''}</span>
    ${curr.condition ? `${curr.condition}の年号` : ''} ${curr.over_match ? '延長マッチ' : ''}</li>`;
      return prev;
    }, "");
  });
});