import { describe, it, expect } from 'vitest';
import { ambiguousSearch } from './index';

// =============================================================
// golden（変更前 origin/master = 3ee8902 の実出力を固定。AC3）
// 既存 9 件の入力に対する全配列・順序・全フィールドを deep equality で比較する。
// =============================================================
const GOLDEN: Record<string, Array<Record<string, unknown>>> = {"kan_ei":[{"year":1624,"eto":"甲子","nengo":"寛永1"},{"year":1625,"eto":"乙丑","nengo":"寛永2"},{"year":1626,"eto":"丙寅","nengo":"寛永3"},{"year":1627,"eto":"丁卯","nengo":"寛永4"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1629,"eto":"己巳","nengo":"寛永6"},{"year":1630,"eto":"庚午","nengo":"寛永7"},{"year":1631,"eto":"辛未","nengo":"寛永8"},{"year":1632,"eto":"壬申","nengo":"寛永9"},{"year":1633,"eto":"癸酉","nengo":"寛永10"},{"year":1634,"eto":"甲戌","nengo":"寛永11"},{"year":1635,"eto":"乙亥","nengo":"寛永12"},{"year":1636,"eto":"丙子","nengo":"寛永13"},{"year":1637,"eto":"丁丑","nengo":"寛永14"},{"year":1638,"eto":"戊寅","nengo":"寛永15"},{"year":1639,"eto":"己卯","nengo":"寛永16"},{"year":1640,"eto":"庚辰","nengo":"寛永17"},{"year":1641,"eto":"辛巳","nengo":"寛永18"},{"year":1642,"eto":"壬午","nengo":"寛永19"},{"year":1643,"eto":"癸未","nengo":"寛永20"},{"year":1644,"eto":"甲申","nengo":"寛永21"}],"kan_ei_range":[{"year":1624,"eto":"甲子","nengo":"寛永1"},{"year":1625,"eto":"乙丑","nengo":"寛永2"},{"year":1626,"eto":"丙寅","nengo":"寛永3"},{"year":1627,"eto":"丁卯","nengo":"寛永4"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1629,"eto":"己巳","nengo":"寛永6"},{"year":1630,"eto":"庚午","nengo":"寛永7"}],"tsuchinoe_normal":[{"year":648,"eto":"戊申","nengo":"大化4"},{"year":708,"eto":"戊申","nengo":"慶雲5"},{"year":708,"eto":"戊申","nengo":"和銅1"},{"year":718,"eto":"戊午","nengo":"養老2"},{"year":728,"eto":"戊辰","nengo":"神亀5"},{"year":738,"eto":"戊寅","nengo":"天平10"},{"year":748,"eto":"戊子","nengo":"天平20"},{"year":758,"eto":"戊戌","nengo":"天平宝字2"},{"year":768,"eto":"戊申","nengo":"神護景雲2"},{"year":778,"eto":"戊午","nengo":"宝亀9"},{"year":788,"eto":"戊辰","nengo":"延暦7"},{"year":798,"eto":"戊寅","nengo":"延暦17"},{"year":808,"eto":"戊子","nengo":"大同3"},{"year":818,"eto":"戊戌","nengo":"弘仁9"},{"year":828,"eto":"戊申","nengo":"天長5"},{"year":838,"eto":"戊午","nengo":"承和5"},{"year":848,"eto":"戊辰","nengo":"承和15"},{"year":848,"eto":"戊辰","nengo":"嘉祥1"},{"year":858,"eto":"戊寅","nengo":"天安2"},{"year":868,"eto":"戊子","nengo":"貞観10"},{"year":878,"eto":"戊戌","nengo":"元慶2"},{"year":888,"eto":"戊申","nengo":"仁和4"},{"year":898,"eto":"戊午","nengo":"寛平10"},{"year":898,"eto":"戊午","nengo":"昌泰1"},{"year":908,"eto":"戊辰","nengo":"延喜8"},{"year":918,"eto":"戊寅","nengo":"延喜18"},{"year":928,"eto":"戊子","nengo":"延長6"},{"year":938,"eto":"戊戌","nengo":"承平8"},{"year":938,"eto":"戊戌","nengo":"天慶1"},{"year":948,"eto":"戊申","nengo":"天暦2"},{"year":958,"eto":"戊午","nengo":"天徳2"},{"year":968,"eto":"戊辰","nengo":"康保5"},{"year":968,"eto":"戊辰","nengo":"安和1"},{"year":978,"eto":"戊寅","nengo":"貞元3"},{"year":978,"eto":"戊寅","nengo":"天元1"},{"year":988,"eto":"戊子","nengo":"永延2"},{"year":998,"eto":"戊戌","nengo":"長徳4"},{"year":1008,"eto":"戊申","nengo":"寛弘5"},{"year":1018,"eto":"戊午","nengo":"寛仁2"},{"year":1028,"eto":"戊辰","nengo":"万寿5"},{"year":1028,"eto":"戊辰","nengo":"長元1"},{"year":1038,"eto":"戊寅","nengo":"長暦2"},{"year":1048,"eto":"戊子","nengo":"永承3"},{"year":1058,"eto":"戊戌","nengo":"天喜6"},{"year":1058,"eto":"戊戌","nengo":"康平1"},{"year":1068,"eto":"戊申","nengo":"治暦4"},{"year":1078,"eto":"戊午","nengo":"承暦2"},{"year":1088,"eto":"戊辰","nengo":"寛治2"},{"year":1098,"eto":"戊寅","nengo":"承徳2"},{"year":1108,"eto":"戊子","nengo":"嘉承3"},{"year":1108,"eto":"戊子","nengo":"天仁1"},{"year":1118,"eto":"戊戌","nengo":"永久6"},{"year":1118,"eto":"戊戌","nengo":"元永1"},{"year":1128,"eto":"戊申","nengo":"大治3"},{"year":1138,"eto":"戊午","nengo":"保延4"},{"year":1148,"eto":"戊辰","nengo":"久安4"},{"year":1158,"eto":"戊寅","nengo":"保元3"},{"year":1168,"eto":"戊子","nengo":"仁安3"},{"year":1178,"eto":"戊戌","nengo":"治承2"},{"year":1188,"eto":"戊申","nengo":"文治4"},{"year":1198,"eto":"戊午","nengo":"建久9"},{"year":1208,"eto":"戊辰","nengo":"承元2"},{"year":1218,"eto":"戊寅","nengo":"建保6"},{"year":1228,"eto":"戊子","nengo":"安貞2"},{"year":1238,"eto":"戊戌","nengo":"嘉禎4"},{"year":1238,"eto":"戊戌","nengo":"暦仁1"},{"year":1248,"eto":"戊申","nengo":"宝治2"},{"year":1258,"eto":"戊午","nengo":"正嘉2"},{"year":1268,"eto":"戊辰","nengo":"文永5"},{"year":1278,"eto":"戊寅","nengo":"建治4"},{"year":1278,"eto":"戊寅","nengo":"弘安1"},{"year":1288,"eto":"戊子","nengo":"弘安11"},{"year":1288,"eto":"戊子","nengo":"正応1"},{"year":1298,"eto":"戊戌","nengo":"永仁6"},{"year":1308,"eto":"戊申","nengo":"徳治3"},{"year":1308,"eto":"戊申","nengo":"延慶1"},{"year":1318,"eto":"戊午","nengo":"文保2"},{"year":1328,"eto":"戊辰","nengo":"嘉暦3"},{"year":1338,"eto":"戊寅","condition":"北朝","nengo":"建武5"},{"year":1338,"eto":"戊寅","condition":"南朝","nengo":"延元3"},{"year":1338,"eto":"戊寅","condition":"北朝","nengo":"暦応1"},{"year":1348,"eto":"戊子","condition":"北朝","nengo":"貞和4"},{"year":1348,"eto":"戊子","condition":"南朝","nengo":"正平3"},{"year":1358,"eto":"戊戌","condition":"南朝","nengo":"正平13"},{"year":1358,"eto":"戊戌","condition":"北朝","nengo":"延文3"},{"year":1368,"eto":"戊申","condition":"南朝","nengo":"正平23"},{"year":1368,"eto":"戊申","condition":"北朝","nengo":"貞治7"},{"year":1368,"eto":"戊申","condition":"北朝","nengo":"応安1"},{"year":1378,"eto":"戊午","condition":"南朝","nengo":"天授4"},{"year":1378,"eto":"戊午","condition":"北朝","nengo":"永和4"},{"year":1388,"eto":"戊辰","condition":"南朝","nengo":"元中5"},{"year":1388,"eto":"戊辰","condition":"北朝","nengo":"嘉慶2"},{"year":1398,"eto":"戊寅","nengo":"応永5"},{"year":1408,"eto":"戊子","nengo":"応永15"},{"year":1418,"eto":"戊戌","nengo":"応永25"},{"year":1428,"eto":"戊申","nengo":"応永35"},{"year":1428,"eto":"戊申","nengo":"正長1"},{"year":1438,"eto":"戊午","nengo":"永享10"},{"year":1448,"eto":"戊辰","nengo":"文安5"},{"year":1458,"eto":"戊寅","condition":"古河府","nengo":"享徳7"},{"year":1458,"eto":"戊寅","nengo":"長禄2"},{"year":1468,"eto":"戊子","condition":"古河府","nengo":"享徳17"},{"year":1468,"eto":"戊子","nengo":"応仁2"},{"year":1478,"eto":"戊戌","condition":"古河府","nengo":"享徳27"},{"year":1478,"eto":"戊戌","nengo":"文明10"},{"year":1488,"eto":"戊申","nengo":"長享2"},{"year":1498,"eto":"戊午","nengo":"明応7"},{"year":1508,"eto":"戊辰","nengo":"永正5"},{"year":1518,"eto":"戊寅","nengo":"永正15"},{"year":1528,"eto":"戊子","nengo":"大永8"},{"year":1528,"eto":"戊子","nengo":"享禄1"},{"year":1538,"eto":"戊戌","nengo":"天文7"},{"year":1548,"eto":"戊申","nengo":"天文17"},{"year":1558,"eto":"戊午","nengo":"弘治4"},{"year":1558,"eto":"戊午","nengo":"永禄1"},{"year":1568,"eto":"戊辰","nengo":"永禄11"},{"year":1578,"eto":"戊寅","nengo":"天正6"},{"year":1588,"eto":"戊子","nengo":"天正16"},{"year":1598,"eto":"戊戌","nengo":"慶長3"},{"year":1608,"eto":"戊申","nengo":"慶長13"},{"year":1618,"eto":"戊午","nengo":"元和4"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1638,"eto":"戊寅","nengo":"寛永15"},{"year":1648,"eto":"戊子","nengo":"正保5"},{"year":1648,"eto":"戊子","nengo":"慶安1"},{"year":1658,"eto":"戊戌","nengo":"明暦4"},{"year":1658,"eto":"戊戌","nengo":"万治1"},{"year":1668,"eto":"戊申","nengo":"寛文8"},{"year":1678,"eto":"戊午","nengo":"延宝6"},{"year":1688,"eto":"戊辰","nengo":"貞享5"},{"year":1688,"eto":"戊辰","nengo":"元禄1"},{"year":1698,"eto":"戊寅","nengo":"元禄11"},{"year":1708,"eto":"戊子","nengo":"宝永5"},{"year":1718,"eto":"戊戌","nengo":"享保3"},{"year":1728,"eto":"戊申","nengo":"享保13"},{"year":1738,"eto":"戊午","nengo":"元文3"},{"year":1748,"eto":"戊辰","nengo":"延享5"},{"year":1748,"eto":"戊辰","nengo":"寛延1"},{"year":1758,"eto":"戊寅","nengo":"宝暦8"},{"year":1768,"eto":"戊子","nengo":"明和5"},{"year":1778,"eto":"戊戌","nengo":"安永7"},{"year":1788,"eto":"戊申","nengo":"天明8"},{"year":1798,"eto":"戊午","nengo":"寛政10"},{"year":1808,"eto":"戊辰","nengo":"文化5"},{"year":1818,"eto":"戊寅","nengo":"文化15"},{"year":1818,"eto":"戊寅","nengo":"文政1"},{"year":1828,"eto":"戊子","nengo":"文政11"},{"year":1838,"eto":"戊戌","nengo":"天保9"},{"year":1848,"eto":"戊申","nengo":"弘化5"},{"year":1848,"eto":"戊申","nengo":"嘉永1"},{"year":1858,"eto":"戊午","nengo":"安政5"},{"year":1868,"eto":"戊辰","nengo":"慶応4"},{"year":1868,"eto":"戊辰","nengo":"明治1"},{"year":1878,"eto":"戊寅","nengo":"明治11"},{"year":1888,"eto":"戊子","nengo":"明治21"},{"year":1898,"eto":"戊戌","nengo":"明治31"},{"year":1908,"eto":"戊申","nengo":"明治41"},{"year":1918,"eto":"戊午","nengo":"大正7"},{"year":1928,"eto":"戊辰","nengo":"昭和3"},{"year":1938,"eto":"戊寅","nengo":"昭和13"},{"year":1948,"eto":"戊子","nengo":"昭和23"},{"year":1958,"eto":"戊戌","nengo":"昭和33"},{"year":1968,"eto":"戊申","nengo":"昭和43"},{"year":1978,"eto":"戊午","nengo":"昭和53"},{"year":1988,"eto":"戊辰","nengo":"昭和63"},{"year":1998,"eto":"戊寅","nengo":"平成10"},{"year":2008,"eto":"戊子","nengo":"平成20"},{"year":2018,"eto":"戊戌","nengo":"平成30"},{"year":2028,"eto":"戊申","nengo":"令和10"}],"tsuchinoe_flag":[{"year":648,"eto":"戊申","nengo":"大化4"},{"year":650,"eto":"庚戌","nengo":"大化6"},{"year":650,"eto":"庚戌","nengo":"白雉1"},{"year":708,"eto":"戊申","nengo":"慶雲5"},{"year":708,"eto":"戊申","nengo":"和銅1"},{"year":710,"eto":"庚戌","nengo":"和銅3"},{"year":718,"eto":"戊午","nengo":"養老2"},{"year":722,"eto":"壬戌","nengo":"養老6"},{"year":728,"eto":"戊辰","nengo":"神亀5"},{"year":734,"eto":"甲戌","nengo":"天平6"},{"year":738,"eto":"戊寅","nengo":"天平10"},{"year":746,"eto":"丙戌","nengo":"天平18"},{"year":748,"eto":"戊子","nengo":"天平20"},{"year":758,"eto":"戊戌","nengo":"天平宝字2"},{"year":768,"eto":"戊申","nengo":"神護景雲2"},{"year":770,"eto":"庚戌","nengo":"神護景雲4"},{"year":770,"eto":"庚戌","nengo":"宝亀1"},{"year":778,"eto":"戊午","nengo":"宝亀9"},{"year":782,"eto":"壬戌","nengo":"天応2"},{"year":782,"eto":"壬戌","nengo":"延暦1"},{"year":788,"eto":"戊辰","nengo":"延暦7"},{"year":794,"eto":"甲戌","nengo":"延暦13"},{"year":798,"eto":"戊寅","nengo":"延暦17"},{"year":806,"eto":"丙戌","nengo":"延暦25"},{"year":806,"eto":"丙戌","nengo":"大同1"},{"year":808,"eto":"戊子","nengo":"大同3"},{"year":818,"eto":"戊戌","nengo":"弘仁9"},{"year":828,"eto":"戊申","nengo":"天長5"},{"year":830,"eto":"庚戌","nengo":"天長7"},{"year":838,"eto":"戊午","nengo":"承和5"},{"year":842,"eto":"壬戌","nengo":"承和9"},{"year":848,"eto":"戊辰","nengo":"承和15"},{"year":848,"eto":"戊辰","nengo":"嘉祥1"},{"year":854,"eto":"甲戌","nengo":"仁寿4"},{"year":854,"eto":"甲戌","nengo":"斉衡1"},{"year":858,"eto":"戊寅","nengo":"天安2"},{"year":866,"eto":"丙戌","nengo":"貞観8"},{"year":868,"eto":"戊子","nengo":"貞観10"},{"year":878,"eto":"戊戌","nengo":"元慶2"},{"year":888,"eto":"戊申","nengo":"仁和4"},{"year":890,"eto":"庚戌","nengo":"寛平2"},{"year":898,"eto":"戊午","nengo":"寛平10"},{"year":898,"eto":"戊午","nengo":"昌泰1"},{"year":902,"eto":"壬戌","nengo":"延喜2"},{"year":908,"eto":"戊辰","nengo":"延喜8"},{"year":914,"eto":"甲戌","nengo":"延喜14"},{"year":918,"eto":"戊寅","nengo":"延喜18"},{"year":926,"eto":"丙戌","nengo":"延長4"},{"year":928,"eto":"戊子","nengo":"延長6"},{"year":938,"eto":"戊戌","nengo":"承平8"},{"year":938,"eto":"戊戌","nengo":"天慶1"},{"year":948,"eto":"戊申","nengo":"天暦2"},{"year":950,"eto":"庚戌","nengo":"天暦4"},{"year":958,"eto":"戊午","nengo":"天徳2"},{"year":962,"eto":"壬戌","nengo":"応和2"},{"year":968,"eto":"戊辰","nengo":"康保5"},{"year":968,"eto":"戊辰","nengo":"安和1"},{"year":974,"eto":"甲戌","nengo":"天延2"},{"year":978,"eto":"戊寅","nengo":"貞元3"},{"year":978,"eto":"戊寅","nengo":"天元1"},{"year":986,"eto":"丙戌","nengo":"寛和2"},{"year":988,"eto":"戊子","nengo":"永延2"},{"year":998,"eto":"戊戌","nengo":"長徳4"},{"year":1008,"eto":"戊申","nengo":"寛弘5"},{"year":1010,"eto":"庚戌","nengo":"寛弘7"},{"year":1018,"eto":"戊午","nengo":"寛仁2"},{"year":1022,"eto":"壬戌","nengo":"治安2"},{"year":1028,"eto":"戊辰","nengo":"万寿5"},{"year":1028,"eto":"戊辰","nengo":"長元1"},{"year":1034,"eto":"甲戌","nengo":"長元7"},{"year":1038,"eto":"戊寅","nengo":"長暦2"},{"year":1046,"eto":"丙戌","nengo":"寛徳3"},{"year":1046,"eto":"丙戌","nengo":"永承1"},{"year":1048,"eto":"戊子","nengo":"永承3"},{"year":1058,"eto":"戊戌","nengo":"天喜6"},{"year":1058,"eto":"戊戌","nengo":"康平1"},{"year":1068,"eto":"戊申","nengo":"治暦4"},{"year":1070,"eto":"庚戌","nengo":"延久2"},{"year":1078,"eto":"戊午","nengo":"承暦2"},{"year":1082,"eto":"壬戌","nengo":"永保2"},{"year":1088,"eto":"戊辰","nengo":"寛治2"},{"year":1094,"eto":"甲戌","nengo":"寛治8"},{"year":1094,"eto":"甲戌","nengo":"嘉保1"},{"year":1098,"eto":"戊寅","nengo":"承徳2"},{"year":1106,"eto":"丙戌","nengo":"長治3"},{"year":1106,"eto":"丙戌","nengo":"嘉承1"},{"year":1108,"eto":"戊子","nengo":"嘉承3"},{"year":1108,"eto":"戊子","nengo":"天仁1"},{"year":1118,"eto":"戊戌","nengo":"永久6"},{"year":1118,"eto":"戊戌","nengo":"元永1"},{"year":1128,"eto":"戊申","nengo":"大治3"},{"year":1130,"eto":"庚戌","nengo":"大治5"},{"year":1138,"eto":"戊午","nengo":"保延4"},{"year":1142,"eto":"壬戌","nengo":"永治2"},{"year":1142,"eto":"壬戌","nengo":"康治1"},{"year":1148,"eto":"戊辰","nengo":"久安4"},{"year":1154,"eto":"甲戌","nengo":"仁平4"},{"year":1154,"eto":"甲戌","nengo":"久寿1"},{"year":1158,"eto":"戊寅","nengo":"保元3"},{"year":1166,"eto":"丙戌","nengo":"永万2"},{"year":1166,"eto":"丙戌","nengo":"仁安1"},{"year":1168,"eto":"戊子","nengo":"仁安3"},{"year":1178,"eto":"戊戌","nengo":"治承2"},{"year":1188,"eto":"戊申","nengo":"文治4"},{"year":1190,"eto":"庚戌","nengo":"文治6"},{"year":1190,"eto":"庚戌","nengo":"建久1"},{"year":1198,"eto":"戊午","nengo":"建久9"},{"year":1202,"eto":"壬戌","nengo":"建仁2"},{"year":1208,"eto":"戊辰","nengo":"承元2"},{"year":1214,"eto":"甲戌","nengo":"建保2"},{"year":1218,"eto":"戊寅","nengo":"建保6"},{"year":1226,"eto":"丙戌","nengo":"嘉禄2"},{"year":1228,"eto":"戊子","nengo":"安貞2"},{"year":1238,"eto":"戊戌","nengo":"嘉禎4"},{"year":1238,"eto":"戊戌","nengo":"暦仁1"},{"year":1248,"eto":"戊申","nengo":"宝治2"},{"year":1250,"eto":"庚戌","nengo":"建長2"},{"year":1258,"eto":"戊午","nengo":"正嘉2"},{"year":1262,"eto":"壬戌","nengo":"弘長2"},{"year":1268,"eto":"戊辰","nengo":"文永5"},{"year":1274,"eto":"甲戌","nengo":"文永11"},{"year":1278,"eto":"戊寅","nengo":"建治4"},{"year":1278,"eto":"戊寅","nengo":"弘安1"},{"year":1286,"eto":"丙戌","nengo":"弘安9"},{"year":1288,"eto":"戊子","nengo":"弘安11"},{"year":1288,"eto":"戊子","nengo":"正応1"},{"year":1298,"eto":"戊戌","nengo":"永仁6"},{"year":1308,"eto":"戊申","nengo":"徳治3"},{"year":1308,"eto":"戊申","nengo":"延慶1"},{"year":1310,"eto":"庚戌","nengo":"延慶3"},{"year":1318,"eto":"戊午","nengo":"文保2"},{"year":1322,"eto":"壬戌","nengo":"元亨2"},{"year":1328,"eto":"戊辰","nengo":"嘉暦3"},{"year":1334,"eto":"甲戌","nengo":"元弘4"},{"year":1334,"eto":"甲戌","nengo":"建武1"},{"year":1338,"eto":"戊寅","condition":"北朝","nengo":"建武5"},{"year":1338,"eto":"戊寅","condition":"南朝","nengo":"延元3"},{"year":1338,"eto":"戊寅","condition":"北朝","nengo":"暦応1"},{"year":1346,"eto":"丙戌","condition":"南朝","nengo":"興国7"},{"year":1346,"eto":"丙戌","condition":"北朝","nengo":"貞和2"},{"year":1346,"eto":"丙戌","condition":"南朝","nengo":"正平1"},{"year":1348,"eto":"戊子","condition":"北朝","nengo":"貞和4"},{"year":1348,"eto":"戊子","condition":"南朝","nengo":"正平3"},{"year":1358,"eto":"戊戌","condition":"南朝","nengo":"正平13"},{"year":1358,"eto":"戊戌","condition":"北朝","nengo":"延文3"},{"year":1368,"eto":"戊申","condition":"南朝","nengo":"正平23"},{"year":1368,"eto":"戊申","condition":"北朝","nengo":"貞治7"},{"year":1368,"eto":"戊申","condition":"北朝","nengo":"応安1"},{"year":1370,"eto":"庚戌","condition":"南朝","nengo":"正平25"},{"year":1370,"eto":"庚戌","condition":"北朝","nengo":"応安3"},{"year":1370,"eto":"庚戌","condition":"南朝","nengo":"建徳1"},{"year":1378,"eto":"戊午","condition":"南朝","nengo":"天授4"},{"year":1378,"eto":"戊午","condition":"北朝","nengo":"永和4"},{"year":1382,"eto":"壬戌","condition":"南朝","nengo":"弘和2"},{"year":1382,"eto":"壬戌","condition":"北朝","nengo":"永徳2"},{"year":1388,"eto":"戊辰","condition":"南朝","nengo":"元中5"},{"year":1388,"eto":"戊辰","condition":"北朝","nengo":"嘉慶2"},{"year":1394,"eto":"甲戌","nengo":"明徳5"},{"year":1394,"eto":"甲戌","nengo":"応永1"},{"year":1398,"eto":"戊寅","nengo":"応永5"},{"year":1406,"eto":"丙戌","nengo":"応永13"},{"year":1408,"eto":"戊子","nengo":"応永15"},{"year":1418,"eto":"戊戌","nengo":"応永25"},{"year":1428,"eto":"戊申","nengo":"応永35"},{"year":1428,"eto":"戊申","nengo":"正長1"},{"year":1430,"eto":"庚戌","condition":"鎌倉府","nengo":"正長3"},{"year":1430,"eto":"庚戌","nengo":"永享2"},{"year":1438,"eto":"戊午","nengo":"永享10"},{"year":1442,"eto":"壬戌","nengo":"嘉吉2"},{"year":1448,"eto":"戊辰","nengo":"文安5"},{"year":1454,"eto":"甲戌","nengo":"享徳3"},{"year":1458,"eto":"戊寅","condition":"古河府","nengo":"享徳7"},{"year":1458,"eto":"戊寅","nengo":"長禄2"},{"year":1466,"eto":"丙戌","condition":"古河府","nengo":"享徳15"},{"year":1466,"eto":"丙戌","nengo":"寛正7"},{"year":1466,"eto":"丙戌","nengo":"文正1"},{"year":1468,"eto":"戊子","condition":"古河府","nengo":"享徳17"},{"year":1468,"eto":"戊子","nengo":"応仁2"},{"year":1478,"eto":"戊戌","condition":"古河府","nengo":"享徳27"},{"year":1478,"eto":"戊戌","nengo":"文明10"},{"year":1488,"eto":"戊申","nengo":"長享2"},{"year":1490,"eto":"庚戌","nengo":"延徳2"},{"year":1498,"eto":"戊午","nengo":"明応7"},{"year":1502,"eto":"壬戌","nengo":"文亀2"},{"year":1508,"eto":"戊辰","nengo":"永正5"},{"year":1514,"eto":"甲戌","nengo":"永正11"},{"year":1518,"eto":"戊寅","nengo":"永正15"},{"year":1526,"eto":"丙戌","nengo":"大永6"},{"year":1528,"eto":"戊子","nengo":"大永8"},{"year":1528,"eto":"戊子","nengo":"享禄1"},{"year":1538,"eto":"戊戌","nengo":"天文7"},{"year":1548,"eto":"戊申","nengo":"天文17"},{"year":1550,"eto":"庚戌","nengo":"天文19"},{"year":1558,"eto":"戊午","nengo":"弘治4"},{"year":1558,"eto":"戊午","nengo":"永禄1"},{"year":1562,"eto":"壬戌","nengo":"永禄5"},{"year":1568,"eto":"戊辰","nengo":"永禄11"},{"year":1574,"eto":"甲戌","nengo":"天正2"},{"year":1578,"eto":"戊寅","nengo":"天正6"},{"year":1586,"eto":"丙戌","nengo":"天正14"},{"year":1588,"eto":"戊子","nengo":"天正16"},{"year":1598,"eto":"戊戌","nengo":"慶長3"},{"year":1608,"eto":"戊申","nengo":"慶長13"},{"year":1610,"eto":"庚戌","nengo":"慶長15"},{"year":1618,"eto":"戊午","nengo":"元和4"},{"year":1622,"eto":"壬戌","nengo":"元和8"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1634,"eto":"甲戌","nengo":"寛永11"},{"year":1638,"eto":"戊寅","nengo":"寛永15"},{"year":1646,"eto":"丙戌","nengo":"正保3"},{"year":1648,"eto":"戊子","nengo":"正保5"},{"year":1648,"eto":"戊子","nengo":"慶安1"},{"year":1658,"eto":"戊戌","nengo":"明暦4"},{"year":1658,"eto":"戊戌","nengo":"万治1"},{"year":1668,"eto":"戊申","nengo":"寛文8"},{"year":1670,"eto":"庚戌","nengo":"寛文10"},{"year":1678,"eto":"戊午","nengo":"延宝6"},{"year":1682,"eto":"壬戌","nengo":"天和2"},{"year":1688,"eto":"戊辰","nengo":"貞享5"},{"year":1688,"eto":"戊辰","nengo":"元禄1"},{"year":1694,"eto":"甲戌","nengo":"元禄7"},{"year":1698,"eto":"戊寅","nengo":"元禄11"},{"year":1706,"eto":"丙戌","nengo":"宝永3"},{"year":1708,"eto":"戊子","nengo":"宝永5"},{"year":1718,"eto":"戊戌","nengo":"享保3"},{"year":1728,"eto":"戊申","nengo":"享保13"},{"year":1730,"eto":"庚戌","nengo":"享保15"},{"year":1738,"eto":"戊午","nengo":"元文3"},{"year":1742,"eto":"壬戌","nengo":"寛保2"},{"year":1748,"eto":"戊辰","nengo":"延享5"},{"year":1748,"eto":"戊辰","nengo":"寛延1"},{"year":1754,"eto":"甲戌","nengo":"宝暦4"},{"year":1758,"eto":"戊寅","nengo":"宝暦8"},{"year":1766,"eto":"丙戌","nengo":"明和3"},{"year":1768,"eto":"戊子","nengo":"明和5"},{"year":1778,"eto":"戊戌","nengo":"安永7"},{"year":1788,"eto":"戊申","nengo":"天明8"},{"year":1790,"eto":"庚戌","nengo":"寛政2"},{"year":1798,"eto":"戊午","nengo":"寛政10"},{"year":1802,"eto":"壬戌","nengo":"享和2"},{"year":1808,"eto":"戊辰","nengo":"文化5"},{"year":1814,"eto":"甲戌","nengo":"文化11"},{"year":1818,"eto":"戊寅","nengo":"文化15"},{"year":1818,"eto":"戊寅","nengo":"文政1"},{"year":1826,"eto":"丙戌","nengo":"文政9"},{"year":1828,"eto":"戊子","nengo":"文政11"},{"year":1838,"eto":"戊戌","nengo":"天保9"},{"year":1848,"eto":"戊申","nengo":"弘化5"},{"year":1848,"eto":"戊申","nengo":"嘉永1"},{"year":1850,"eto":"庚戌","nengo":"嘉永3"},{"year":1858,"eto":"戊午","nengo":"安政5"},{"year":1862,"eto":"壬戌","nengo":"文久2"},{"year":1868,"eto":"戊辰","nengo":"慶応4"},{"year":1868,"eto":"戊辰","nengo":"明治1"},{"year":1874,"eto":"甲戌","nengo":"明治7"},{"year":1878,"eto":"戊寅","nengo":"明治11"},{"year":1886,"eto":"丙戌","nengo":"明治19"},{"year":1888,"eto":"戊子","nengo":"明治21"},{"year":1898,"eto":"戊戌","nengo":"明治31"},{"year":1908,"eto":"戊申","nengo":"明治41"},{"year":1910,"eto":"庚戌","nengo":"明治43"},{"year":1918,"eto":"戊午","nengo":"大正7"},{"year":1922,"eto":"壬戌","nengo":"大正11"},{"year":1928,"eto":"戊辰","nengo":"昭和3"},{"year":1934,"eto":"甲戌","nengo":"昭和9"},{"year":1938,"eto":"戊寅","nengo":"昭和13"},{"year":1946,"eto":"丙戌","nengo":"昭和21"},{"year":1948,"eto":"戊子","nengo":"昭和23"},{"year":1958,"eto":"戊戌","nengo":"昭和33"},{"year":1968,"eto":"戊申","nengo":"昭和43"},{"year":1970,"eto":"庚戌","nengo":"昭和45"},{"year":1978,"eto":"戊午","nengo":"昭和53"},{"year":1982,"eto":"壬戌","nengo":"昭和57"},{"year":1988,"eto":"戊辰","nengo":"昭和63"},{"year":1994,"eto":"甲戌","nengo":"平成6"},{"year":1998,"eto":"戊寅","nengo":"平成10"},{"year":2006,"eto":"丙戌","nengo":"平成18"},{"year":2008,"eto":"戊子","nengo":"平成20"},{"year":2018,"eto":"戊戌","nengo":"平成30"},{"year":2028,"eto":"戊申","nengo":"令和10"},{"year":2030,"eto":"庚戌","nengo":"令和12"}],"tsuchinoto_normal":[{"year":649,"eto":"己酉","nengo":"大化5"},{"year":709,"eto":"己酉","nengo":"和銅2"},{"year":719,"eto":"己未","nengo":"養老3"},{"year":729,"eto":"己巳","nengo":"神亀6"},{"year":729,"eto":"己巳","nengo":"天平1"},{"year":739,"eto":"己卯","nengo":"天平11"},{"year":749,"eto":"己丑","nengo":"天平21"},{"year":749,"eto":"己丑","nengo":"天平勝宝1"},{"year":759,"eto":"己亥","nengo":"天平宝字3"},{"year":769,"eto":"己酉","nengo":"神護景雲3"},{"year":779,"eto":"己未","nengo":"宝亀10"},{"year":789,"eto":"己巳","nengo":"延暦8"},{"year":799,"eto":"己卯","nengo":"延暦18"},{"year":809,"eto":"己丑","nengo":"大同4"},{"year":819,"eto":"己亥","nengo":"弘仁10"},{"year":829,"eto":"己酉","nengo":"天長6"},{"year":839,"eto":"己未","nengo":"承和6"},{"year":849,"eto":"己巳","nengo":"嘉祥2"},{"year":859,"eto":"己卯","nengo":"天安3"},{"year":859,"eto":"己卯","nengo":"貞観1"},{"year":869,"eto":"己丑","nengo":"貞観11"},{"year":879,"eto":"己亥","nengo":"元慶3"},{"year":889,"eto":"己酉","nengo":"仁和5"},{"year":889,"eto":"己酉","nengo":"寛平1"},{"year":899,"eto":"己未","nengo":"昌泰2"},{"year":909,"eto":"己巳","nengo":"延喜9"},{"year":919,"eto":"己卯","nengo":"延喜19"},{"year":929,"eto":"己丑","nengo":"延長7"},{"year":939,"eto":"己亥","nengo":"天慶2"},{"year":949,"eto":"己酉","nengo":"天暦3"},{"year":959,"eto":"己未","nengo":"天徳3"},{"year":969,"eto":"己巳","nengo":"安和2"},{"year":979,"eto":"己卯","nengo":"天元2"},{"year":989,"eto":"己丑","nengo":"永延3"},{"year":989,"eto":"己丑","nengo":"永祚1"},{"year":999,"eto":"己亥","nengo":"長徳5"},{"year":999,"eto":"己亥","nengo":"長保1"},{"year":1009,"eto":"己酉","nengo":"寛弘6"},{"year":1019,"eto":"己未","nengo":"寛仁3"},{"year":1029,"eto":"己巳","nengo":"長元2"},{"year":1039,"eto":"己卯","nengo":"長暦3"},{"year":1049,"eto":"己丑","nengo":"永承4"},{"year":1059,"eto":"己亥","nengo":"康平2"},{"year":1069,"eto":"己酉","nengo":"治暦5"},{"year":1069,"eto":"己酉","nengo":"延久1"},{"year":1079,"eto":"己未","nengo":"承暦3"},{"year":1089,"eto":"己巳","nengo":"寛治3"},{"year":1099,"eto":"己卯","nengo":"承徳3"},{"year":1099,"eto":"己卯","nengo":"康和1"},{"year":1109,"eto":"己丑","nengo":"天仁2"},{"year":1119,"eto":"己亥","nengo":"元永2"},{"year":1129,"eto":"己酉","nengo":"大治4"},{"year":1139,"eto":"己未","nengo":"保延5"},{"year":1149,"eto":"己巳","nengo":"久安5"},{"year":1159,"eto":"己卯","nengo":"保元4"},{"year":1159,"eto":"己卯","nengo":"平治1"},{"year":1169,"eto":"己丑","nengo":"仁安4"},{"year":1169,"eto":"己丑","nengo":"嘉応1"},{"year":1179,"eto":"己亥","nengo":"治承3"},{"year":1189,"eto":"己酉","nengo":"文治5"},{"year":1199,"eto":"己未","nengo":"建久10"},{"year":1199,"eto":"己未","nengo":"正治1"},{"year":1209,"eto":"己巳","nengo":"承元3"},{"year":1219,"eto":"己卯","nengo":"建保7"},{"year":1219,"eto":"己卯","nengo":"承久1"},{"year":1229,"eto":"己丑","nengo":"安貞3"},{"year":1229,"eto":"己丑","nengo":"寛喜1"},{"year":1239,"eto":"己亥","nengo":"暦仁2"},{"year":1239,"eto":"己亥","nengo":"延応1"},{"year":1249,"eto":"己酉","nengo":"宝治3"},{"year":1249,"eto":"己酉","nengo":"建長1"},{"year":1259,"eto":"己未","nengo":"正嘉3"},{"year":1259,"eto":"己未","nengo":"正元1"},{"year":1269,"eto":"己巳","nengo":"文永6"},{"year":1279,"eto":"己卯","nengo":"弘安2"},{"year":1289,"eto":"己丑","nengo":"正応2"},{"year":1299,"eto":"己亥","nengo":"永仁7"},{"year":1299,"eto":"己亥","nengo":"正安1"},{"year":1309,"eto":"己酉","nengo":"延慶2"},{"year":1319,"eto":"己未","nengo":"文保3"},{"year":1319,"eto":"己未","nengo":"元応1"},{"year":1329,"eto":"己巳","nengo":"嘉暦4"},{"year":1329,"eto":"己巳","nengo":"元徳1"},{"year":1339,"eto":"己卯","condition":"南朝","nengo":"延元4"},{"year":1339,"eto":"己卯","condition":"北朝","nengo":"暦応2"},{"year":1349,"eto":"己丑","condition":"北朝","nengo":"貞和5"},{"year":1349,"eto":"己丑","condition":"南朝","nengo":"正平4"},{"year":1359,"eto":"己亥","condition":"南朝","nengo":"正平14"},{"year":1359,"eto":"己亥","condition":"北朝","nengo":"延文4"},{"year":1369,"eto":"己酉","condition":"南朝","nengo":"正平24"},{"year":1369,"eto":"己酉","condition":"北朝","nengo":"応安2"},{"year":1379,"eto":"己未","condition":"南朝","nengo":"天授5"},{"year":1379,"eto":"己未","condition":"北朝","nengo":"永和5"},{"year":1379,"eto":"己未","condition":"北朝","nengo":"康暦1"},{"year":1389,"eto":"己巳","condition":"南朝","nengo":"元中6"},{"year":1389,"eto":"己巳","condition":"北朝","nengo":"嘉慶3"},{"year":1389,"eto":"己巳","condition":"北朝","nengo":"康応1"},{"year":1399,"eto":"己卯","nengo":"応永6"},{"year":1409,"eto":"己丑","nengo":"応永16"},{"year":1419,"eto":"己亥","nengo":"応永26"},{"year":1429,"eto":"己酉","nengo":"正長2"},{"year":1429,"eto":"己酉","nengo":"永享1"},{"year":1439,"eto":"己未","nengo":"永享11"},{"year":1449,"eto":"己巳","nengo":"文安6"},{"year":1449,"eto":"己巳","nengo":"宝徳1"},{"year":1459,"eto":"己卯","condition":"古河府","nengo":"享徳8"},{"year":1459,"eto":"己卯","nengo":"長禄3"},{"year":1469,"eto":"己丑","condition":"古河府","nengo":"享徳18"},{"year":1469,"eto":"己丑","nengo":"応仁3"},{"year":1469,"eto":"己丑","nengo":"文明1"},{"year":1479,"eto":"己亥","nengo":"文明11"},{"year":1489,"eto":"己酉","nengo":"長享3"},{"year":1489,"eto":"己酉","nengo":"延徳1"},{"year":1499,"eto":"己未","nengo":"明応8"},{"year":1509,"eto":"己巳","nengo":"永正6"},{"year":1519,"eto":"己卯","nengo":"永正16"},{"year":1529,"eto":"己丑","nengo":"享禄2"},{"year":1539,"eto":"己亥","nengo":"天文8"},{"year":1549,"eto":"己酉","nengo":"天文18"},{"year":1559,"eto":"己未","nengo":"永禄2"},{"year":1569,"eto":"己巳","nengo":"永禄12"},{"year":1579,"eto":"己卯","nengo":"天正7"},{"year":1589,"eto":"己丑","nengo":"天正17"},{"year":1599,"eto":"己亥","nengo":"慶長4"},{"year":1609,"eto":"己酉","nengo":"慶長14"},{"year":1619,"eto":"己未","nengo":"元和5"},{"year":1629,"eto":"己巳","nengo":"寛永6"},{"year":1639,"eto":"己卯","nengo":"寛永16"},{"year":1649,"eto":"己丑","nengo":"慶安2"},{"year":1659,"eto":"己亥","nengo":"万治2"},{"year":1669,"eto":"己酉","nengo":"寛文9"},{"year":1679,"eto":"己未","nengo":"延宝7"},{"year":1689,"eto":"己巳","nengo":"元禄2"},{"year":1699,"eto":"己卯","nengo":"元禄12"},{"year":1709,"eto":"己丑","nengo":"宝永6"},{"year":1719,"eto":"己亥","nengo":"享保4"},{"year":1729,"eto":"己酉","nengo":"享保14"},{"year":1739,"eto":"己未","nengo":"元文4"},{"year":1749,"eto":"己巳","nengo":"寛延2"},{"year":1759,"eto":"己卯","nengo":"宝暦9"},{"year":1769,"eto":"己丑","nengo":"明和6"},{"year":1779,"eto":"己亥","nengo":"安永8"},{"year":1789,"eto":"己酉","nengo":"天明9"},{"year":1789,"eto":"己酉","nengo":"寛政1"},{"year":1799,"eto":"己未","nengo":"寛政11"},{"year":1809,"eto":"己巳","nengo":"文化6"},{"year":1819,"eto":"己卯","nengo":"文政2"},{"year":1829,"eto":"己丑","nengo":"文政12"},{"year":1839,"eto":"己亥","nengo":"天保10"},{"year":1849,"eto":"己酉","nengo":"嘉永2"},{"year":1859,"eto":"己未","nengo":"安政6"},{"year":1869,"eto":"己巳","nengo":"明治2"},{"year":1879,"eto":"己卯","nengo":"明治12"},{"year":1889,"eto":"己丑","nengo":"明治22"},{"year":1899,"eto":"己亥","nengo":"明治32"},{"year":1909,"eto":"己酉","nengo":"明治42"},{"year":1919,"eto":"己未","nengo":"大正8"},{"year":1929,"eto":"己巳","nengo":"昭和4"},{"year":1939,"eto":"己卯","nengo":"昭和14"},{"year":1949,"eto":"己丑","nengo":"昭和24"},{"year":1959,"eto":"己亥","nengo":"昭和34"},{"year":1969,"eto":"己酉","nengo":"昭和44"},{"year":1979,"eto":"己未","nengo":"昭和54"},{"year":1989,"eto":"己巳","nengo":"昭和64"},{"year":1989,"eto":"己巳","nengo":"平成1"},{"year":1999,"eto":"己卯","nengo":"平成11"},{"year":2009,"eto":"己丑","nengo":"平成21"},{"year":2019,"eto":"己亥","nengo":"平成31"},{"year":2019,"eto":"己亥","nengo":"令和1"},{"year":2029,"eto":"己酉","nengo":"令和11"}],"tsuchinoto_flag":[{"year":645,"eto":"乙巳","nengo":"大化1"},{"year":649,"eto":"己酉","nengo":"大化5"},{"year":705,"eto":"乙巳","nengo":"慶雲2"},{"year":709,"eto":"己酉","nengo":"和銅2"},{"year":717,"eto":"丁巳","nengo":"霊亀3"},{"year":717,"eto":"丁巳","nengo":"養老1"},{"year":719,"eto":"己未","nengo":"養老3"},{"year":729,"eto":"己巳","nengo":"神亀6"},{"year":729,"eto":"己巳","nengo":"天平1"},{"year":739,"eto":"己卯","nengo":"天平11"},{"year":741,"eto":"辛巳","nengo":"天平13"},{"year":749,"eto":"己丑","nengo":"天平21"},{"year":749,"eto":"己丑","nengo":"天平勝宝1"},{"year":753,"eto":"癸巳","nengo":"天平勝宝5"},{"year":759,"eto":"己亥","nengo":"天平宝字3"},{"year":765,"eto":"乙巳","nengo":"天平宝字9"},{"year":765,"eto":"乙巳","nengo":"天平神護1"},{"year":769,"eto":"己酉","nengo":"神護景雲3"},{"year":777,"eto":"丁巳","nengo":"宝亀8"},{"year":779,"eto":"己未","nengo":"宝亀10"},{"year":789,"eto":"己巳","nengo":"延暦8"},{"year":799,"eto":"己卯","nengo":"延暦18"},{"year":801,"eto":"辛巳","nengo":"延暦20"},{"year":809,"eto":"己丑","nengo":"大同4"},{"year":813,"eto":"癸巳","nengo":"弘仁4"},{"year":819,"eto":"己亥","nengo":"弘仁10"},{"year":825,"eto":"乙巳","nengo":"天長2"},{"year":829,"eto":"己酉","nengo":"天長6"},{"year":837,"eto":"丁巳","nengo":"承和4"},{"year":839,"eto":"己未","nengo":"承和6"},{"year":849,"eto":"己巳","nengo":"嘉祥2"},{"year":859,"eto":"己卯","nengo":"天安3"},{"year":859,"eto":"己卯","nengo":"貞観1"},{"year":861,"eto":"辛巳","nengo":"貞観3"},{"year":869,"eto":"己丑","nengo":"貞観11"},{"year":873,"eto":"癸巳","nengo":"貞観15"},{"year":879,"eto":"己亥","nengo":"元慶3"},{"year":885,"eto":"乙巳","nengo":"元慶9"},{"year":885,"eto":"乙巳","nengo":"仁和1"},{"year":889,"eto":"己酉","nengo":"仁和5"},{"year":889,"eto":"己酉","nengo":"寛平1"},{"year":897,"eto":"丁巳","nengo":"寛平9"},{"year":899,"eto":"己未","nengo":"昌泰2"},{"year":909,"eto":"己巳","nengo":"延喜9"},{"year":919,"eto":"己卯","nengo":"延喜19"},{"year":921,"eto":"辛巳","nengo":"延喜21"},{"year":929,"eto":"己丑","nengo":"延長7"},{"year":933,"eto":"癸巳","nengo":"承平3"},{"year":939,"eto":"己亥","nengo":"天慶2"},{"year":945,"eto":"乙巳","nengo":"天慶8"},{"year":949,"eto":"己酉","nengo":"天暦3"},{"year":957,"eto":"丁巳","nengo":"天暦11"},{"year":957,"eto":"丁巳","nengo":"天徳1"},{"year":959,"eto":"己未","nengo":"天徳3"},{"year":969,"eto":"己巳","nengo":"安和2"},{"year":979,"eto":"己卯","nengo":"天元2"},{"year":981,"eto":"辛巳","nengo":"天元4"},{"year":989,"eto":"己丑","nengo":"永延3"},{"year":989,"eto":"己丑","nengo":"永祚1"},{"year":993,"eto":"癸巳","nengo":"正暦4"},{"year":999,"eto":"己亥","nengo":"長徳5"},{"year":999,"eto":"己亥","nengo":"長保1"},{"year":1005,"eto":"乙巳","nengo":"寛弘2"},{"year":1009,"eto":"己酉","nengo":"寛弘6"},{"year":1017,"eto":"丁巳","nengo":"長和6"},{"year":1017,"eto":"丁巳","nengo":"寛仁1"},{"year":1019,"eto":"己未","nengo":"寛仁3"},{"year":1029,"eto":"己巳","nengo":"長元2"},{"year":1039,"eto":"己卯","nengo":"長暦3"},{"year":1041,"eto":"辛巳","nengo":"長久2"},{"year":1049,"eto":"己丑","nengo":"永承4"},{"year":1053,"eto":"癸巳","nengo":"永承8"},{"year":1053,"eto":"癸巳","nengo":"天喜1"},{"year":1059,"eto":"己亥","nengo":"康平2"},{"year":1065,"eto":"乙巳","nengo":"康平8"},{"year":1065,"eto":"乙巳","nengo":"治暦1"},{"year":1069,"eto":"己酉","nengo":"治暦5"},{"year":1069,"eto":"己酉","nengo":"延久1"},{"year":1077,"eto":"丁巳","nengo":"承保4"},{"year":1077,"eto":"丁巳","nengo":"承暦1"},{"year":1079,"eto":"己未","nengo":"承暦3"},{"year":1089,"eto":"己巳","nengo":"寛治3"},{"year":1099,"eto":"己卯","nengo":"承徳3"},{"year":1099,"eto":"己卯","nengo":"康和1"},{"year":1101,"eto":"辛巳","nengo":"康和3"},{"year":1109,"eto":"己丑","nengo":"天仁2"},{"year":1113,"eto":"癸巳","nengo":"天永4"},{"year":1113,"eto":"癸巳","nengo":"永久1"},{"year":1119,"eto":"己亥","nengo":"元永2"},{"year":1125,"eto":"乙巳","nengo":"天治2"},{"year":1129,"eto":"己酉","nengo":"大治4"},{"year":1137,"eto":"丁巳","nengo":"保延3"},{"year":1139,"eto":"己未","nengo":"保延5"},{"year":1149,"eto":"己巳","nengo":"久安5"},{"year":1159,"eto":"己卯","nengo":"保元4"},{"year":1159,"eto":"己卯","nengo":"平治1"},{"year":1161,"eto":"辛巳","nengo":"永暦2"},{"year":1161,"eto":"辛巳","nengo":"応保1"},{"year":1169,"eto":"己丑","nengo":"仁安4"},{"year":1169,"eto":"己丑","nengo":"嘉応1"},{"year":1173,"eto":"癸巳","nengo":"承安3"},{"year":1179,"eto":"己亥","nengo":"治承3"},{"year":1185,"eto":"乙巳","condition":"平氏政権","nengo":"寿永4"},{"year":1185,"eto":"乙巳","condition":"源氏政権","nengo":"元暦2"},{"year":1185,"eto":"乙巳","condition":"源氏政権","nengo":"文治1"},{"year":1189,"eto":"己酉","nengo":"文治5"},{"year":1197,"eto":"丁巳","nengo":"建久8"},{"year":1199,"eto":"己未","nengo":"建久10"},{"year":1199,"eto":"己未","nengo":"正治1"},{"year":1209,"eto":"己巳","nengo":"承元3"},{"year":1219,"eto":"己卯","nengo":"建保7"},{"year":1219,"eto":"己卯","nengo":"承久1"},{"year":1221,"eto":"辛巳","nengo":"承久3"},{"year":1229,"eto":"己丑","nengo":"安貞3"},{"year":1229,"eto":"己丑","nengo":"寛喜1"},{"year":1233,"eto":"癸巳","nengo":"貞永2"},{"year":1233,"eto":"癸巳","nengo":"天福1"},{"year":1239,"eto":"己亥","nengo":"暦仁2"},{"year":1239,"eto":"己亥","nengo":"延応1"},{"year":1245,"eto":"乙巳","nengo":"寛元3"},{"year":1249,"eto":"己酉","nengo":"宝治3"},{"year":1249,"eto":"己酉","nengo":"建長1"},{"year":1257,"eto":"丁巳","nengo":"康元2"},{"year":1257,"eto":"丁巳","nengo":"正嘉1"},{"year":1259,"eto":"己未","nengo":"正嘉3"},{"year":1259,"eto":"己未","nengo":"正元1"},{"year":1269,"eto":"己巳","nengo":"文永6"},{"year":1279,"eto":"己卯","nengo":"弘安2"},{"year":1281,"eto":"辛巳","nengo":"弘安4"},{"year":1289,"eto":"己丑","nengo":"正応2"},{"year":1293,"eto":"癸巳","nengo":"正応6"},{"year":1293,"eto":"癸巳","nengo":"永仁1"},{"year":1299,"eto":"己亥","nengo":"永仁7"},{"year":1299,"eto":"己亥","nengo":"正安1"},{"year":1305,"eto":"乙巳","nengo":"嘉元3"},{"year":1309,"eto":"己酉","nengo":"延慶2"},{"year":1317,"eto":"丁巳","nengo":"正和6"},{"year":1317,"eto":"丁巳","nengo":"文保1"},{"year":1319,"eto":"己未","nengo":"文保3"},{"year":1319,"eto":"己未","nengo":"元応1"},{"year":1329,"eto":"己巳","nengo":"嘉暦4"},{"year":1329,"eto":"己巳","nengo":"元徳1"},{"year":1339,"eto":"己卯","condition":"南朝","nengo":"延元4"},{"year":1339,"eto":"己卯","condition":"北朝","nengo":"暦応2"},{"year":1341,"eto":"辛巳","condition":"北朝","nengo":"暦応4"},{"year":1341,"eto":"辛巳","condition":"南朝","nengo":"興国2"},{"year":1349,"eto":"己丑","condition":"北朝","nengo":"貞和5"},{"year":1349,"eto":"己丑","condition":"南朝","nengo":"正平4"},{"year":1353,"eto":"癸巳","condition":"南朝","nengo":"正平8"},{"year":1353,"eto":"癸巳","condition":"北朝","nengo":"文和2"},{"year":1359,"eto":"己亥","condition":"南朝","nengo":"正平14"},{"year":1359,"eto":"己亥","condition":"北朝","nengo":"延文4"},{"year":1365,"eto":"乙巳","condition":"南朝","nengo":"正平20"},{"year":1365,"eto":"乙巳","condition":"北朝","nengo":"貞治4"},{"year":1369,"eto":"己酉","condition":"南朝","nengo":"正平24"},{"year":1369,"eto":"己酉","condition":"北朝","nengo":"応安2"},{"year":1377,"eto":"丁巳","condition":"南朝","nengo":"天授3"},{"year":1377,"eto":"丁巳","condition":"北朝","nengo":"永和3"},{"year":1379,"eto":"己未","condition":"南朝","nengo":"天授5"},{"year":1379,"eto":"己未","condition":"北朝","nengo":"永和5"},{"year":1379,"eto":"己未","condition":"北朝","nengo":"康暦1"},{"year":1389,"eto":"己巳","condition":"南朝","nengo":"元中6"},{"year":1389,"eto":"己巳","condition":"北朝","nengo":"嘉慶3"},{"year":1389,"eto":"己巳","condition":"北朝","nengo":"康応1"},{"year":1399,"eto":"己卯","nengo":"応永6"},{"year":1401,"eto":"辛巳","nengo":"応永8"},{"year":1409,"eto":"己丑","nengo":"応永16"},{"year":1413,"eto":"癸巳","nengo":"応永20"},{"year":1419,"eto":"己亥","nengo":"応永26"},{"year":1425,"eto":"乙巳","nengo":"応永32"},{"year":1429,"eto":"己酉","nengo":"正長2"},{"year":1429,"eto":"己酉","nengo":"永享1"},{"year":1437,"eto":"丁巳","nengo":"永享9"},{"year":1439,"eto":"己未","nengo":"永享11"},{"year":1449,"eto":"己巳","nengo":"文安6"},{"year":1449,"eto":"己巳","nengo":"宝徳1"},{"year":1459,"eto":"己卯","condition":"古河府","nengo":"享徳8"},{"year":1459,"eto":"己卯","nengo":"長禄3"},{"year":1461,"eto":"辛巳","condition":"古河府","nengo":"享徳10"},{"year":1461,"eto":"辛巳","nengo":"寛正2"},{"year":1469,"eto":"己丑","condition":"古河府","nengo":"享徳18"},{"year":1469,"eto":"己丑","nengo":"応仁3"},{"year":1469,"eto":"己丑","nengo":"文明1"},{"year":1473,"eto":"癸巳","condition":"古河府","nengo":"享徳22"},{"year":1473,"eto":"癸巳","nengo":"文明5"},{"year":1479,"eto":"己亥","nengo":"文明11"},{"year":1485,"eto":"乙巳","nengo":"文明17"},{"year":1489,"eto":"己酉","nengo":"長享3"},{"year":1489,"eto":"己酉","nengo":"延徳1"},{"year":1497,"eto":"丁巳","nengo":"明応6"},{"year":1499,"eto":"己未","nengo":"明応8"},{"year":1509,"eto":"己巳","nengo":"永正6"},{"year":1519,"eto":"己卯","nengo":"永正16"},{"year":1521,"eto":"辛巳","nengo":"永正18"},{"year":1521,"eto":"辛巳","nengo":"大永1"},{"year":1529,"eto":"己丑","nengo":"享禄2"},{"year":1533,"eto":"癸巳","nengo":"天文2"},{"year":1539,"eto":"己亥","nengo":"天文8"},{"year":1545,"eto":"乙巳","nengo":"天文14"},{"year":1549,"eto":"己酉","nengo":"天文18"},{"year":1557,"eto":"丁巳","nengo":"弘治3"},{"year":1559,"eto":"己未","nengo":"永禄2"},{"year":1569,"eto":"己巳","nengo":"永禄12"},{"year":1579,"eto":"己卯","nengo":"天正7"},{"year":1581,"eto":"辛巳","nengo":"天正9"},{"year":1589,"eto":"己丑","nengo":"天正17"},{"year":1593,"eto":"癸巳","nengo":"文禄2"},{"year":1599,"eto":"己亥","nengo":"慶長4"},{"year":1605,"eto":"乙巳","nengo":"慶長10"},{"year":1609,"eto":"己酉","nengo":"慶長14"},{"year":1617,"eto":"丁巳","nengo":"元和3"},{"year":1619,"eto":"己未","nengo":"元和5"},{"year":1629,"eto":"己巳","nengo":"寛永6"},{"year":1639,"eto":"己卯","nengo":"寛永16"},{"year":1641,"eto":"辛巳","nengo":"寛永18"},{"year":1649,"eto":"己丑","nengo":"慶安2"},{"year":1653,"eto":"癸巳","nengo":"承応2"},{"year":1659,"eto":"己亥","nengo":"万治2"},{"year":1665,"eto":"乙巳","nengo":"寛文5"},{"year":1669,"eto":"己酉","nengo":"寛文9"},{"year":1677,"eto":"丁巳","nengo":"延宝5"},{"year":1679,"eto":"己未","nengo":"延宝7"},{"year":1689,"eto":"己巳","nengo":"元禄2"},{"year":1699,"eto":"己卯","nengo":"元禄12"},{"year":1701,"eto":"辛巳","nengo":"元禄14"},{"year":1709,"eto":"己丑","nengo":"宝永6"},{"year":1713,"eto":"癸巳","nengo":"正徳3"},{"year":1719,"eto":"己亥","nengo":"享保4"},{"year":1725,"eto":"乙巳","nengo":"享保10"},{"year":1729,"eto":"己酉","nengo":"享保14"},{"year":1737,"eto":"丁巳","nengo":"元文2"},{"year":1739,"eto":"己未","nengo":"元文4"},{"year":1749,"eto":"己巳","nengo":"寛延2"},{"year":1759,"eto":"己卯","nengo":"宝暦9"},{"year":1761,"eto":"辛巳","nengo":"宝暦11"},{"year":1769,"eto":"己丑","nengo":"明和6"},{"year":1773,"eto":"癸巳","nengo":"安永2"},{"year":1779,"eto":"己亥","nengo":"安永8"},{"year":1785,"eto":"乙巳","nengo":"天明5"},{"year":1789,"eto":"己酉","nengo":"天明9"},{"year":1789,"eto":"己酉","nengo":"寛政1"},{"year":1797,"eto":"丁巳","nengo":"寛政9"},{"year":1799,"eto":"己未","nengo":"寛政11"},{"year":1809,"eto":"己巳","nengo":"文化6"},{"year":1819,"eto":"己卯","nengo":"文政2"},{"year":1821,"eto":"辛巳","nengo":"文政4"},{"year":1829,"eto":"己丑","nengo":"文政12"},{"year":1833,"eto":"癸巳","nengo":"天保4"},{"year":1839,"eto":"己亥","nengo":"天保10"},{"year":1845,"eto":"乙巳","nengo":"弘化2"},{"year":1849,"eto":"己酉","nengo":"嘉永2"},{"year":1857,"eto":"丁巳","nengo":"安政4"},{"year":1859,"eto":"己未","nengo":"安政6"},{"year":1869,"eto":"己巳","nengo":"明治2"},{"year":1879,"eto":"己卯","nengo":"明治12"},{"year":1881,"eto":"辛巳","nengo":"明治14"},{"year":1889,"eto":"己丑","nengo":"明治22"},{"year":1893,"eto":"癸巳","nengo":"明治26"},{"year":1899,"eto":"己亥","nengo":"明治32"},{"year":1905,"eto":"乙巳","nengo":"明治38"},{"year":1909,"eto":"己酉","nengo":"明治42"},{"year":1917,"eto":"丁巳","nengo":"大正6"},{"year":1919,"eto":"己未","nengo":"大正8"},{"year":1929,"eto":"己巳","nengo":"昭和4"},{"year":1939,"eto":"己卯","nengo":"昭和14"},{"year":1941,"eto":"辛巳","nengo":"昭和16"},{"year":1949,"eto":"己丑","nengo":"昭和24"},{"year":1953,"eto":"癸巳","nengo":"昭和28"},{"year":1959,"eto":"己亥","nengo":"昭和34"},{"year":1965,"eto":"乙巳","nengo":"昭和40"},{"year":1969,"eto":"己酉","nengo":"昭和44"},{"year":1977,"eto":"丁巳","nengo":"昭和52"},{"year":1979,"eto":"己未","nengo":"昭和54"},{"year":1989,"eto":"己巳","nengo":"昭和64"},{"year":1989,"eto":"己巳","nengo":"平成1"},{"year":1999,"eto":"己卯","nengo":"平成11"},{"year":2001,"eto":"辛巳","nengo":"平成13"},{"year":2009,"eto":"己丑","nengo":"平成21"},{"year":2013,"eto":"癸巳","nengo":"平成25"},{"year":2019,"eto":"己亥","nengo":"平成31"},{"year":2019,"eto":"己亥","nengo":"令和1"},{"year":2025,"eto":"乙巳","nengo":"令和7"},{"year":2029,"eto":"己酉","nengo":"令和11"}],"kan_ei_overmatch":[{"year":1624,"eto":"甲子","nengo":"寛永1"},{"year":1625,"eto":"乙丑","nengo":"寛永2"},{"year":1626,"eto":"丙寅","nengo":"寛永3"},{"year":1627,"eto":"丁卯","nengo":"寛永4"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1629,"eto":"己巳","nengo":"寛永6"},{"year":1630,"eto":"庚午","nengo":"寛永7"},{"year":1631,"eto":"辛未","nengo":"寛永8"},{"year":1632,"eto":"壬申","nengo":"寛永9"},{"year":1633,"eto":"癸酉","nengo":"寛永10"},{"year":1634,"eto":"甲戌","nengo":"寛永11"},{"year":1635,"eto":"乙亥","nengo":"寛永12"},{"year":1636,"eto":"丙子","nengo":"寛永13"},{"year":1637,"eto":"丁丑","nengo":"寛永14"},{"year":1638,"eto":"戊寅","nengo":"寛永15"},{"year":1639,"eto":"己卯","nengo":"寛永16"},{"year":1640,"eto":"庚辰","nengo":"寛永17"},{"year":1641,"eto":"辛巳","nengo":"寛永18"},{"year":1642,"eto":"壬午","nengo":"寛永19"},{"year":1643,"eto":"癸未","nengo":"寛永20"},{"year":1644,"eto":"甲申","nengo":"寛永21"},{"year":1645,"eto":"乙酉","over_match":true,"nengo":"寛永22"},{"year":1646,"eto":"丙戌","over_match":true,"nengo":"寛永23"}],"empty":[],"xxxxx":[],"kan_ei_ichi":[{"year":1624,"eto":"甲子","nengo":"寛永1"},{"year":1634,"eto":"甲戌","nengo":"寛永11"},{"year":1644,"eto":"甲申","nengo":"寛永21"}],"combined":[{"year":1608,"eto":"戊申","nengo":"慶長13"},{"year":1610,"eto":"庚戌","nengo":"慶長15"},{"year":1618,"eto":"戊午","nengo":"元和4"},{"year":1622,"eto":"壬戌","nengo":"元和8"},{"year":1628,"eto":"戊辰","nengo":"寛永5"},{"year":1634,"eto":"甲戌","nengo":"寛永11"},{"year":1638,"eto":"戊寅","nengo":"寛永15"},{"year":1646,"eto":"丙戌","over_match":true,"nengo":"寛永23"},{"year":1646,"eto":"丙戌","nengo":"正保3"},{"year":1648,"eto":"戊子","nengo":"正保5"},{"year":1648,"eto":"戊子","nengo":"慶安1"},{"year":1658,"eto":"戊戌","nengo":"明暦4"},{"year":1658,"eto":"戊戌","nengo":"万治1"},{"year":1668,"eto":"戊申","nengo":"寛文8"},{"year":1670,"eto":"庚戌","nengo":"寛文10"},{"year":1678,"eto":"戊午","nengo":"延宝6"},{"year":1682,"eto":"壬戌","over_match":true,"nengo":"延宝10"},{"year":1682,"eto":"壬戌","nengo":"天和2"},{"year":1688,"eto":"戊辰","nengo":"貞享5"},{"year":1688,"eto":"戊辰","nengo":"元禄1"},{"year":1694,"eto":"甲戌","nengo":"元禄7"},{"year":1698,"eto":"戊寅","nengo":"元禄11"}]};

// =============================================================
// 特殊文字 15 記号の fixture 表（設計 §3 / AC1・AC5）
// 現行起源データに該当文字を含む陽性 fixture が無いため、期待値はすべて空配列。
// =============================================================
const SPECIAL_SYMBOLS: ReadonlyArray<{ sym: string }> = [
  { sym: '?' }, { sym: '(' }, { sym: ')' }, { sym: '[' }, { sym: ']' },
  { sym: '{' }, { sym: '}' },
  { sym: '*' }, { sym: '+' }, { sym: '.' }, { sym: '^' }, { sym: '$' },
  { sym: '|' }, { sym: '\\' }, { sym: '/' },
];

// Issue #10 再現入力（設計 §3 / AC1）。t1 単独では年語・記号を削除しない。
const ISSUE_REPRO: ReadonlyArray<{ input: string; expected: string[] }> = [
  { input: '文化?', expected: [] },
  { input: '(寛政)', expected: [] },
  { input: '明和年間?', expected: [] },
];

describe('ambiguousSearch', () => {
  // ---- 基本検索のテスト（既存） ----
  it('should find matches with basic search', () => {
    const result = ambiguousSearch('寛永');
    expect(result).toHaveLength(21);
    expect(result[0]).toMatchObject({ year: 1624, nengo: '寛永1' });
  });

  // ---- 年号の範囲指定テスト（既存） ----
  it('should respect year range', () => {
    const result = ambiguousSearch('寛永', { range: '1624-1630' });
    expect(result).toHaveLength(7);
    expect(result.every(r => r.year >= 1624 && r.year <= 1630)).toBe(true);
  });

  // ---- 戊と戌の同一視テスト（既存） ----
  it('should handle tsuchinoe_inu flag', () => {
    const normalResult = ambiguousSearch('戊');
    const flagResult = ambiguousSearch('戊', { tsuchinoe_inu_flag: true });
    expect(flagResult.length).toBeGreaterThan(normalResult.length);
  });

  // ---- 己と巳の同一視テスト（既存） ----
  it('should handle tsuchinoto_mi flag', () => {
    const normalResult = ambiguousSearch('己');
    const flagResult = ambiguousSearch('己', { tsuchinoto_mi_flag: true });
    expect(flagResult.length).toBeGreaterThan(normalResult.length);
  });

  // ---- オーバーマッチのテスト（既存） ----
  it('should handle over_match flag', () => {
    const normalResult = ambiguousSearch('寛永');
    const overMatchResult = ambiguousSearch('寛永', { enable_over_match: true });
    expect(overMatchResult.length).toBeGreaterThan(normalResult.length);
  });

  // ---- エッジケースのテスト（既存） ----
  it('should handle empty input', () => {
    const result = ambiguousSearch('');
    expect(result).toHaveLength(0);
  });

  it('should handle non-matching input', () => {
    const result = ambiguousSearch('XXXXX');
    expect(result).toHaveLength(0);
  });

  // ---- 結果オブジェクトの構造テスト（既存） ----
  it('should return correctly structured results', () => {
    const result = ambiguousSearch('寛永一');
    expect(result[0]).toHaveProperty('year');
    expect(result[0]).toHaveProperty('nengo');
    expect(result[0]).toHaveProperty('eto');
    expect(typeof result[0].year).toBe('number');
    expect(typeof result[0].nengo).toBe('string');
  });

  // ---- 複雑な検索条件の組み合わせテスト（既存） ----
  it('should handle combined search options', () => {
    const result = ambiguousSearch('戊', {
      tsuchinoe_inu_flag: true,
      range: '1600-1700',
      enable_over_match: true,
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(r => r.year >= 1600 && r.year <= 1700)).toBe(true);
  });

  // ---- golden 後方互換（AC3）：全配列・順序・全フィールドの deep equality ----
  describe('golden 後方互換（AC3）', () => {
    it('寛永（基本検索）が golden と一致', () => {
      expect(ambiguousSearch('寛永')).toEqual(GOLDEN.kan_ei);
    });
    it('寛永（range 1624-1630）が golden と一致', () => {
      expect(ambiguousSearch('寛永', { range: '1624-1630' })).toEqual(GOLDEN.kan_ei_range);
    });
    it('戊（通常）が golden と一致', () => {
      expect(ambiguousSearch('戊')).toEqual(GOLDEN.tsuchinoe_normal);
    });
    it('戊（tsuchinoe_inu_flag）が golden と一致', () => {
      expect(ambiguousSearch('戊', { tsuchinoe_inu_flag: true })).toEqual(GOLDEN.tsuchinoe_flag);
    });
    it('己（通常）が golden と一致', () => {
      expect(ambiguousSearch('己')).toEqual(GOLDEN.tsuchinoto_normal);
    });
    it('己（tsuchinoto_mi_flag）が golden と一致', () => {
      expect(ambiguousSearch('己', { tsuchinoto_mi_flag: true })).toEqual(GOLDEN.tsuchinoto_flag);
    });
    it('寛永（enable_over_match）が golden と一致', () => {
      expect(ambiguousSearch('寛永', { enable_over_match: true })).toEqual(GOLDEN.kan_ei_overmatch);
    });
    it('空入力が golden と一致', () => {
      expect(ambiguousSearch('')).toEqual(GOLDEN.empty);
    });
    it('非該当入力（XXXXX）が golden と一致', () => {
      expect(ambiguousSearch('XXXXX')).toEqual(GOLDEN.xxxxx);
    });
    it('寛永一が golden と一致', () => {
      expect(ambiguousSearch('寛永一')).toEqual(GOLDEN.kan_ei_ichi);
    });
    it('戊（複合オプション）が golden と一致', () => {
      expect(ambiguousSearch('戊', { tsuchinoe_inu_flag: true, range: '1600-1700', enable_over_match: true })).toEqual(GOLDEN.combined);
    });
  });

  // ---- 特殊文字 15 記号の fixture（AC1・AC5）：throw せず空配列 ----
  describe('特殊文字 fixture（AC1・AC5）', () => {
    for (const { sym } of SPECIAL_SYMBOLS) {
      it(JSON.stringify(sym) + ' を throw せず空配列で返す', () => {
        expect(() => ambiguousSearch(sym)).not.toThrow();
        expect(ambiguousSearch(sym)).toEqual([]);
      });
    }
  });

  // ---- Issue #10 再現入力（AC1） ----
  describe('Issue #10 再現入力（AC1）', () => {
    for (const { input, expected } of ISSUE_REPRO) {
      it(JSON.stringify(input) + ' を throw せず期待配列で返す', () => {
        expect(() => ambiguousSearch(input)).not.toThrow();
        expect(ambiguousSearch(input)).toEqual(expected);
      });
    }
  });

  // ---- 式注入の対照（AC2）：入力を JSONPath 式へ連結しない ----
  describe('式注入の対照（AC2）', () => {
    it('引用符を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('寛永\'')).toEqual([]);
      expect(ambiguousSearch('\'寛永')).toEqual([]);
    });
    it('角括弧を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('[寛永]')).toEqual([]);
      expect(ambiguousSearch('寛永[]')).toEqual([]);
    });
    it('@ を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('@寛永')).toEqual([]);
    });
    it('&& を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('寛永&&')).toEqual([]);
    });
    it('|| を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('||寛永')).toEqual([]);
    });
    it('$.* を含む入力で過剰返却しない', () => {
      expect(ambiguousSearch('$.*')).toEqual([]);
    });
  });

  // ---- t2（項目2）：末尾「年」・算用数字・元年・年間/年中・range（AC6） ----
  describe('t2 入力前処理（AC6）', () => {
    const showa61 = [{ year: 1986, eto: '丙寅', nengo: '昭和61' }];
    const showa1 = [{ year: 1926, eto: '丙寅', nengo: '昭和1' }];

    it('末尾の「年」を除去して照合する（昭和六十一年）', () => {
      expect(ambiguousSearch('昭和六十一年')).toEqual(showa61);
    });

    it('半角算用数字を漢数字と同じに扱う（昭和61）。末尾「年」なし', () => {
      expect(ambiguousSearch('昭和61')).toEqual(showa61);
    });

    it('半角算用数字＋末尾「年」（昭和61年）', () => {
      expect(ambiguousSearch('昭和61年')).toEqual(showa61);
    });

    it('全角算用数字を漢数字と同じに扱う（昭和６１）', () => {
      expect(ambiguousSearch('昭和６１')).toEqual(showa61);
    });

    it('全角算用数字＋末尾「年」（昭和６１年）', () => {
      expect(ambiguousSearch('昭和６１年')).toEqual(showa61);
    });

    it('「元年」を 1 年として扱う（昭和元年）', () => {
      expect(ambiguousSearch('昭和元年')).toEqual(showa1);
    });

    it('「元年」を 1 年として扱う（平成元年）', () => {
      expect(ambiguousSearch('平成元年')).toEqual([{ year: 1989, eto: '己巳', nengo: '平成1' }]);
    });

    it('末尾「年間」は年号名だけで照合する（応永年間・全期間）', () => {
      const r = ambiguousSearch('応永年間');
      expect(r).toEqual(ambiguousSearch('応永'));
      expect(r).toHaveLength(35);
      expect(r[0]).toMatchObject({ year: 1394, nengo: '応永1' });
    });

    it('末尾「年中」は年号名だけで照合する（応永年中・全期間）', () => {
      const r = ambiguousSearch('応永年中');
      expect(r).toEqual(ambiguousSearch('応永'));
      expect(r).toHaveLength(35);
    });

    it('range は従来どおり西暦年で適用する（昭和61年 + range）', () => {
      expect(ambiguousSearch('昭和61年', { range: '1986-1986' })).toEqual(showa61);
      expect(ambiguousSearch('昭和61年', { range: '1980-1985' })).toEqual([]);
    });

    it('途中の文字や記号は削除しない（寛政() は括弧を残す）', () => {
      expect(ambiguousSearch('寛政()')).toEqual([]);
    });
  });

  // ---- t2 後方互換（HR-33/4）：漢数字だけの既存入力の結果が変わらない ----
  describe('t2 後方互換（HR-33/4）', () => {
    it('漢数字だけの入力（昭和六十一）は結果が変わらない', () => {
      expect(ambiguousSearch('昭和六十一')).toEqual([
        { year: 1986, eto: '丙寅', nengo: '昭和61' },
      ]);
    });

    it('漢数字だけの入力（寛永二十一）は結果が変わらない', () => {
      expect(ambiguousSearch('寛永二十一')).toEqual([
        { year: 1644, eto: '甲申', nengo: '寛永21' },
      ]);
    });
  });
});
