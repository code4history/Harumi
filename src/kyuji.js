const kyujis = '亞惡壓圍爲醫壹逸稻飮隱羽營榮衞銳益驛悅謁閱圓緣艷鹽奧應橫歐毆黃溫穩假價禍畫會囘壞悔懷海繪慨槪擴殼覺學嶽樂喝渴褐鐮勸卷寬歡漢罐觀閒關陷館巖顏器既旣歸氣祈龜僞戲犧卻糺舊據擧虛峽挾敎强狹鄕響堯曉勤謹區驅勳薰羣契徑惠揭攜溪經繼莖螢輕鷄藝擊缺儉劍圈檢權獻縣硏險顯驗嚴戶吳娛效廣恆鑛號國穀黑歲濟碎齋劑冱櫻册殺雜產參慘棧蠶贊殘祉姊絲視飼齒兒辭濕實舍寫煮社者釋壽收臭從澁獸縱祝肅處暑緖署諸敍尙奬將牀涉燒祥稱證乘剩壤孃條淨狀疊穰讓釀囑觸寢愼晉眞神刄盡圖粹醉隨髓數樞瀨晴淸精靑聲靜齊稅蹟節說攝竊絕專戰淺潛纖踐錢禪曾祖僧雙壯層搜插巢爭瘦窗總聰莊裝騷增憎臟藏贈卽屬續墮體對帶滯臺瀧擇澤琢脫單嘆擔膽團彈斷癡遲著晝蟲鑄猪著廳徵懲聽敕鎭塚遞鐵轉點傳都黨盜燈當鬭鬪德獨讀突屆繩難貳姙黏惱腦霸廢拜梅賣麥發髮拔繁飯晚蠻卑碑祕彥姬濱賓頻敏甁侮福拂佛倂塀竝變邊勉辯辨瓣舖步穗寶萠襃豐墨沒飜槇每萬滿免麵默餠戾彌藥譯祐豫餘與譽搖樣謠遙瑤慾來賴亂欄覽畧隆龍虜旅兩獵綠鄰凜壘淚類勵禮隸靈齡曆歷廉戀練鍊爐勞廊朗樓郞祿錄亙灣'.split('');
const shinjis = '亜悪圧囲為医壱逸稲飲隠羽営栄衛鋭益駅悦謁閲円縁艶塩奥応横欧殴黄温穏仮価禍画会回壊悔懐海絵慨概拡殻覚学岳楽喝渇褐鎌勧巻寛歓漢缶観間関陥館巌顔器既既帰気祈亀偽戯犠却糾旧拠挙虚峡挟教強狭郷響尭暁勤謹区駆勲薫群契径恵掲携渓経継茎蛍軽鶏芸撃欠倹剣圏検権献県研険顕験厳戸呉娯効広恒鉱号国穀黒歳済砕斎剤冴桜冊殺雑産参惨桟蚕賛残祉姉糸視飼歯児辞湿実舎写煮社者釈寿収臭従渋獣縦祝粛処暑緒署諸叙尚奨将床渉焼祥称証乗剰壌嬢条浄状畳穣譲醸嘱触寝慎晋真神刃尽図粋酔随髄数枢瀬晴清精青声静斉税跡節説摂窃絶専戦浅潜繊践銭禅曽祖僧双壮層捜挿巣争痩窓総聡荘装騒増憎臓蔵贈即属続堕体対帯滞台滝択沢琢脱単嘆担胆団弾断痴遅着昼虫鋳猪著庁徴懲聴勅鎮塚逓鉄転点伝都党盗灯当闘闘徳独読突届縄難弐妊粘悩脳覇廃拝梅売麦発髪抜繁飯晩蛮卑碑秘彦姫浜賓頻敏瓶侮福払仏併塀並変辺勉弁弁弁舗歩穂宝萌褒豊墨没翻槙毎万満免麺黙餅戻弥薬訳祐予余与誉揺様謡遥瑶欲来頼乱欄覧略隆竜虜旅両猟緑隣凛塁涙類励礼隷霊齢暦歴廉恋練錬炉労廊朗楼郎禄録亘湾'.split('');

const kyu2ShinHash = {};
const shin2KyuHash = {};

kyujis.forEach((kyuji, index) => {
  const shinji = shinjis[index];
  kyu2ShinHash[kyuji] = shinji;
  if (shin2KyuHash[shinji]) shin2KyuHash[shinji].push(kyuji);
  else shin2KyuHash[shinji] = [kyuji];
});

function kyu2Shin(kyuji) {
  return kyu2ShinHash[kyuji] || '';
}

function shin2Kyu(shinji) {
  return shin2KyuHash[shinji] ? shin2KyuHash[shinji].join('') : '';
}

function kyu2Shins(kyujis) {
  return kyujis.split("").map(x => kyu2Shin(x)).join("");
}

function shin2Kyus(shinjis) {
  return shinjis.split("").map(x => shin2Kyu(x)).join("");
}

module.exports = {
  kyu2Shin,
  shin2Kyu,
  kyu2Shins,
  shin2Kyus
};