const P = JSON.parse('[{"year":"0645","eto":"乙巳","nengo":"大化1","ambiguos":"大化乙巳一壱壹元"},{"year":"0646","eto":"丙午","nengo":"大化2","ambiguos":"大化丙午二弐貳"},{"year":"0647","eto":"丁未","nengo":"大化3","ambiguos":"大化丁未三参參"},{"year":"0648","eto":"戊申","nengo":"大化4","ambiguos":"大化戊申四"},{"year":"0649","eto":"己酉","nengo":"大化5","ambiguos":"大化己酉五伍"},{"year":"0650","eto":"庚戌","nengo":"大化6","ambiguos":"大化庚戌六"},{"year":"0650","eto":"庚戌","nengo":"白雉1","ambiguos":"白雉庚戌一壱壹元"},{"year":"0651","eto":"辛亥","over_match":true,"nengo":"大化7","ambiguos":"大化辛亥七"},{"year":"0651","eto":"辛亥","nengo":"白雉2","ambiguos":"白雉辛亥二弐貳"},{"year":"0652","eto":"壬子","over_match":true,"nengo":"大化8","ambiguos":"大化壬子八"},{"year":"0652","eto":"壬子","nengo":"白雉3","ambiguos":"白雉壬子三参參"},{"year":"0653","eto":"癸丑","nengo":"白雉4","ambiguos":"白雉癸丑四"},{"year":"0654","eto":"甲寅","nengo":"白雉5","ambiguos":"白雉甲寅五伍"},{"year":"0655","eto":"乙卯","over_match":true,"nengo":"白雉6","ambiguos":"白雉乙卯六"},{"year":"0656","eto":"丙辰","over_match":true,"nengo":"白雉7","ambiguos":"白雉丙辰七"},{"year":"0701","eto":"辛丑","nengo":"大宝1","ambiguos":"大宝寶辛丑一壱壹元"},{"year":"0702","eto":"壬寅","nengo":"大宝2","ambiguos":"大宝寶壬寅二弐貳"},{"year":"0703","eto":"癸卯","nengo":"大宝3","ambiguos":"大宝寶癸卯三参參"},{"year":"0704","eto":"甲辰","nengo":"大宝4","ambiguos":"大宝寶甲辰四"},{"year":"0704","eto":"甲辰","nengo":"慶雲1","ambiguos":"慶雲甲辰一壱壹元"},{"year":"0705","eto":"乙巳","over_match":true,"nengo":"大宝5","ambiguos":"大宝寶乙巳五伍"},{"year":"0705","eto":"乙巳","nengo":"慶雲2","ambiguos":"慶雲乙巳二弐貳"},{"year":"0706","eto":"丙午","over_match":true,"nengo":"大宝6","ambiguos":"大宝寶丙午六"},{"year":"0706","eto":"丙午","nengo":"慶雲3","ambiguos":"慶雲丙午三参參"},{"year":"0707","eto":"丁未","nengo":"慶雲4","ambiguos":"慶雲丁未四"},{"year":"0708","eto":"戊申","nengo":"慶雲5","ambiguos":"慶雲戊申五伍"},{"year":"0708","eto":"戊申","nengo":"和銅1","ambiguos":"和銅戊申一壱壹元"},{"year":"0709","eto":"己酉","over_match":true,"nengo":"慶雲6","ambiguos":"慶雲己酉六"},{"year":"0709","eto":"己酉","nengo":"和銅2","ambiguos":"和銅己酉二弐貳"},{"year":"0710","eto":"庚戌","over_match":true,"nengo":"慶雲7","ambiguos":"慶雲庚戌七"},{"year":"0710","eto":"庚戌","nengo":"和銅3","ambiguos":"和銅庚戌三参參"},{"year":"0711","eto":"辛亥","nengo":"和銅4","ambiguos":"和銅辛亥四"},{"year":"0712","eto":"壬子","nengo":"和銅5","ambiguos":"和銅壬子五伍"},{"year":"0713","eto":"癸丑","nengo":"和銅6","ambiguos":"和銅癸丑六"},{"year":"0714","eto":"甲寅","nengo":"和銅7","ambiguos":"和銅甲寅七"},{"year":"0715","eto":"乙卯","nengo":"和銅8","ambiguos":"和銅乙卯八"},{"year":"0715","eto":"乙卯","nengo":"霊亀1","ambiguos":"霊亀靈龜乙卯一壱壹元"},{"year":"0716","eto":"丙辰","over_match":true,"nengo":"和銅9","ambiguos":"和銅丙辰九"},{"year":"0716","eto":"丙辰","nengo":"霊亀2","ambiguos":"霊亀靈龜丙辰二弐貳"},{"year":"0717","eto":"丁巳","over_match":true,"nengo":"和銅10","ambiguos":"和銅丁巳十拾"},{"year":"0717","eto":"丁巳","nengo":"霊亀3","ambiguos":"霊亀靈龜丁巳三参參"},{"year":"0717","eto":"丁巳","nengo":"養老1","ambiguos":"養老丁巳一壱壹元"},{"year":"0718","eto":"戊午","over_match":true,"nengo":"霊亀4","ambiguos":"霊亀靈龜戊午四"},{"year":"0718","eto":"戊午","nengo":"養老2","ambiguos":"養老戊午二弐貳"},{"year":"0719","eto":"己未","over_match":true,"nengo":"霊亀5","ambiguos":"霊亀靈龜己未五伍"},{"year":"0719","eto":"己未","nengo":"養老3","ambiguos":"養老己未三参參"},{"year":"0720","eto":"庚申","nengo":"養老4","ambiguos":"養老庚申四"},{"year":"0721","eto":"辛酉","nengo":"養老5","ambiguos":"養老辛酉五伍"},{"year":"0722","eto":"壬戌","nengo":"養老6","ambiguos":"養老壬戌六"},{"year":"0723","eto":"癸亥","nengo":"養老7","ambiguos":"養老癸亥七"},{"year":"0724","eto":"甲子","nengo":"養老8","ambiguos":"養老甲子八"},{"year":"0724","eto":"甲子","nengo":"神亀1","ambiguos":"神亀神龜甲子一壱壹元"},{"year":"0725","eto":"乙丑","over_match":true,"nengo":"養老9","ambiguos":"養老乙丑九"},{"year":"0725","eto":"乙丑","nengo":"神亀2","ambiguos":"神亀神龜乙丑二弐貳"},{"year":"0726","eto":"丙寅","over_match":true,"nengo":"養老10","ambiguos":"養老丙寅十拾"},{"year":"0726","eto":"丙寅","nengo":"神亀3","ambiguos":"神亀神龜丙寅三参參"},{"year":"0727","eto":"丁卯","nengo":"神亀4","ambiguos":"神亀神龜丁卯四"},{"year":"0728","eto":"戊辰","nengo":"神亀5","ambiguos":"神亀神龜戊辰五伍"},{"year":"0729","eto":"己巳","nengo":"神亀6","ambiguos":"神亀神龜己巳六"},{"year":"0729","eto":"己巳","nengo":"天平1","ambiguos":"天平己巳一壱壹元"},{"year":"0730","eto":"庚午","over_match":true,"nengo":"神亀7","ambiguos":"神亀神龜庚午七"},{"year":"0730","eto":"庚午","nengo":"天平2","ambiguos":"天平庚午二弐貳"},{"year":"0731","eto":"辛未","over_match":true,"nengo":"神亀8","ambiguos":"神亀神龜辛未八"},{"year":"0731","eto":"辛未","nengo":"天平3","ambiguos":"天平辛未三参參"},{"year":"0732","eto":"壬申","nengo":"天平4","ambiguos":"天平壬申四"},{"year":"0733","eto":"癸酉","nengo":"天平5","ambiguos":"天平癸酉五伍"},{"year":"0734","eto":"甲戌","nengo":"天平6","ambiguos":"天平甲戌六"},{"year":"0735","eto":"乙亥","nengo":"天平7","ambiguos":"天平乙亥七"},{"year":"0736","eto":"丙子","nengo":"天平8","ambiguos":"天平丙子八"},{"year":"0737","eto":"丁丑","nengo":"天平9","ambiguos":"天平丁丑九"},{"year":"0738","eto":"戊寅","nengo":"天平10","ambiguos":"天平戊寅十拾"},{"year":"0739","eto":"己卯","nengo":"天平11","ambiguos":"天平己卯十拾一壱壹"},{"year":"0740","eto":"庚辰","nengo":"天平12","ambiguos":"天平庚辰十拾二弐貳"},{"year":"0741","eto":"辛巳","nengo":"天平13","ambiguos":"天平辛巳十拾三参參"},{"year":"0742","eto":"壬午","nengo":"天平14","ambiguos":"天平壬午十拾四"},{"year":"0743","eto":"癸未","nengo":"天平15","ambiguos":"天平癸未十拾五伍"},{"year":"0744","eto":"甲申","nengo":"天平16","ambiguos":"天平甲申十拾六"},{"year":"0745","eto":"乙酉","nengo":"天平17","ambiguos":"天平乙酉十拾七"},{"year":"0746","eto":"丙戌","nengo":"天平18","ambiguos":"天平丙戌十拾八"},{"year":"0747","eto":"丁亥","nengo":"天平19","ambiguos":"天平丁亥十拾九"},{"year":"0748","eto":"戊子","nengo":"天平20","ambiguos":"天平戊子十拾廿二弐貳"},{"year":"0749","eto":"己丑","nengo":"天平21","ambiguos":"天平己丑十拾廿二弐貳一壱壹"},{"year":"0749","eto":"己丑","nengo":"天平勝宝1","ambiguos":"天平勝宝寶己丑一壱壹元"},{"year":"0750","eto":"庚寅","over_match":true,"nengo":"天平22","ambiguos":"天平庚寅十拾廿二弐貳二弐貳"},{"year":"0750","eto":"庚寅","nengo":"天平勝宝2","ambiguos":"天平勝宝寶庚寅二弐貳"},{"year":"0751","eto":"辛卯","over_match":true,"nengo":"天平23","ambiguos":"天平辛卯十拾廿二弐貳三参參"},{"year":"0751","eto":"辛卯","nengo":"天平勝宝3","ambiguos":"天平勝宝寶辛卯三参參"},{"year":"0752","eto":"壬辰","nengo":"天平勝宝4","ambiguos":"天平勝宝寶壬辰四"},{"year":"0753","eto":"癸巳","nengo":"天平勝宝5","ambiguos":"天平勝宝寶癸巳五伍"},{"year":"0754","eto":"甲午","nengo":"天平勝宝6","ambiguos":"天平勝宝寶甲午六"},{"year":"0755","eto":"乙未","nengo":"天平勝宝7","ambiguos":"天平勝宝寶乙未七"},{"year":"0756","eto":"丙申","nengo":"天平勝宝8","ambiguos":"天平勝宝寶丙申八"},{"year":"0757","eto":"丁酉","nengo":"天平勝宝9","ambiguos":"天平勝宝寶丁酉九"},{"year":"0757","eto":"丁酉","nengo":"天平宝字1","ambiguos":"天平宝字寶丁酉一壱壹元"},{"year":"0758","eto":"戊戌","over_match":true,"nengo":"天平勝宝10","ambiguos":"天平勝宝寶戊戌十拾"},{"year":"0758","eto":"戊戌","nengo":"天平宝字2","ambiguos":"天平宝字寶戊戌二弐貳"},{"year":"0759","eto":"己亥","over_match":true,"nengo":"天平勝宝11","ambiguos":"天平勝宝寶己亥十拾一壱壹"},{"year":"0759","eto":"己亥","nengo":"天平宝字3","ambiguos":"天平宝字寶己亥三参參"},{"year":"0760","eto":"庚子","nengo":"天平宝字4","ambiguos":"天平宝字寶庚子四"},{"year":"0761","eto":"辛丑","nengo":"天平宝字5","ambiguos":"天平宝字寶辛丑五伍"},{"year":"0762","eto":"壬寅","nengo":"天平宝字6","ambiguos":"天平宝字寶壬寅六"},{"year":"0763","eto":"癸卯","nengo":"天平宝字7","ambiguos":"天平宝字寶癸卯七"},{"year":"0764","eto":"甲辰","nengo":"天平宝字8","ambiguos":"天平宝字寶甲辰八"},{"year":"0765","eto":"乙巳","nengo":"天平宝字9","ambiguos":"天平宝字寶乙巳九"},{"year":"0765","eto":"乙巳","nengo":"天平神護1","ambiguos":"天平神護神乙巳一壱壹元"},{"year":"0766","eto":"丙午","over_match":true,"nengo":"天平宝字10","ambiguos":"天平宝字寶丙午十拾"},{"year":"0766","eto":"丙午","nengo":"天平神護2","ambiguos":"天平神護神丙午二弐貳"},{"year":"0767","eto":"丁未","over_match":true,"nengo":"天平宝字11","ambiguos":"天平宝字寶丁未十拾一壱壹"},{"year":"0767","eto":"丁未","nengo":"天平神護3","ambiguos":"天平神護神丁未三参參"},{"year":"0767","eto":"丁未","nengo":"神護景雲1","ambiguos":"神護景雲神丁未一壱壹元"},{"year":"0768","eto":"戊申","over_match":true,"nengo":"天平神護4","ambiguos":"天平神護神戊申四"},{"year":"0768","eto":"戊申","nengo":"神護景雲2","ambiguos":"神護景雲神戊申二弐貳"},{"year":"0769","eto":"己酉","over_match":true,"nengo":"天平神護5","ambiguos":"天平神護神己酉五伍"},{"year":"0769","eto":"己酉","nengo":"神護景雲3","ambiguos":"神護景雲神己酉三参參"},{"year":"0770","eto":"庚戌","nengo":"神護景雲4","ambiguos":"神護景雲神庚戌四"},{"year":"0770","eto":"庚戌","nengo":"宝亀1","ambiguos":"宝亀寶龜庚戌一壱壹元"},{"year":"0771","eto":"辛亥","over_match":true,"nengo":"神護景雲5","ambiguos":"神護景雲神辛亥五伍"},{"year":"0771","eto":"辛亥","nengo":"宝亀2","ambiguos":"宝亀寶龜辛亥二弐貳"},{"year":"0772","eto":"壬子","over_match":true,"nengo":"神護景雲6","ambiguos":"神護景雲神壬子六"},{"year":"0772","eto":"壬子","nengo":"宝亀3","ambiguos":"宝亀寶龜壬子三参參"},{"year":"0773","eto":"癸丑","nengo":"宝亀4","ambiguos":"宝亀寶龜癸丑四"},{"year":"0774","eto":"甲寅","nengo":"宝亀5","ambiguos":"宝亀寶龜甲寅五伍"},{"year":"0775","eto":"乙卯","nengo":"宝亀6","ambiguos":"宝亀寶龜乙卯六"},{"year":"0776","eto":"丙辰","nengo":"宝亀7","ambiguos":"宝亀寶龜丙辰七"},{"year":"0777","eto":"丁巳","nengo":"宝亀8","ambiguos":"宝亀寶龜丁巳八"},{"year":"0778","eto":"戊午","nengo":"宝亀9","ambiguos":"宝亀寶龜戊午九"},{"year":"0779","eto":"己未","nengo":"宝亀10","ambiguos":"宝亀寶龜己未十拾"},{"year":"0780","eto":"庚申","nengo":"宝亀11","ambiguos":"宝亀寶龜庚申十拾一壱壹"},{"year":"0781","eto":"辛酉","nengo":"宝亀12","ambiguos":"宝亀寶龜辛酉十拾二弐貳"},{"year":"0781","eto":"辛酉","nengo":"天応1","ambiguos":"天応應辛酉一壱壹元"},{"year":"0782","eto":"壬戌","over_match":true,"nengo":"宝亀13","ambiguos":"宝亀寶龜壬戌十拾三参參"},{"year":"0782","eto":"壬戌","nengo":"天応2","ambiguos":"天応應壬戌二弐貳"},{"year":"0782","eto":"壬戌","nengo":"延暦1","ambiguos":"延暦曆壬戌一壱壹元"},{"year":"0783","eto":"癸亥","over_match":true,"nengo":"宝亀14","ambiguos":"宝亀寶龜癸亥十拾四"},{"year":"0783","eto":"癸亥","over_match":true,"nengo":"天応3","ambiguos":"天応應癸亥三参參"},{"year":"0783","eto":"癸亥","nengo":"延暦2","ambiguos":"延暦曆癸亥二弐貳"},{"year":"0784","eto":"甲子","over_match":true,"nengo":"天応4","ambiguos":"天応應甲子四"},{"year":"0784","eto":"甲子","nengo":"延暦3","ambiguos":"延暦曆甲子三参參"},{"year":"0785","eto":"乙丑","nengo":"延暦4","ambiguos":"延暦曆乙丑四"},{"year":"0786","eto":"丙寅","nengo":"延暦5","ambiguos":"延暦曆丙寅五伍"},{"year":"0787","eto":"丁卯","nengo":"延暦6","ambiguos":"延暦曆丁卯六"},{"year":"0788","eto":"戊辰","nengo":"延暦7","ambiguos":"延暦曆戊辰七"},{"year":"0789","eto":"己巳","nengo":"延暦8","ambiguos":"延暦曆己巳八"},{"year":"0790","eto":"庚午","nengo":"延暦9","ambiguos":"延暦曆庚午九"},{"year":"0791","eto":"辛未","nengo":"延暦10","ambiguos":"延暦曆辛未十拾"},{"year":"0792","eto":"壬申","nengo":"延暦11","ambiguos":"延暦曆壬申十拾一壱壹"},{"year":"0793","eto":"癸酉","nengo":"延暦12","ambiguos":"延暦曆癸酉十拾二弐貳"},{"year":"0794","eto":"甲戌","nengo":"延暦13","ambiguos":"延暦曆甲戌十拾三参參"},{"year":"0795","eto":"乙亥","nengo":"延暦14","ambiguos":"延暦曆乙亥十拾四"},{"year":"0796","eto":"丙子","nengo":"延暦15","ambiguos":"延暦曆丙子十拾五伍"},{"year":"0797","eto":"丁丑","nengo":"延暦16","ambiguos":"延暦曆丁丑十拾六"},{"year":"0798","eto":"戊寅","nengo":"延暦17","ambiguos":"延暦曆戊寅十拾七"},{"year":"0799","eto":"己卯","nengo":"延暦18","ambiguos":"延暦曆己卯十拾八"},{"year":"0800","eto":"庚辰","nengo":"延暦19","ambiguos":"延暦曆庚辰十拾九"},{"year":"0801","eto":"辛巳","nengo":"延暦20","ambiguos":"延暦曆辛巳十拾廿二弐貳"},{"year":"0802","eto":"壬午","nengo":"延暦21","ambiguos":"延暦曆壬午十拾廿二弐貳一壱壹"},{"year":"0803","eto":"癸未","nengo":"延暦22","ambiguos":"延暦曆癸未十拾廿二弐貳二弐貳"},{"year":"0804","eto":"甲申","nengo":"延暦23","ambiguos":"延暦曆甲申十拾廿二弐貳三参參"},{"year":"0805","eto":"乙酉","nengo":"延暦24","ambiguos":"延暦曆乙酉十拾廿二弐貳四"},{"year":"0806","eto":"丙戌","nengo":"延暦25","ambiguos":"延暦曆丙戌十拾廿二弐貳五伍"},{"year":"0806","eto":"丙戌","nengo":"大同1","ambiguos":"大同丙戌一壱壹元"},{"year":"0807","eto":"丁亥","over_match":true,"nengo":"延暦26","ambiguos":"延暦曆丁亥十拾廿二弐貳六"},{"year":"0807","eto":"丁亥","nengo":"大同2","ambiguos":"大同丁亥二弐貳"},{"year":"0808","eto":"戊子","over_match":true,"nengo":"延暦27","ambiguos":"延暦曆戊子十拾廿二弐貳七"},{"year":"0808","eto":"戊子","nengo":"大同3","ambiguos":"大同戊子三参參"},{"year":"0809","eto":"己丑","nengo":"大同4","ambiguos":"大同己丑四"},{"year":"0810","eto":"庚寅","nengo":"大同5","ambiguos":"大同庚寅五伍"},{"year":"0810","eto":"庚寅","nengo":"弘仁1","ambiguos":"弘仁庚寅一壱壹元"},{"year":"0811","eto":"辛卯","over_match":true,"nengo":"大同6","ambiguos":"大同辛卯六"},{"year":"0811","eto":"辛卯","nengo":"弘仁2","ambiguos":"弘仁辛卯二弐貳"},{"year":"0812","eto":"壬辰","over_match":true,"nengo":"大同7","ambiguos":"大同壬辰七"},{"year":"0812","eto":"壬辰","nengo":"弘仁3","ambiguos":"弘仁壬辰三参參"},{"year":"0813","eto":"癸巳","nengo":"弘仁4","ambiguos":"弘仁癸巳四"},{"year":"0814","eto":"甲午","nengo":"弘仁5","ambiguos":"弘仁甲午五伍"},{"year":"0815","eto":"乙未","nengo":"弘仁6","ambiguos":"弘仁乙未六"},{"year":"0816","eto":"丙申","nengo":"弘仁7","ambiguos":"弘仁丙申七"},{"year":"0817","eto":"丁酉","nengo":"弘仁8","ambiguos":"弘仁丁酉八"},{"year":"0818","eto":"戊戌","nengo":"弘仁9","ambiguos":"弘仁戊戌九"},{"year":"0819","eto":"己亥","nengo":"弘仁10","ambiguos":"弘仁己亥十拾"},{"year":"0820","eto":"庚子","nengo":"弘仁11","ambiguos":"弘仁庚子十拾一壱壹"},{"year":"0821","eto":"辛丑","nengo":"弘仁12","ambiguos":"弘仁辛丑十拾二弐貳"},{"year":"0822","eto":"壬寅","nengo":"弘仁13","ambiguos":"弘仁壬寅十拾三参參"},{"year":"0823","eto":"癸卯","nengo":"弘仁14","ambiguos":"弘仁癸卯十拾四"},{"year":"0824","eto":"甲辰","nengo":"弘仁15","ambiguos":"弘仁甲辰十拾五伍"},{"year":"0824","eto":"甲辰","nengo":"天長1","ambiguos":"天長甲辰一壱壹元"},{"year":"0825","eto":"乙巳","over_match":true,"nengo":"弘仁16","ambiguos":"弘仁乙巳十拾六"},{"year":"0825","eto":"乙巳","nengo":"天長2","ambiguos":"天長乙巳二弐貳"},{"year":"0826","eto":"丙午","over_match":true,"nengo":"弘仁17","ambiguos":"弘仁丙午十拾七"},{"year":"0826","eto":"丙午","nengo":"天長3","ambiguos":"天長丙午三参參"},{"year":"0827","eto":"丁未","nengo":"天長4","ambiguos":"天長丁未四"},{"year":"0828","eto":"戊申","nengo":"天長5","ambiguos":"天長戊申五伍"},{"year":"0829","eto":"己酉","nengo":"天長6","ambiguos":"天長己酉六"},{"year":"0830","eto":"庚戌","nengo":"天長7","ambiguos":"天長庚戌七"},{"year":"0831","eto":"辛亥","nengo":"天長8","ambiguos":"天長辛亥八"},{"year":"0832","eto":"壬子","nengo":"天長9","ambiguos":"天長壬子九"},{"year":"0833","eto":"癸丑","nengo":"天長10","ambiguos":"天長癸丑十拾"},{"year":"0834","eto":"甲寅","nengo":"天長11","ambiguos":"天長甲寅十拾一壱壹"},{"year":"0834","eto":"甲寅","nengo":"承和1","ambiguos":"承和甲寅一壱壹元"},{"year":"0835","eto":"乙卯","over_match":true,"nengo":"天長12","ambiguos":"天長乙卯十拾二弐貳"},{"year":"0835","eto":"乙卯","nengo":"承和2","ambiguos":"承和乙卯二弐貳"},{"year":"0836","eto":"丙辰","over_match":true,"nengo":"天長13","ambiguos":"天長丙辰十拾三参參"},{"year":"0836","eto":"丙辰","nengo":"承和3","ambiguos":"承和丙辰三参參"},{"year":"0837","eto":"丁巳","nengo":"承和4","ambiguos":"承和丁巳四"},{"year":"0838","eto":"戊午","nengo":"承和5","ambiguos":"承和戊午五伍"},{"year":"0839","eto":"己未","nengo":"承和6","ambiguos":"承和己未六"},{"year":"0840","eto":"庚申","nengo":"承和7","ambiguos":"承和庚申七"},{"year":"0841","eto":"辛酉","nengo":"承和8","ambiguos":"承和辛酉八"},{"year":"0842","eto":"壬戌","nengo":"承和9","ambiguos":"承和壬戌九"},{"year":"0843","eto":"癸亥","nengo":"承和10","ambiguos":"承和癸亥十拾"},{"year":"0844","eto":"甲子","nengo":"承和11","ambiguos":"承和甲子十拾一壱壹"},{"year":"0845","eto":"乙丑","nengo":"承和12","ambiguos":"承和乙丑十拾二弐貳"},{"year":"0846","eto":"丙寅","nengo":"承和13","ambiguos":"承和丙寅十拾三参參"},{"year":"0847","eto":"丁卯","nengo":"承和14","ambiguos":"承和丁卯十拾四"},{"year":"0848","eto":"戊辰","nengo":"承和15","ambiguos":"承和戊辰十拾五伍"},{"year":"0848","eto":"戊辰","nengo":"嘉祥1","ambiguos":"嘉祥祥戊辰一壱壹元"},{"year":"0849","eto":"己巳","over_match":true,"nengo":"承和16","ambiguos":"承和己巳十拾六"},{"year":"0849","eto":"己巳","nengo":"嘉祥2","ambiguos":"嘉祥祥己巳二弐貳"},{"year":"0850","eto":"庚午","over_match":true,"nengo":"承和17","ambiguos":"承和庚午十拾七"},{"year":"0850","eto":"庚午","nengo":"嘉祥3","ambiguos":"嘉祥祥庚午三参參"},{"year":"0851","eto":"辛未","nengo":"嘉祥4","ambiguos":"嘉祥祥辛未四"},{"year":"0851","eto":"辛未","nengo":"仁寿1","ambiguos":"仁寿壽辛未一壱壹元"},{"year":"0852","eto":"壬申","over_match":true,"nengo":"嘉祥5","ambiguos":"嘉祥祥壬申五伍"},{"year":"0852","eto":"壬申","nengo":"仁寿2","ambiguos":"仁寿壽壬申二弐貳"},{"year":"0853","eto":"癸酉","over_match":true,"nengo":"嘉祥6","ambiguos":"嘉祥祥癸酉六"},{"year":"0853","eto":"癸酉","nengo":"仁寿3","ambiguos":"仁寿壽癸酉三参參"},{"year":"0854","eto":"甲戌","nengo":"仁寿4","ambiguos":"仁寿壽甲戌四"},{"year":"0854","eto":"甲戌","nengo":"斉衡1","ambiguos":"斉衡齊甲戌一壱壹元"},{"year":"0855","eto":"乙亥","over_match":true,"nengo":"仁寿5","ambiguos":"仁寿壽乙亥五伍"},{"year":"0855","eto":"乙亥","nengo":"斉衡2","ambiguos":"斉衡齊乙亥二弐貳"},{"year":"0856","eto":"丙子","over_match":true,"nengo":"仁寿6","ambiguos":"仁寿壽丙子六"},{"year":"0856","eto":"丙子","nengo":"斉衡3","ambiguos":"斉衡齊丙子三参參"},{"year":"0857","eto":"丁丑","nengo":"斉衡4","ambiguos":"斉衡齊丁丑四"},{"year":"0857","eto":"丁丑","nengo":"天安1","ambiguos":"天安丁丑一壱壹元"},{"year":"0858","eto":"戊寅","over_match":true,"nengo":"斉衡5","ambiguos":"斉衡齊戊寅五伍"},{"year":"0858","eto":"戊寅","nengo":"天安2","ambiguos":"天安戊寅二弐貳"},{"year":"0859","eto":"己卯","over_match":true,"nengo":"斉衡6","ambiguos":"斉衡齊己卯六"},{"year":"0859","eto":"己卯","nengo":"天安3","ambiguos":"天安己卯三参參"},{"year":"0859","eto":"己卯","nengo":"貞観1","ambiguos":"貞観觀己卯一壱壹元"},{"year":"0860","eto":"庚辰","over_match":true,"nengo":"天安4","ambiguos":"天安庚辰四"},{"year":"0860","eto":"庚辰","nengo":"貞観2","ambiguos":"貞観觀庚辰二弐貳"},{"year":"0861","eto":"辛巳","over_match":true,"nengo":"天安5","ambiguos":"天安辛巳五伍"},{"year":"0861","eto":"辛巳","nengo":"貞観3","ambiguos":"貞観觀辛巳三参參"},{"year":"0862","eto":"壬午","nengo":"貞観4","ambiguos":"貞観觀壬午四"},{"year":"0863","eto":"癸未","nengo":"貞観5","ambiguos":"貞観觀癸未五伍"},{"year":"0864","eto":"甲申","nengo":"貞観6","ambiguos":"貞観觀甲申六"},{"year":"0865","eto":"乙酉","nengo":"貞観7","ambiguos":"貞観觀乙酉七"},{"year":"0866","eto":"丙戌","nengo":"貞観8","ambiguos":"貞観觀丙戌八"},{"year":"0867","eto":"丁亥","nengo":"貞観9","ambiguos":"貞観觀丁亥九"},{"year":"0868","eto":"戊子","nengo":"貞観10","ambiguos":"貞観觀戊子十拾"},{"year":"0869","eto":"己丑","nengo":"貞観11","ambiguos":"貞観觀己丑十拾一壱壹"},{"year":"0870","eto":"庚寅","nengo":"貞観12","ambiguos":"貞観觀庚寅十拾二弐貳"},{"year":"0871","eto":"辛卯","nengo":"貞観13","ambiguos":"貞観觀辛卯十拾三参參"},{"year":"0872","eto":"壬辰","nengo":"貞観14","ambiguos":"貞観觀壬辰十拾四"},{"year":"0873","eto":"癸巳","nengo":"貞観15","ambiguos":"貞観觀癸巳十拾五伍"},{"year":"0874","eto":"甲午","nengo":"貞観16","ambiguos":"貞観觀甲午十拾六"},{"year":"0875","eto":"乙未","nengo":"貞観17","ambiguos":"貞観觀乙未十拾七"},{"year":"0876","eto":"丙申","nengo":"貞観18","ambiguos":"貞観觀丙申十拾八"},{"year":"0877","eto":"丁酉","nengo":"貞観19","ambiguos":"貞観觀丁酉十拾九"},{"year":"0877","eto":"丁酉","nengo":"元慶1","ambiguos":"元慶丁酉一壱壹元"},{"year":"0878","eto":"戊戌","over_match":true,"nengo":"貞観20","ambiguos":"貞観觀戊戌十拾廿二弐貳"},{"year":"0878","eto":"戊戌","nengo":"元慶2","ambiguos":"元慶戊戌二弐貳"},{"year":"0879","eto":"己亥","over_match":true,"nengo":"貞観21","ambiguos":"貞観觀己亥十拾廿二弐貳一壱壹"},{"year":"0879","eto":"己亥","nengo":"元慶3","ambiguos":"元慶己亥三参參"},{"year":"0880","eto":"庚子","nengo":"元慶4","ambiguos":"元慶庚子四"},{"year":"0881","eto":"辛丑","nengo":"元慶5","ambiguos":"元慶辛丑五伍"},{"year":"0882","eto":"壬寅","nengo":"元慶6","ambiguos":"元慶壬寅六"},{"year":"0883","eto":"癸卯","nengo":"元慶7","ambiguos":"元慶癸卯七"},{"year":"0884","eto":"甲辰","nengo":"元慶8","ambiguos":"元慶甲辰八"},{"year":"0885","eto":"乙巳","nengo":"元慶9","ambiguos":"元慶乙巳九"},{"year":"0885","eto":"乙巳","nengo":"仁和1","ambiguos":"仁和乙巳一壱壹元"},{"year":"0886","eto":"丙午","over_match":true,"nengo":"元慶10","ambiguos":"元慶丙午十拾"},{"year":"0886","eto":"丙午","nengo":"仁和2","ambiguos":"仁和丙午二弐貳"},{"year":"0887","eto":"丁未","over_match":true,"nengo":"元慶11","ambiguos":"元慶丁未十拾一壱壹"},{"year":"0887","eto":"丁未","nengo":"仁和3","ambiguos":"仁和丁未三参參"},{"year":"0888","eto":"戊申","nengo":"仁和4","ambiguos":"仁和戊申四"},{"year":"0889","eto":"己酉","nengo":"仁和5","ambiguos":"仁和己酉五伍"},{"year":"0889","eto":"己酉","nengo":"寛平1","ambiguos":"寛平寬己酉一壱壹元"},{"year":"0890","eto":"庚戌","over_match":true,"nengo":"仁和6","ambiguos":"仁和庚戌六"},{"year":"0890","eto":"庚戌","nengo":"寛平2","ambiguos":"寛平寬庚戌二弐貳"},{"year":"0891","eto":"辛亥","over_match":true,"nengo":"仁和7","ambiguos":"仁和辛亥七"},{"year":"0891","eto":"辛亥","nengo":"寛平3","ambiguos":"寛平寬辛亥三参參"},{"year":"0892","eto":"壬子","nengo":"寛平4","ambiguos":"寛平寬壬子四"},{"year":"0893","eto":"癸丑","nengo":"寛平5","ambiguos":"寛平寬癸丑五伍"},{"year":"0894","eto":"甲寅","nengo":"寛平6","ambiguos":"寛平寬甲寅六"},{"year":"0895","eto":"乙卯","nengo":"寛平7","ambiguos":"寛平寬乙卯七"},{"year":"0896","eto":"丙辰","nengo":"寛平8","ambiguos":"寛平寬丙辰八"},{"year":"0897","eto":"丁巳","nengo":"寛平9","ambiguos":"寛平寬丁巳九"},{"year":"0898","eto":"戊午","nengo":"寛平10","ambiguos":"寛平寬戊午十拾"},{"year":"0898","eto":"戊午","nengo":"昌泰1","ambiguos":"昌泰戊午一壱壹元"},{"year":"0899","eto":"己未","over_match":true,"nengo":"寛平11","ambiguos":"寛平寬己未十拾一壱壹"},{"year":"0899","eto":"己未","nengo":"昌泰2","ambiguos":"昌泰己未二弐貳"},{"year":"0900","eto":"庚申","over_match":true,"nengo":"寛平12","ambiguos":"寛平寬庚申十拾二弐貳"},{"year":"0900","eto":"庚申","nengo":"昌泰3","ambiguos":"昌泰庚申三参參"},{"year":"0901","eto":"辛酉","nengo":"昌泰4","ambiguos":"昌泰辛酉四"},{"year":"0901","eto":"辛酉","nengo":"延喜1","ambiguos":"延喜辛酉一壱壹元"},{"year":"0902","eto":"壬戌","over_match":true,"nengo":"昌泰5","ambiguos":"昌泰壬戌五伍"},{"year":"0902","eto":"壬戌","nengo":"延喜2","ambiguos":"延喜壬戌二弐貳"},{"year":"0903","eto":"癸亥","over_match":true,"nengo":"昌泰6","ambiguos":"昌泰癸亥六"},{"year":"0903","eto":"癸亥","nengo":"延喜3","ambiguos":"延喜癸亥三参參"},{"year":"0904","eto":"甲子","nengo":"延喜4","ambiguos":"延喜甲子四"},{"year":"0905","eto":"乙丑","nengo":"延喜5","ambiguos":"延喜乙丑五伍"},{"year":"0906","eto":"丙寅","nengo":"延喜6","ambiguos":"延喜丙寅六"},{"year":"0907","eto":"丁卯","nengo":"延喜7","ambiguos":"延喜丁卯七"},{"year":"0908","eto":"戊辰","nengo":"延喜8","ambiguos":"延喜戊辰八"},{"year":"0909","eto":"己巳","nengo":"延喜9","ambiguos":"延喜己巳九"},{"year":"0910","eto":"庚午","nengo":"延喜10","ambiguos":"延喜庚午十拾"},{"year":"0911","eto":"辛未","nengo":"延喜11","ambiguos":"延喜辛未十拾一壱壹"},{"year":"0912","eto":"壬申","nengo":"延喜12","ambiguos":"延喜壬申十拾二弐貳"},{"year":"0913","eto":"癸酉","nengo":"延喜13","ambiguos":"延喜癸酉十拾三参參"},{"year":"0914","eto":"甲戌","nengo":"延喜14","ambiguos":"延喜甲戌十拾四"},{"year":"0915","eto":"乙亥","nengo":"延喜15","ambiguos":"延喜乙亥十拾五伍"},{"year":"0916","eto":"丙子","nengo":"延喜16","ambiguos":"延喜丙子十拾六"},{"year":"0917","eto":"丁丑","nengo":"延喜17","ambiguos":"延喜丁丑十拾七"},{"year":"0918","eto":"戊寅","nengo":"延喜18","ambiguos":"延喜戊寅十拾八"},{"year":"0919","eto":"己卯","nengo":"延喜19","ambiguos":"延喜己卯十拾九"},{"year":"0920","eto":"庚辰","nengo":"延喜20","ambiguos":"延喜庚辰十拾廿二弐貳"},{"year":"0921","eto":"辛巳","nengo":"延喜21","ambiguos":"延喜辛巳十拾廿二弐貳一壱壹"},{"year":"0922","eto":"壬午","nengo":"延喜22","ambiguos":"延喜壬午十拾廿二弐貳二弐貳"},{"year":"0923","eto":"癸未","nengo":"延喜23","ambiguos":"延喜癸未十拾廿二弐貳三参參"},{"year":"0923","eto":"癸未","nengo":"延長1","ambiguos":"延長癸未一壱壹元"},{"year":"0924","eto":"甲申","over_match":true,"nengo":"延喜24","ambiguos":"延喜甲申十拾廿二弐貳四"},{"year":"0924","eto":"甲申","nengo":"延長2","ambiguos":"延長甲申二弐貳"},{"year":"0925","eto":"乙酉","over_match":true,"nengo":"延喜25","ambiguos":"延喜乙酉十拾廿二弐貳五伍"},{"year":"0925","eto":"乙酉","nengo":"延長3","ambiguos":"延長乙酉三参參"},{"year":"0926","eto":"丙戌","nengo":"延長4","ambiguos":"延長丙戌四"},{"year":"0927","eto":"丁亥","nengo":"延長5","ambiguos":"延長丁亥五伍"},{"year":"0928","eto":"戊子","nengo":"延長6","ambiguos":"延長戊子六"},{"year":"0929","eto":"己丑","nengo":"延長7","ambiguos":"延長己丑七"},{"year":"0930","eto":"庚寅","nengo":"延長8","ambiguos":"延長庚寅八"},{"year":"0931","eto":"辛卯","nengo":"延長9","ambiguos":"延長辛卯九"},{"year":"0931","eto":"辛卯","nengo":"承平1","ambiguos":"承平辛卯一壱壹元"},{"year":"0932","eto":"壬辰","over_match":true,"nengo":"延長10","ambiguos":"延長壬辰十拾"},{"year":"0932","eto":"壬辰","nengo":"承平2","ambiguos":"承平壬辰二弐貳"},{"year":"0933","eto":"癸巳","over_match":true,"nengo":"延長11","ambiguos":"延長癸巳十拾一壱壹"},{"year":"0933","eto":"癸巳","nengo":"承平3","ambiguos":"承平癸巳三参參"},{"year":"0934","eto":"甲午","nengo":"承平4","ambiguos":"承平甲午四"},{"year":"0935","eto":"乙未","nengo":"承平5","ambiguos":"承平乙未五伍"},{"year":"0936","eto":"丙申","nengo":"承平6","ambiguos":"承平丙申六"},{"year":"0937","eto":"丁酉","nengo":"承平7","ambiguos":"承平丁酉七"},{"year":"0938","eto":"戊戌","nengo":"承平8","ambiguos":"承平戊戌八"},{"year":"0938","eto":"戊戌","nengo":"天慶1","ambiguos":"天慶戊戌一壱壹元"},{"year":"0939","eto":"己亥","over_match":true,"nengo":"承平9","ambiguos":"承平己亥九"},{"year":"0939","eto":"己亥","nengo":"天慶2","ambiguos":"天慶己亥二弐貳"},{"year":"0940","eto":"庚子","over_match":true,"nengo":"承平10","ambiguos":"承平庚子十拾"},{"year":"0940","eto":"庚子","nengo":"天慶3","ambiguos":"天慶庚子三参參"},{"year":"0941","eto":"辛丑","nengo":"天慶4","ambiguos":"天慶辛丑四"},{"year":"0942","eto":"壬寅","nengo":"天慶5","ambiguos":"天慶壬寅五伍"},{"year":"0943","eto":"癸卯","nengo":"天慶6","ambiguos":"天慶癸卯六"},{"year":"0944","eto":"甲辰","nengo":"天慶7","ambiguos":"天慶甲辰七"},{"year":"0945","eto":"乙巳","nengo":"天慶8","ambiguos":"天慶乙巳八"},{"year":"0946","eto":"丙午","nengo":"天慶9","ambiguos":"天慶丙午九"},{"year":"0947","eto":"丁未","nengo":"天慶10","ambiguos":"天慶丁未十拾"},{"year":"0947","eto":"丁未","nengo":"天暦1","ambiguos":"天暦曆丁未一壱壹元"},{"year":"0948","eto":"戊申","over_match":true,"nengo":"天慶11","ambiguos":"天慶戊申十拾一壱壹"},{"year":"0948","eto":"戊申","nengo":"天暦2","ambiguos":"天暦曆戊申二弐貳"},{"year":"0949","eto":"己酉","over_match":true,"nengo":"天慶12","ambiguos":"天慶己酉十拾二弐貳"},{"year":"0949","eto":"己酉","nengo":"天暦3","ambiguos":"天暦曆己酉三参參"},{"year":"0950","eto":"庚戌","nengo":"天暦4","ambiguos":"天暦曆庚戌四"},{"year":"0951","eto":"辛亥","nengo":"天暦5","ambiguos":"天暦曆辛亥五伍"},{"year":"0952","eto":"壬子","nengo":"天暦6","ambiguos":"天暦曆壬子六"},{"year":"0953","eto":"癸丑","nengo":"天暦7","ambiguos":"天暦曆癸丑七"},{"year":"0954","eto":"甲寅","nengo":"天暦8","ambiguos":"天暦曆甲寅八"},{"year":"0955","eto":"乙卯","nengo":"天暦9","ambiguos":"天暦曆乙卯九"},{"year":"0956","eto":"丙辰","nengo":"天暦10","ambiguos":"天暦曆丙辰十拾"},{"year":"0957","eto":"丁巳","nengo":"天暦11","ambiguos":"天暦曆丁巳十拾一壱壹"},{"year":"0957","eto":"丁巳","nengo":"天徳1","ambiguos":"天徳德丁巳一壱壹元"},{"year":"0958","eto":"戊午","over_match":true,"nengo":"天暦12","ambiguos":"天暦曆戊午十拾二弐貳"},{"year":"0958","eto":"戊午","nengo":"天徳2","ambiguos":"天徳德戊午二弐貳"},{"year":"0959","eto":"己未","over_match":true,"nengo":"天暦13","ambiguos":"天暦曆己未十拾三参參"},{"year":"0959","eto":"己未","nengo":"天徳3","ambiguos":"天徳德己未三参參"},{"year":"0960","eto":"庚申","nengo":"天徳4","ambiguos":"天徳德庚申四"},{"year":"0961","eto":"辛酉","nengo":"天徳5","ambiguos":"天徳德辛酉五伍"},{"year":"0961","eto":"辛酉","nengo":"応和1","ambiguos":"応和應辛酉一壱壹元"},{"year":"0962","eto":"壬戌","over_match":true,"nengo":"天徳6","ambiguos":"天徳德壬戌六"},{"year":"0962","eto":"壬戌","nengo":"応和2","ambiguos":"応和應壬戌二弐貳"},{"year":"0963","eto":"癸亥","over_match":true,"nengo":"天徳7","ambiguos":"天徳德癸亥七"},{"year":"0963","eto":"癸亥","nengo":"応和3","ambiguos":"応和應癸亥三参參"},{"year":"0964","eto":"甲子","nengo":"応和4","ambiguos":"応和應甲子四"},{"year":"0964","eto":"甲子","nengo":"康保1","ambiguos":"康保甲子一壱壹元"},{"year":"0965","eto":"乙丑","over_match":true,"nengo":"応和5","ambiguos":"応和應乙丑五伍"},{"year":"0965","eto":"乙丑","nengo":"康保2","ambiguos":"康保乙丑二弐貳"},{"year":"0966","eto":"丙寅","over_match":true,"nengo":"応和6","ambiguos":"応和應丙寅六"},{"year":"0966","eto":"丙寅","nengo":"康保3","ambiguos":"康保丙寅三参參"},{"year":"0967","eto":"丁卯","nengo":"康保4","ambiguos":"康保丁卯四"},{"year":"0968","eto":"戊辰","nengo":"康保5","ambiguos":"康保戊辰五伍"},{"year":"0968","eto":"戊辰","nengo":"安和1","ambiguos":"安和戊辰一壱壹元"},{"year":"0969","eto":"己巳","over_match":true,"nengo":"康保6","ambiguos":"康保己巳六"},{"year":"0969","eto":"己巳","nengo":"安和2","ambiguos":"安和己巳二弐貳"},{"year":"0970","eto":"庚午","over_match":true,"nengo":"康保7","ambiguos":"康保庚午七"},{"year":"0970","eto":"庚午","nengo":"安和3","ambiguos":"安和庚午三参參"},{"year":"0970","eto":"庚午","nengo":"天禄1","ambiguos":"天禄祿庚午一壱壹元"},{"year":"0971","eto":"辛未","over_match":true,"nengo":"安和4","ambiguos":"安和辛未四"},{"year":"0971","eto":"辛未","nengo":"天禄2","ambiguos":"天禄祿辛未二弐貳"},{"year":"0972","eto":"壬申","over_match":true,"nengo":"安和5","ambiguos":"安和壬申五伍"},{"year":"0972","eto":"壬申","nengo":"天禄3","ambiguos":"天禄祿壬申三参參"},{"year":"0973","eto":"癸酉","nengo":"天禄4","ambiguos":"天禄祿癸酉四"},{"year":"0973","eto":"癸酉","nengo":"天延1","ambiguos":"天延癸酉一壱壹元"},{"year":"0974","eto":"甲戌","over_match":true,"nengo":"天禄5","ambiguos":"天禄祿甲戌五伍"},{"year":"0974","eto":"甲戌","nengo":"天延2","ambiguos":"天延甲戌二弐貳"},{"year":"0975","eto":"乙亥","over_match":true,"nengo":"天禄6","ambiguos":"天禄祿乙亥六"},{"year":"0975","eto":"乙亥","nengo":"天延3","ambiguos":"天延乙亥三参參"},{"year":"0976","eto":"丙子","nengo":"天延4","ambiguos":"天延丙子四"},{"year":"0976","eto":"丙子","nengo":"貞元1","ambiguos":"貞元丙子一壱壹元"},{"year":"0977","eto":"丁丑","over_match":true,"nengo":"天延5","ambiguos":"天延丁丑五伍"},{"year":"0977","eto":"丁丑","nengo":"貞元2","ambiguos":"貞元丁丑二弐貳"},{"year":"0978","eto":"戊寅","over_match":true,"nengo":"天延6","ambiguos":"天延戊寅六"},{"year":"0978","eto":"戊寅","nengo":"貞元3","ambiguos":"貞元戊寅三参參"},{"year":"0978","eto":"戊寅","nengo":"天元1","ambiguos":"天元戊寅一壱壹元"},{"year":"0979","eto":"己卯","over_match":true,"nengo":"貞元4","ambiguos":"貞元己卯四"},{"year":"0979","eto":"己卯","nengo":"天元2","ambiguos":"天元己卯二弐貳"},{"year":"0980","eto":"庚辰","over_match":true,"nengo":"貞元5","ambiguos":"貞元庚辰五伍"},{"year":"0980","eto":"庚辰","nengo":"天元3","ambiguos":"天元庚辰三参參"},{"year":"0981","eto":"辛巳","nengo":"天元4","ambiguos":"天元辛巳四"},{"year":"0982","eto":"壬午","nengo":"天元5","ambiguos":"天元壬午五伍"},{"year":"0983","eto":"癸未","nengo":"天元6","ambiguos":"天元癸未六"},{"year":"0983","eto":"癸未","nengo":"永観1","ambiguos":"永観觀癸未一壱壹元"},{"year":"0984","eto":"甲申","over_match":true,"nengo":"天元7","ambiguos":"天元甲申七"},{"year":"0984","eto":"甲申","nengo":"永観2","ambiguos":"永観觀甲申二弐貳"},{"year":"0985","eto":"乙酉","over_match":true,"nengo":"天元8","ambiguos":"天元乙酉八"},{"year":"0985","eto":"乙酉","nengo":"永観3","ambiguos":"永観觀乙酉三参參"},{"year":"0985","eto":"乙酉","nengo":"寛和1","ambiguos":"寛和寬乙酉一壱壹元"},{"year":"0986","eto":"丙戌","over_match":true,"nengo":"永観4","ambiguos":"永観觀丙戌四"},{"year":"0986","eto":"丙戌","nengo":"寛和2","ambiguos":"寛和寬丙戌二弐貳"},{"year":"0987","eto":"丁亥","over_match":true,"nengo":"永観5","ambiguos":"永観觀丁亥五伍"},{"year":"0987","eto":"丁亥","nengo":"寛和3","ambiguos":"寛和寬丁亥三参參"},{"year":"0987","eto":"丁亥","nengo":"永延1","ambiguos":"永延丁亥一壱壹元"},{"year":"0988","eto":"戊子","over_match":true,"nengo":"寛和4","ambiguos":"寛和寬戊子四"},{"year":"0988","eto":"戊子","nengo":"永延2","ambiguos":"永延戊子二弐貳"},{"year":"0989","eto":"己丑","over_match":true,"nengo":"寛和5","ambiguos":"寛和寬己丑五伍"},{"year":"0989","eto":"己丑","nengo":"永延3","ambiguos":"永延己丑三参參"},{"year":"0989","eto":"己丑","nengo":"永祚1","ambiguos":"永祚己丑一壱壹元"},{"year":"0990","eto":"庚寅","over_match":true,"nengo":"永延4","ambiguos":"永延庚寅四"},{"year":"0990","eto":"庚寅","nengo":"永祚2","ambiguos":"永祚庚寅二弐貳"},{"year":"0990","eto":"庚寅","nengo":"正暦1","ambiguos":"正暦曆庚寅一壱壹元"},{"year":"0991","eto":"辛卯","over_match":true,"nengo":"永延5","ambiguos":"永延辛卯五伍"},{"year":"0991","eto":"辛卯","over_match":true,"nengo":"永祚3","ambiguos":"永祚辛卯三参參"},{"year":"0991","eto":"辛卯","nengo":"正暦2","ambiguos":"正暦曆辛卯二弐貳"},{"year":"0992","eto":"壬辰","over_match":true,"nengo":"永祚4","ambiguos":"永祚壬辰四"},{"year":"0992","eto":"壬辰","nengo":"正暦3","ambiguos":"正暦曆壬辰三参參"},{"year":"0993","eto":"癸巳","nengo":"正暦4","ambiguos":"正暦曆癸巳四"},{"year":"0994","eto":"甲午","nengo":"正暦5","ambiguos":"正暦曆甲午五伍"},{"year":"0995","eto":"乙未","nengo":"正暦6","ambiguos":"正暦曆乙未六"},{"year":"0995","eto":"乙未","nengo":"長徳1","ambiguos":"長徳德乙未一壱壹元"},{"year":"0996","eto":"丙申","over_match":true,"nengo":"正暦7","ambiguos":"正暦曆丙申七"},{"year":"0996","eto":"丙申","nengo":"長徳2","ambiguos":"長徳德丙申二弐貳"},{"year":"0997","eto":"丁酉","over_match":true,"nengo":"正暦8","ambiguos":"正暦曆丁酉八"},{"year":"0997","eto":"丁酉","nengo":"長徳3","ambiguos":"長徳德丁酉三参參"},{"year":"0998","eto":"戊戌","nengo":"長徳4","ambiguos":"長徳德戊戌四"},{"year":"0999","eto":"己亥","nengo":"長徳5","ambiguos":"長徳德己亥五伍"},{"year":"0999","eto":"己亥","nengo":"長保1","ambiguos":"長保己亥一壱壹元"},{"year":"1000","eto":"庚子","over_match":true,"nengo":"長徳6","ambiguos":"長徳德庚子六"},{"year":"1000","eto":"庚子","nengo":"長保2","ambiguos":"長保庚子二弐貳"},{"year":"1001","eto":"辛丑","over_match":true,"nengo":"長徳7","ambiguos":"長徳德辛丑七"},{"year":"1001","eto":"辛丑","nengo":"長保3","ambiguos":"長保辛丑三参參"},{"year":"1002","eto":"壬寅","nengo":"長保4","ambiguos":"長保壬寅四"},{"year":"1003","eto":"癸卯","nengo":"長保5","ambiguos":"長保癸卯五伍"},{"year":"1004","eto":"甲辰","nengo":"長保6","ambiguos":"長保甲辰六"},{"year":"1004","eto":"甲辰","nengo":"寛弘1","ambiguos":"寛弘寬甲辰一壱壹元"},{"year":"1005","eto":"乙巳","over_match":true,"nengo":"長保7","ambiguos":"長保乙巳七"},{"year":"1005","eto":"乙巳","nengo":"寛弘2","ambiguos":"寛弘寬乙巳二弐貳"},{"year":"1006","eto":"丙午","over_match":true,"nengo":"長保8","ambiguos":"長保丙午八"},{"year":"1006","eto":"丙午","nengo":"寛弘3","ambiguos":"寛弘寬丙午三参參"},{"year":"1007","eto":"丁未","nengo":"寛弘4","ambiguos":"寛弘寬丁未四"},{"year":"1008","eto":"戊申","nengo":"寛弘5","ambiguos":"寛弘寬戊申五伍"},{"year":"1009","eto":"己酉","nengo":"寛弘6","ambiguos":"寛弘寬己酉六"},{"year":"1010","eto":"庚戌","nengo":"寛弘7","ambiguos":"寛弘寬庚戌七"},{"year":"1011","eto":"辛亥","nengo":"寛弘8","ambiguos":"寛弘寬辛亥八"},{"year":"1012","eto":"壬子","nengo":"寛弘9","ambiguos":"寛弘寬壬子九"},{"year":"1012","eto":"壬子","nengo":"長和1","ambiguos":"長和壬子一壱壹元"},{"year":"1013","eto":"癸丑","over_match":true,"nengo":"寛弘10","ambiguos":"寛弘寬癸丑十拾"},{"year":"1013","eto":"癸丑","nengo":"長和2","ambiguos":"長和癸丑二弐貳"},{"year":"1014","eto":"甲寅","over_match":true,"nengo":"寛弘11","ambiguos":"寛弘寬甲寅十拾一壱壹"},{"year":"1014","eto":"甲寅","nengo":"長和3","ambiguos":"長和甲寅三参參"},{"year":"1015","eto":"乙卯","nengo":"長和4","ambiguos":"長和乙卯四"},{"year":"1016","eto":"丙辰","nengo":"長和5","ambiguos":"長和丙辰五伍"},{"year":"1017","eto":"丁巳","nengo":"長和6","ambiguos":"長和丁巳六"},{"year":"1017","eto":"丁巳","nengo":"寛仁1","ambiguos":"寛仁寬丁巳一壱壹元"},{"year":"1018","eto":"戊午","over_match":true,"nengo":"長和7","ambiguos":"長和戊午七"},{"year":"1018","eto":"戊午","nengo":"寛仁2","ambiguos":"寛仁寬戊午二弐貳"},{"year":"1019","eto":"己未","over_match":true,"nengo":"長和8","ambiguos":"長和己未八"},{"year":"1019","eto":"己未","nengo":"寛仁3","ambiguos":"寛仁寬己未三参參"},{"year":"1020","eto":"庚申","nengo":"寛仁4","ambiguos":"寛仁寬庚申四"},{"year":"1021","eto":"辛酉","nengo":"寛仁5","ambiguos":"寛仁寬辛酉五伍"},{"year":"1021","eto":"辛酉","nengo":"治安1","ambiguos":"治安辛酉一壱壹元"},{"year":"1022","eto":"壬戌","over_match":true,"nengo":"寛仁6","ambiguos":"寛仁寬壬戌六"},{"year":"1022","eto":"壬戌","nengo":"治安2","ambiguos":"治安壬戌二弐貳"},{"year":"1023","eto":"癸亥","over_match":true,"nengo":"寛仁7","ambiguos":"寛仁寬癸亥七"},{"year":"1023","eto":"癸亥","nengo":"治安3","ambiguos":"治安癸亥三参參"},{"year":"1024","eto":"甲子","nengo":"治安4","ambiguos":"治安甲子四"},{"year":"1024","eto":"甲子","nengo":"万寿1","ambiguos":"万寿萬壽甲子一壱壹元"},{"year":"1025","eto":"乙丑","over_match":true,"nengo":"治安5","ambiguos":"治安乙丑五伍"},{"year":"1025","eto":"乙丑","nengo":"万寿2","ambiguos":"万寿萬壽乙丑二弐貳"},{"year":"1026","eto":"丙寅","over_match":true,"nengo":"治安6","ambiguos":"治安丙寅六"},{"year":"1026","eto":"丙寅","nengo":"万寿3","ambiguos":"万寿萬壽丙寅三参參"},{"year":"1027","eto":"丁卯","nengo":"万寿4","ambiguos":"万寿萬壽丁卯四"},{"year":"1028","eto":"戊辰","nengo":"万寿5","ambiguos":"万寿萬壽戊辰五伍"},{"year":"1028","eto":"戊辰","nengo":"長元1","ambiguos":"長元戊辰一壱壹元"},{"year":"1029","eto":"己巳","over_match":true,"nengo":"万寿6","ambiguos":"万寿萬壽己巳六"},{"year":"1029","eto":"己巳","nengo":"長元2","ambiguos":"長元己巳二弐貳"},{"year":"1030","eto":"庚午","over_match":true,"nengo":"万寿7","ambiguos":"万寿萬壽庚午七"},{"year":"1030","eto":"庚午","nengo":"長元3","ambiguos":"長元庚午三参參"},{"year":"1031","eto":"辛未","nengo":"長元4","ambiguos":"長元辛未四"},{"year":"1032","eto":"壬申","nengo":"長元5","ambiguos":"長元壬申五伍"},{"year":"1033","eto":"癸酉","nengo":"長元6","ambiguos":"長元癸酉六"},{"year":"1034","eto":"甲戌","nengo":"長元7","ambiguos":"長元甲戌七"},{"year":"1035","eto":"乙亥","nengo":"長元8","ambiguos":"長元乙亥八"},{"year":"1036","eto":"丙子","nengo":"長元9","ambiguos":"長元丙子九"},{"year":"1037","eto":"丁丑","nengo":"長元10","ambiguos":"長元丁丑十拾"},{"year":"1037","eto":"丁丑","nengo":"長暦1","ambiguos":"長暦曆丁丑一壱壹元"},{"year":"1038","eto":"戊寅","over_match":true,"nengo":"長元11","ambiguos":"長元戊寅十拾一壱壹"},{"year":"1038","eto":"戊寅","nengo":"長暦2","ambiguos":"長暦曆戊寅二弐貳"},{"year":"1039","eto":"己卯","over_match":true,"nengo":"長元12","ambiguos":"長元己卯十拾二弐貳"},{"year":"1039","eto":"己卯","nengo":"長暦3","ambiguos":"長暦曆己卯三参參"},{"year":"1040","eto":"庚辰","nengo":"長暦4","ambiguos":"長暦曆庚辰四"},{"year":"1040","eto":"庚辰","nengo":"長久1","ambiguos":"長久庚辰一壱壹元"},{"year":"1041","eto":"辛巳","over_match":true,"nengo":"長暦5","ambiguos":"長暦曆辛巳五伍"},{"year":"1041","eto":"辛巳","nengo":"長久2","ambiguos":"長久辛巳二弐貳"},{"year":"1042","eto":"壬午","over_match":true,"nengo":"長暦6","ambiguos":"長暦曆壬午六"},{"year":"1042","eto":"壬午","nengo":"長久3","ambiguos":"長久壬午三参參"},{"year":"1043","eto":"癸未","nengo":"長久4","ambiguos":"長久癸未四"},{"year":"1044","eto":"甲申","nengo":"長久5","ambiguos":"長久甲申五伍"},{"year":"1044","eto":"甲申","nengo":"寛徳1","ambiguos":"寛徳寬德甲申一壱壹元"},{"year":"1045","eto":"乙酉","over_match":true,"nengo":"長久6","ambiguos":"長久乙酉六"},{"year":"1045","eto":"乙酉","nengo":"寛徳2","ambiguos":"寛徳寬德乙酉二弐貳"},{"year":"1046","eto":"丙戌","over_match":true,"nengo":"長久7","ambiguos":"長久丙戌七"},{"year":"1046","eto":"丙戌","nengo":"寛徳3","ambiguos":"寛徳寬德丙戌三参參"},{"year":"1046","eto":"丙戌","nengo":"永承1","ambiguos":"永承丙戌一壱壹元"},{"year":"1047","eto":"丁亥","over_match":true,"nengo":"寛徳4","ambiguos":"寛徳寬德丁亥四"},{"year":"1047","eto":"丁亥","nengo":"永承2","ambiguos":"永承丁亥二弐貳"},{"year":"1048","eto":"戊子","over_match":true,"nengo":"寛徳5","ambiguos":"寛徳寬德戊子五伍"},{"year":"1048","eto":"戊子","nengo":"永承3","ambiguos":"永承戊子三参參"},{"year":"1049","eto":"己丑","nengo":"永承4","ambiguos":"永承己丑四"},{"year":"1050","eto":"庚寅","nengo":"永承5","ambiguos":"永承庚寅五伍"},{"year":"1051","eto":"辛卯","nengo":"永承6","ambiguos":"永承辛卯六"},{"year":"1052","eto":"壬辰","nengo":"永承7","ambiguos":"永承壬辰七"},{"year":"1053","eto":"癸巳","nengo":"永承8","ambiguos":"永承癸巳八"},{"year":"1053","eto":"癸巳","nengo":"天喜1","ambiguos":"天喜癸巳一壱壹元"},{"year":"1054","eto":"甲午","over_match":true,"nengo":"永承9","ambiguos":"永承甲午九"},{"year":"1054","eto":"甲午","nengo":"天喜2","ambiguos":"天喜甲午二弐貳"},{"year":"1055","eto":"乙未","over_match":true,"nengo":"永承10","ambiguos":"永承乙未十拾"},{"year":"1055","eto":"乙未","nengo":"天喜3","ambiguos":"天喜乙未三参參"},{"year":"1056","eto":"丙申","nengo":"天喜4","ambiguos":"天喜丙申四"},{"year":"1057","eto":"丁酉","nengo":"天喜5","ambiguos":"天喜丁酉五伍"},{"year":"1058","eto":"戊戌","nengo":"天喜6","ambiguos":"天喜戊戌六"},{"year":"1058","eto":"戊戌","nengo":"康平1","ambiguos":"康平戊戌一壱壹元"},{"year":"1059","eto":"己亥","over_match":true,"nengo":"天喜7","ambiguos":"天喜己亥七"},{"year":"1059","eto":"己亥","nengo":"康平2","ambiguos":"康平己亥二弐貳"},{"year":"1060","eto":"庚子","over_match":true,"nengo":"天喜8","ambiguos":"天喜庚子八"},{"year":"1060","eto":"庚子","nengo":"康平3","ambiguos":"康平庚子三参參"},{"year":"1061","eto":"辛丑","nengo":"康平4","ambiguos":"康平辛丑四"},{"year":"1062","eto":"壬寅","nengo":"康平5","ambiguos":"康平壬寅五伍"},{"year":"1063","eto":"癸卯","nengo":"康平6","ambiguos":"康平癸卯六"},{"year":"1064","eto":"甲辰","nengo":"康平7","ambiguos":"康平甲辰七"},{"year":"1065","eto":"乙巳","nengo":"康平8","ambiguos":"康平乙巳八"},{"year":"1065","eto":"乙巳","nengo":"治暦1","ambiguos":"治暦曆乙巳一壱壹元"},{"year":"1066","eto":"丙午","over_match":true,"nengo":"康平9","ambiguos":"康平丙午九"},{"year":"1066","eto":"丙午","nengo":"治暦2","ambiguos":"治暦曆丙午二弐貳"},{"year":"1067","eto":"丁未","over_match":true,"nengo":"康平10","ambiguos":"康平丁未十拾"},{"year":"1067","eto":"丁未","nengo":"治暦3","ambiguos":"治暦曆丁未三参參"},{"year":"1068","eto":"戊申","nengo":"治暦4","ambiguos":"治暦曆戊申四"},{"year":"1069","eto":"己酉","nengo":"治暦5","ambiguos":"治暦曆己酉五伍"},{"year":"1069","eto":"己酉","nengo":"延久1","ambiguos":"延久己酉一壱壹元"},{"year":"1070","eto":"庚戌","over_match":true,"nengo":"治暦6","ambiguos":"治暦曆庚戌六"},{"year":"1070","eto":"庚戌","nengo":"延久2","ambiguos":"延久庚戌二弐貳"},{"year":"1071","eto":"辛亥","over_match":true,"nengo":"治暦7","ambiguos":"治暦曆辛亥七"},{"year":"1071","eto":"辛亥","nengo":"延久3","ambiguos":"延久辛亥三参參"},{"year":"1072","eto":"壬子","nengo":"延久4","ambiguos":"延久壬子四"},{"year":"1073","eto":"癸丑","nengo":"延久5","ambiguos":"延久癸丑五伍"},{"year":"1074","eto":"甲寅","nengo":"延久6","ambiguos":"延久甲寅六"},{"year":"1074","eto":"甲寅","nengo":"承保1","ambiguos":"承保甲寅一壱壹元"},{"year":"1075","eto":"乙卯","over_match":true,"nengo":"延久7","ambiguos":"延久乙卯七"},{"year":"1075","eto":"乙卯","nengo":"承保2","ambiguos":"承保乙卯二弐貳"},{"year":"1076","eto":"丙辰","over_match":true,"nengo":"延久8","ambiguos":"延久丙辰八"},{"year":"1076","eto":"丙辰","nengo":"承保3","ambiguos":"承保丙辰三参參"},{"year":"1077","eto":"丁巳","nengo":"承保4","ambiguos":"承保丁巳四"},{"year":"1077","eto":"丁巳","nengo":"承暦1","ambiguos":"承暦曆丁巳一壱壹元"},{"year":"1078","eto":"戊午","over_match":true,"nengo":"承保5","ambiguos":"承保戊午五伍"},{"year":"1078","eto":"戊午","nengo":"承暦2","ambiguos":"承暦曆戊午二弐貳"},{"year":"1079","eto":"己未","over_match":true,"nengo":"承保6","ambiguos":"承保己未六"},{"year":"1079","eto":"己未","nengo":"承暦3","ambiguos":"承暦曆己未三参參"},{"year":"1080","eto":"庚申","nengo":"承暦4","ambiguos":"承暦曆庚申四"},{"year":"1081","eto":"辛酉","nengo":"承暦5","ambiguos":"承暦曆辛酉五伍"},{"year":"1081","eto":"辛酉","nengo":"永保1","ambiguos":"永保辛酉一壱壹元"},{"year":"1082","eto":"壬戌","over_match":true,"nengo":"承暦6","ambiguos":"承暦曆壬戌六"},{"year":"1082","eto":"壬戌","nengo":"永保2","ambiguos":"永保壬戌二弐貳"},{"year":"1083","eto":"癸亥","over_match":true,"nengo":"承暦7","ambiguos":"承暦曆癸亥七"},{"year":"1083","eto":"癸亥","nengo":"永保3","ambiguos":"永保癸亥三参參"},{"year":"1084","eto":"甲子","nengo":"永保4","ambiguos":"永保甲子四"},{"year":"1084","eto":"甲子","nengo":"応徳1","ambiguos":"応徳應德甲子一壱壹元"},{"year":"1085","eto":"乙丑","over_match":true,"nengo":"永保5","ambiguos":"永保乙丑五伍"},{"year":"1085","eto":"乙丑","nengo":"応徳2","ambiguos":"応徳應德乙丑二弐貳"},{"year":"1086","eto":"丙寅","over_match":true,"nengo":"永保6","ambiguos":"永保丙寅六"},{"year":"1086","eto":"丙寅","nengo":"応徳3","ambiguos":"応徳應德丙寅三参參"},{"year":"1087","eto":"丁卯","nengo":"応徳4","ambiguos":"応徳應德丁卯四"},{"year":"1087","eto":"丁卯","nengo":"寛治1","ambiguos":"寛治寬丁卯一壱壹元"},{"year":"1088","eto":"戊辰","over_match":true,"nengo":"応徳5","ambiguos":"応徳應德戊辰五伍"},{"year":"1088","eto":"戊辰","nengo":"寛治2","ambiguos":"寛治寬戊辰二弐貳"},{"year":"1089","eto":"己巳","over_match":true,"nengo":"応徳6","ambiguos":"応徳應德己巳六"},{"year":"1089","eto":"己巳","nengo":"寛治3","ambiguos":"寛治寬己巳三参參"},{"year":"1090","eto":"庚午","nengo":"寛治4","ambiguos":"寛治寬庚午四"},{"year":"1091","eto":"辛未","nengo":"寛治5","ambiguos":"寛治寬辛未五伍"},{"year":"1092","eto":"壬申","nengo":"寛治6","ambiguos":"寛治寬壬申六"},{"year":"1093","eto":"癸酉","nengo":"寛治7","ambiguos":"寛治寬癸酉七"},{"year":"1094","eto":"甲戌","nengo":"寛治8","ambiguos":"寛治寬甲戌八"},{"year":"1094","eto":"甲戌","nengo":"嘉保1","ambiguos":"嘉保甲戌一壱壹元"},{"year":"1095","eto":"乙亥","over_match":true,"nengo":"寛治9","ambiguos":"寛治寬乙亥九"},{"year":"1095","eto":"乙亥","nengo":"嘉保2","ambiguos":"嘉保乙亥二弐貳"},{"year":"1096","eto":"丙子","over_match":true,"nengo":"寛治10","ambiguos":"寛治寬丙子十拾"},{"year":"1096","eto":"丙子","nengo":"嘉保3","ambiguos":"嘉保丙子三参參"},{"year":"1096","eto":"丙子","nengo":"永長1","ambiguos":"永長丙子一壱壹元"},{"year":"1097","eto":"丁丑","over_match":true,"nengo":"嘉保4","ambiguos":"嘉保丁丑四"},{"year":"1097","eto":"丁丑","nengo":"永長2","ambiguos":"永長丁丑二弐貳"},{"year":"1097","eto":"丁丑","nengo":"承徳1","ambiguos":"承徳德丁丑一壱壹元"},{"year":"1098","eto":"戊寅","over_match":true,"nengo":"嘉保5","ambiguos":"嘉保戊寅五伍"},{"year":"1098","eto":"戊寅","over_match":true,"nengo":"永長3","ambiguos":"永長戊寅三参參"},{"year":"1098","eto":"戊寅","nengo":"承徳2","ambiguos":"承徳德戊寅二弐貳"},{"year":"1099","eto":"己卯","over_match":true,"nengo":"永長4","ambiguos":"永長己卯四"},{"year":"1099","eto":"己卯","nengo":"承徳3","ambiguos":"承徳德己卯三参參"},{"year":"1099","eto":"己卯","nengo":"康和1","ambiguos":"康和己卯一壱壹元"},{"year":"1100","eto":"庚辰","over_match":true,"nengo":"承徳4","ambiguos":"承徳德庚辰四"},{"year":"1100","eto":"庚辰","nengo":"康和2","ambiguos":"康和庚辰二弐貳"},{"year":"1101","eto":"辛巳","over_match":true,"nengo":"承徳5","ambiguos":"承徳德辛巳五伍"},{"year":"1101","eto":"辛巳","nengo":"康和3","ambiguos":"康和辛巳三参參"},{"year":"1102","eto":"壬午","nengo":"康和4","ambiguos":"康和壬午四"},{"year":"1103","eto":"癸未","nengo":"康和5","ambiguos":"康和癸未五伍"},{"year":"1104","eto":"甲申","nengo":"康和6","ambiguos":"康和甲申六"},{"year":"1104","eto":"甲申","nengo":"長治1","ambiguos":"長治甲申一壱壹元"},{"year":"1105","eto":"乙酉","over_match":true,"nengo":"康和7","ambiguos":"康和乙酉七"},{"year":"1105","eto":"乙酉","nengo":"長治2","ambiguos":"長治乙酉二弐貳"},{"year":"1106","eto":"丙戌","over_match":true,"nengo":"康和8","ambiguos":"康和丙戌八"},{"year":"1106","eto":"丙戌","nengo":"長治3","ambiguos":"長治丙戌三参參"},{"year":"1106","eto":"丙戌","nengo":"嘉承1","ambiguos":"嘉承丙戌一壱壹元"},{"year":"1107","eto":"丁亥","over_match":true,"nengo":"長治4","ambiguos":"長治丁亥四"},{"year":"1107","eto":"丁亥","nengo":"嘉承2","ambiguos":"嘉承丁亥二弐貳"},{"year":"1108","eto":"戊子","over_match":true,"nengo":"長治5","ambiguos":"長治戊子五伍"},{"year":"1108","eto":"戊子","nengo":"嘉承3","ambiguos":"嘉承戊子三参參"},{"year":"1108","eto":"戊子","nengo":"天仁1","ambiguos":"天仁戊子一壱壹元"},{"year":"1109","eto":"己丑","over_match":true,"nengo":"嘉承4","ambiguos":"嘉承己丑四"},{"year":"1109","eto":"己丑","nengo":"天仁2","ambiguos":"天仁己丑二弐貳"},{"year":"1110","eto":"庚寅","over_match":true,"nengo":"嘉承5","ambiguos":"嘉承庚寅五伍"},{"year":"1110","eto":"庚寅","nengo":"天仁3","ambiguos":"天仁庚寅三参參"},{"year":"1110","eto":"庚寅","nengo":"天永1","ambiguos":"天永庚寅一壱壹元"},{"year":"1111","eto":"辛卯","over_match":true,"nengo":"天仁4","ambiguos":"天仁辛卯四"},{"year":"1111","eto":"辛卯","nengo":"天永2","ambiguos":"天永辛卯二弐貳"},{"year":"1112","eto":"壬辰","over_match":true,"nengo":"天仁5","ambiguos":"天仁壬辰五伍"},{"year":"1112","eto":"壬辰","nengo":"天永3","ambiguos":"天永壬辰三参參"},{"year":"1113","eto":"癸巳","nengo":"天永4","ambiguos":"天永癸巳四"},{"year":"1113","eto":"癸巳","nengo":"永久1","ambiguos":"永久癸巳一壱壹元"},{"year":"1114","eto":"甲午","over_match":true,"nengo":"天永5","ambiguos":"天永甲午五伍"},{"year":"1114","eto":"甲午","nengo":"永久2","ambiguos":"永久甲午二弐貳"},{"year":"1115","eto":"乙未","over_match":true,"nengo":"天永6","ambiguos":"天永乙未六"},{"year":"1115","eto":"乙未","nengo":"永久3","ambiguos":"永久乙未三参參"},{"year":"1116","eto":"丙申","nengo":"永久4","ambiguos":"永久丙申四"},{"year":"1117","eto":"丁酉","nengo":"永久5","ambiguos":"永久丁酉五伍"},{"year":"1118","eto":"戊戌","nengo":"永久6","ambiguos":"永久戊戌六"},{"year":"1118","eto":"戊戌","nengo":"元永1","ambiguos":"元永戊戌一壱壹元"},{"year":"1119","eto":"己亥","over_match":true,"nengo":"永久7","ambiguos":"永久己亥七"},{"year":"1119","eto":"己亥","nengo":"元永2","ambiguos":"元永己亥二弐貳"},{"year":"1120","eto":"庚子","over_match":true,"nengo":"永久8","ambiguos":"永久庚子八"},{"year":"1120","eto":"庚子","nengo":"元永3","ambiguos":"元永庚子三参參"},{"year":"1120","eto":"庚子","nengo":"保安1","ambiguos":"保安庚子一壱壹元"},{"year":"1121","eto":"辛丑","over_match":true,"nengo":"元永4","ambiguos":"元永辛丑四"},{"year":"1121","eto":"辛丑","nengo":"保安2","ambiguos":"保安辛丑二弐貳"},{"year":"1122","eto":"壬寅","over_match":true,"nengo":"元永5","ambiguos":"元永壬寅五伍"},{"year":"1122","eto":"壬寅","nengo":"保安3","ambiguos":"保安壬寅三参參"},{"year":"1123","eto":"癸卯","nengo":"保安4","ambiguos":"保安癸卯四"},{"year":"1124","eto":"甲辰","nengo":"保安5","ambiguos":"保安甲辰五伍"},{"year":"1124","eto":"甲辰","nengo":"天治1","ambiguos":"天治甲辰一壱壹元"},{"year":"1125","eto":"乙巳","over_match":true,"nengo":"保安6","ambiguos":"保安乙巳六"},{"year":"1125","eto":"乙巳","nengo":"天治2","ambiguos":"天治乙巳二弐貳"},{"year":"1126","eto":"丙午","over_match":true,"nengo":"保安7","ambiguos":"保安丙午七"},{"year":"1126","eto":"丙午","nengo":"天治3","ambiguos":"天治丙午三参參"},{"year":"1126","eto":"丙午","nengo":"大治1","ambiguos":"大治丙午一壱壹元"},{"year":"1127","eto":"丁未","over_match":true,"nengo":"天治4","ambiguos":"天治丁未四"},{"year":"1127","eto":"丁未","nengo":"大治2","ambiguos":"大治丁未二弐貳"},{"year":"1128","eto":"戊申","over_match":true,"nengo":"天治5","ambiguos":"天治戊申五伍"},{"year":"1128","eto":"戊申","nengo":"大治3","ambiguos":"大治戊申三参參"},{"year":"1129","eto":"己酉","nengo":"大治4","ambiguos":"大治己酉四"},{"year":"1130","eto":"庚戌","nengo":"大治5","ambiguos":"大治庚戌五伍"},{"year":"1131","eto":"辛亥","nengo":"大治6","ambiguos":"大治辛亥六"},{"year":"1131","eto":"辛亥","nengo":"天承1","ambiguos":"天承辛亥一壱壹元"},{"year":"1132","eto":"壬子","over_match":true,"nengo":"大治7","ambiguos":"大治壬子七"},{"year":"1132","eto":"壬子","nengo":"天承2","ambiguos":"天承壬子二弐貳"},{"year":"1132","eto":"壬子","nengo":"長承1","ambiguos":"長承壬子一壱壹元"},{"year":"1133","eto":"癸丑","over_match":true,"nengo":"大治8","ambiguos":"大治癸丑八"},{"year":"1133","eto":"癸丑","over_match":true,"nengo":"天承3","ambiguos":"天承癸丑三参參"},{"year":"1133","eto":"癸丑","nengo":"長承2","ambiguos":"長承癸丑二弐貳"},{"year":"1134","eto":"甲寅","over_match":true,"nengo":"天承4","ambiguos":"天承甲寅四"},{"year":"1134","eto":"甲寅","nengo":"長承3","ambiguos":"長承甲寅三参參"},{"year":"1135","eto":"乙卯","nengo":"長承4","ambiguos":"長承乙卯四"},{"year":"1135","eto":"乙卯","nengo":"保延1","ambiguos":"保延乙卯一壱壹元"},{"year":"1136","eto":"丙辰","over_match":true,"nengo":"長承5","ambiguos":"長承丙辰五伍"},{"year":"1136","eto":"丙辰","nengo":"保延2","ambiguos":"保延丙辰二弐貳"},{"year":"1137","eto":"丁巳","over_match":true,"nengo":"長承6","ambiguos":"長承丁巳六"},{"year":"1137","eto":"丁巳","nengo":"保延3","ambiguos":"保延丁巳三参參"},{"year":"1138","eto":"戊午","nengo":"保延4","ambiguos":"保延戊午四"},{"year":"1139","eto":"己未","nengo":"保延5","ambiguos":"保延己未五伍"},{"year":"1140","eto":"庚申","nengo":"保延6","ambiguos":"保延庚申六"},{"year":"1141","eto":"辛酉","nengo":"保延7","ambiguos":"保延辛酉七"},{"year":"1141","eto":"辛酉","nengo":"永治1","ambiguos":"永治辛酉一壱壹元"},{"year":"1142","eto":"壬戌","over_match":true,"nengo":"保延8","ambiguos":"保延壬戌八"},{"year":"1142","eto":"壬戌","nengo":"永治2","ambiguos":"永治壬戌二弐貳"},{"year":"1142","eto":"壬戌","nengo":"康治1","ambiguos":"康治壬戌一壱壹元"},{"year":"1143","eto":"癸亥","over_match":true,"nengo":"保延9","ambiguos":"保延癸亥九"},{"year":"1143","eto":"癸亥","over_match":true,"nengo":"永治3","ambiguos":"永治癸亥三参參"},{"year":"1143","eto":"癸亥","nengo":"康治2","ambiguos":"康治癸亥二弐貳"},{"year":"1144","eto":"甲子","over_match":true,"nengo":"永治4","ambiguos":"永治甲子四"},{"year":"1144","eto":"甲子","nengo":"康治3","ambiguos":"康治甲子三参參"},{"year":"1144","eto":"甲子","nengo":"天養1","ambiguos":"天養甲子一壱壹元"},{"year":"1145","eto":"乙丑","over_match":true,"nengo":"康治4","ambiguos":"康治乙丑四"},{"year":"1145","eto":"乙丑","nengo":"天養2","ambiguos":"天養乙丑二弐貳"},{"year":"1145","eto":"乙丑","nengo":"久安1","ambiguos":"久安乙丑一壱壹元"},{"year":"1146","eto":"丙寅","over_match":true,"nengo":"康治5","ambiguos":"康治丙寅五伍"},{"year":"1146","eto":"丙寅","over_match":true,"nengo":"天養3","ambiguos":"天養丙寅三参參"},{"year":"1146","eto":"丙寅","nengo":"久安2","ambiguos":"久安丙寅二弐貳"},{"year":"1147","eto":"丁卯","over_match":true,"nengo":"天養4","ambiguos":"天養丁卯四"},{"year":"1147","eto":"丁卯","nengo":"久安3","ambiguos":"久安丁卯三参參"},{"year":"1148","eto":"戊辰","nengo":"久安4","ambiguos":"久安戊辰四"},{"year":"1149","eto":"己巳","nengo":"久安5","ambiguos":"久安己巳五伍"},{"year":"1150","eto":"庚午","nengo":"久安6","ambiguos":"久安庚午六"},{"year":"1151","eto":"辛未","nengo":"久安7","ambiguos":"久安辛未七"},{"year":"1151","eto":"辛未","nengo":"仁平1","ambiguos":"仁平辛未一壱壹元"},{"year":"1152","eto":"壬申","over_match":true,"nengo":"久安8","ambiguos":"久安壬申八"},{"year":"1152","eto":"壬申","nengo":"仁平2","ambiguos":"仁平壬申二弐貳"},{"year":"1153","eto":"癸酉","over_match":true,"nengo":"久安9","ambiguos":"久安癸酉九"},{"year":"1153","eto":"癸酉","nengo":"仁平3","ambiguos":"仁平癸酉三参參"},{"year":"1154","eto":"甲戌","nengo":"仁平4","ambiguos":"仁平甲戌四"},{"year":"1154","eto":"甲戌","nengo":"久寿1","ambiguos":"久寿壽甲戌一壱壹元"},{"year":"1155","eto":"乙亥","over_match":true,"nengo":"仁平5","ambiguos":"仁平乙亥五伍"},{"year":"1155","eto":"乙亥","nengo":"久寿2","ambiguos":"久寿壽乙亥二弐貳"},{"year":"1156","eto":"丙子","over_match":true,"nengo":"仁平6","ambiguos":"仁平丙子六"},{"year":"1156","eto":"丙子","nengo":"久寿3","ambiguos":"久寿壽丙子三参參"},{"year":"1156","eto":"丙子","nengo":"保元1","ambiguos":"保元丙子一壱壹元"},{"year":"1157","eto":"丁丑","over_match":true,"nengo":"久寿4","ambiguos":"久寿壽丁丑四"},{"year":"1157","eto":"丁丑","nengo":"保元2","ambiguos":"保元丁丑二弐貳"},{"year":"1158","eto":"戊寅","over_match":true,"nengo":"久寿5","ambiguos":"久寿壽戊寅五伍"},{"year":"1158","eto":"戊寅","nengo":"保元3","ambiguos":"保元戊寅三参參"},{"year":"1159","eto":"己卯","nengo":"保元4","ambiguos":"保元己卯四"},{"year":"1159","eto":"己卯","nengo":"平治1","ambiguos":"平治己卯一壱壹元"},{"year":"1160","eto":"庚辰","over_match":true,"nengo":"保元5","ambiguos":"保元庚辰五伍"},{"year":"1160","eto":"庚辰","nengo":"平治2","ambiguos":"平治庚辰二弐貳"},{"year":"1160","eto":"庚辰","nengo":"永暦1","ambiguos":"永暦曆庚辰一壱壹元"},{"year":"1161","eto":"辛巳","over_match":true,"nengo":"保元6","ambiguos":"保元辛巳六"},{"year":"1161","eto":"辛巳","over_match":true,"nengo":"平治3","ambiguos":"平治辛巳三参參"},{"year":"1161","eto":"辛巳","nengo":"永暦2","ambiguos":"永暦曆辛巳二弐貳"},{"year":"1161","eto":"辛巳","nengo":"応保1","ambiguos":"応保應辛巳一壱壹元"},{"year":"1162","eto":"壬午","over_match":true,"nengo":"平治4","ambiguos":"平治壬午四"},{"year":"1162","eto":"壬午","over_match":true,"nengo":"永暦3","ambiguos":"永暦曆壬午三参參"},{"year":"1162","eto":"壬午","nengo":"応保2","ambiguos":"応保應壬午二弐貳"},{"year":"1163","eto":"癸未","over_match":true,"nengo":"永暦4","ambiguos":"永暦曆癸未四"},{"year":"1163","eto":"癸未","nengo":"応保3","ambiguos":"応保應癸未三参參"},{"year":"1163","eto":"癸未","nengo":"長寛1","ambiguos":"長寛寬癸未一壱壹元"},{"year":"1164","eto":"甲申","over_match":true,"nengo":"応保4","ambiguos":"応保應甲申四"},{"year":"1164","eto":"甲申","nengo":"長寛2","ambiguos":"長寛寬甲申二弐貳"},{"year":"1165","eto":"乙酉","over_match":true,"nengo":"応保5","ambiguos":"応保應乙酉五伍"},{"year":"1165","eto":"乙酉","nengo":"長寛3","ambiguos":"長寛寬乙酉三参參"},{"year":"1165","eto":"乙酉","nengo":"永万1","ambiguos":"永万萬乙酉一壱壹元"},{"year":"1166","eto":"丙戌","over_match":true,"nengo":"長寛4","ambiguos":"長寛寬丙戌四"},{"year":"1166","eto":"丙戌","nengo":"永万2","ambiguos":"永万萬丙戌二弐貳"},{"year":"1166","eto":"丙戌","nengo":"仁安1","ambiguos":"仁安丙戌一壱壹元"},{"year":"1167","eto":"丁亥","over_match":true,"nengo":"長寛5","ambiguos":"長寛寬丁亥五伍"},{"year":"1167","eto":"丁亥","over_match":true,"nengo":"永万3","ambiguos":"永万萬丁亥三参參"},{"year":"1167","eto":"丁亥","nengo":"仁安2","ambiguos":"仁安丁亥二弐貳"},{"year":"1168","eto":"戊子","over_match":true,"nengo":"永万4","ambiguos":"永万萬戊子四"},{"year":"1168","eto":"戊子","nengo":"仁安3","ambiguos":"仁安戊子三参參"},{"year":"1169","eto":"己丑","nengo":"仁安4","ambiguos":"仁安己丑四"},{"year":"1169","eto":"己丑","nengo":"嘉応1","ambiguos":"嘉応應己丑一壱壹元"},{"year":"1170","eto":"庚寅","over_match":true,"nengo":"仁安5","ambiguos":"仁安庚寅五伍"},{"year":"1170","eto":"庚寅","nengo":"嘉応2","ambiguos":"嘉応應庚寅二弐貳"},{"year":"1171","eto":"辛卯","over_match":true,"nengo":"仁安6","ambiguos":"仁安辛卯六"},{"year":"1171","eto":"辛卯","nengo":"嘉応3","ambiguos":"嘉応應辛卯三参參"},{"year":"1171","eto":"辛卯","nengo":"承安1","ambiguos":"承安辛卯一壱壹元"},{"year":"1172","eto":"壬辰","over_match":true,"nengo":"嘉応4","ambiguos":"嘉応應壬辰四"},{"year":"1172","eto":"壬辰","nengo":"承安2","ambiguos":"承安壬辰二弐貳"},{"year":"1173","eto":"癸巳","over_match":true,"nengo":"嘉応5","ambiguos":"嘉応應癸巳五伍"},{"year":"1173","eto":"癸巳","nengo":"承安3","ambiguos":"承安癸巳三参參"},{"year":"1174","eto":"甲午","nengo":"承安4","ambiguos":"承安甲午四"},{"year":"1175","eto":"乙未","nengo":"承安5","ambiguos":"承安乙未五伍"},{"year":"1175","eto":"乙未","nengo":"安元1","ambiguos":"安元乙未一壱壹元"},{"year":"1176","eto":"丙申","over_match":true,"nengo":"承安6","ambiguos":"承安丙申六"},{"year":"1176","eto":"丙申","nengo":"安元2","ambiguos":"安元丙申二弐貳"},{"year":"1177","eto":"丁酉","over_match":true,"nengo":"承安7","ambiguos":"承安丁酉七"},{"year":"1177","eto":"丁酉","nengo":"安元3","ambiguos":"安元丁酉三参參"},{"year":"1177","eto":"丁酉","nengo":"治承1","ambiguos":"治承丁酉一壱壹元"},{"year":"1178","eto":"戊戌","over_match":true,"nengo":"安元4","ambiguos":"安元戊戌四"},{"year":"1178","eto":"戊戌","nengo":"治承2","ambiguos":"治承戊戌二弐貳"},{"year":"1179","eto":"己亥","over_match":true,"nengo":"安元5","ambiguos":"安元己亥五伍"},{"year":"1179","eto":"己亥","nengo":"治承3","ambiguos":"治承己亥三参參"},{"year":"1180","eto":"庚子","nengo":"治承4","ambiguos":"治承庚子四"},{"year":"1181","eto":"辛丑","nengo":"治承5","ambiguos":"治承辛丑五伍"},{"year":"1181","eto":"辛丑","condition":"平氏政権","nengo":"養和1","ambiguos":"養和辛丑一壱壹元"},{"year":"1182","eto":"壬寅","condition":"源氏政権","nengo":"治承6","ambiguos":"治承壬寅六"},{"year":"1182","eto":"壬寅","condition":"平氏政権","nengo":"養和2","ambiguos":"養和壬寅二弐貳"},{"year":"1182","eto":"壬寅","condition":"平氏政権","nengo":"寿永1","ambiguos":"寿永壽壬寅一壱壹元"},{"year":"1183","eto":"癸卯","condition":"源氏政権","nengo":"治承7","ambiguos":"治承癸卯七"},{"year":"1183","eto":"癸卯","over_match":true,"nengo":"養和3","ambiguos":"養和癸卯三参參"},{"year":"1183","eto":"癸卯","nengo":"寿永2","ambiguos":"寿永壽癸卯二弐貳"},{"year":"1184","eto":"甲辰","over_match":true,"nengo":"治承8","ambiguos":"治承甲辰八"},{"year":"1184","eto":"甲辰","over_match":true,"nengo":"養和4","ambiguos":"養和甲辰四"},{"year":"1184","eto":"甲辰","nengo":"寿永3","ambiguos":"寿永壽甲辰三参參"},{"year":"1184","eto":"甲辰","condition":"源氏政権","nengo":"元暦1","ambiguos":"元暦曆甲辰一壱壹元"},{"year":"1185","eto":"乙巳","over_match":true,"nengo":"治承9","ambiguos":"治承乙巳九"},{"year":"1185","eto":"乙巳","condition":"平氏政権","nengo":"寿永4","ambiguos":"寿永壽乙巳四"},{"year":"1185","eto":"乙巳","condition":"源氏政権","nengo":"元暦2","ambiguos":"元暦曆乙巳二弐貳"},{"year":"1185","eto":"乙巳","condition":"源氏政権","nengo":"文治1","ambiguos":"文治乙巳一壱壹元"},{"year":"1186","eto":"丙午","over_match":true,"nengo":"寿永5","ambiguos":"寿永壽丙午五伍"},{"year":"1186","eto":"丙午","over_match":true,"nengo":"元暦3","ambiguos":"元暦曆丙午三参參"},{"year":"1186","eto":"丙午","nengo":"文治2","ambiguos":"文治丙午二弐貳"},{"year":"1187","eto":"丁未","over_match":true,"nengo":"寿永6","ambiguos":"寿永壽丁未六"},{"year":"1187","eto":"丁未","over_match":true,"nengo":"元暦4","ambiguos":"元暦曆丁未四"},{"year":"1187","eto":"丁未","nengo":"文治3","ambiguos":"文治丁未三参參"},{"year":"1188","eto":"戊申","nengo":"文治4","ambiguos":"文治戊申四"},{"year":"1189","eto":"己酉","nengo":"文治5","ambiguos":"文治己酉五伍"},{"year":"1190","eto":"庚戌","nengo":"文治6","ambiguos":"文治庚戌六"},{"year":"1190","eto":"庚戌","nengo":"建久1","ambiguos":"建久庚戌一壱壹元"},{"year":"1191","eto":"辛亥","over_match":true,"nengo":"文治7","ambiguos":"文治辛亥七"},{"year":"1191","eto":"辛亥","nengo":"建久2","ambiguos":"建久辛亥二弐貳"},{"year":"1192","eto":"壬子","over_match":true,"nengo":"文治8","ambiguos":"文治壬子八"},{"year":"1192","eto":"壬子","nengo":"建久3","ambiguos":"建久壬子三参參"},{"year":"1193","eto":"癸丑","nengo":"建久4","ambiguos":"建久癸丑四"},{"year":"1194","eto":"甲寅","nengo":"建久5","ambiguos":"建久甲寅五伍"},{"year":"1195","eto":"乙卯","nengo":"建久6","ambiguos":"建久乙卯六"},{"year":"1196","eto":"丙辰","nengo":"建久7","ambiguos":"建久丙辰七"},{"year":"1197","eto":"丁巳","nengo":"建久8","ambiguos":"建久丁巳八"},{"year":"1198","eto":"戊午","nengo":"建久9","ambiguos":"建久戊午九"},{"year":"1199","eto":"己未","nengo":"建久10","ambiguos":"建久己未十拾"},{"year":"1199","eto":"己未","nengo":"正治1","ambiguos":"正治己未一壱壹元"},{"year":"1200","eto":"庚申","over_match":true,"nengo":"建久11","ambiguos":"建久庚申十拾一壱壹"},{"year":"1200","eto":"庚申","nengo":"正治2","ambiguos":"正治庚申二弐貳"},{"year":"1201","eto":"辛酉","over_match":true,"nengo":"建久12","ambiguos":"建久辛酉十拾二弐貳"},{"year":"1201","eto":"辛酉","nengo":"正治3","ambiguos":"正治辛酉三参參"},{"year":"1201","eto":"辛酉","nengo":"建仁1","ambiguos":"建仁辛酉一壱壹元"},{"year":"1202","eto":"壬戌","over_match":true,"nengo":"正治4","ambiguos":"正治壬戌四"},{"year":"1202","eto":"壬戌","nengo":"建仁2","ambiguos":"建仁壬戌二弐貳"},{"year":"1203","eto":"癸亥","over_match":true,"nengo":"正治5","ambiguos":"正治癸亥五伍"},{"year":"1203","eto":"癸亥","nengo":"建仁3","ambiguos":"建仁癸亥三参參"},{"year":"1204","eto":"甲子","nengo":"建仁4","ambiguos":"建仁甲子四"},{"year":"1204","eto":"甲子","nengo":"元久1","ambiguos":"元久甲子一壱壹元"},{"year":"1205","eto":"乙丑","over_match":true,"nengo":"建仁5","ambiguos":"建仁乙丑五伍"},{"year":"1205","eto":"乙丑","nengo":"元久2","ambiguos":"元久乙丑二弐貳"},{"year":"1206","eto":"丙寅","over_match":true,"nengo":"建仁6","ambiguos":"建仁丙寅六"},{"year":"1206","eto":"丙寅","nengo":"元久3","ambiguos":"元久丙寅三参參"},{"year":"1206","eto":"丙寅","nengo":"建永1","ambiguos":"建永丙寅一壱壹元"},{"year":"1207","eto":"丁卯","over_match":true,"nengo":"元久4","ambiguos":"元久丁卯四"},{"year":"1207","eto":"丁卯","nengo":"建永2","ambiguos":"建永丁卯二弐貳"},{"year":"1207","eto":"丁卯","nengo":"承元1","ambiguos":"承元丁卯一壱壹元"},{"year":"1208","eto":"戊辰","over_match":true,"nengo":"元久5","ambiguos":"元久戊辰五伍"},{"year":"1208","eto":"戊辰","over_match":true,"nengo":"建永3","ambiguos":"建永戊辰三参參"},{"year":"1208","eto":"戊辰","nengo":"承元2","ambiguos":"承元戊辰二弐貳"},{"year":"1209","eto":"己巳","over_match":true,"nengo":"建永4","ambiguos":"建永己巳四"},{"year":"1209","eto":"己巳","nengo":"承元3","ambiguos":"承元己巳三参參"},{"year":"1210","eto":"庚午","nengo":"承元4","ambiguos":"承元庚午四"},{"year":"1211","eto":"辛未","nengo":"承元5","ambiguos":"承元辛未五伍"},{"year":"1211","eto":"辛未","nengo":"建暦1","ambiguos":"建暦曆辛未一壱壹元"},{"year":"1212","eto":"壬申","over_match":true,"nengo":"承元6","ambiguos":"承元壬申六"},{"year":"1212","eto":"壬申","nengo":"建暦2","ambiguos":"建暦曆壬申二弐貳"},{"year":"1213","eto":"癸酉","over_match":true,"nengo":"承元7","ambiguos":"承元癸酉七"},{"year":"1213","eto":"癸酉","nengo":"建暦3","ambiguos":"建暦曆癸酉三参參"},{"year":"1213","eto":"癸酉","nengo":"建保1","ambiguos":"建保癸酉一壱壹元"},{"year":"1214","eto":"甲戌","over_match":true,"nengo":"建暦4","ambiguos":"建暦曆甲戌四"},{"year":"1214","eto":"甲戌","nengo":"建保2","ambiguos":"建保甲戌二弐貳"},{"year":"1215","eto":"乙亥","over_match":true,"nengo":"建暦5","ambiguos":"建暦曆乙亥五伍"},{"year":"1215","eto":"乙亥","nengo":"建保3","ambiguos":"建保乙亥三参參"},{"year":"1216","eto":"丙子","nengo":"建保4","ambiguos":"建保丙子四"},{"year":"1217","eto":"丁丑","nengo":"建保5","ambiguos":"建保丁丑五伍"},{"year":"1218","eto":"戊寅","nengo":"建保6","ambiguos":"建保戊寅六"},{"year":"1219","eto":"己卯","nengo":"建保7","ambiguos":"建保己卯七"},{"year":"1219","eto":"己卯","nengo":"承久1","ambiguos":"承久己卯一壱壹元"},{"year":"1220","eto":"庚辰","over_match":true,"nengo":"建保8","ambiguos":"建保庚辰八"},{"year":"1220","eto":"庚辰","nengo":"承久2","ambiguos":"承久庚辰二弐貳"},{"year":"1221","eto":"辛巳","over_match":true,"nengo":"建保9","ambiguos":"建保辛巳九"},{"year":"1221","eto":"辛巳","nengo":"承久3","ambiguos":"承久辛巳三参參"},{"year":"1222","eto":"壬午","nengo":"承久4","ambiguos":"承久壬午四"},{"year":"1222","eto":"壬午","nengo":"貞応1","ambiguos":"貞応應壬午一壱壹元"},{"year":"1223","eto":"癸未","over_match":true,"nengo":"承久5","ambiguos":"承久癸未五伍"},{"year":"1223","eto":"癸未","nengo":"貞応2","ambiguos":"貞応應癸未二弐貳"},{"year":"1224","eto":"甲申","over_match":true,"nengo":"承久6","ambiguos":"承久甲申六"},{"year":"1224","eto":"甲申","nengo":"貞応3","ambiguos":"貞応應甲申三参參"},{"year":"1224","eto":"甲申","nengo":"元仁1","ambiguos":"元仁甲申一壱壹元"},{"year":"1225","eto":"乙酉","over_match":true,"nengo":"貞応4","ambiguos":"貞応應乙酉四"},{"year":"1225","eto":"乙酉","nengo":"元仁2","ambiguos":"元仁乙酉二弐貳"},{"year":"1225","eto":"乙酉","nengo":"嘉禄1","ambiguos":"嘉禄祿乙酉一壱壹元"},{"year":"1226","eto":"丙戌","over_match":true,"nengo":"貞応5","ambiguos":"貞応應丙戌五伍"},{"year":"1226","eto":"丙戌","over_match":true,"nengo":"元仁3","ambiguos":"元仁丙戌三参參"},{"year":"1226","eto":"丙戌","nengo":"嘉禄2","ambiguos":"嘉禄祿丙戌二弐貳"},{"year":"1227","eto":"丁亥","over_match":true,"nengo":"元仁4","ambiguos":"元仁丁亥四"},{"year":"1227","eto":"丁亥","nengo":"嘉禄3","ambiguos":"嘉禄祿丁亥三参參"},{"year":"1227","eto":"丁亥","nengo":"安貞1","ambiguos":"安貞丁亥一壱壹元"},{"year":"1228","eto":"戊子","over_match":true,"nengo":"嘉禄4","ambiguos":"嘉禄祿戊子四"},{"year":"1228","eto":"戊子","nengo":"安貞2","ambiguos":"安貞戊子二弐貳"},{"year":"1229","eto":"己丑","over_match":true,"nengo":"嘉禄5","ambiguos":"嘉禄祿己丑五伍"},{"year":"1229","eto":"己丑","nengo":"安貞3","ambiguos":"安貞己丑三参參"},{"year":"1229","eto":"己丑","nengo":"寛喜1","ambiguos":"寛喜寬己丑一壱壹元"},{"year":"1230","eto":"庚寅","over_match":true,"nengo":"安貞4","ambiguos":"安貞庚寅四"},{"year":"1230","eto":"庚寅","nengo":"寛喜2","ambiguos":"寛喜寬庚寅二弐貳"},{"year":"1231","eto":"辛卯","over_match":true,"nengo":"安貞5","ambiguos":"安貞辛卯五伍"},{"year":"1231","eto":"辛卯","nengo":"寛喜3","ambiguos":"寛喜寬辛卯三参參"},{"year":"1232","eto":"壬辰","nengo":"寛喜4","ambiguos":"寛喜寬壬辰四"},{"year":"1232","eto":"壬辰","nengo":"貞永1","ambiguos":"貞永壬辰一壱壹元"},{"year":"1233","eto":"癸巳","over_match":true,"nengo":"寛喜5","ambiguos":"寛喜寬癸巳五伍"},{"year":"1233","eto":"癸巳","nengo":"貞永2","ambiguos":"貞永癸巳二弐貳"},{"year":"1233","eto":"癸巳","nengo":"天福1","ambiguos":"天福福癸巳一壱壹元"},{"year":"1234","eto":"甲午","over_match":true,"nengo":"寛喜6","ambiguos":"寛喜寬甲午六"},{"year":"1234","eto":"甲午","over_match":true,"nengo":"貞永3","ambiguos":"貞永甲午三参參"},{"year":"1234","eto":"甲午","nengo":"天福2","ambiguos":"天福福甲午二弐貳"},{"year":"1234","eto":"甲午","nengo":"文暦1","ambiguos":"文暦曆甲午一壱壹元"},{"year":"1235","eto":"乙未","over_match":true,"nengo":"貞永4","ambiguos":"貞永乙未四"},{"year":"1235","eto":"乙未","over_match":true,"nengo":"天福3","ambiguos":"天福福乙未三参參"},{"year":"1235","eto":"乙未","nengo":"文暦2","ambiguos":"文暦曆乙未二弐貳"},{"year":"1235","eto":"乙未","nengo":"嘉禎1","ambiguos":"嘉禎乙未一壱壹元"},{"year":"1236","eto":"丙申","over_match":true,"nengo":"天福4","ambiguos":"天福福丙申四"},{"year":"1236","eto":"丙申","over_match":true,"nengo":"文暦3","ambiguos":"文暦曆丙申三参參"},{"year":"1236","eto":"丙申","nengo":"嘉禎2","ambiguos":"嘉禎丙申二弐貳"},{"year":"1237","eto":"丁酉","over_match":true,"nengo":"文暦4","ambiguos":"文暦曆丁酉四"},{"year":"1237","eto":"丁酉","nengo":"嘉禎3","ambiguos":"嘉禎丁酉三参參"},{"year":"1238","eto":"戊戌","nengo":"嘉禎4","ambiguos":"嘉禎戊戌四"},{"year":"1238","eto":"戊戌","nengo":"暦仁1","ambiguos":"暦仁曆戊戌一壱壹元"},{"year":"1239","eto":"己亥","over_match":true,"nengo":"嘉禎5","ambiguos":"嘉禎己亥五伍"},{"year":"1239","eto":"己亥","nengo":"暦仁2","ambiguos":"暦仁曆己亥二弐貳"},{"year":"1239","eto":"己亥","nengo":"延応1","ambiguos":"延応應己亥一壱壹元"},{"year":"1240","eto":"庚子","over_match":true,"nengo":"嘉禎6","ambiguos":"嘉禎庚子六"},{"year":"1240","eto":"庚子","over_match":true,"nengo":"暦仁3","ambiguos":"暦仁曆庚子三参參"},{"year":"1240","eto":"庚子","nengo":"延応2","ambiguos":"延応應庚子二弐貳"},{"year":"1240","eto":"庚子","nengo":"仁治1","ambiguos":"仁治庚子一壱壹元"},{"year":"1241","eto":"辛丑","over_match":true,"nengo":"暦仁4","ambiguos":"暦仁曆辛丑四"},{"year":"1241","eto":"辛丑","over_match":true,"nengo":"延応3","ambiguos":"延応應辛丑三参參"},{"year":"1241","eto":"辛丑","nengo":"仁治2","ambiguos":"仁治辛丑二弐貳"},{"year":"1242","eto":"壬寅","over_match":true,"nengo":"延応4","ambiguos":"延応應壬寅四"},{"year":"1242","eto":"壬寅","nengo":"仁治3","ambiguos":"仁治壬寅三参參"},{"year":"1243","eto":"癸卯","nengo":"仁治4","ambiguos":"仁治癸卯四"},{"year":"1243","eto":"癸卯","nengo":"寛元1","ambiguos":"寛元寬癸卯一壱壹元"},{"year":"1244","eto":"甲辰","over_match":true,"nengo":"仁治5","ambiguos":"仁治甲辰五伍"},{"year":"1244","eto":"甲辰","nengo":"寛元2","ambiguos":"寛元寬甲辰二弐貳"},{"year":"1245","eto":"乙巳","over_match":true,"nengo":"仁治6","ambiguos":"仁治乙巳六"},{"year":"1245","eto":"乙巳","nengo":"寛元3","ambiguos":"寛元寬乙巳三参參"},{"year":"1246","eto":"丙午","nengo":"寛元4","ambiguos":"寛元寬丙午四"},{"year":"1247","eto":"丁未","nengo":"寛元5","ambiguos":"寛元寬丁未五伍"},{"year":"1247","eto":"丁未","nengo":"宝治1","ambiguos":"宝治寶丁未一壱壹元"},{"year":"1248","eto":"戊申","over_match":true,"nengo":"寛元6","ambiguos":"寛元寬戊申六"},{"year":"1248","eto":"戊申","nengo":"宝治2","ambiguos":"宝治寶戊申二弐貳"},{"year":"1249","eto":"己酉","over_match":true,"nengo":"寛元7","ambiguos":"寛元寬己酉七"},{"year":"1249","eto":"己酉","nengo":"宝治3","ambiguos":"宝治寶己酉三参參"},{"year":"1249","eto":"己酉","nengo":"建長1","ambiguos":"建長己酉一壱壹元"},{"year":"1250","eto":"庚戌","over_match":true,"nengo":"宝治4","ambiguos":"宝治寶庚戌四"},{"year":"1250","eto":"庚戌","nengo":"建長2","ambiguos":"建長庚戌二弐貳"},{"year":"1251","eto":"辛亥","over_match":true,"nengo":"宝治5","ambiguos":"宝治寶辛亥五伍"},{"year":"1251","eto":"辛亥","nengo":"建長3","ambiguos":"建長辛亥三参參"},{"year":"1252","eto":"壬子","nengo":"建長4","ambiguos":"建長壬子四"},{"year":"1253","eto":"癸丑","nengo":"建長5","ambiguos":"建長癸丑五伍"},{"year":"1254","eto":"甲寅","nengo":"建長6","ambiguos":"建長甲寅六"},{"year":"1255","eto":"乙卯","nengo":"建長7","ambiguos":"建長乙卯七"},{"year":"1256","eto":"丙辰","nengo":"建長8","ambiguos":"建長丙辰八"},{"year":"1256","eto":"丙辰","nengo":"康元1","ambiguos":"康元丙辰一壱壹元"},{"year":"1257","eto":"丁巳","over_match":true,"nengo":"建長9","ambiguos":"建長丁巳九"},{"year":"1257","eto":"丁巳","nengo":"康元2","ambiguos":"康元丁巳二弐貳"},{"year":"1257","eto":"丁巳","nengo":"正嘉1","ambiguos":"正嘉丁巳一壱壹元"},{"year":"1258","eto":"戊午","over_match":true,"nengo":"建長10","ambiguos":"建長戊午十拾"},{"year":"1258","eto":"戊午","over_match":true,"nengo":"康元3","ambiguos":"康元戊午三参參"},{"year":"1258","eto":"戊午","nengo":"正嘉2","ambiguos":"正嘉戊午二弐貳"},{"year":"1259","eto":"己未","over_match":true,"nengo":"康元4","ambiguos":"康元己未四"},{"year":"1259","eto":"己未","nengo":"正嘉3","ambiguos":"正嘉己未三参參"},{"year":"1259","eto":"己未","nengo":"正元1","ambiguos":"正元己未一壱壹元"},{"year":"1260","eto":"庚申","over_match":true,"nengo":"正嘉4","ambiguos":"正嘉庚申四"},{"year":"1260","eto":"庚申","nengo":"正元2","ambiguos":"正元庚申二弐貳"},{"year":"1260","eto":"庚申","nengo":"文応1","ambiguos":"文応應庚申一壱壹元"},{"year":"1261","eto":"辛酉","over_match":true,"nengo":"正嘉5","ambiguos":"正嘉辛酉五伍"},{"year":"1261","eto":"辛酉","over_match":true,"nengo":"正元3","ambiguos":"正元辛酉三参參"},{"year":"1261","eto":"辛酉","nengo":"文応2","ambiguos":"文応應辛酉二弐貳"},{"year":"1261","eto":"辛酉","nengo":"弘長1","ambiguos":"弘長辛酉一壱壹元"},{"year":"1262","eto":"壬戌","over_match":true,"nengo":"正元4","ambiguos":"正元壬戌四"},{"year":"1262","eto":"壬戌","over_match":true,"nengo":"文応3","ambiguos":"文応應壬戌三参參"},{"year":"1262","eto":"壬戌","nengo":"弘長2","ambiguos":"弘長壬戌二弐貳"},{"year":"1263","eto":"癸亥","over_match":true,"nengo":"文応4","ambiguos":"文応應癸亥四"},{"year":"1263","eto":"癸亥","nengo":"弘長3","ambiguos":"弘長癸亥三参參"},{"year":"1264","eto":"甲子","nengo":"弘長4","ambiguos":"弘長甲子四"},{"year":"1264","eto":"甲子","nengo":"文永1","ambiguos":"文永甲子一壱壹元"},{"year":"1265","eto":"乙丑","over_match":true,"nengo":"弘長5","ambiguos":"弘長乙丑五伍"},{"year":"1265","eto":"乙丑","nengo":"文永2","ambiguos":"文永乙丑二弐貳"},{"year":"1266","eto":"丙寅","over_match":true,"nengo":"弘長6","ambiguos":"弘長丙寅六"},{"year":"1266","eto":"丙寅","nengo":"文永3","ambiguos":"文永丙寅三参參"},{"year":"1267","eto":"丁卯","nengo":"文永4","ambiguos":"文永丁卯四"},{"year":"1268","eto":"戊辰","nengo":"文永5","ambiguos":"文永戊辰五伍"},{"year":"1269","eto":"己巳","nengo":"文永6","ambiguos":"文永己巳六"},{"year":"1270","eto":"庚午","nengo":"文永7","ambiguos":"文永庚午七"},{"year":"1271","eto":"辛未","nengo":"文永8","ambiguos":"文永辛未八"},{"year":"1272","eto":"壬申","nengo":"文永9","ambiguos":"文永壬申九"},{"year":"1273","eto":"癸酉","nengo":"文永10","ambiguos":"文永癸酉十拾"},{"year":"1274","eto":"甲戌","nengo":"文永11","ambiguos":"文永甲戌十拾一壱壹"},{"year":"1275","eto":"乙亥","nengo":"文永12","ambiguos":"文永乙亥十拾二弐貳"},{"year":"1275","eto":"乙亥","nengo":"建治1","ambiguos":"建治乙亥一壱壹元"},{"year":"1276","eto":"丙子","over_match":true,"nengo":"文永13","ambiguos":"文永丙子十拾三参參"},{"year":"1276","eto":"丙子","nengo":"建治2","ambiguos":"建治丙子二弐貳"},{"year":"1277","eto":"丁丑","over_match":true,"nengo":"文永14","ambiguos":"文永丁丑十拾四"},{"year":"1277","eto":"丁丑","nengo":"建治3","ambiguos":"建治丁丑三参參"},{"year":"1278","eto":"戊寅","nengo":"建治4","ambiguos":"建治戊寅四"},{"year":"1278","eto":"戊寅","nengo":"弘安1","ambiguos":"弘安戊寅一壱壹元"},{"year":"1279","eto":"己卯","over_match":true,"nengo":"建治5","ambiguos":"建治己卯五伍"},{"year":"1279","eto":"己卯","nengo":"弘安2","ambiguos":"弘安己卯二弐貳"},{"year":"1280","eto":"庚辰","over_match":true,"nengo":"建治6","ambiguos":"建治庚辰六"},{"year":"1280","eto":"庚辰","nengo":"弘安3","ambiguos":"弘安庚辰三参參"},{"year":"1281","eto":"辛巳","nengo":"弘安4","ambiguos":"弘安辛巳四"},{"year":"1282","eto":"壬午","nengo":"弘安5","ambiguos":"弘安壬午五伍"},{"year":"1283","eto":"癸未","nengo":"弘安6","ambiguos":"弘安癸未六"},{"year":"1284","eto":"甲申","nengo":"弘安7","ambiguos":"弘安甲申七"},{"year":"1285","eto":"乙酉","nengo":"弘安8","ambiguos":"弘安乙酉八"},{"year":"1286","eto":"丙戌","nengo":"弘安9","ambiguos":"弘安丙戌九"},{"year":"1287","eto":"丁亥","nengo":"弘安10","ambiguos":"弘安丁亥十拾"},{"year":"1288","eto":"戊子","nengo":"弘安11","ambiguos":"弘安戊子十拾一壱壹"},{"year":"1288","eto":"戊子","nengo":"正応1","ambiguos":"正応應戊子一壱壹元"},{"year":"1289","eto":"己丑","over_match":true,"nengo":"弘安12","ambiguos":"弘安己丑十拾二弐貳"},{"year":"1289","eto":"己丑","nengo":"正応2","ambiguos":"正応應己丑二弐貳"},{"year":"1290","eto":"庚寅","over_match":true,"nengo":"弘安13","ambiguos":"弘安庚寅十拾三参參"},{"year":"1290","eto":"庚寅","nengo":"正応3","ambiguos":"正応應庚寅三参參"},{"year":"1291","eto":"辛卯","nengo":"正応4","ambiguos":"正応應辛卯四"},{"year":"1292","eto":"壬辰","nengo":"正応5","ambiguos":"正応應壬辰五伍"},{"year":"1293","eto":"癸巳","nengo":"正応6","ambiguos":"正応應癸巳六"},{"year":"1293","eto":"癸巳","nengo":"永仁1","ambiguos":"永仁癸巳一壱壹元"},{"year":"1294","eto":"甲午","over_match":true,"nengo":"正応7","ambiguos":"正応應甲午七"},{"year":"1294","eto":"甲午","nengo":"永仁2","ambiguos":"永仁甲午二弐貳"},{"year":"1295","eto":"乙未","over_match":true,"nengo":"正応8","ambiguos":"正応應乙未八"},{"year":"1295","eto":"乙未","nengo":"永仁3","ambiguos":"永仁乙未三参參"},{"year":"1296","eto":"丙申","nengo":"永仁4","ambiguos":"永仁丙申四"},{"year":"1297","eto":"丁酉","nengo":"永仁5","ambiguos":"永仁丁酉五伍"},{"year":"1298","eto":"戊戌","nengo":"永仁6","ambiguos":"永仁戊戌六"},{"year":"1299","eto":"己亥","nengo":"永仁7","ambiguos":"永仁己亥七"},{"year":"1299","eto":"己亥","nengo":"正安1","ambiguos":"正安己亥一壱壹元"},{"year":"1300","eto":"庚子","over_match":true,"nengo":"永仁8","ambiguos":"永仁庚子八"},{"year":"1300","eto":"庚子","nengo":"正安2","ambiguos":"正安庚子二弐貳"},{"year":"1301","eto":"辛丑","over_match":true,"nengo":"永仁9","ambiguos":"永仁辛丑九"},{"year":"1301","eto":"辛丑","nengo":"正安3","ambiguos":"正安辛丑三参參"},{"year":"1302","eto":"壬寅","nengo":"正安4","ambiguos":"正安壬寅四"},{"year":"1302","eto":"壬寅","nengo":"乾元1","ambiguos":"乾元壬寅一壱壹元"},{"year":"1303","eto":"癸卯","over_match":true,"nengo":"正安5","ambiguos":"正安癸卯五伍"},{"year":"1303","eto":"癸卯","nengo":"乾元2","ambiguos":"乾元癸卯二弐貳"},{"year":"1303","eto":"癸卯","nengo":"嘉元1","ambiguos":"嘉元癸卯一壱壹元"},{"year":"1304","eto":"甲辰","over_match":true,"nengo":"正安6","ambiguos":"正安甲辰六"},{"year":"1304","eto":"甲辰","over_match":true,"nengo":"乾元3","ambiguos":"乾元甲辰三参參"},{"year":"1304","eto":"甲辰","nengo":"嘉元2","ambiguos":"嘉元甲辰二弐貳"},{"year":"1305","eto":"乙巳","over_match":true,"nengo":"乾元4","ambiguos":"乾元乙巳四"},{"year":"1305","eto":"乙巳","nengo":"嘉元3","ambiguos":"嘉元乙巳三参參"},{"year":"1306","eto":"丙午","nengo":"嘉元4","ambiguos":"嘉元丙午四"},{"year":"1306","eto":"丙午","nengo":"徳治1","ambiguos":"徳治德丙午一壱壹元"},{"year":"1307","eto":"丁未","over_match":true,"nengo":"嘉元5","ambiguos":"嘉元丁未五伍"},{"year":"1307","eto":"丁未","nengo":"徳治2","ambiguos":"徳治德丁未二弐貳"},{"year":"1308","eto":"戊申","over_match":true,"nengo":"嘉元6","ambiguos":"嘉元戊申六"},{"year":"1308","eto":"戊申","nengo":"徳治3","ambiguos":"徳治德戊申三参參"},{"year":"1308","eto":"戊申","nengo":"延慶1","ambiguos":"延慶戊申一壱壹元"},{"year":"1309","eto":"己酉","over_match":true,"nengo":"徳治4","ambiguos":"徳治德己酉四"},{"year":"1309","eto":"己酉","nengo":"延慶2","ambiguos":"延慶己酉二弐貳"},{"year":"1310","eto":"庚戌","over_match":true,"nengo":"徳治5","ambiguos":"徳治德庚戌五伍"},{"year":"1310","eto":"庚戌","nengo":"延慶3","ambiguos":"延慶庚戌三参參"},{"year":"1311","eto":"辛亥","nengo":"延慶4","ambiguos":"延慶辛亥四"},{"year":"1311","eto":"辛亥","nengo":"応長1","ambiguos":"応長應辛亥一壱壹元"},{"year":"1312","eto":"壬子","over_match":true,"nengo":"延慶5","ambiguos":"延慶壬子五伍"},{"year":"1312","eto":"壬子","nengo":"応長2","ambiguos":"応長應壬子二弐貳"},{"year":"1312","eto":"壬子","nengo":"正和1","ambiguos":"正和壬子一壱壹元"},{"year":"1313","eto":"癸丑","over_match":true,"nengo":"延慶6","ambiguos":"延慶癸丑六"},{"year":"1313","eto":"癸丑","over_match":true,"nengo":"応長3","ambiguos":"応長應癸丑三参參"},{"year":"1313","eto":"癸丑","nengo":"正和2","ambiguos":"正和癸丑二弐貳"},{"year":"1314","eto":"甲寅","over_match":true,"nengo":"応長4","ambiguos":"応長應甲寅四"},{"year":"1314","eto":"甲寅","nengo":"正和3","ambiguos":"正和甲寅三参參"},{"year":"1315","eto":"乙卯","nengo":"正和4","ambiguos":"正和乙卯四"},{"year":"1316","eto":"丙辰","nengo":"正和5","ambiguos":"正和丙辰五伍"},{"year":"1317","eto":"丁巳","nengo":"正和6","ambiguos":"正和丁巳六"},{"year":"1317","eto":"丁巳","nengo":"文保1","ambiguos":"文保丁巳一壱壹元"},{"year":"1318","eto":"戊午","over_match":true,"nengo":"正和7","ambiguos":"正和戊午七"},{"year":"1318","eto":"戊午","nengo":"文保2","ambiguos":"文保戊午二弐貳"},{"year":"1319","eto":"己未","over_match":true,"nengo":"正和8","ambiguos":"正和己未八"},{"year":"1319","eto":"己未","nengo":"文保3","ambiguos":"文保己未三参參"},{"year":"1319","eto":"己未","nengo":"元応1","ambiguos":"元応應己未一壱壹元"},{"year":"1320","eto":"庚申","over_match":true,"nengo":"文保4","ambiguos":"文保庚申四"},{"year":"1320","eto":"庚申","nengo":"元応2","ambiguos":"元応應庚申二弐貳"},{"year":"1321","eto":"辛酉","over_match":true,"nengo":"文保5","ambiguos":"文保辛酉五伍"},{"year":"1321","eto":"辛酉","nengo":"元応3","ambiguos":"元応應辛酉三参參"},{"year":"1321","eto":"辛酉","nengo":"元亨1","ambiguos":"元亨辛酉一壱壹元"},{"year":"1322","eto":"壬戌","over_match":true,"nengo":"元応4","ambiguos":"元応應壬戌四"},{"year":"1322","eto":"壬戌","nengo":"元亨2","ambiguos":"元亨壬戌二弐貳"},{"year":"1323","eto":"癸亥","over_match":true,"nengo":"元応5","ambiguos":"元応應癸亥五伍"},{"year":"1323","eto":"癸亥","nengo":"元亨3","ambiguos":"元亨癸亥三参參"},{"year":"1324","eto":"甲子","nengo":"元亨4","ambiguos":"元亨甲子四"},{"year":"1324","eto":"甲子","nengo":"正中1","ambiguos":"正中甲子一壱壹元"},{"year":"1325","eto":"乙丑","over_match":true,"nengo":"元亨5","ambiguos":"元亨乙丑五伍"},{"year":"1325","eto":"乙丑","nengo":"正中2","ambiguos":"正中乙丑二弐貳"},{"year":"1326","eto":"丙寅","over_match":true,"nengo":"元亨6","ambiguos":"元亨丙寅六"},{"year":"1326","eto":"丙寅","nengo":"正中3","ambiguos":"正中丙寅三参參"},{"year":"1326","eto":"丙寅","nengo":"嘉暦1","ambiguos":"嘉暦曆丙寅一壱壹元"},{"year":"1327","eto":"丁卯","over_match":true,"nengo":"正中4","ambiguos":"正中丁卯四"},{"year":"1327","eto":"丁卯","nengo":"嘉暦2","ambiguos":"嘉暦曆丁卯二弐貳"},{"year":"1328","eto":"戊辰","over_match":true,"nengo":"正中5","ambiguos":"正中戊辰五伍"},{"year":"1328","eto":"戊辰","nengo":"嘉暦3","ambiguos":"嘉暦曆戊辰三参參"},{"year":"1329","eto":"己巳","nengo":"嘉暦4","ambiguos":"嘉暦曆己巳四"},{"year":"1329","eto":"己巳","nengo":"元徳1","ambiguos":"元徳德己巳一壱壹元"},{"year":"1330","eto":"庚午","over_match":true,"nengo":"嘉暦5","ambiguos":"嘉暦曆庚午五伍"},{"year":"1330","eto":"庚午","nengo":"元徳2","ambiguos":"元徳德庚午二弐貳"},{"year":"1331","eto":"辛未","over_match":true,"nengo":"嘉暦6","ambiguos":"嘉暦曆辛未六"},{"year":"1331","eto":"辛未","nengo":"元徳3","ambiguos":"元徳德辛未三参參"},{"year":"1331","eto":"辛未","condition":"大覚寺統","nengo":"元弘1","ambiguos":"元弘辛未一壱壹元"},{"year":"1332","eto":"壬申","condition":"持明院統","nengo":"元徳4","ambiguos":"元徳德壬申四"},{"year":"1332","eto":"壬申","condition":"大覚寺統","nengo":"元弘2","ambiguos":"元弘壬申二弐貳"},{"year":"1332","eto":"壬申","condition":"持明院統","nengo":"正慶1","ambiguos":"正慶壬申一壱壹元"},{"year":"1333","eto":"癸酉","over_match":true,"nengo":"元徳5","ambiguos":"元徳德癸酉五伍"},{"year":"1333","eto":"癸酉","nengo":"元弘3","ambiguos":"元弘癸酉三参參"},{"year":"1333","eto":"癸酉","condition":"持明院統","nengo":"正慶2","ambiguos":"正慶癸酉二弐貳"},{"year":"1334","eto":"甲戌","over_match":true,"nengo":"元徳6","ambiguos":"元徳德甲戌六"},{"year":"1334","eto":"甲戌","nengo":"元弘4","ambiguos":"元弘甲戌四"},{"year":"1334","eto":"甲戌","over_match":true,"nengo":"正慶3","ambiguos":"正慶甲戌三参參"},{"year":"1334","eto":"甲戌","nengo":"建武1","ambiguos":"建武甲戌一壱壹元"},{"year":"1335","eto":"乙亥","over_match":true,"nengo":"元弘5","ambiguos":"元弘乙亥五伍"},{"year":"1335","eto":"乙亥","over_match":true,"nengo":"正慶4","ambiguos":"正慶乙亥四"},{"year":"1335","eto":"乙亥","nengo":"建武2","ambiguos":"建武乙亥二弐貳"},{"year":"1336","eto":"丙子","over_match":true,"nengo":"元弘6","ambiguos":"元弘丙子六"},{"year":"1336","eto":"丙子","nengo":"建武3","ambiguos":"建武丙子三参參"},{"year":"1336","eto":"丙子","condition":"南朝","nengo":"延元1","ambiguos":"延元丙子一壱壹元"},{"year":"1337","eto":"丁丑","condition":"北朝","nengo":"建武4","ambiguos":"建武丁丑四"},{"year":"1337","eto":"丁丑","condition":"南朝","nengo":"延元2","ambiguos":"延元丁丑二弐貳"},{"year":"1338","eto":"戊寅","condition":"北朝","nengo":"建武5","ambiguos":"建武戊寅五伍"},{"year":"1338","eto":"戊寅","condition":"南朝","nengo":"延元3","ambiguos":"延元戊寅三参參"},{"year":"1338","eto":"戊寅","condition":"北朝","nengo":"暦応1","ambiguos":"暦応曆應戊寅一壱壹元"},{"year":"1339","eto":"己卯","over_match":true,"nengo":"建武6","ambiguos":"建武己卯六"},{"year":"1339","eto":"己卯","condition":"南朝","nengo":"延元4","ambiguos":"延元己卯四"},{"year":"1339","eto":"己卯","condition":"北朝","nengo":"暦応2","ambiguos":"暦応曆應己卯二弐貳"},{"year":"1340","eto":"庚辰","over_match":true,"nengo":"建武7","ambiguos":"建武庚辰七"},{"year":"1340","eto":"庚辰","condition":"南朝","nengo":"延元5","ambiguos":"延元庚辰五伍"},{"year":"1340","eto":"庚辰","condition":"北朝","nengo":"暦応3","ambiguos":"暦応曆應庚辰三参參"},{"year":"1340","eto":"庚辰","condition":"南朝","nengo":"興国1","ambiguos":"興国國庚辰一壱壹元"},{"year":"1341","eto":"辛巳","over_match":true,"nengo":"延元6","ambiguos":"延元辛巳六"},{"year":"1341","eto":"辛巳","condition":"北朝","nengo":"暦応4","ambiguos":"暦応曆應辛巳四"},{"year":"1341","eto":"辛巳","condition":"南朝","nengo":"興国2","ambiguos":"興国國辛巳二弐貳"},{"year":"1342","eto":"壬午","over_match":true,"nengo":"延元7","ambiguos":"延元壬午七"},{"year":"1342","eto":"壬午","condition":"北朝","nengo":"暦応5","ambiguos":"暦応曆應壬午五伍"},{"year":"1342","eto":"壬午","condition":"南朝","nengo":"興国3","ambiguos":"興国國壬午三参參"},{"year":"1342","eto":"壬午","condition":"北朝","nengo":"康永1","ambiguos":"康永壬午一壱壹元"},{"year":"1343","eto":"癸未","over_match":true,"nengo":"暦応6","ambiguos":"暦応曆應癸未六"},{"year":"1343","eto":"癸未","condition":"南朝","nengo":"興国4","ambiguos":"興国國癸未四"},{"year":"1343","eto":"癸未","condition":"北朝","nengo":"康永2","ambiguos":"康永癸未二弐貳"},{"year":"1344","eto":"甲申","over_match":true,"nengo":"暦応7","ambiguos":"暦応曆應甲申七"},{"year":"1344","eto":"甲申","condition":"南朝","nengo":"興国5","ambiguos":"興国國甲申五伍"},{"year":"1344","eto":"甲申","condition":"北朝","nengo":"康永3","ambiguos":"康永甲申三参參"},{"year":"1345","eto":"乙酉","condition":"南朝","nengo":"興国6","ambiguos":"興国國乙酉六"},{"year":"1345","eto":"乙酉","condition":"北朝","nengo":"康永4","ambiguos":"康永乙酉四"},{"year":"1345","eto":"乙酉","condition":"北朝","nengo":"貞和1","ambiguos":"貞和乙酉一壱壹元"},{"year":"1346","eto":"丙戌","condition":"南朝","nengo":"興国7","ambiguos":"興国國丙戌七"},{"year":"1346","eto":"丙戌","over_match":true,"nengo":"康永5","ambiguos":"康永丙戌五伍"},{"year":"1346","eto":"丙戌","condition":"北朝","nengo":"貞和2","ambiguos":"貞和丙戌二弐貳"},{"year":"1346","eto":"丙戌","condition":"南朝","nengo":"正平1","ambiguos":"正平丙戌一壱壹元"},{"year":"1347","eto":"丁亥","nengo":"興国8","ambiguos":"興国國丁亥八"},{"year":"1347","eto":"丁亥","over_match":true,"nengo":"康永6","ambiguos":"康永丁亥六"},{"year":"1347","eto":"丁亥","condition":"北朝","nengo":"貞和3","ambiguos":"貞和丁亥三参參"},{"year":"1347","eto":"丁亥","condition":"南朝","nengo":"正平2","ambiguos":"正平丁亥二弐貳"},{"year":"1348","eto":"戊子","over_match":true,"nengo":"興国9","ambiguos":"興国國戊子九"},{"year":"1348","eto":"戊子","condition":"北朝","nengo":"貞和4","ambiguos":"貞和戊子四"},{"year":"1348","eto":"戊子","condition":"南朝","nengo":"正平3","ambiguos":"正平戊子三参參"},{"year":"1349","eto":"己丑","over_match":true,"nengo":"興国10","ambiguos":"興国國己丑十拾"},{"year":"1349","eto":"己丑","condition":"北朝","nengo":"貞和5","ambiguos":"貞和己丑五伍"},{"year":"1349","eto":"己丑","condition":"南朝","nengo":"正平4","ambiguos":"正平己丑四"},{"year":"1350","eto":"庚寅","condition":"北朝","nengo":"貞和6","ambiguos":"貞和庚寅六"},{"year":"1350","eto":"庚寅","condition":"南朝","nengo":"正平5","ambiguos":"正平庚寅五伍"},{"year":"1350","eto":"庚寅","condition":"北朝","nengo":"観応1","ambiguos":"観応觀應庚寅一壱壹元"},{"year":"1351","eto":"辛卯","condition":"長門探題","nengo":"貞和7","ambiguos":"貞和辛卯七"},{"year":"1351","eto":"辛卯","nengo":"正平6","ambiguos":"正平辛卯六"},{"year":"1351","eto":"辛卯","condition":"北朝","nengo":"観応2","ambiguos":"観応觀應辛卯二弐貳"},{"year":"1352","eto":"壬辰","over_match":true,"nengo":"貞和8","ambiguos":"貞和壬辰八"},{"year":"1352","eto":"壬辰","nengo":"正平7","ambiguos":"正平壬辰七"},{"year":"1352","eto":"壬辰","over_match":true,"condition":"北朝","nengo":"観応3","ambiguos":"観応觀應壬辰三参參"},{"year":"1352","eto":"壬辰","condition":"北朝","nengo":"文和1","ambiguos":"文和壬辰一壱壹元"},{"year":"1353","eto":"癸巳","over_match":true,"nengo":"貞和9","ambiguos":"貞和癸巳九"},{"year":"1353","eto":"癸巳","condition":"南朝","nengo":"正平8","ambiguos":"正平癸巳八"},{"year":"1353","eto":"癸巳","over_match":true,"nengo":"観応4","ambiguos":"観応觀應癸巳四"},{"year":"1353","eto":"癸巳","condition":"北朝","nengo":"文和2","ambiguos":"文和癸巳二弐貳"},{"year":"1354","eto":"甲午","condition":"南朝","nengo":"正平9","ambiguos":"正平甲午九"},{"year":"1354","eto":"甲午","condition":"北朝","nengo":"文和3","ambiguos":"文和甲午三参參"},{"year":"1355","eto":"乙未","condition":"南朝","nengo":"正平10","ambiguos":"正平乙未十拾"},{"year":"1355","eto":"乙未","condition":"北朝","nengo":"文和4","ambiguos":"文和乙未四"},{"year":"1356","eto":"丙申","condition":"南朝","nengo":"正平11","ambiguos":"正平丙申十拾一壱壹"},{"year":"1356","eto":"丙申","condition":"北朝","nengo":"文和5","ambiguos":"文和丙申五伍"},{"year":"1356","eto":"丙申","condition":"北朝","nengo":"延文1","ambiguos":"延文丙申一壱壹元"},{"year":"1357","eto":"丁酉","condition":"南朝","nengo":"正平12","ambiguos":"正平丁酉十拾二弐貳"},{"year":"1357","eto":"丁酉","over_match":true,"nengo":"文和6","ambiguos":"文和丁酉六"},{"year":"1357","eto":"丁酉","condition":"北朝","nengo":"延文2","ambiguos":"延文丁酉二弐貳"},{"year":"1358","eto":"戊戌","condition":"南朝","nengo":"正平13","ambiguos":"正平戊戌十拾三参參"},{"year":"1358","eto":"戊戌","over_match":true,"nengo":"文和7","ambiguos":"文和戊戌七"},{"year":"1358","eto":"戊戌","condition":"北朝","nengo":"延文3","ambiguos":"延文戊戌三参參"},{"year":"1359","eto":"己亥","condition":"南朝","nengo":"正平14","ambiguos":"正平己亥十拾四"},{"year":"1359","eto":"己亥","condition":"北朝","nengo":"延文4","ambiguos":"延文己亥四"},{"year":"1360","eto":"庚子","condition":"南朝","nengo":"正平15","ambiguos":"正平庚子十拾五伍"},{"year":"1360","eto":"庚子","condition":"北朝","nengo":"延文5","ambiguos":"延文庚子五伍"},{"year":"1361","eto":"辛丑","condition":"南朝","nengo":"正平16","ambiguos":"正平辛丑十拾六"},{"year":"1361","eto":"辛丑","condition":"北朝","nengo":"延文6","ambiguos":"延文辛丑六"},{"year":"1361","eto":"辛丑","condition":"北朝","nengo":"康安1","ambiguos":"康安辛丑一壱壹元"},{"year":"1362","eto":"壬寅","condition":"南朝","nengo":"正平17","ambiguos":"正平壬寅十拾七"},{"year":"1362","eto":"壬寅","over_match":true,"nengo":"延文7","ambiguos":"延文壬寅七"},{"year":"1362","eto":"壬寅","condition":"北朝","nengo":"康安2","ambiguos":"康安壬寅二弐貳"},{"year":"1362","eto":"壬寅","condition":"北朝","nengo":"貞治1","ambiguos":"貞治壬寅一壱壹元"},{"year":"1363","eto":"癸卯","condition":"南朝","nengo":"正平18","ambiguos":"正平癸卯十拾八"},{"year":"1363","eto":"癸卯","over_match":true,"nengo":"延文8","ambiguos":"延文癸卯八"},{"year":"1363","eto":"癸卯","over_match":true,"nengo":"康安3","ambiguos":"康安癸卯三参參"},{"year":"1363","eto":"癸卯","condition":"北朝","nengo":"貞治2","ambiguos":"貞治癸卯二弐貳"},{"year":"1364","eto":"甲辰","condition":"南朝","nengo":"正平19","ambiguos":"正平甲辰十拾九"},{"year":"1364","eto":"甲辰","over_match":true,"nengo":"康安4","ambiguos":"康安甲辰四"},{"year":"1364","eto":"甲辰","condition":"北朝","nengo":"貞治3","ambiguos":"貞治甲辰三参參"},{"year":"1365","eto":"乙巳","condition":"南朝","nengo":"正平20","ambiguos":"正平乙巳十拾廿二弐貳"},{"year":"1365","eto":"乙巳","condition":"北朝","nengo":"貞治4","ambiguos":"貞治乙巳四"},{"year":"1366","eto":"丙午","condition":"南朝","nengo":"正平21","ambiguos":"正平丙午十拾廿二弐貳一壱壹"},{"year":"1366","eto":"丙午","condition":"北朝","nengo":"貞治5","ambiguos":"貞治丙午五伍"},{"year":"1367","eto":"丁未","condition":"南朝","nengo":"正平22","ambiguos":"正平丁未十拾廿二弐貳二弐貳"},{"year":"1367","eto":"丁未","condition":"北朝","nengo":"貞治6","ambiguos":"貞治丁未六"},{"year":"1368","eto":"戊申","condition":"南朝","nengo":"正平23","ambiguos":"正平戊申十拾廿二弐貳三参參"},{"year":"1368","eto":"戊申","condition":"北朝","nengo":"貞治7","ambiguos":"貞治戊申七"},{"year":"1368","eto":"戊申","condition":"北朝","nengo":"応安1","ambiguos":"応安應戊申一壱壹元"},{"year":"1369","eto":"己酉","condition":"南朝","nengo":"正平24","ambiguos":"正平己酉十拾廿二弐貳四"},{"year":"1369","eto":"己酉","over_match":true,"nengo":"貞治8","ambiguos":"貞治己酉八"},{"year":"1369","eto":"己酉","condition":"北朝","nengo":"応安2","ambiguos":"応安應己酉二弐貳"},{"year":"1370","eto":"庚戌","condition":"南朝","nengo":"正平25","ambiguos":"正平庚戌十拾廿二弐貳五伍"},{"year":"1370","eto":"庚戌","over_match":true,"nengo":"貞治9","ambiguos":"貞治庚戌九"},{"year":"1370","eto":"庚戌","condition":"北朝","nengo":"応安3","ambiguos":"応安應庚戌三参參"},{"year":"1370","eto":"庚戌","condition":"南朝","nengo":"建徳1","ambiguos":"建徳德庚戌一壱壹元"},{"year":"1371","eto":"辛亥","over_match":true,"nengo":"正平26","ambiguos":"正平辛亥十拾廿二弐貳六"},{"year":"1371","eto":"辛亥","condition":"北朝","nengo":"応安4","ambiguos":"応安應辛亥四"},{"year":"1371","eto":"辛亥","condition":"南朝","nengo":"建徳2","ambiguos":"建徳德辛亥二弐貳"},{"year":"1372","eto":"壬子","over_match":true,"nengo":"正平27","ambiguos":"正平壬子十拾廿二弐貳七"},{"year":"1372","eto":"壬子","condition":"北朝","nengo":"応安5","ambiguos":"応安應壬子五伍"},{"year":"1372","eto":"壬子","condition":"南朝","nengo":"建徳3","ambiguos":"建徳德壬子三参參"},{"year":"1372","eto":"壬子","condition":"南朝","nengo":"文中1","ambiguos":"文中壬子一壱壹元"},{"year":"1373","eto":"癸丑","condition":"北朝","nengo":"応安6","ambiguos":"応安應癸丑六"},{"year":"1373","eto":"癸丑","over_match":true,"nengo":"建徳4","ambiguos":"建徳德癸丑四"},{"year":"1373","eto":"癸丑","condition":"南朝","nengo":"文中2","ambiguos":"文中癸丑二弐貳"},{"year":"1374","eto":"甲寅","condition":"北朝","nengo":"応安7","ambiguos":"応安應甲寅七"},{"year":"1374","eto":"甲寅","over_match":true,"nengo":"建徳5","ambiguos":"建徳德甲寅五伍"},{"year":"1374","eto":"甲寅","condition":"南朝","nengo":"文中3","ambiguos":"文中甲寅三参參"},{"year":"1375","eto":"乙卯","condition":"北朝","nengo":"応安8","ambiguos":"応安應乙卯八"},{"year":"1375","eto":"乙卯","condition":"南朝","nengo":"文中4","ambiguos":"文中乙卯四"},{"year":"1375","eto":"乙卯","condition":"南朝","nengo":"天授1","ambiguos":"天授乙卯一壱壹元"},{"year":"1375","eto":"乙卯","nengo":"永和1","ambiguos":"永和乙卯一壱壹元"},{"year":"1376","eto":"丙辰","over_match":true,"nengo":"応安9","ambiguos":"応安應丙辰九"},{"year":"1376","eto":"丙辰","over_match":true,"nengo":"文中5","ambiguos":"文中丙辰五伍"},{"year":"1376","eto":"丙辰","condition":"南朝","nengo":"天授2","ambiguos":"天授丙辰二弐貳"},{"year":"1376","eto":"丙辰","condition":"北朝","nengo":"永和2","ambiguos":"永和丙辰二弐貳"},{"year":"1377","eto":"丁巳","over_match":true,"nengo":"応安10","ambiguos":"応安應丁巳十拾"},{"year":"1377","eto":"丁巳","over_match":true,"nengo":"文中6","ambiguos":"文中丁巳六"},{"year":"1377","eto":"丁巳","condition":"南朝","nengo":"天授3","ambiguos":"天授丁巳三参參"},{"year":"1377","eto":"丁巳","condition":"北朝","nengo":"永和3","ambiguos":"永和丁巳三参參"},{"year":"1378","eto":"戊午","condition":"南朝","nengo":"天授4","ambiguos":"天授戊午四"},{"year":"1378","eto":"戊午","condition":"北朝","nengo":"永和4","ambiguos":"永和戊午四"},{"year":"1379","eto":"己未","condition":"南朝","nengo":"天授5","ambiguos":"天授己未五伍"},{"year":"1379","eto":"己未","condition":"北朝","nengo":"永和5","ambiguos":"永和己未五伍"},{"year":"1379","eto":"己未","condition":"北朝","nengo":"康暦1","ambiguos":"康暦曆己未一壱壹元"},{"year":"1380","eto":"庚申","condition":"南朝","nengo":"天授6","ambiguos":"天授庚申六"},{"year":"1380","eto":"庚申","over_match":true,"nengo":"永和6","ambiguos":"永和庚申六"},{"year":"1380","eto":"庚申","condition":"北朝","nengo":"康暦2","ambiguos":"康暦曆庚申二弐貳"},{"year":"1381","eto":"辛酉","condition":"南朝","nengo":"天授7","ambiguos":"天授辛酉七"},{"year":"1381","eto":"辛酉","over_match":true,"nengo":"永和7","ambiguos":"永和辛酉七"},{"year":"1381","eto":"辛酉","condition":"北朝","nengo":"康暦3","ambiguos":"康暦曆辛酉三参參"},{"year":"1381","eto":"辛酉","condition":"南朝","nengo":"弘和1","ambiguos":"弘和辛酉一壱壹元"},{"year":"1381","eto":"辛酉","nengo":"永徳1","ambiguos":"永徳德辛酉一壱壹元"},{"year":"1382","eto":"壬戌","over_match":true,"nengo":"天授8","ambiguos":"天授壬戌八"},{"year":"1382","eto":"壬戌","over_match":true,"nengo":"康暦4","ambiguos":"康暦曆壬戌四"},{"year":"1382","eto":"壬戌","condition":"南朝","nengo":"弘和2","ambiguos":"弘和壬戌二弐貳"},{"year":"1382","eto":"壬戌","condition":"北朝","nengo":"永徳2","ambiguos":"永徳德壬戌二弐貳"},{"year":"1383","eto":"癸亥","over_match":true,"nengo":"天授9","ambiguos":"天授癸亥九"},{"year":"1383","eto":"癸亥","over_match":true,"nengo":"康暦5","ambiguos":"康暦曆癸亥五伍"},{"year":"1383","eto":"癸亥","condition":"南朝","nengo":"弘和3","ambiguos":"弘和癸亥三参參"},{"year":"1383","eto":"癸亥","condition":"北朝","nengo":"永徳3","ambiguos":"永徳德癸亥三参參"},{"year":"1384","eto":"甲子","condition":"南朝","nengo":"弘和4","ambiguos":"弘和甲子四"},{"year":"1384","eto":"甲子","condition":"北朝","nengo":"永徳4","ambiguos":"永徳德甲子四"},{"year":"1384","eto":"甲子","condition":"南朝","nengo":"元中1","ambiguos":"元中甲子一壱壹元"},{"year":"1384","eto":"甲子","nengo":"至徳1","ambiguos":"至徳德甲子一壱壹元"},{"year":"1385","eto":"乙丑","over_match":true,"nengo":"弘和5","ambiguos":"弘和乙丑五伍"},{"year":"1385","eto":"乙丑","over_match":true,"nengo":"永徳5","ambiguos":"永徳德乙丑五伍"},{"year":"1385","eto":"乙丑","condition":"南朝","nengo":"元中2","ambiguos":"元中乙丑二弐貳"},{"year":"1385","eto":"乙丑","condition":"北朝","nengo":"至徳2","ambiguos":"至徳德乙丑二弐貳"},{"year":"1386","eto":"丙寅","over_match":true,"nengo":"弘和6","ambiguos":"弘和丙寅六"},{"year":"1386","eto":"丙寅","over_match":true,"nengo":"永徳6","ambiguos":"永徳德丙寅六"},{"year":"1386","eto":"丙寅","condition":"南朝","nengo":"元中3","ambiguos":"元中丙寅三参參"},{"year":"1386","eto":"丙寅","condition":"北朝","nengo":"至徳3","ambiguos":"至徳德丙寅三参參"},{"year":"1387","eto":"丁卯","condition":"南朝","nengo":"元中4","ambiguos":"元中丁卯四"},{"year":"1387","eto":"丁卯","condition":"北朝","nengo":"至徳4","ambiguos":"至徳德丁卯四"},{"year":"1387","eto":"丁卯","condition":"北朝","nengo":"嘉慶1","ambiguos":"嘉慶丁卯一壱壹元"},{"year":"1388","eto":"戊辰","condition":"南朝","nengo":"元中5","ambiguos":"元中戊辰五伍"},{"year":"1388","eto":"戊辰","over_match":true,"nengo":"至徳5","ambiguos":"至徳德戊辰五伍"},{"year":"1388","eto":"戊辰","condition":"北朝","nengo":"嘉慶2","ambiguos":"嘉慶戊辰二弐貳"},{"year":"1389","eto":"己巳","condition":"南朝","nengo":"元中6","ambiguos":"元中己巳六"},{"year":"1389","eto":"己巳","over_match":true,"nengo":"至徳6","ambiguos":"至徳德己巳六"},{"year":"1389","eto":"己巳","condition":"北朝","nengo":"嘉慶3","ambiguos":"嘉慶己巳三参參"},{"year":"1389","eto":"己巳","condition":"北朝","nengo":"康応1","ambiguos":"康応應己巳一壱壹元"},{"year":"1390","eto":"庚午","condition":"南朝","nengo":"元中7","ambiguos":"元中庚午七"},{"year":"1390","eto":"庚午","over_match":true,"nengo":"嘉慶4","ambiguos":"嘉慶庚午四"},{"year":"1390","eto":"庚午","condition":"北朝","nengo":"康応2","ambiguos":"康応應庚午二弐貳"},{"year":"1390","eto":"庚午","condition":"北朝","nengo":"明徳1","ambiguos":"明徳德庚午一壱壹元"},{"year":"1391","eto":"辛未","condition":"南朝","nengo":"元中8","ambiguos":"元中辛未八"},{"year":"1391","eto":"辛未","over_match":true,"nengo":"嘉慶5","ambiguos":"嘉慶辛未五伍"},{"year":"1391","eto":"辛未","over_match":true,"nengo":"康応3","ambiguos":"康応應辛未三参參"},{"year":"1391","eto":"辛未","condition":"北朝","nengo":"明徳2","ambiguos":"明徳德辛未二弐貳"},{"year":"1392","eto":"壬申","condition":"南朝","nengo":"元中9","ambiguos":"元中壬申九"},{"year":"1392","eto":"壬申","over_match":true,"nengo":"康応4","ambiguos":"康応應壬申四"},{"year":"1392","eto":"壬申","nengo":"明徳3","ambiguos":"明徳德壬申三参參"},{"year":"1393","eto":"癸酉","over_match":true,"nengo":"元中10","ambiguos":"元中癸酉十拾"},{"year":"1393","eto":"癸酉","nengo":"明徳4","ambiguos":"明徳德癸酉四"},{"year":"1394","eto":"甲戌","over_match":true,"nengo":"元中11","ambiguos":"元中甲戌十拾一壱壹"},{"year":"1394","eto":"甲戌","nengo":"明徳5","ambiguos":"明徳德甲戌五伍"},{"year":"1394","eto":"甲戌","nengo":"応永1","ambiguos":"応永應甲戌一壱壹元"},{"year":"1395","eto":"乙亥","over_match":true,"nengo":"明徳6","ambiguos":"明徳德乙亥六"},{"year":"1395","eto":"乙亥","nengo":"応永2","ambiguos":"応永應乙亥二弐貳"},{"year":"1396","eto":"丙子","over_match":true,"nengo":"明徳7","ambiguos":"明徳德丙子七"},{"year":"1396","eto":"丙子","nengo":"応永3","ambiguos":"応永應丙子三参參"},{"year":"1397","eto":"丁丑","nengo":"応永4","ambiguos":"応永應丁丑四"},{"year":"1398","eto":"戊寅","nengo":"応永5","ambiguos":"応永應戊寅五伍"},{"year":"1399","eto":"己卯","nengo":"応永6","ambiguos":"応永應己卯六"},{"year":"1400","eto":"庚辰","nengo":"応永7","ambiguos":"応永應庚辰七"},{"year":"1401","eto":"辛巳","nengo":"応永8","ambiguos":"応永應辛巳八"},{"year":"1402","eto":"壬午","nengo":"応永9","ambiguos":"応永應壬午九"},{"year":"1403","eto":"癸未","nengo":"応永10","ambiguos":"応永應癸未十拾"},{"year":"1404","eto":"甲申","nengo":"応永11","ambiguos":"応永應甲申十拾一壱壹"},{"year":"1405","eto":"乙酉","nengo":"応永12","ambiguos":"応永應乙酉十拾二弐貳"},{"year":"1406","eto":"丙戌","nengo":"応永13","ambiguos":"応永應丙戌十拾三参參"},{"year":"1407","eto":"丁亥","nengo":"応永14","ambiguos":"応永應丁亥十拾四"},{"year":"1408","eto":"戊子","nengo":"応永15","ambiguos":"応永應戊子十拾五伍"},{"year":"1409","eto":"己丑","nengo":"応永16","ambiguos":"応永應己丑十拾六"},{"year":"1410","eto":"庚寅","nengo":"応永17","ambiguos":"応永應庚寅十拾七"},{"year":"1411","eto":"辛卯","nengo":"応永18","ambiguos":"応永應辛卯十拾八"},{"year":"1412","eto":"壬辰","nengo":"応永19","ambiguos":"応永應壬辰十拾九"},{"year":"1413","eto":"癸巳","nengo":"応永20","ambiguos":"応永應癸巳十拾廿二弐貳"},{"year":"1414","eto":"甲午","nengo":"応永21","ambiguos":"応永應甲午十拾廿二弐貳一壱壹"},{"year":"1415","eto":"乙未","nengo":"応永22","ambiguos":"応永應乙未十拾廿二弐貳二弐貳"},{"year":"1416","eto":"丙申","nengo":"応永23","ambiguos":"応永應丙申十拾廿二弐貳三参參"},{"year":"1417","eto":"丁酉","nengo":"応永24","ambiguos":"応永應丁酉十拾廿二弐貳四"},{"year":"1418","eto":"戊戌","nengo":"応永25","ambiguos":"応永應戊戌十拾廿二弐貳五伍"},{"year":"1419","eto":"己亥","nengo":"応永26","ambiguos":"応永應己亥十拾廿二弐貳六"},{"year":"1420","eto":"庚子","nengo":"応永27","ambiguos":"応永應庚子十拾廿二弐貳七"},{"year":"1421","eto":"辛丑","nengo":"応永28","ambiguos":"応永應辛丑十拾廿二弐貳八"},{"year":"1422","eto":"壬寅","nengo":"応永29","ambiguos":"応永應壬寅十拾廿二弐貳九"},{"year":"1423","eto":"癸卯","nengo":"応永30","ambiguos":"応永應癸卯十拾卅丗三参參"},{"year":"1424","eto":"甲辰","nengo":"応永31","ambiguos":"応永應甲辰十拾卅丗三参參一壱壹"},{"year":"1425","eto":"乙巳","nengo":"応永32","ambiguos":"応永應乙巳十拾卅丗三参參二弐貳"},{"year":"1426","eto":"丙午","nengo":"応永33","ambiguos":"応永應丙午十拾卅丗三参參三参參"},{"year":"1427","eto":"丁未","nengo":"応永34","ambiguos":"応永應丁未十拾卅丗三参參四"},{"year":"1428","eto":"戊申","nengo":"応永35","ambiguos":"応永應戊申十拾卅丗三参參五伍"},{"year":"1428","eto":"戊申","nengo":"正長1","ambiguos":"正長戊申一壱壹元"},{"year":"1429","eto":"己酉","over_match":true,"nengo":"応永36","ambiguos":"応永應己酉十拾卅丗三参參六"},{"year":"1429","eto":"己酉","nengo":"正長2","ambiguos":"正長己酉二弐貳"},{"year":"1429","eto":"己酉","nengo":"永享1","ambiguos":"永享己酉一壱壹元"},{"year":"1430","eto":"庚戌","over_match":true,"nengo":"応永37","ambiguos":"応永應庚戌十拾卅丗三参參七"},{"year":"1430","eto":"庚戌","condition":"鎌倉府","nengo":"正長3","ambiguos":"正長庚戌三参參"},{"year":"1430","eto":"庚戌","nengo":"永享2","ambiguos":"永享庚戌二弐貳"},{"year":"1431","eto":"辛亥","condition":"鎌倉府","nengo":"正長4","ambiguos":"正長辛亥四"},{"year":"1431","eto":"辛亥","nengo":"永享3","ambiguos":"永享辛亥三参參"},{"year":"1432","eto":"壬子","over_match":true,"nengo":"正長5","ambiguos":"正長壬子五伍"},{"year":"1432","eto":"壬子","nengo":"永享4","ambiguos":"永享壬子四"},{"year":"1433","eto":"癸丑","over_match":true,"nengo":"正長6","ambiguos":"正長癸丑六"},{"year":"1433","eto":"癸丑","nengo":"永享5","ambiguos":"永享癸丑五伍"},{"year":"1434","eto":"甲寅","nengo":"永享6","ambiguos":"永享甲寅六"},{"year":"1435","eto":"乙卯","nengo":"永享7","ambiguos":"永享乙卯七"},{"year":"1436","eto":"丙辰","nengo":"永享8","ambiguos":"永享丙辰八"},{"year":"1437","eto":"丁巳","nengo":"永享9","ambiguos":"永享丁巳九"},{"year":"1438","eto":"戊午","nengo":"永享10","ambiguos":"永享戊午十拾"},{"year":"1439","eto":"己未","nengo":"永享11","ambiguos":"永享己未十拾一壱壹"},{"year":"1440","eto":"庚申","nengo":"永享12","ambiguos":"永享庚申十拾二弐貳"},{"year":"1441","eto":"辛酉","nengo":"永享13","ambiguos":"永享辛酉十拾三参參"},{"year":"1441","eto":"辛酉","nengo":"嘉吉1","ambiguos":"嘉吉辛酉一壱壹元"},{"year":"1442","eto":"壬戌","over_match":true,"nengo":"永享14","ambiguos":"永享壬戌十拾四"},{"year":"1442","eto":"壬戌","nengo":"嘉吉2","ambiguos":"嘉吉壬戌二弐貳"},{"year":"1443","eto":"癸亥","over_match":true,"nengo":"永享15","ambiguos":"永享癸亥十拾五伍"},{"year":"1443","eto":"癸亥","nengo":"嘉吉3","ambiguos":"嘉吉癸亥三参參"},{"year":"1444","eto":"甲子","nengo":"嘉吉4","ambiguos":"嘉吉甲子四"},{"year":"1444","eto":"甲子","nengo":"文安1","ambiguos":"文安甲子一壱壹元"},{"year":"1445","eto":"乙丑","over_match":true,"nengo":"嘉吉5","ambiguos":"嘉吉乙丑五伍"},{"year":"1445","eto":"乙丑","nengo":"文安2","ambiguos":"文安乙丑二弐貳"},{"year":"1446","eto":"丙寅","over_match":true,"nengo":"嘉吉6","ambiguos":"嘉吉丙寅六"},{"year":"1446","eto":"丙寅","nengo":"文安3","ambiguos":"文安丙寅三参參"},{"year":"1447","eto":"丁卯","nengo":"文安4","ambiguos":"文安丁卯四"},{"year":"1448","eto":"戊辰","nengo":"文安5","ambiguos":"文安戊辰五伍"},{"year":"1449","eto":"己巳","nengo":"文安6","ambiguos":"文安己巳六"},{"year":"1449","eto":"己巳","nengo":"宝徳1","ambiguos":"宝徳寶德己巳一壱壹元"},{"year":"1450","eto":"庚午","over_match":true,"nengo":"文安7","ambiguos":"文安庚午七"},{"year":"1450","eto":"庚午","nengo":"宝徳2","ambiguos":"宝徳寶德庚午二弐貳"},{"year":"1451","eto":"辛未","over_match":true,"nengo":"文安8","ambiguos":"文安辛未八"},{"year":"1451","eto":"辛未","nengo":"宝徳3","ambiguos":"宝徳寶德辛未三参參"},{"year":"1452","eto":"壬申","nengo":"宝徳4","ambiguos":"宝徳寶德壬申四"},{"year":"1452","eto":"壬申","nengo":"享徳1","ambiguos":"享徳德壬申一壱壹元"},{"year":"1453","eto":"癸酉","over_match":true,"nengo":"宝徳5","ambiguos":"宝徳寶德癸酉五伍"},{"year":"1453","eto":"癸酉","nengo":"享徳2","ambiguos":"享徳德癸酉二弐貳"},{"year":"1454","eto":"甲戌","over_match":true,"nengo":"宝徳6","ambiguos":"宝徳寶德甲戌六"},{"year":"1454","eto":"甲戌","nengo":"享徳3","ambiguos":"享徳德甲戌三参參"},{"year":"1455","eto":"乙亥","nengo":"享徳4","ambiguos":"享徳德乙亥四"},{"year":"1455","eto":"乙亥","nengo":"康正1","ambiguos":"康正乙亥一壱壹元"},{"year":"1456","eto":"丙子","condition":"古河府","nengo":"享徳5","ambiguos":"享徳德丙子五伍"},{"year":"1456","eto":"丙子","nengo":"康正2","ambiguos":"康正丙子二弐貳"},{"year":"1457","eto":"丁丑","condition":"古河府","nengo":"享徳6","ambiguos":"享徳德丁丑六"},{"year":"1457","eto":"丁丑","nengo":"康正3","ambiguos":"康正丁丑三参參"},{"year":"1457","eto":"丁丑","nengo":"長禄1","ambiguos":"長禄祿丁丑一壱壹元"},{"year":"1458","eto":"戊寅","condition":"古河府","nengo":"享徳7","ambiguos":"享徳德戊寅七"},{"year":"1458","eto":"戊寅","over_match":true,"nengo":"康正4","ambiguos":"康正戊寅四"},{"year":"1458","eto":"戊寅","nengo":"長禄2","ambiguos":"長禄祿戊寅二弐貳"},{"year":"1459","eto":"己卯","condition":"古河府","nengo":"享徳8","ambiguos":"享徳德己卯八"},{"year":"1459","eto":"己卯","over_match":true,"nengo":"康正5","ambiguos":"康正己卯五伍"},{"year":"1459","eto":"己卯","nengo":"長禄3","ambiguos":"長禄祿己卯三参參"},{"year":"1460","eto":"庚辰","condition":"古河府","nengo":"享徳9","ambiguos":"享徳德庚辰九"},{"year":"1460","eto":"庚辰","nengo":"長禄4","ambiguos":"長禄祿庚辰四"},{"year":"1460","eto":"庚辰","nengo":"寛正1","ambiguos":"寛正寬庚辰一壱壹元"},{"year":"1461","eto":"辛巳","condition":"古河府","nengo":"享徳10","ambiguos":"享徳德辛巳十拾"},{"year":"1461","eto":"辛巳","over_match":true,"nengo":"長禄5","ambiguos":"長禄祿辛巳五伍"},{"year":"1461","eto":"辛巳","nengo":"寛正2","ambiguos":"寛正寬辛巳二弐貳"},{"year":"1462","eto":"壬午","condition":"古河府","nengo":"享徳11","ambiguos":"享徳德壬午十拾一壱壹"},{"year":"1462","eto":"壬午","over_match":true,"nengo":"長禄6","ambiguos":"長禄祿壬午六"},{"year":"1462","eto":"壬午","nengo":"寛正3","ambiguos":"寛正寬壬午三参參"},{"year":"1463","eto":"癸未","condition":"古河府","nengo":"享徳12","ambiguos":"享徳德癸未十拾二弐貳"},{"year":"1463","eto":"癸未","nengo":"寛正4","ambiguos":"寛正寬癸未四"},{"year":"1464","eto":"甲申","condition":"古河府","nengo":"享徳13","ambiguos":"享徳德甲申十拾三参參"},{"year":"1464","eto":"甲申","nengo":"寛正5","ambiguos":"寛正寬甲申五伍"},{"year":"1465","eto":"乙酉","condition":"古河府","nengo":"享徳14","ambiguos":"享徳德乙酉十拾四"},{"year":"1465","eto":"乙酉","nengo":"寛正6","ambiguos":"寛正寬乙酉六"},{"year":"1466","eto":"丙戌","condition":"古河府","nengo":"享徳15","ambiguos":"享徳德丙戌十拾五伍"},{"year":"1466","eto":"丙戌","nengo":"寛正7","ambiguos":"寛正寬丙戌七"},{"year":"1466","eto":"丙戌","nengo":"文正1","ambiguos":"文正丙戌一壱壹元"},{"year":"1467","eto":"丁亥","condition":"古河府","nengo":"享徳16","ambiguos":"享徳德丁亥十拾六"},{"year":"1467","eto":"丁亥","over_match":true,"nengo":"寛正8","ambiguos":"寛正寬丁亥八"},{"year":"1467","eto":"丁亥","nengo":"文正2","ambiguos":"文正丁亥二弐貳"},{"year":"1467","eto":"丁亥","nengo":"応仁1","ambiguos":"応仁應丁亥一壱壹元"},{"year":"1468","eto":"戊子","condition":"古河府","nengo":"享徳17","ambiguos":"享徳德戊子十拾七"},{"year":"1468","eto":"戊子","over_match":true,"nengo":"寛正9","ambiguos":"寛正寬戊子九"},{"year":"1468","eto":"戊子","over_match":true,"nengo":"文正3","ambiguos":"文正戊子三参參"},{"year":"1468","eto":"戊子","nengo":"応仁2","ambiguos":"応仁應戊子二弐貳"},{"year":"1469","eto":"己丑","condition":"古河府","nengo":"享徳18","ambiguos":"享徳德己丑十拾八"},{"year":"1469","eto":"己丑","over_match":true,"nengo":"文正4","ambiguos":"文正己丑四"},{"year":"1469","eto":"己丑","nengo":"応仁3","ambiguos":"応仁應己丑三参參"},{"year":"1469","eto":"己丑","nengo":"文明1","ambiguos":"文明己丑一壱壹元"},{"year":"1470","eto":"庚寅","condition":"古河府","nengo":"享徳19","ambiguos":"享徳德庚寅十拾九"},{"year":"1470","eto":"庚寅","over_match":true,"nengo":"応仁4","ambiguos":"応仁應庚寅四"},{"year":"1470","eto":"庚寅","nengo":"文明2","ambiguos":"文明庚寅二弐貳"},{"year":"1471","eto":"辛卯","condition":"古河府","nengo":"享徳20","ambiguos":"享徳德辛卯十拾廿二弐貳"},{"year":"1471","eto":"辛卯","over_match":true,"nengo":"応仁5","ambiguos":"応仁應辛卯五伍"},{"year":"1471","eto":"辛卯","nengo":"文明3","ambiguos":"文明辛卯三参參"},{"year":"1472","eto":"壬辰","condition":"古河府","nengo":"享徳21","ambiguos":"享徳德壬辰十拾廿二弐貳一壱壹"},{"year":"1472","eto":"壬辰","nengo":"文明4","ambiguos":"文明壬辰四"},{"year":"1473","eto":"癸巳","condition":"古河府","nengo":"享徳22","ambiguos":"享徳德癸巳十拾廿二弐貳二弐貳"},{"year":"1473","eto":"癸巳","nengo":"文明5","ambiguos":"文明癸巳五伍"},{"year":"1474","eto":"甲午","condition":"古河府","nengo":"享徳23","ambiguos":"享徳德甲午十拾廿二弐貳三参參"},{"year":"1474","eto":"甲午","nengo":"文明6","ambiguos":"文明甲午六"},{"year":"1475","eto":"乙未","condition":"古河府","nengo":"享徳24","ambiguos":"享徳德乙未十拾廿二弐貳四"},{"year":"1475","eto":"乙未","nengo":"文明7","ambiguos":"文明乙未七"},{"year":"1476","eto":"丙申","condition":"古河府","nengo":"享徳25","ambiguos":"享徳德丙申十拾廿二弐貳五伍"},{"year":"1476","eto":"丙申","nengo":"文明8","ambiguos":"文明丙申八"},{"year":"1477","eto":"丁酉","condition":"古河府","nengo":"享徳26","ambiguos":"享徳德丁酉十拾廿二弐貳六"},{"year":"1477","eto":"丁酉","nengo":"文明9","ambiguos":"文明丁酉九"},{"year":"1478","eto":"戊戌","condition":"古河府","nengo":"享徳27","ambiguos":"享徳德戊戌十拾廿二弐貳七"},{"year":"1478","eto":"戊戌","nengo":"文明10","ambiguos":"文明戊戌十拾"},{"year":"1479","eto":"己亥","over_match":true,"nengo":"享徳28","ambiguos":"享徳德己亥十拾廿二弐貳八"},{"year":"1479","eto":"己亥","nengo":"文明11","ambiguos":"文明己亥十拾一壱壹"},{"year":"1480","eto":"庚子","over_match":true,"nengo":"享徳29","ambiguos":"享徳德庚子十拾廿二弐貳九"},{"year":"1480","eto":"庚子","nengo":"文明12","ambiguos":"文明庚子十拾二弐貳"},{"year":"1481","eto":"辛丑","nengo":"文明13","ambiguos":"文明辛丑十拾三参參"},{"year":"1482","eto":"壬寅","nengo":"文明14","ambiguos":"文明壬寅十拾四"},{"year":"1483","eto":"癸卯","nengo":"文明15","ambiguos":"文明癸卯十拾五伍"},{"year":"1484","eto":"甲辰","nengo":"文明16","ambiguos":"文明甲辰十拾六"},{"year":"1485","eto":"乙巳","nengo":"文明17","ambiguos":"文明乙巳十拾七"},{"year":"1486","eto":"丙午","nengo":"文明18","ambiguos":"文明丙午十拾八"},{"year":"1487","eto":"丁未","nengo":"文明19","ambiguos":"文明丁未十拾九"},{"year":"1487","eto":"丁未","nengo":"長享1","ambiguos":"長享丁未一壱壹元"},{"year":"1488","eto":"戊申","over_match":true,"nengo":"文明20","ambiguos":"文明戊申十拾廿二弐貳"},{"year":"1488","eto":"戊申","nengo":"長享2","ambiguos":"長享戊申二弐貳"},{"year":"1489","eto":"己酉","over_match":true,"nengo":"文明21","ambiguos":"文明己酉十拾廿二弐貳一壱壹"},{"year":"1489","eto":"己酉","nengo":"長享3","ambiguos":"長享己酉三参參"},{"year":"1489","eto":"己酉","nengo":"延徳1","ambiguos":"延徳德己酉一壱壹元"},{"year":"1490","eto":"庚戌","over_match":true,"nengo":"長享4","ambiguos":"長享庚戌四"},{"year":"1490","eto":"庚戌","nengo":"延徳2","ambiguos":"延徳德庚戌二弐貳"},{"year":"1491","eto":"辛亥","over_match":true,"nengo":"長享5","ambiguos":"長享辛亥五伍"},{"year":"1491","eto":"辛亥","nengo":"延徳3","ambiguos":"延徳德辛亥三参參"},{"year":"1492","eto":"壬子","nengo":"延徳4","ambiguos":"延徳德壬子四"},{"year":"1492","eto":"壬子","nengo":"明応1","ambiguos":"明応應壬子一壱壹元"},{"year":"1493","eto":"癸丑","over_match":true,"nengo":"延徳5","ambiguos":"延徳德癸丑五伍"},{"year":"1493","eto":"癸丑","nengo":"明応2","ambiguos":"明応應癸丑二弐貳"},{"year":"1494","eto":"甲寅","over_match":true,"nengo":"延徳6","ambiguos":"延徳德甲寅六"},{"year":"1494","eto":"甲寅","nengo":"明応3","ambiguos":"明応應甲寅三参參"},{"year":"1495","eto":"乙卯","nengo":"明応4","ambiguos":"明応應乙卯四"},{"year":"1496","eto":"丙辰","nengo":"明応5","ambiguos":"明応應丙辰五伍"},{"year":"1497","eto":"丁巳","nengo":"明応6","ambiguos":"明応應丁巳六"},{"year":"1498","eto":"戊午","nengo":"明応7","ambiguos":"明応應戊午七"},{"year":"1499","eto":"己未","nengo":"明応8","ambiguos":"明応應己未八"},{"year":"1500","eto":"庚申","nengo":"明応9","ambiguos":"明応應庚申九"},{"year":"1501","eto":"辛酉","nengo":"明応10","ambiguos":"明応應辛酉十拾"},{"year":"1501","eto":"辛酉","nengo":"文亀1","ambiguos":"文亀龜辛酉一壱壹元"},{"year":"1502","eto":"壬戌","over_match":true,"nengo":"明応11","ambiguos":"明応應壬戌十拾一壱壹"},{"year":"1502","eto":"壬戌","nengo":"文亀2","ambiguos":"文亀龜壬戌二弐貳"},{"year":"1503","eto":"癸亥","over_match":true,"nengo":"明応12","ambiguos":"明応應癸亥十拾二弐貳"},{"year":"1503","eto":"癸亥","nengo":"文亀3","ambiguos":"文亀龜癸亥三参參"},{"year":"1504","eto":"甲子","nengo":"文亀4","ambiguos":"文亀龜甲子四"},{"year":"1504","eto":"甲子","nengo":"永正1","ambiguos":"永正甲子一壱壹元"},{"year":"1505","eto":"乙丑","over_match":true,"nengo":"文亀5","ambiguos":"文亀龜乙丑五伍"},{"year":"1505","eto":"乙丑","nengo":"永正2","ambiguos":"永正乙丑二弐貳"},{"year":"1506","eto":"丙寅","over_match":true,"nengo":"文亀6","ambiguos":"文亀龜丙寅六"},{"year":"1506","eto":"丙寅","nengo":"永正3","ambiguos":"永正丙寅三参參"},{"year":"1507","eto":"丁卯","nengo":"永正4","ambiguos":"永正丁卯四"},{"year":"1508","eto":"戊辰","nengo":"永正5","ambiguos":"永正戊辰五伍"},{"year":"1509","eto":"己巳","nengo":"永正6","ambiguos":"永正己巳六"},{"year":"1510","eto":"庚午","nengo":"永正7","ambiguos":"永正庚午七"},{"year":"1511","eto":"辛未","nengo":"永正8","ambiguos":"永正辛未八"},{"year":"1512","eto":"壬申","nengo":"永正9","ambiguos":"永正壬申九"},{"year":"1513","eto":"癸酉","nengo":"永正10","ambiguos":"永正癸酉十拾"},{"year":"1514","eto":"甲戌","nengo":"永正11","ambiguos":"永正甲戌十拾一壱壹"},{"year":"1515","eto":"乙亥","nengo":"永正12","ambiguos":"永正乙亥十拾二弐貳"},{"year":"1516","eto":"丙子","nengo":"永正13","ambiguos":"永正丙子十拾三参參"},{"year":"1517","eto":"丁丑","nengo":"永正14","ambiguos":"永正丁丑十拾四"},{"year":"1518","eto":"戊寅","nengo":"永正15","ambiguos":"永正戊寅十拾五伍"},{"year":"1519","eto":"己卯","nengo":"永正16","ambiguos":"永正己卯十拾六"},{"year":"1520","eto":"庚辰","nengo":"永正17","ambiguos":"永正庚辰十拾七"},{"year":"1521","eto":"辛巳","nengo":"永正18","ambiguos":"永正辛巳十拾八"},{"year":"1521","eto":"辛巳","nengo":"大永1","ambiguos":"大永辛巳一壱壹元"},{"year":"1522","eto":"壬午","over_match":true,"nengo":"永正19","ambiguos":"永正壬午十拾九"},{"year":"1522","eto":"壬午","nengo":"大永2","ambiguos":"大永壬午二弐貳"},{"year":"1523","eto":"癸未","over_match":true,"nengo":"永正20","ambiguos":"永正癸未十拾廿二弐貳"},{"year":"1523","eto":"癸未","nengo":"大永3","ambiguos":"大永癸未三参參"},{"year":"1524","eto":"甲申","nengo":"大永4","ambiguos":"大永甲申四"},{"year":"1525","eto":"乙酉","nengo":"大永5","ambiguos":"大永乙酉五伍"},{"year":"1526","eto":"丙戌","nengo":"大永6","ambiguos":"大永丙戌六"},{"year":"1527","eto":"丁亥","nengo":"大永7","ambiguos":"大永丁亥七"},{"year":"1528","eto":"戊子","nengo":"大永8","ambiguos":"大永戊子八"},{"year":"1528","eto":"戊子","nengo":"享禄1","ambiguos":"享禄祿戊子一壱壹元"},{"year":"1529","eto":"己丑","over_match":true,"nengo":"大永9","ambiguos":"大永己丑九"},{"year":"1529","eto":"己丑","nengo":"享禄2","ambiguos":"享禄祿己丑二弐貳"},{"year":"1530","eto":"庚寅","over_match":true,"nengo":"大永10","ambiguos":"大永庚寅十拾"},{"year":"1530","eto":"庚寅","nengo":"享禄3","ambiguos":"享禄祿庚寅三参參"},{"year":"1531","eto":"辛卯","nengo":"享禄4","ambiguos":"享禄祿辛卯四"},{"year":"1532","eto":"壬辰","nengo":"享禄5","ambiguos":"享禄祿壬辰五伍"},{"year":"1532","eto":"壬辰","nengo":"天文1","ambiguos":"天文壬辰一壱壹元"},{"year":"1533","eto":"癸巳","over_match":true,"nengo":"享禄6","ambiguos":"享禄祿癸巳六"},{"year":"1533","eto":"癸巳","nengo":"天文2","ambiguos":"天文癸巳二弐貳"},{"year":"1534","eto":"甲午","over_match":true,"nengo":"享禄7","ambiguos":"享禄祿甲午七"},{"year":"1534","eto":"甲午","nengo":"天文3","ambiguos":"天文甲午三参參"},{"year":"1535","eto":"乙未","nengo":"天文4","ambiguos":"天文乙未四"},{"year":"1536","eto":"丙申","nengo":"天文5","ambiguos":"天文丙申五伍"},{"year":"1537","eto":"丁酉","nengo":"天文6","ambiguos":"天文丁酉六"},{"year":"1538","eto":"戊戌","nengo":"天文7","ambiguos":"天文戊戌七"},{"year":"1539","eto":"己亥","nengo":"天文8","ambiguos":"天文己亥八"},{"year":"1540","eto":"庚子","nengo":"天文9","ambiguos":"天文庚子九"},{"year":"1541","eto":"辛丑","nengo":"天文10","ambiguos":"天文辛丑十拾"},{"year":"1542","eto":"壬寅","nengo":"天文11","ambiguos":"天文壬寅十拾一壱壹"},{"year":"1543","eto":"癸卯","nengo":"天文12","ambiguos":"天文癸卯十拾二弐貳"},{"year":"1544","eto":"甲辰","nengo":"天文13","ambiguos":"天文甲辰十拾三参參"},{"year":"1545","eto":"乙巳","nengo":"天文14","ambiguos":"天文乙巳十拾四"},{"year":"1546","eto":"丙午","nengo":"天文15","ambiguos":"天文丙午十拾五伍"},{"year":"1547","eto":"丁未","nengo":"天文16","ambiguos":"天文丁未十拾六"},{"year":"1548","eto":"戊申","nengo":"天文17","ambiguos":"天文戊申十拾七"},{"year":"1549","eto":"己酉","nengo":"天文18","ambiguos":"天文己酉十拾八"},{"year":"1550","eto":"庚戌","nengo":"天文19","ambiguos":"天文庚戌十拾九"},{"year":"1551","eto":"辛亥","nengo":"天文20","ambiguos":"天文辛亥十拾廿二弐貳"},{"year":"1552","eto":"壬子","nengo":"天文21","ambiguos":"天文壬子十拾廿二弐貳一壱壹"},{"year":"1553","eto":"癸丑","nengo":"天文22","ambiguos":"天文癸丑十拾廿二弐貳二弐貳"},{"year":"1554","eto":"甲寅","nengo":"天文23","ambiguos":"天文甲寅十拾廿二弐貳三参參"},{"year":"1555","eto":"乙卯","nengo":"天文24","ambiguos":"天文乙卯十拾廿二弐貳四"},{"year":"1555","eto":"乙卯","nengo":"弘治1","ambiguos":"弘治乙卯一壱壹元"},{"year":"1556","eto":"丙辰","over_match":true,"nengo":"天文25","ambiguos":"天文丙辰十拾廿二弐貳五伍"},{"year":"1556","eto":"丙辰","nengo":"弘治2","ambiguos":"弘治丙辰二弐貳"},{"year":"1557","eto":"丁巳","over_match":true,"nengo":"天文26","ambiguos":"天文丁巳十拾廿二弐貳六"},{"year":"1557","eto":"丁巳","nengo":"弘治3","ambiguos":"弘治丁巳三参參"},{"year":"1558","eto":"戊午","nengo":"弘治4","ambiguos":"弘治戊午四"},{"year":"1558","eto":"戊午","nengo":"永禄1","ambiguos":"永禄祿戊午一壱壹元"},{"year":"1559","eto":"己未","over_match":true,"nengo":"弘治5","ambiguos":"弘治己未五伍"},{"year":"1559","eto":"己未","nengo":"永禄2","ambiguos":"永禄祿己未二弐貳"},{"year":"1560","eto":"庚申","over_match":true,"nengo":"弘治6","ambiguos":"弘治庚申六"},{"year":"1560","eto":"庚申","nengo":"永禄3","ambiguos":"永禄祿庚申三参參"},{"year":"1561","eto":"辛酉","nengo":"永禄4","ambiguos":"永禄祿辛酉四"},{"year":"1562","eto":"壬戌","nengo":"永禄5","ambiguos":"永禄祿壬戌五伍"},{"year":"1563","eto":"癸亥","nengo":"永禄6","ambiguos":"永禄祿癸亥六"},{"year":"1564","eto":"甲子","nengo":"永禄7","ambiguos":"永禄祿甲子七"},{"year":"1565","eto":"乙丑","nengo":"永禄8","ambiguos":"永禄祿乙丑八"},{"year":"1566","eto":"丙寅","nengo":"永禄9","ambiguos":"永禄祿丙寅九"},{"year":"1567","eto":"丁卯","nengo":"永禄10","ambiguos":"永禄祿丁卯十拾"},{"year":"1568","eto":"戊辰","nengo":"永禄11","ambiguos":"永禄祿戊辰十拾一壱壹"},{"year":"1569","eto":"己巳","nengo":"永禄12","ambiguos":"永禄祿己巳十拾二弐貳"},{"year":"1570","eto":"庚午","nengo":"永禄13","ambiguos":"永禄祿庚午十拾三参參"},{"year":"1570","eto":"庚午","nengo":"元亀1","ambiguos":"元亀龜庚午一壱壹元"},{"year":"1571","eto":"辛未","over_match":true,"nengo":"永禄14","ambiguos":"永禄祿辛未十拾四"},{"year":"1571","eto":"辛未","nengo":"元亀2","ambiguos":"元亀龜辛未二弐貳"},{"year":"1572","eto":"壬申","over_match":true,"nengo":"永禄15","ambiguos":"永禄祿壬申十拾五伍"},{"year":"1572","eto":"壬申","nengo":"元亀3","ambiguos":"元亀龜壬申三参參"},{"year":"1573","eto":"癸酉","nengo":"元亀4","ambiguos":"元亀龜癸酉四"},{"year":"1573","eto":"癸酉","nengo":"天正1","ambiguos":"天正癸酉一壱壹元"},{"year":"1574","eto":"甲戌","over_match":true,"nengo":"元亀5","ambiguos":"元亀龜甲戌五伍"},{"year":"1574","eto":"甲戌","nengo":"天正2","ambiguos":"天正甲戌二弐貳"},{"year":"1575","eto":"乙亥","over_match":true,"nengo":"元亀6","ambiguos":"元亀龜乙亥六"},{"year":"1575","eto":"乙亥","nengo":"天正3","ambiguos":"天正乙亥三参參"},{"year":"1576","eto":"丙子","nengo":"天正4","ambiguos":"天正丙子四"},{"year":"1577","eto":"丁丑","nengo":"天正5","ambiguos":"天正丁丑五伍"},{"year":"1578","eto":"戊寅","nengo":"天正6","ambiguos":"天正戊寅六"},{"year":"1579","eto":"己卯","nengo":"天正7","ambiguos":"天正己卯七"},{"year":"1580","eto":"庚辰","nengo":"天正8","ambiguos":"天正庚辰八"},{"year":"1581","eto":"辛巳","nengo":"天正9","ambiguos":"天正辛巳九"},{"year":"1582","eto":"壬午","nengo":"天正10","ambiguos":"天正壬午十拾"},{"year":"1583","eto":"癸未","nengo":"天正11","ambiguos":"天正癸未十拾一壱壹"},{"year":"1584","eto":"甲申","nengo":"天正12","ambiguos":"天正甲申十拾二弐貳"},{"year":"1585","eto":"乙酉","nengo":"天正13","ambiguos":"天正乙酉十拾三参參"},{"year":"1586","eto":"丙戌","nengo":"天正14","ambiguos":"天正丙戌十拾四"},{"year":"1587","eto":"丁亥","nengo":"天正15","ambiguos":"天正丁亥十拾五伍"},{"year":"1588","eto":"戊子","nengo":"天正16","ambiguos":"天正戊子十拾六"},{"year":"1589","eto":"己丑","nengo":"天正17","ambiguos":"天正己丑十拾七"},{"year":"1590","eto":"庚寅","nengo":"天正18","ambiguos":"天正庚寅十拾八"},{"year":"1591","eto":"辛卯","nengo":"天正19","ambiguos":"天正辛卯十拾九"},{"year":"1592","eto":"壬辰","nengo":"天正20","ambiguos":"天正壬辰十拾廿二弐貳"},{"year":"1592","eto":"壬辰","nengo":"文禄1","ambiguos":"文禄祿壬辰一壱壹元"},{"year":"1593","eto":"癸巳","over_match":true,"nengo":"天正21","ambiguos":"天正癸巳十拾廿二弐貳一壱壹"},{"year":"1593","eto":"癸巳","nengo":"文禄2","ambiguos":"文禄祿癸巳二弐貳"},{"year":"1594","eto":"甲午","over_match":true,"nengo":"天正22","ambiguos":"天正甲午十拾廿二弐貳二弐貳"},{"year":"1594","eto":"甲午","nengo":"文禄3","ambiguos":"文禄祿甲午三参參"},{"year":"1595","eto":"乙未","nengo":"文禄4","ambiguos":"文禄祿乙未四"},{"year":"1596","eto":"丙申","nengo":"文禄5","ambiguos":"文禄祿丙申五伍"},{"year":"1596","eto":"丙申","nengo":"慶長1","ambiguos":"慶長丙申一壱壹元"},{"year":"1597","eto":"丁酉","over_match":true,"nengo":"文禄6","ambiguos":"文禄祿丁酉六"},{"year":"1597","eto":"丁酉","nengo":"慶長2","ambiguos":"慶長丁酉二弐貳"},{"year":"1598","eto":"戊戌","over_match":true,"nengo":"文禄7","ambiguos":"文禄祿戊戌七"},{"year":"1598","eto":"戊戌","nengo":"慶長3","ambiguos":"慶長戊戌三参參"},{"year":"1599","eto":"己亥","nengo":"慶長4","ambiguos":"慶長己亥四"},{"year":"1600","eto":"庚子","nengo":"慶長5","ambiguos":"慶長庚子五伍"},{"year":"1601","eto":"辛丑","nengo":"慶長6","ambiguos":"慶長辛丑六"},{"year":"1602","eto":"壬寅","nengo":"慶長7","ambiguos":"慶長壬寅七"},{"year":"1603","eto":"癸卯","nengo":"慶長8","ambiguos":"慶長癸卯八"},{"year":"1604","eto":"甲辰","nengo":"慶長9","ambiguos":"慶長甲辰九"},{"year":"1605","eto":"乙巳","nengo":"慶長10","ambiguos":"慶長乙巳十拾"},{"year":"1606","eto":"丙午","nengo":"慶長11","ambiguos":"慶長丙午十拾一壱壹"},{"year":"1607","eto":"丁未","nengo":"慶長12","ambiguos":"慶長丁未十拾二弐貳"},{"year":"1608","eto":"戊申","nengo":"慶長13","ambiguos":"慶長戊申十拾三参參"},{"year":"1609","eto":"己酉","nengo":"慶長14","ambiguos":"慶長己酉十拾四"},{"year":"1610","eto":"庚戌","nengo":"慶長15","ambiguos":"慶長庚戌十拾五伍"},{"year":"1611","eto":"辛亥","nengo":"慶長16","ambiguos":"慶長辛亥十拾六"},{"year":"1612","eto":"壬子","nengo":"慶長17","ambiguos":"慶長壬子十拾七"},{"year":"1613","eto":"癸丑","nengo":"慶長18","ambiguos":"慶長癸丑十拾八"},{"year":"1614","eto":"甲寅","nengo":"慶長19","ambiguos":"慶長甲寅十拾九"},{"year":"1615","eto":"乙卯","nengo":"慶長20","ambiguos":"慶長乙卯十拾廿二弐貳"},{"year":"1615","eto":"乙卯","nengo":"元和1","ambiguos":"元和乙卯一壱壹元"},{"year":"1616","eto":"丙辰","over_match":true,"nengo":"慶長21","ambiguos":"慶長丙辰十拾廿二弐貳一壱壹"},{"year":"1616","eto":"丙辰","nengo":"元和2","ambiguos":"元和丙辰二弐貳"},{"year":"1617","eto":"丁巳","over_match":true,"nengo":"慶長22","ambiguos":"慶長丁巳十拾廿二弐貳二弐貳"},{"year":"1617","eto":"丁巳","nengo":"元和3","ambiguos":"元和丁巳三参參"},{"year":"1618","eto":"戊午","nengo":"元和4","ambiguos":"元和戊午四"},{"year":"1619","eto":"己未","nengo":"元和5","ambiguos":"元和己未五伍"},{"year":"1620","eto":"庚申","nengo":"元和6","ambiguos":"元和庚申六"},{"year":"1621","eto":"辛酉","nengo":"元和7","ambiguos":"元和辛酉七"},{"year":"1622","eto":"壬戌","nengo":"元和8","ambiguos":"元和壬戌八"},{"year":"1623","eto":"癸亥","nengo":"元和9","ambiguos":"元和癸亥九"},{"year":"1624","eto":"甲子","nengo":"元和10","ambiguos":"元和甲子十拾"},{"year":"1624","eto":"甲子","nengo":"寛永1","ambiguos":"寛永寬甲子一壱壹元"},{"year":"1625","eto":"乙丑","over_match":true,"nengo":"元和11","ambiguos":"元和乙丑十拾一壱壹"},{"year":"1625","eto":"乙丑","nengo":"寛永2","ambiguos":"寛永寬乙丑二弐貳"},{"year":"1626","eto":"丙寅","over_match":true,"nengo":"元和12","ambiguos":"元和丙寅十拾二弐貳"},{"year":"1626","eto":"丙寅","nengo":"寛永3","ambiguos":"寛永寬丙寅三参參"},{"year":"1627","eto":"丁卯","nengo":"寛永4","ambiguos":"寛永寬丁卯四"},{"year":"1628","eto":"戊辰","nengo":"寛永5","ambiguos":"寛永寬戊辰五伍"},{"year":"1629","eto":"己巳","nengo":"寛永6","ambiguos":"寛永寬己巳六"},{"year":"1630","eto":"庚午","nengo":"寛永7","ambiguos":"寛永寬庚午七"},{"year":"1631","eto":"辛未","nengo":"寛永8","ambiguos":"寛永寬辛未八"},{"year":"1632","eto":"壬申","nengo":"寛永9","ambiguos":"寛永寬壬申九"},{"year":"1633","eto":"癸酉","nengo":"寛永10","ambiguos":"寛永寬癸酉十拾"},{"year":"1634","eto":"甲戌","nengo":"寛永11","ambiguos":"寛永寬甲戌十拾一壱壹"},{"year":"1635","eto":"乙亥","nengo":"寛永12","ambiguos":"寛永寬乙亥十拾二弐貳"},{"year":"1636","eto":"丙子","nengo":"寛永13","ambiguos":"寛永寬丙子十拾三参參"},{"year":"1637","eto":"丁丑","nengo":"寛永14","ambiguos":"寛永寬丁丑十拾四"},{"year":"1638","eto":"戊寅","nengo":"寛永15","ambiguos":"寛永寬戊寅十拾五伍"},{"year":"1639","eto":"己卯","nengo":"寛永16","ambiguos":"寛永寬己卯十拾六"},{"year":"1640","eto":"庚辰","nengo":"寛永17","ambiguos":"寛永寬庚辰十拾七"},{"year":"1641","eto":"辛巳","nengo":"寛永18","ambiguos":"寛永寬辛巳十拾八"},{"year":"1642","eto":"壬午","nengo":"寛永19","ambiguos":"寛永寬壬午十拾九"},{"year":"1643","eto":"癸未","nengo":"寛永20","ambiguos":"寛永寬癸未十拾廿二弐貳"},{"year":"1644","eto":"甲申","nengo":"寛永21","ambiguos":"寛永寬甲申十拾廿二弐貳一壱壹"},{"year":"1644","eto":"甲申","nengo":"正保1","ambiguos":"正保甲申一壱壹元"},{"year":"1645","eto":"乙酉","over_match":true,"nengo":"寛永22","ambiguos":"寛永寬乙酉十拾廿二弐貳二弐貳"},{"year":"1645","eto":"乙酉","nengo":"正保2","ambiguos":"正保乙酉二弐貳"},{"year":"1646","eto":"丙戌","over_match":true,"nengo":"寛永23","ambiguos":"寛永寬丙戌十拾廿二弐貳三参參"},{"year":"1646","eto":"丙戌","nengo":"正保3","ambiguos":"正保丙戌三参參"},{"year":"1647","eto":"丁亥","nengo":"正保4","ambiguos":"正保丁亥四"},{"year":"1648","eto":"戊子","nengo":"正保5","ambiguos":"正保戊子五伍"},{"year":"1648","eto":"戊子","nengo":"慶安1","ambiguos":"慶安戊子一壱壹元"},{"year":"1649","eto":"己丑","over_match":true,"nengo":"正保6","ambiguos":"正保己丑六"},{"year":"1649","eto":"己丑","nengo":"慶安2","ambiguos":"慶安己丑二弐貳"},{"year":"1650","eto":"庚寅","over_match":true,"nengo":"正保7","ambiguos":"正保庚寅七"},{"year":"1650","eto":"庚寅","nengo":"慶安3","ambiguos":"慶安庚寅三参參"},{"year":"1651","eto":"辛卯","nengo":"慶安4","ambiguos":"慶安辛卯四"},{"year":"1652","eto":"壬辰","nengo":"慶安5","ambiguos":"慶安壬辰五伍"},{"year":"1652","eto":"壬辰","nengo":"承応1","ambiguos":"承応應壬辰一壱壹元"},{"year":"1653","eto":"癸巳","over_match":true,"nengo":"慶安6","ambiguos":"慶安癸巳六"},{"year":"1653","eto":"癸巳","nengo":"承応2","ambiguos":"承応應癸巳二弐貳"},{"year":"1654","eto":"甲午","over_match":true,"nengo":"慶安7","ambiguos":"慶安甲午七"},{"year":"1654","eto":"甲午","nengo":"承応3","ambiguos":"承応應甲午三参參"},{"year":"1655","eto":"乙未","nengo":"承応4","ambiguos":"承応應乙未四"},{"year":"1655","eto":"乙未","nengo":"明暦1","ambiguos":"明暦曆乙未一壱壹元"},{"year":"1656","eto":"丙申","over_match":true,"nengo":"承応5","ambiguos":"承応應丙申五伍"},{"year":"1656","eto":"丙申","nengo":"明暦2","ambiguos":"明暦曆丙申二弐貳"},{"year":"1657","eto":"丁酉","over_match":true,"nengo":"承応6","ambiguos":"承応應丁酉六"},{"year":"1657","eto":"丁酉","nengo":"明暦3","ambiguos":"明暦曆丁酉三参參"},{"year":"1658","eto":"戊戌","nengo":"明暦4","ambiguos":"明暦曆戊戌四"},{"year":"1658","eto":"戊戌","nengo":"万治1","ambiguos":"万治萬戊戌一壱壹元"},{"year":"1659","eto":"己亥","over_match":true,"nengo":"明暦5","ambiguos":"明暦曆己亥五伍"},{"year":"1659","eto":"己亥","nengo":"万治2","ambiguos":"万治萬己亥二弐貳"},{"year":"1660","eto":"庚子","over_match":true,"nengo":"明暦6","ambiguos":"明暦曆庚子六"},{"year":"1660","eto":"庚子","nengo":"万治3","ambiguos":"万治萬庚子三参參"},{"year":"1661","eto":"辛丑","nengo":"万治4","ambiguos":"万治萬辛丑四"},{"year":"1661","eto":"辛丑","nengo":"寛文1","ambiguos":"寛文寬辛丑一壱壹元"},{"year":"1662","eto":"壬寅","over_match":true,"nengo":"万治5","ambiguos":"万治萬壬寅五伍"},{"year":"1662","eto":"壬寅","nengo":"寛文2","ambiguos":"寛文寬壬寅二弐貳"},{"year":"1663","eto":"癸卯","over_match":true,"nengo":"万治6","ambiguos":"万治萬癸卯六"},{"year":"1663","eto":"癸卯","nengo":"寛文3","ambiguos":"寛文寬癸卯三参參"},{"year":"1664","eto":"甲辰","nengo":"寛文4","ambiguos":"寛文寬甲辰四"},{"year":"1665","eto":"乙巳","nengo":"寛文5","ambiguos":"寛文寬乙巳五伍"},{"year":"1666","eto":"丙午","nengo":"寛文6","ambiguos":"寛文寬丙午六"},{"year":"1667","eto":"丁未","nengo":"寛文7","ambiguos":"寛文寬丁未七"},{"year":"1668","eto":"戊申","nengo":"寛文8","ambiguos":"寛文寬戊申八"},{"year":"1669","eto":"己酉","nengo":"寛文9","ambiguos":"寛文寬己酉九"},{"year":"1670","eto":"庚戌","nengo":"寛文10","ambiguos":"寛文寬庚戌十拾"},{"year":"1671","eto":"辛亥","nengo":"寛文11","ambiguos":"寛文寬辛亥十拾一壱壹"},{"year":"1672","eto":"壬子","nengo":"寛文12","ambiguos":"寛文寬壬子十拾二弐貳"},{"year":"1673","eto":"癸丑","nengo":"寛文13","ambiguos":"寛文寬癸丑十拾三参參"},{"year":"1673","eto":"癸丑","nengo":"延宝1","ambiguos":"延宝寶癸丑一壱壹元"},{"year":"1674","eto":"甲寅","over_match":true,"nengo":"寛文14","ambiguos":"寛文寬甲寅十拾四"},{"year":"1674","eto":"甲寅","nengo":"延宝2","ambiguos":"延宝寶甲寅二弐貳"},{"year":"1675","eto":"乙卯","over_match":true,"nengo":"寛文15","ambiguos":"寛文寬乙卯十拾五伍"},{"year":"1675","eto":"乙卯","nengo":"延宝3","ambiguos":"延宝寶乙卯三参參"},{"year":"1676","eto":"丙辰","nengo":"延宝4","ambiguos":"延宝寶丙辰四"},{"year":"1677","eto":"丁巳","nengo":"延宝5","ambiguos":"延宝寶丁巳五伍"},{"year":"1678","eto":"戊午","nengo":"延宝6","ambiguos":"延宝寶戊午六"},{"year":"1679","eto":"己未","nengo":"延宝7","ambiguos":"延宝寶己未七"},{"year":"1680","eto":"庚申","nengo":"延宝8","ambiguos":"延宝寶庚申八"},{"year":"1681","eto":"辛酉","nengo":"延宝9","ambiguos":"延宝寶辛酉九"},{"year":"1681","eto":"辛酉","nengo":"天和1","ambiguos":"天和辛酉一壱壹元"},{"year":"1682","eto":"壬戌","over_match":true,"nengo":"延宝10","ambiguos":"延宝寶壬戌十拾"},{"year":"1682","eto":"壬戌","nengo":"天和2","ambiguos":"天和壬戌二弐貳"},{"year":"1683","eto":"癸亥","over_match":true,"nengo":"延宝11","ambiguos":"延宝寶癸亥十拾一壱壹"},{"year":"1683","eto":"癸亥","nengo":"天和3","ambiguos":"天和癸亥三参參"},{"year":"1684","eto":"甲子","nengo":"天和4","ambiguos":"天和甲子四"},{"year":"1684","eto":"甲子","nengo":"貞享1","ambiguos":"貞享甲子一壱壹元"},{"year":"1685","eto":"乙丑","over_match":true,"nengo":"天和5","ambiguos":"天和乙丑五伍"},{"year":"1685","eto":"乙丑","nengo":"貞享2","ambiguos":"貞享乙丑二弐貳"},{"year":"1686","eto":"丙寅","over_match":true,"nengo":"天和6","ambiguos":"天和丙寅六"},{"year":"1686","eto":"丙寅","nengo":"貞享3","ambiguos":"貞享丙寅三参參"},{"year":"1687","eto":"丁卯","nengo":"貞享4","ambiguos":"貞享丁卯四"},{"year":"1688","eto":"戊辰","nengo":"貞享5","ambiguos":"貞享戊辰五伍"},{"year":"1688","eto":"戊辰","nengo":"元禄1","ambiguos":"元禄祿戊辰一壱壹元"},{"year":"1689","eto":"己巳","over_match":true,"nengo":"貞享6","ambiguos":"貞享己巳六"},{"year":"1689","eto":"己巳","nengo":"元禄2","ambiguos":"元禄祿己巳二弐貳"},{"year":"1690","eto":"庚午","over_match":true,"nengo":"貞享7","ambiguos":"貞享庚午七"},{"year":"1690","eto":"庚午","nengo":"元禄3","ambiguos":"元禄祿庚午三参參"},{"year":"1691","eto":"辛未","nengo":"元禄4","ambiguos":"元禄祿辛未四"},{"year":"1692","eto":"壬申","nengo":"元禄5","ambiguos":"元禄祿壬申五伍"},{"year":"1693","eto":"癸酉","nengo":"元禄6","ambiguos":"元禄祿癸酉六"},{"year":"1694","eto":"甲戌","nengo":"元禄7","ambiguos":"元禄祿甲戌七"},{"year":"1695","eto":"乙亥","nengo":"元禄8","ambiguos":"元禄祿乙亥八"},{"year":"1696","eto":"丙子","nengo":"元禄9","ambiguos":"元禄祿丙子九"},{"year":"1697","eto":"丁丑","nengo":"元禄10","ambiguos":"元禄祿丁丑十拾"},{"year":"1698","eto":"戊寅","nengo":"元禄11","ambiguos":"元禄祿戊寅十拾一壱壹"},{"year":"1699","eto":"己卯","nengo":"元禄12","ambiguos":"元禄祿己卯十拾二弐貳"},{"year":"1700","eto":"庚辰","nengo":"元禄13","ambiguos":"元禄祿庚辰十拾三参參"},{"year":"1701","eto":"辛巳","nengo":"元禄14","ambiguos":"元禄祿辛巳十拾四"},{"year":"1702","eto":"壬午","nengo":"元禄15","ambiguos":"元禄祿壬午十拾五伍"},{"year":"1703","eto":"癸未","nengo":"元禄16","ambiguos":"元禄祿癸未十拾六"},{"year":"1704","eto":"甲申","nengo":"元禄17","ambiguos":"元禄祿甲申十拾七"},{"year":"1704","eto":"甲申","nengo":"宝永1","ambiguos":"宝永寶甲申一壱壹元"},{"year":"1705","eto":"乙酉","over_match":true,"nengo":"元禄18","ambiguos":"元禄祿乙酉十拾八"},{"year":"1705","eto":"乙酉","nengo":"宝永2","ambiguos":"宝永寶乙酉二弐貳"},{"year":"1706","eto":"丙戌","over_match":true,"nengo":"元禄19","ambiguos":"元禄祿丙戌十拾九"},{"year":"1706","eto":"丙戌","nengo":"宝永3","ambiguos":"宝永寶丙戌三参參"},{"year":"1707","eto":"丁亥","nengo":"宝永4","ambiguos":"宝永寶丁亥四"},{"year":"1708","eto":"戊子","nengo":"宝永5","ambiguos":"宝永寶戊子五伍"},{"year":"1709","eto":"己丑","nengo":"宝永6","ambiguos":"宝永寶己丑六"},{"year":"1710","eto":"庚寅","nengo":"宝永7","ambiguos":"宝永寶庚寅七"},{"year":"1711","eto":"辛卯","nengo":"宝永8","ambiguos":"宝永寶辛卯八"},{"year":"1711","eto":"辛卯","nengo":"正徳1","ambiguos":"正徳德辛卯一壱壹元"},{"year":"1712","eto":"壬辰","over_match":true,"nengo":"宝永9","ambiguos":"宝永寶壬辰九"},{"year":"1712","eto":"壬辰","nengo":"正徳2","ambiguos":"正徳德壬辰二弐貳"},{"year":"1713","eto":"癸巳","over_match":true,"nengo":"宝永10","ambiguos":"宝永寶癸巳十拾"},{"year":"1713","eto":"癸巳","nengo":"正徳3","ambiguos":"正徳德癸巳三参參"},{"year":"1714","eto":"甲午","nengo":"正徳4","ambiguos":"正徳德甲午四"},{"year":"1715","eto":"乙未","nengo":"正徳5","ambiguos":"正徳德乙未五伍"},{"year":"1716","eto":"丙申","nengo":"正徳6","ambiguos":"正徳德丙申六"},{"year":"1716","eto":"丙申","nengo":"享保1","ambiguos":"享保丙申一壱壹元"},{"year":"1717","eto":"丁酉","over_match":true,"nengo":"正徳7","ambiguos":"正徳德丁酉七"},{"year":"1717","eto":"丁酉","nengo":"享保2","ambiguos":"享保丁酉二弐貳"},{"year":"1718","eto":"戊戌","over_match":true,"nengo":"正徳8","ambiguos":"正徳德戊戌八"},{"year":"1718","eto":"戊戌","nengo":"享保3","ambiguos":"享保戊戌三参參"},{"year":"1719","eto":"己亥","nengo":"享保4","ambiguos":"享保己亥四"},{"year":"1720","eto":"庚子","nengo":"享保5","ambiguos":"享保庚子五伍"},{"year":"1721","eto":"辛丑","nengo":"享保6","ambiguos":"享保辛丑六"},{"year":"1722","eto":"壬寅","nengo":"享保7","ambiguos":"享保壬寅七"},{"year":"1723","eto":"癸卯","nengo":"享保8","ambiguos":"享保癸卯八"},{"year":"1724","eto":"甲辰","nengo":"享保9","ambiguos":"享保甲辰九"},{"year":"1725","eto":"乙巳","nengo":"享保10","ambiguos":"享保乙巳十拾"},{"year":"1726","eto":"丙午","nengo":"享保11","ambiguos":"享保丙午十拾一壱壹"},{"year":"1727","eto":"丁未","nengo":"享保12","ambiguos":"享保丁未十拾二弐貳"},{"year":"1728","eto":"戊申","nengo":"享保13","ambiguos":"享保戊申十拾三参參"},{"year":"1729","eto":"己酉","nengo":"享保14","ambiguos":"享保己酉十拾四"},{"year":"1730","eto":"庚戌","nengo":"享保15","ambiguos":"享保庚戌十拾五伍"},{"year":"1731","eto":"辛亥","nengo":"享保16","ambiguos":"享保辛亥十拾六"},{"year":"1732","eto":"壬子","nengo":"享保17","ambiguos":"享保壬子十拾七"},{"year":"1733","eto":"癸丑","nengo":"享保18","ambiguos":"享保癸丑十拾八"},{"year":"1734","eto":"甲寅","nengo":"享保19","ambiguos":"享保甲寅十拾九"},{"year":"1735","eto":"乙卯","nengo":"享保20","ambiguos":"享保乙卯十拾廿二弐貳"},{"year":"1736","eto":"丙辰","nengo":"享保21","ambiguos":"享保丙辰十拾廿二弐貳一壱壹"},{"year":"1736","eto":"丙辰","nengo":"元文1","ambiguos":"元文丙辰一壱壹元"},{"year":"1737","eto":"丁巳","over_match":true,"nengo":"享保22","ambiguos":"享保丁巳十拾廿二弐貳二弐貳"},{"year":"1737","eto":"丁巳","nengo":"元文2","ambiguos":"元文丁巳二弐貳"},{"year":"1738","eto":"戊午","over_match":true,"nengo":"享保23","ambiguos":"享保戊午十拾廿二弐貳三参參"},{"year":"1738","eto":"戊午","nengo":"元文3","ambiguos":"元文戊午三参參"},{"year":"1739","eto":"己未","nengo":"元文4","ambiguos":"元文己未四"},{"year":"1740","eto":"庚申","nengo":"元文5","ambiguos":"元文庚申五伍"},{"year":"1741","eto":"辛酉","nengo":"元文6","ambiguos":"元文辛酉六"},{"year":"1741","eto":"辛酉","nengo":"寛保1","ambiguos":"寛保寬辛酉一壱壹元"},{"year":"1742","eto":"壬戌","over_match":true,"nengo":"元文7","ambiguos":"元文壬戌七"},{"year":"1742","eto":"壬戌","nengo":"寛保2","ambiguos":"寛保寬壬戌二弐貳"},{"year":"1743","eto":"癸亥","over_match":true,"nengo":"元文8","ambiguos":"元文癸亥八"},{"year":"1743","eto":"癸亥","nengo":"寛保3","ambiguos":"寛保寬癸亥三参參"},{"year":"1744","eto":"甲子","nengo":"寛保4","ambiguos":"寛保寬甲子四"},{"year":"1744","eto":"甲子","nengo":"延享1","ambiguos":"延享甲子一壱壹元"},{"year":"1745","eto":"乙丑","over_match":true,"nengo":"寛保5","ambiguos":"寛保寬乙丑五伍"},{"year":"1745","eto":"乙丑","nengo":"延享2","ambiguos":"延享乙丑二弐貳"},{"year":"1746","eto":"丙寅","over_match":true,"nengo":"寛保6","ambiguos":"寛保寬丙寅六"},{"year":"1746","eto":"丙寅","nengo":"延享3","ambiguos":"延享丙寅三参參"},{"year":"1747","eto":"丁卯","nengo":"延享4","ambiguos":"延享丁卯四"},{"year":"1748","eto":"戊辰","nengo":"延享5","ambiguos":"延享戊辰五伍"},{"year":"1748","eto":"戊辰","nengo":"寛延1","ambiguos":"寛延寬戊辰一壱壹元"},{"year":"1749","eto":"己巳","over_match":true,"nengo":"延享6","ambiguos":"延享己巳六"},{"year":"1749","eto":"己巳","nengo":"寛延2","ambiguos":"寛延寬己巳二弐貳"},{"year":"1750","eto":"庚午","over_match":true,"nengo":"延享7","ambiguos":"延享庚午七"},{"year":"1750","eto":"庚午","nengo":"寛延3","ambiguos":"寛延寬庚午三参參"},{"year":"1751","eto":"辛未","nengo":"寛延4","ambiguos":"寛延寬辛未四"},{"year":"1751","eto":"辛未","nengo":"宝暦1","ambiguos":"宝暦寶曆辛未一壱壹元"},{"year":"1752","eto":"壬申","over_match":true,"nengo":"寛延5","ambiguos":"寛延寬壬申五伍"},{"year":"1752","eto":"壬申","nengo":"宝暦2","ambiguos":"宝暦寶曆壬申二弐貳"},{"year":"1753","eto":"癸酉","over_match":true,"nengo":"寛延6","ambiguos":"寛延寬癸酉六"},{"year":"1753","eto":"癸酉","nengo":"宝暦3","ambiguos":"宝暦寶曆癸酉三参參"},{"year":"1754","eto":"甲戌","nengo":"宝暦4","ambiguos":"宝暦寶曆甲戌四"},{"year":"1755","eto":"乙亥","nengo":"宝暦5","ambiguos":"宝暦寶曆乙亥五伍"},{"year":"1756","eto":"丙子","nengo":"宝暦6","ambiguos":"宝暦寶曆丙子六"},{"year":"1757","eto":"丁丑","nengo":"宝暦7","ambiguos":"宝暦寶曆丁丑七"},{"year":"1758","eto":"戊寅","nengo":"宝暦8","ambiguos":"宝暦寶曆戊寅八"},{"year":"1759","eto":"己卯","nengo":"宝暦9","ambiguos":"宝暦寶曆己卯九"},{"year":"1760","eto":"庚辰","nengo":"宝暦10","ambiguos":"宝暦寶曆庚辰十拾"},{"year":"1761","eto":"辛巳","nengo":"宝暦11","ambiguos":"宝暦寶曆辛巳十拾一壱壹"},{"year":"1762","eto":"壬午","nengo":"宝暦12","ambiguos":"宝暦寶曆壬午十拾二弐貳"},{"year":"1763","eto":"癸未","nengo":"宝暦13","ambiguos":"宝暦寶曆癸未十拾三参參"},{"year":"1764","eto":"甲申","nengo":"宝暦14","ambiguos":"宝暦寶曆甲申十拾四"},{"year":"1764","eto":"甲申","nengo":"明和1","ambiguos":"明和甲申一壱壹元"},{"year":"1765","eto":"乙酉","over_match":true,"nengo":"宝暦15","ambiguos":"宝暦寶曆乙酉十拾五伍"},{"year":"1765","eto":"乙酉","nengo":"明和2","ambiguos":"明和乙酉二弐貳"},{"year":"1766","eto":"丙戌","over_match":true,"nengo":"宝暦16","ambiguos":"宝暦寶曆丙戌十拾六"},{"year":"1766","eto":"丙戌","nengo":"明和3","ambiguos":"明和丙戌三参參"},{"year":"1767","eto":"丁亥","nengo":"明和4","ambiguos":"明和丁亥四"},{"year":"1768","eto":"戊子","nengo":"明和5","ambiguos":"明和戊子五伍"},{"year":"1769","eto":"己丑","nengo":"明和6","ambiguos":"明和己丑六"},{"year":"1770","eto":"庚寅","nengo":"明和7","ambiguos":"明和庚寅七"},{"year":"1771","eto":"辛卯","nengo":"明和8","ambiguos":"明和辛卯八"},{"year":"1772","eto":"壬辰","nengo":"明和9","ambiguos":"明和壬辰九"},{"year":"1772","eto":"壬辰","nengo":"安永1","ambiguos":"安永壬辰一壱壹元"},{"year":"1773","eto":"癸巳","over_match":true,"nengo":"明和10","ambiguos":"明和癸巳十拾"},{"year":"1773","eto":"癸巳","nengo":"安永2","ambiguos":"安永癸巳二弐貳"},{"year":"1774","eto":"甲午","over_match":true,"nengo":"明和11","ambiguos":"明和甲午十拾一壱壹"},{"year":"1774","eto":"甲午","nengo":"安永3","ambiguos":"安永甲午三参參"},{"year":"1775","eto":"乙未","nengo":"安永4","ambiguos":"安永乙未四"},{"year":"1776","eto":"丙申","nengo":"安永5","ambiguos":"安永丙申五伍"},{"year":"1777","eto":"丁酉","nengo":"安永6","ambiguos":"安永丁酉六"},{"year":"1778","eto":"戊戌","nengo":"安永7","ambiguos":"安永戊戌七"},{"year":"1779","eto":"己亥","nengo":"安永8","ambiguos":"安永己亥八"},{"year":"1780","eto":"庚子","nengo":"安永9","ambiguos":"安永庚子九"},{"year":"1781","eto":"辛丑","nengo":"安永10","ambiguos":"安永辛丑十拾"},{"year":"1781","eto":"辛丑","nengo":"天明1","ambiguos":"天明辛丑一壱壹元"},{"year":"1782","eto":"壬寅","over_match":true,"nengo":"安永11","ambiguos":"安永壬寅十拾一壱壹"},{"year":"1782","eto":"壬寅","nengo":"天明2","ambiguos":"天明壬寅二弐貳"},{"year":"1783","eto":"癸卯","over_match":true,"nengo":"安永12","ambiguos":"安永癸卯十拾二弐貳"},{"year":"1783","eto":"癸卯","nengo":"天明3","ambiguos":"天明癸卯三参參"},{"year":"1784","eto":"甲辰","nengo":"天明4","ambiguos":"天明甲辰四"},{"year":"1785","eto":"乙巳","nengo":"天明5","ambiguos":"天明乙巳五伍"},{"year":"1786","eto":"丙午","nengo":"天明6","ambiguos":"天明丙午六"},{"year":"1787","eto":"丁未","nengo":"天明7","ambiguos":"天明丁未七"},{"year":"1788","eto":"戊申","nengo":"天明8","ambiguos":"天明戊申八"},{"year":"1789","eto":"己酉","nengo":"天明9","ambiguos":"天明己酉九"},{"year":"1789","eto":"己酉","nengo":"寛政1","ambiguos":"寛政寬己酉一壱壹元"},{"year":"1790","eto":"庚戌","over_match":true,"nengo":"天明10","ambiguos":"天明庚戌十拾"},{"year":"1790","eto":"庚戌","nengo":"寛政2","ambiguos":"寛政寬庚戌二弐貳"},{"year":"1791","eto":"辛亥","over_match":true,"nengo":"天明11","ambiguos":"天明辛亥十拾一壱壹"},{"year":"1791","eto":"辛亥","nengo":"寛政3","ambiguos":"寛政寬辛亥三参參"},{"year":"1792","eto":"壬子","nengo":"寛政4","ambiguos":"寛政寬壬子四"},{"year":"1793","eto":"癸丑","nengo":"寛政5","ambiguos":"寛政寬癸丑五伍"},{"year":"1794","eto":"甲寅","nengo":"寛政6","ambiguos":"寛政寬甲寅六"},{"year":"1795","eto":"乙卯","nengo":"寛政7","ambiguos":"寛政寬乙卯七"},{"year":"1796","eto":"丙辰","nengo":"寛政8","ambiguos":"寛政寬丙辰八"},{"year":"1797","eto":"丁巳","nengo":"寛政9","ambiguos":"寛政寬丁巳九"},{"year":"1798","eto":"戊午","nengo":"寛政10","ambiguos":"寛政寬戊午十拾"},{"year":"1799","eto":"己未","nengo":"寛政11","ambiguos":"寛政寬己未十拾一壱壹"},{"year":"1800","eto":"庚申","nengo":"寛政12","ambiguos":"寛政寬庚申十拾二弐貳"},{"year":"1801","eto":"辛酉","nengo":"寛政13","ambiguos":"寛政寬辛酉十拾三参參"},{"year":"1801","eto":"辛酉","nengo":"享和1","ambiguos":"享和辛酉一壱壹元"},{"year":"1802","eto":"壬戌","over_match":true,"nengo":"寛政14","ambiguos":"寛政寬壬戌十拾四"},{"year":"1802","eto":"壬戌","nengo":"享和2","ambiguos":"享和壬戌二弐貳"},{"year":"1803","eto":"癸亥","over_match":true,"nengo":"寛政15","ambiguos":"寛政寬癸亥十拾五伍"},{"year":"1803","eto":"癸亥","nengo":"享和3","ambiguos":"享和癸亥三参參"},{"year":"1804","eto":"甲子","nengo":"享和4","ambiguos":"享和甲子四"},{"year":"1804","eto":"甲子","nengo":"文化1","ambiguos":"文化甲子一壱壹元"},{"year":"1805","eto":"乙丑","over_match":true,"nengo":"享和5","ambiguos":"享和乙丑五伍"},{"year":"1805","eto":"乙丑","nengo":"文化2","ambiguos":"文化乙丑二弐貳"},{"year":"1806","eto":"丙寅","over_match":true,"nengo":"享和6","ambiguos":"享和丙寅六"},{"year":"1806","eto":"丙寅","nengo":"文化3","ambiguos":"文化丙寅三参參"},{"year":"1807","eto":"丁卯","nengo":"文化4","ambiguos":"文化丁卯四"},{"year":"1808","eto":"戊辰","nengo":"文化5","ambiguos":"文化戊辰五伍"},{"year":"1809","eto":"己巳","nengo":"文化6","ambiguos":"文化己巳六"},{"year":"1810","eto":"庚午","nengo":"文化7","ambiguos":"文化庚午七"},{"year":"1811","eto":"辛未","nengo":"文化8","ambiguos":"文化辛未八"},{"year":"1812","eto":"壬申","nengo":"文化9","ambiguos":"文化壬申九"},{"year":"1813","eto":"癸酉","nengo":"文化10","ambiguos":"文化癸酉十拾"},{"year":"1814","eto":"甲戌","nengo":"文化11","ambiguos":"文化甲戌十拾一壱壹"},{"year":"1815","eto":"乙亥","nengo":"文化12","ambiguos":"文化乙亥十拾二弐貳"},{"year":"1816","eto":"丙子","nengo":"文化13","ambiguos":"文化丙子十拾三参參"},{"year":"1817","eto":"丁丑","nengo":"文化14","ambiguos":"文化丁丑十拾四"},{"year":"1818","eto":"戊寅","nengo":"文化15","ambiguos":"文化戊寅十拾五伍"},{"year":"1818","eto":"戊寅","nengo":"文政1","ambiguos":"文政戊寅一壱壹元"},{"year":"1819","eto":"己卯","over_match":true,"nengo":"文化16","ambiguos":"文化己卯十拾六"},{"year":"1819","eto":"己卯","nengo":"文政2","ambiguos":"文政己卯二弐貳"},{"year":"1820","eto":"庚辰","over_match":true,"nengo":"文化17","ambiguos":"文化庚辰十拾七"},{"year":"1820","eto":"庚辰","nengo":"文政3","ambiguos":"文政庚辰三参參"},{"year":"1821","eto":"辛巳","nengo":"文政4","ambiguos":"文政辛巳四"},{"year":"1822","eto":"壬午","nengo":"文政5","ambiguos":"文政壬午五伍"},{"year":"1823","eto":"癸未","nengo":"文政6","ambiguos":"文政癸未六"},{"year":"1824","eto":"甲申","nengo":"文政7","ambiguos":"文政甲申七"},{"year":"1825","eto":"乙酉","nengo":"文政8","ambiguos":"文政乙酉八"},{"year":"1826","eto":"丙戌","nengo":"文政9","ambiguos":"文政丙戌九"},{"year":"1827","eto":"丁亥","nengo":"文政10","ambiguos":"文政丁亥十拾"},{"year":"1828","eto":"戊子","nengo":"文政11","ambiguos":"文政戊子十拾一壱壹"},{"year":"1829","eto":"己丑","nengo":"文政12","ambiguos":"文政己丑十拾二弐貳"},{"year":"1830","eto":"庚寅","nengo":"文政13","ambiguos":"文政庚寅十拾三参參"},{"year":"1830","eto":"庚寅","nengo":"天保1","ambiguos":"天保庚寅一壱壹元"},{"year":"1831","eto":"辛卯","over_match":true,"nengo":"文政14","ambiguos":"文政辛卯十拾四"},{"year":"1831","eto":"辛卯","nengo":"天保2","ambiguos":"天保辛卯二弐貳"},{"year":"1832","eto":"壬辰","over_match":true,"nengo":"文政15","ambiguos":"文政壬辰十拾五伍"},{"year":"1832","eto":"壬辰","nengo":"天保3","ambiguos":"天保壬辰三参參"},{"year":"1833","eto":"癸巳","nengo":"天保4","ambiguos":"天保癸巳四"},{"year":"1834","eto":"甲午","nengo":"天保5","ambiguos":"天保甲午五伍"},{"year":"1835","eto":"乙未","nengo":"天保6","ambiguos":"天保乙未六"},{"year":"1836","eto":"丙申","nengo":"天保7","ambiguos":"天保丙申七"},{"year":"1837","eto":"丁酉","nengo":"天保8","ambiguos":"天保丁酉八"},{"year":"1838","eto":"戊戌","nengo":"天保9","ambiguos":"天保戊戌九"},{"year":"1839","eto":"己亥","nengo":"天保10","ambiguos":"天保己亥十拾"},{"year":"1840","eto":"庚子","nengo":"天保11","ambiguos":"天保庚子十拾一壱壹"},{"year":"1841","eto":"辛丑","nengo":"天保12","ambiguos":"天保辛丑十拾二弐貳"},{"year":"1842","eto":"壬寅","nengo":"天保13","ambiguos":"天保壬寅十拾三参參"},{"year":"1843","eto":"癸卯","nengo":"天保14","ambiguos":"天保癸卯十拾四"},{"year":"1844","eto":"甲辰","nengo":"天保15","ambiguos":"天保甲辰十拾五伍"},{"year":"1844","eto":"甲辰","nengo":"弘化1","ambiguos":"弘化甲辰一壱壹元"},{"year":"1845","eto":"乙巳","over_match":true,"nengo":"天保16","ambiguos":"天保乙巳十拾六"},{"year":"1845","eto":"乙巳","nengo":"弘化2","ambiguos":"弘化乙巳二弐貳"},{"year":"1846","eto":"丙午","over_match":true,"nengo":"天保17","ambiguos":"天保丙午十拾七"},{"year":"1846","eto":"丙午","nengo":"弘化3","ambiguos":"弘化丙午三参參"},{"year":"1847","eto":"丁未","nengo":"弘化4","ambiguos":"弘化丁未四"},{"year":"1848","eto":"戊申","nengo":"弘化5","ambiguos":"弘化戊申五伍"},{"year":"1848","eto":"戊申","nengo":"嘉永1","ambiguos":"嘉永戊申一壱壹元"},{"year":"1849","eto":"己酉","over_match":true,"nengo":"弘化6","ambiguos":"弘化己酉六"},{"year":"1849","eto":"己酉","nengo":"嘉永2","ambiguos":"嘉永己酉二弐貳"},{"year":"1850","eto":"庚戌","over_match":true,"nengo":"弘化7","ambiguos":"弘化庚戌七"},{"year":"1850","eto":"庚戌","nengo":"嘉永3","ambiguos":"嘉永庚戌三参參"},{"year":"1851","eto":"辛亥","nengo":"嘉永4","ambiguos":"嘉永辛亥四"},{"year":"1852","eto":"壬子","nengo":"嘉永5","ambiguos":"嘉永壬子五伍"},{"year":"1853","eto":"癸丑","nengo":"嘉永6","ambiguos":"嘉永癸丑六"},{"year":"1854","eto":"甲寅","nengo":"嘉永7","ambiguos":"嘉永甲寅七"},{"year":"1854","eto":"甲寅","nengo":"安政1","ambiguos":"安政甲寅一壱壹元"},{"year":"1855","eto":"乙卯","over_match":true,"nengo":"嘉永8","ambiguos":"嘉永乙卯八"},{"year":"1855","eto":"乙卯","nengo":"安政2","ambiguos":"安政乙卯二弐貳"},{"year":"1856","eto":"丙辰","over_match":true,"nengo":"嘉永9","ambiguos":"嘉永丙辰九"},{"year":"1856","eto":"丙辰","nengo":"安政3","ambiguos":"安政丙辰三参參"},{"year":"1857","eto":"丁巳","nengo":"安政4","ambiguos":"安政丁巳四"},{"year":"1858","eto":"戊午","nengo":"安政5","ambiguos":"安政戊午五伍"},{"year":"1859","eto":"己未","nengo":"安政6","ambiguos":"安政己未六"},{"year":"1860","eto":"庚申","nengo":"安政7","ambiguos":"安政庚申七"},{"year":"1860","eto":"庚申","nengo":"万延1","ambiguos":"万延萬庚申一壱壹元"},{"year":"1861","eto":"辛酉","over_match":true,"nengo":"安政8","ambiguos":"安政辛酉八"},{"year":"1861","eto":"辛酉","nengo":"万延2","ambiguos":"万延萬辛酉二弐貳"},{"year":"1861","eto":"辛酉","nengo":"文久1","ambiguos":"文久辛酉一壱壹元"},{"year":"1862","eto":"壬戌","over_match":true,"nengo":"安政9","ambiguos":"安政壬戌九"},{"year":"1862","eto":"壬戌","over_match":true,"nengo":"万延3","ambiguos":"万延萬壬戌三参參"},{"year":"1862","eto":"壬戌","nengo":"文久2","ambiguos":"文久壬戌二弐貳"},{"year":"1863","eto":"癸亥","over_match":true,"nengo":"万延4","ambiguos":"万延萬癸亥四"},{"year":"1863","eto":"癸亥","nengo":"文久3","ambiguos":"文久癸亥三参參"},{"year":"1864","eto":"甲子","nengo":"文久4","ambiguos":"文久甲子四"},{"year":"1864","eto":"甲子","nengo":"元治1","ambiguos":"元治甲子一壱壹元"},{"year":"1865","eto":"乙丑","over_match":true,"nengo":"文久5","ambiguos":"文久乙丑五伍"},{"year":"1865","eto":"乙丑","nengo":"元治2","ambiguos":"元治乙丑二弐貳"},{"year":"1865","eto":"乙丑","nengo":"慶応1","ambiguos":"慶応應乙丑一壱壹元"},{"year":"1866","eto":"丙寅","over_match":true,"nengo":"文久6","ambiguos":"文久丙寅六"},{"year":"1866","eto":"丙寅","over_match":true,"nengo":"元治3","ambiguos":"元治丙寅三参參"},{"year":"1866","eto":"丙寅","nengo":"慶応2","ambiguos":"慶応應丙寅二弐貳"},{"year":"1867","eto":"丁卯","over_match":true,"nengo":"元治4","ambiguos":"元治丁卯四"},{"year":"1867","eto":"丁卯","nengo":"慶応3","ambiguos":"慶応應丁卯三参參"},{"year":"1868","eto":"戊辰","nengo":"慶応4","ambiguos":"慶応應戊辰四"},{"year":"1868","eto":"戊辰","nengo":"明治1","ambiguos":"明治戊辰一壱壹元"},{"year":"1869","eto":"己巳","over_match":true,"nengo":"慶応5","ambiguos":"慶応應己巳五伍"},{"year":"1869","eto":"己巳","nengo":"明治2","ambiguos":"明治己巳二弐貳"},{"year":"1870","eto":"庚午","over_match":true,"nengo":"慶応6","ambiguos":"慶応應庚午六"},{"year":"1870","eto":"庚午","nengo":"明治3","ambiguos":"明治庚午三参參"},{"year":"1871","eto":"辛未","nengo":"明治4","ambiguos":"明治辛未四"},{"year":"1872","eto":"壬申","nengo":"明治5","ambiguos":"明治壬申五伍"},{"year":"1873","eto":"癸酉","nengo":"明治6","ambiguos":"明治癸酉六"},{"year":"1874","eto":"甲戌","nengo":"明治7","ambiguos":"明治甲戌七"},{"year":"1875","eto":"乙亥","nengo":"明治8","ambiguos":"明治乙亥八"},{"year":"1876","eto":"丙子","nengo":"明治9","ambiguos":"明治丙子九"},{"year":"1877","eto":"丁丑","nengo":"明治10","ambiguos":"明治丁丑十拾"},{"year":"1878","eto":"戊寅","nengo":"明治11","ambiguos":"明治戊寅十拾一壱壹"},{"year":"1879","eto":"己卯","nengo":"明治12","ambiguos":"明治己卯十拾二弐貳"},{"year":"1880","eto":"庚辰","nengo":"明治13","ambiguos":"明治庚辰十拾三参參"},{"year":"1881","eto":"辛巳","nengo":"明治14","ambiguos":"明治辛巳十拾四"},{"year":"1882","eto":"壬午","nengo":"明治15","ambiguos":"明治壬午十拾五伍"},{"year":"1883","eto":"癸未","nengo":"明治16","ambiguos":"明治癸未十拾六"},{"year":"1884","eto":"甲申","nengo":"明治17","ambiguos":"明治甲申十拾七"},{"year":"1885","eto":"乙酉","nengo":"明治18","ambiguos":"明治乙酉十拾八"},{"year":"1886","eto":"丙戌","nengo":"明治19","ambiguos":"明治丙戌十拾九"},{"year":"1887","eto":"丁亥","nengo":"明治20","ambiguos":"明治丁亥十拾廿二弐貳"},{"year":"1888","eto":"戊子","nengo":"明治21","ambiguos":"明治戊子十拾廿二弐貳一壱壹"},{"year":"1889","eto":"己丑","nengo":"明治22","ambiguos":"明治己丑十拾廿二弐貳二弐貳"},{"year":"1890","eto":"庚寅","nengo":"明治23","ambiguos":"明治庚寅十拾廿二弐貳三参參"},{"year":"1891","eto":"辛卯","nengo":"明治24","ambiguos":"明治辛卯十拾廿二弐貳四"},{"year":"1892","eto":"壬辰","nengo":"明治25","ambiguos":"明治壬辰十拾廿二弐貳五伍"},{"year":"1893","eto":"癸巳","nengo":"明治26","ambiguos":"明治癸巳十拾廿二弐貳六"},{"year":"1894","eto":"甲午","nengo":"明治27","ambiguos":"明治甲午十拾廿二弐貳七"},{"year":"1895","eto":"乙未","nengo":"明治28","ambiguos":"明治乙未十拾廿二弐貳八"},{"year":"1896","eto":"丙申","nengo":"明治29","ambiguos":"明治丙申十拾廿二弐貳九"},{"year":"1897","eto":"丁酉","nengo":"明治30","ambiguos":"明治丁酉十拾卅丗三参參"},{"year":"1898","eto":"戊戌","nengo":"明治31","ambiguos":"明治戊戌十拾卅丗三参參一壱壹"},{"year":"1899","eto":"己亥","nengo":"明治32","ambiguos":"明治己亥十拾卅丗三参參二弐貳"},{"year":"1900","eto":"庚子","nengo":"明治33","ambiguos":"明治庚子十拾卅丗三参參三参參"},{"year":"1901","eto":"辛丑","nengo":"明治34","ambiguos":"明治辛丑十拾卅丗三参參四"},{"year":"1902","eto":"壬寅","nengo":"明治35","ambiguos":"明治壬寅十拾卅丗三参參五伍"},{"year":"1903","eto":"癸卯","nengo":"明治36","ambiguos":"明治癸卯十拾卅丗三参參六"},{"year":"1904","eto":"甲辰","nengo":"明治37","ambiguos":"明治甲辰十拾卅丗三参參七"},{"year":"1905","eto":"乙巳","nengo":"明治38","ambiguos":"明治乙巳十拾卅丗三参參八"},{"year":"1906","eto":"丙午","nengo":"明治39","ambiguos":"明治丙午十拾卅丗三参參九"},{"year":"1907","eto":"丁未","nengo":"明治40","ambiguos":"明治丁未十拾四"},{"year":"1908","eto":"戊申","nengo":"明治41","ambiguos":"明治戊申十拾四一壱壹"},{"year":"1909","eto":"己酉","nengo":"明治42","ambiguos":"明治己酉十拾四二弐貳"},{"year":"1910","eto":"庚戌","nengo":"明治43","ambiguos":"明治庚戌十拾四三参參"},{"year":"1911","eto":"辛亥","nengo":"明治44","ambiguos":"明治辛亥十拾四四"},{"year":"1912","eto":"壬子","nengo":"明治45","ambiguos":"明治壬子十拾四五伍"},{"year":"1912","eto":"壬子","nengo":"大正1","ambiguos":"大正壬子一壱壹元"},{"year":"1913","eto":"癸丑","over_match":true,"nengo":"明治46","ambiguos":"明治癸丑十拾四六"},{"year":"1913","eto":"癸丑","nengo":"大正2","ambiguos":"大正癸丑二弐貳"},{"year":"1914","eto":"甲寅","over_match":true,"nengo":"明治47","ambiguos":"明治甲寅十拾四七"},{"year":"1914","eto":"甲寅","nengo":"大正3","ambiguos":"大正甲寅三参參"},{"year":"1915","eto":"乙卯","nengo":"大正4","ambiguos":"大正乙卯四"},{"year":"1916","eto":"丙辰","nengo":"大正5","ambiguos":"大正丙辰五伍"},{"year":"1917","eto":"丁巳","nengo":"大正6","ambiguos":"大正丁巳六"},{"year":"1918","eto":"戊午","nengo":"大正7","ambiguos":"大正戊午七"},{"year":"1919","eto":"己未","nengo":"大正8","ambiguos":"大正己未八"},{"year":"1920","eto":"庚申","nengo":"大正9","ambiguos":"大正庚申九"},{"year":"1921","eto":"辛酉","nengo":"大正10","ambiguos":"大正辛酉十拾"},{"year":"1922","eto":"壬戌","nengo":"大正11","ambiguos":"大正壬戌十拾一壱壹"},{"year":"1923","eto":"癸亥","nengo":"大正12","ambiguos":"大正癸亥十拾二弐貳"},{"year":"1924","eto":"甲子","nengo":"大正13","ambiguos":"大正甲子十拾三参參"},{"year":"1925","eto":"乙丑","nengo":"大正14","ambiguos":"大正乙丑十拾四"},{"year":"1926","eto":"丙寅","nengo":"大正15","ambiguos":"大正丙寅十拾五伍"},{"year":"1926","eto":"丙寅","nengo":"昭和1","ambiguos":"昭和丙寅一壱壹元"},{"year":"1927","eto":"丁卯","over_match":true,"nengo":"大正16","ambiguos":"大正丁卯十拾六"},{"year":"1927","eto":"丁卯","nengo":"昭和2","ambiguos":"昭和丁卯二弐貳"},{"year":"1928","eto":"戊辰","over_match":true,"nengo":"大正17","ambiguos":"大正戊辰十拾七"},{"year":"1928","eto":"戊辰","nengo":"昭和3","ambiguos":"昭和戊辰三参參"},{"year":"1929","eto":"己巳","nengo":"昭和4","ambiguos":"昭和己巳四"},{"year":"1930","eto":"庚午","nengo":"昭和5","ambiguos":"昭和庚午五伍"},{"year":"1931","eto":"辛未","nengo":"昭和6","ambiguos":"昭和辛未六"},{"year":"1932","eto":"壬申","nengo":"昭和7","ambiguos":"昭和壬申七"},{"year":"1933","eto":"癸酉","nengo":"昭和8","ambiguos":"昭和癸酉八"},{"year":"1934","eto":"甲戌","nengo":"昭和9","ambiguos":"昭和甲戌九"},{"year":"1935","eto":"乙亥","nengo":"昭和10","ambiguos":"昭和乙亥十拾"},{"year":"1936","eto":"丙子","nengo":"昭和11","ambiguos":"昭和丙子十拾一壱壹"},{"year":"1937","eto":"丁丑","nengo":"昭和12","ambiguos":"昭和丁丑十拾二弐貳"},{"year":"1938","eto":"戊寅","nengo":"昭和13","ambiguos":"昭和戊寅十拾三参參"},{"year":"1939","eto":"己卯","nengo":"昭和14","ambiguos":"昭和己卯十拾四"},{"year":"1940","eto":"庚辰","nengo":"昭和15","ambiguos":"昭和庚辰十拾五伍"},{"year":"1941","eto":"辛巳","nengo":"昭和16","ambiguos":"昭和辛巳十拾六"},{"year":"1942","eto":"壬午","nengo":"昭和17","ambiguos":"昭和壬午十拾七"},{"year":"1943","eto":"癸未","nengo":"昭和18","ambiguos":"昭和癸未十拾八"},{"year":"1944","eto":"甲申","nengo":"昭和19","ambiguos":"昭和甲申十拾九"},{"year":"1945","eto":"乙酉","nengo":"昭和20","ambiguos":"昭和乙酉十拾廿二弐貳"},{"year":"1946","eto":"丙戌","nengo":"昭和21","ambiguos":"昭和丙戌十拾廿二弐貳一壱壹"},{"year":"1947","eto":"丁亥","nengo":"昭和22","ambiguos":"昭和丁亥十拾廿二弐貳二弐貳"},{"year":"1948","eto":"戊子","nengo":"昭和23","ambiguos":"昭和戊子十拾廿二弐貳三参參"},{"year":"1949","eto":"己丑","nengo":"昭和24","ambiguos":"昭和己丑十拾廿二弐貳四"},{"year":"1950","eto":"庚寅","nengo":"昭和25","ambiguos":"昭和庚寅十拾廿二弐貳五伍"},{"year":"1951","eto":"辛卯","nengo":"昭和26","ambiguos":"昭和辛卯十拾廿二弐貳六"},{"year":"1952","eto":"壬辰","nengo":"昭和27","ambiguos":"昭和壬辰十拾廿二弐貳七"},{"year":"1953","eto":"癸巳","nengo":"昭和28","ambiguos":"昭和癸巳十拾廿二弐貳八"},{"year":"1954","eto":"甲午","nengo":"昭和29","ambiguos":"昭和甲午十拾廿二弐貳九"},{"year":"1955","eto":"乙未","nengo":"昭和30","ambiguos":"昭和乙未十拾卅丗三参參"},{"year":"1956","eto":"丙申","nengo":"昭和31","ambiguos":"昭和丙申十拾卅丗三参參一壱壹"},{"year":"1957","eto":"丁酉","nengo":"昭和32","ambiguos":"昭和丁酉十拾卅丗三参參二弐貳"},{"year":"1958","eto":"戊戌","nengo":"昭和33","ambiguos":"昭和戊戌十拾卅丗三参參三参參"},{"year":"1959","eto":"己亥","nengo":"昭和34","ambiguos":"昭和己亥十拾卅丗三参參四"},{"year":"1960","eto":"庚子","nengo":"昭和35","ambiguos":"昭和庚子十拾卅丗三参參五伍"},{"year":"1961","eto":"辛丑","nengo":"昭和36","ambiguos":"昭和辛丑十拾卅丗三参參六"},{"year":"1962","eto":"壬寅","nengo":"昭和37","ambiguos":"昭和壬寅十拾卅丗三参參七"},{"year":"1963","eto":"癸卯","nengo":"昭和38","ambiguos":"昭和癸卯十拾卅丗三参參八"},{"year":"1964","eto":"甲辰","nengo":"昭和39","ambiguos":"昭和甲辰十拾卅丗三参參九"},{"year":"1965","eto":"乙巳","nengo":"昭和40","ambiguos":"昭和乙巳十拾四"},{"year":"1966","eto":"丙午","nengo":"昭和41","ambiguos":"昭和丙午十拾四一壱壹"},{"year":"1967","eto":"丁未","nengo":"昭和42","ambiguos":"昭和丁未十拾四二弐貳"},{"year":"1968","eto":"戊申","nengo":"昭和43","ambiguos":"昭和戊申十拾四三参參"},{"year":"1969","eto":"己酉","nengo":"昭和44","ambiguos":"昭和己酉十拾四四"},{"year":"1970","eto":"庚戌","nengo":"昭和45","ambiguos":"昭和庚戌十拾四五伍"},{"year":"1971","eto":"辛亥","nengo":"昭和46","ambiguos":"昭和辛亥十拾四六"},{"year":"1972","eto":"壬子","nengo":"昭和47","ambiguos":"昭和壬子十拾四七"},{"year":"1973","eto":"癸丑","nengo":"昭和48","ambiguos":"昭和癸丑十拾四八"},{"year":"1974","eto":"甲寅","nengo":"昭和49","ambiguos":"昭和甲寅十拾四九"},{"year":"1975","eto":"乙卯","nengo":"昭和50","ambiguos":"昭和乙卯十拾五伍"},{"year":"1976","eto":"丙辰","nengo":"昭和51","ambiguos":"昭和丙辰十拾五伍一壱壹"},{"year":"1977","eto":"丁巳","nengo":"昭和52","ambiguos":"昭和丁巳十拾五伍二弐貳"},{"year":"1978","eto":"戊午","nengo":"昭和53","ambiguos":"昭和戊午十拾五伍三参參"},{"year":"1979","eto":"己未","nengo":"昭和54","ambiguos":"昭和己未十拾五伍四"},{"year":"1980","eto":"庚申","nengo":"昭和55","ambiguos":"昭和庚申十拾五伍五伍"},{"year":"1981","eto":"辛酉","nengo":"昭和56","ambiguos":"昭和辛酉十拾五伍六"},{"year":"1982","eto":"壬戌","nengo":"昭和57","ambiguos":"昭和壬戌十拾五伍七"},{"year":"1983","eto":"癸亥","nengo":"昭和58","ambiguos":"昭和癸亥十拾五伍八"},{"year":"1984","eto":"甲子","nengo":"昭和59","ambiguos":"昭和甲子十拾五伍九"},{"year":"1985","eto":"乙丑","nengo":"昭和60","ambiguos":"昭和乙丑十拾六"},{"year":"1986","eto":"丙寅","nengo":"昭和61","ambiguos":"昭和丙寅十拾六一壱壹"},{"year":"1987","eto":"丁卯","nengo":"昭和62","ambiguos":"昭和丁卯十拾六二弐貳"},{"year":"1988","eto":"戊辰","nengo":"昭和63","ambiguos":"昭和戊辰十拾六三参參"},{"year":"1989","eto":"己巳","nengo":"昭和64","ambiguos":"昭和己巳十拾六四"},{"year":"1989","eto":"己巳","nengo":"平成1","ambiguos":"平成己巳一壱壹元"},{"year":"1990","eto":"庚午","over_match":true,"nengo":"昭和65","ambiguos":"昭和庚午十拾六五伍"},{"year":"1990","eto":"庚午","nengo":"平成2","ambiguos":"平成庚午二弐貳"},{"year":"1991","eto":"辛未","over_match":true,"nengo":"昭和66","ambiguos":"昭和辛未十拾六六"},{"year":"1991","eto":"辛未","nengo":"平成3","ambiguos":"平成辛未三参參"},{"year":"1992","eto":"壬申","nengo":"平成4","ambiguos":"平成壬申四"},{"year":"1993","eto":"癸酉","nengo":"平成5","ambiguos":"平成癸酉五伍"},{"year":"1994","eto":"甲戌","nengo":"平成6","ambiguos":"平成甲戌六"},{"year":"1995","eto":"乙亥","nengo":"平成7","ambiguos":"平成乙亥七"},{"year":"1996","eto":"丙子","nengo":"平成8","ambiguos":"平成丙子八"},{"year":"1997","eto":"丁丑","nengo":"平成9","ambiguos":"平成丁丑九"},{"year":"1998","eto":"戊寅","nengo":"平成10","ambiguos":"平成戊寅十拾"},{"year":"1999","eto":"己卯","nengo":"平成11","ambiguos":"平成己卯十拾一壱壹"},{"year":"2000","eto":"庚辰","nengo":"平成12","ambiguos":"平成庚辰十拾二弐貳"},{"year":"2001","eto":"辛巳","nengo":"平成13","ambiguos":"平成辛巳十拾三参參"},{"year":"2002","eto":"壬午","nengo":"平成14","ambiguos":"平成壬午十拾四"},{"year":"2003","eto":"癸未","nengo":"平成15","ambiguos":"平成癸未十拾五伍"},{"year":"2004","eto":"甲申","nengo":"平成16","ambiguos":"平成甲申十拾六"},{"year":"2005","eto":"乙酉","nengo":"平成17","ambiguos":"平成乙酉十拾七"},{"year":"2006","eto":"丙戌","nengo":"平成18","ambiguos":"平成丙戌十拾八"},{"year":"2007","eto":"丁亥","nengo":"平成19","ambiguos":"平成丁亥十拾九"},{"year":"2008","eto":"戊子","nengo":"平成20","ambiguos":"平成戊子十拾廿二弐貳"},{"year":"2009","eto":"己丑","nengo":"平成21","ambiguos":"平成己丑十拾廿二弐貳一壱壹"},{"year":"2010","eto":"庚寅","nengo":"平成22","ambiguos":"平成庚寅十拾廿二弐貳二弐貳"},{"year":"2011","eto":"辛卯","nengo":"平成23","ambiguos":"平成辛卯十拾廿二弐貳三参參"},{"year":"2012","eto":"壬辰","nengo":"平成24","ambiguos":"平成壬辰十拾廿二弐貳四"},{"year":"2013","eto":"癸巳","nengo":"平成25","ambiguos":"平成癸巳十拾廿二弐貳五伍"},{"year":"2014","eto":"甲午","nengo":"平成26","ambiguos":"平成甲午十拾廿二弐貳六"},{"year":"2015","eto":"乙未","nengo":"平成27","ambiguos":"平成乙未十拾廿二弐貳七"},{"year":"2016","eto":"丙申","nengo":"平成28","ambiguos":"平成丙申十拾廿二弐貳八"},{"year":"2017","eto":"丁酉","nengo":"平成29","ambiguos":"平成丁酉十拾廿二弐貳九"},{"year":"2018","eto":"戊戌","nengo":"平成30","ambiguos":"平成戊戌十拾卅丗三参參"},{"year":"2019","eto":"己亥","nengo":"平成31","ambiguos":"平成己亥十拾卅丗三参參一壱壹"},{"year":"2019","eto":"己亥","nengo":"令和1","ambiguos":"令和己亥一壱壹元"},{"year":"2020","eto":"庚子","over_match":true,"nengo":"平成32","ambiguos":"平成庚子十拾卅丗三参參二弐貳"},{"year":"2020","eto":"庚子","nengo":"令和2","ambiguos":"令和庚子二弐貳"},{"year":"2021","eto":"辛丑","over_match":true,"nengo":"平成33","ambiguos":"平成辛丑十拾卅丗三参參三参參"},{"year":"2021","eto":"辛丑","nengo":"令和3","ambiguos":"令和辛丑三参參"},{"year":"2022","eto":"壬寅","nengo":"令和4","ambiguos":"令和壬寅四"},{"year":"2023","eto":"癸卯","nengo":"令和5","ambiguos":"令和癸卯五伍"},{"year":"2024","eto":"甲辰","nengo":"令和6","ambiguos":"令和甲辰六"},{"year":"2025","eto":"乙巳","nengo":"令和7","ambiguos":"令和乙巳七"},{"year":"2026","eto":"丙午","nengo":"令和8","ambiguos":"令和丙午八"},{"year":"2027","eto":"丁未","nengo":"令和9","ambiguos":"令和丁未九"},{"year":"2028","eto":"戊申","nengo":"令和10","ambiguos":"令和戊申十拾"},{"year":"2029","eto":"己酉","nengo":"令和11","ambiguos":"令和己酉十拾一壱壹"},{"year":"2030","eto":"庚戌","nengo":"令和12","ambiguos":"令和庚戌十拾二弐貳"}]');
class S {
  /**
   * @callback HookCallback
   * @this {*|Jsep} this
   * @param {Jsep} env
   * @returns: void
   */
  /**
   * Adds the given callback to the list of callbacks for the given hook.
   *
   * The callback will be invoked when the hook it is registered for is run.
   *
   * One callback function can be registered to multiple hooks and the same hook multiple times.
   *
   * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
   * @param {HookCallback|boolean} callback The callback function which is given environment variables.
   * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
   * @public
   */
  add(e, n, t) {
    if (typeof arguments[0] != "string")
      for (let a in arguments[0])
        this.add(a, arguments[0][a], arguments[1]);
    else
      (Array.isArray(e) ? e : [e]).forEach(function(a) {
        this[a] = this[a] || [], n && this[a][t ? "unshift" : "push"](n);
      }, this);
  }
  /**
   * Runs a hook invoking all registered callbacks with the given environment variables.
   *
   * Callbacks will be invoked synchronously and in the order in which they were registered.
   *
   * @param {string} name The name of the hook.
   * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
   * @public
   */
  run(e, n) {
    this[e] = this[e] || [], this[e].forEach(function(t) {
      t.call(n && n.context ? n.context : n, n);
    });
  }
}
class D {
  constructor(e) {
    this.jsep = e, this.registered = {};
  }
  /**
   * @callback PluginSetup
   * @this {Jsep} jsep
   * @returns: void
   */
  /**
   * Adds the given plugin(s) to the registry
   *
   * @param {object} plugins
   * @param {string} plugins.name The name of the plugin
   * @param {PluginSetup} plugins.init The init function
   * @public
   */
  register() {
    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
      n[t] = arguments[t];
    n.forEach((a) => {
      if (typeof a != "object" || !a.name || !a.init)
        throw new Error("Invalid JSEP plugin format");
      this.registered[a.name] || (a.init(this.jsep), this.registered[a.name] = a);
    });
  }
}
class g {
  /**
   * @returns {string}
   */
  static get version() {
    return "1.4.0";
  }
  /**
   * @returns {string}
   */
  static toString() {
    return "JavaScript Expression Parser (JSEP) v" + g.version;
  }
  // ==================== CONFIG ================================
  /**
   * @method addUnaryOp
   * @param {string} op_name The name of the unary op to add
   * @returns {Jsep}
   */
  static addUnaryOp(e) {
    return g.max_unop_len = Math.max(e.length, g.max_unop_len), g.unary_ops[e] = 1, g;
  }
  /**
   * @method jsep.addBinaryOp
   * @param {string} op_name The name of the binary op to add
   * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
   * @param {boolean} [isRightAssociative=false] whether operator is right-associative
   * @returns {Jsep}
   */
  static addBinaryOp(e, n, t) {
    return g.max_binop_len = Math.max(e.length, g.max_binop_len), g.binary_ops[e] = n, t ? g.right_associative.add(e) : g.right_associative.delete(e), g;
  }
  /**
   * @method addIdentifierChar
   * @param {string} char The additional character to treat as a valid part of an identifier
   * @returns {Jsep}
   */
  static addIdentifierChar(e) {
    return g.additional_identifier_chars.add(e), g;
  }
  /**
   * @method addLiteral
   * @param {string} literal_name The name of the literal to add
   * @param {*} literal_value The value of the literal
   * @returns {Jsep}
   */
  static addLiteral(e, n) {
    return g.literals[e] = n, g;
  }
  /**
   * @method removeUnaryOp
   * @param {string} op_name The name of the unary op to remove
   * @returns {Jsep}
   */
  static removeUnaryOp(e) {
    return delete g.unary_ops[e], e.length === g.max_unop_len && (g.max_unop_len = g.getMaxKeyLen(g.unary_ops)), g;
  }
  /**
   * @method removeAllUnaryOps
   * @returns {Jsep}
   */
  static removeAllUnaryOps() {
    return g.unary_ops = {}, g.max_unop_len = 0, g;
  }
  /**
   * @method removeIdentifierChar
   * @param {string} char The additional character to stop treating as a valid part of an identifier
   * @returns {Jsep}
   */
  static removeIdentifierChar(e) {
    return g.additional_identifier_chars.delete(e), g;
  }
  /**
   * @method removeBinaryOp
   * @param {string} op_name The name of the binary op to remove
   * @returns {Jsep}
   */
  static removeBinaryOp(e) {
    return delete g.binary_ops[e], e.length === g.max_binop_len && (g.max_binop_len = g.getMaxKeyLen(g.binary_ops)), g.right_associative.delete(e), g;
  }
  /**
   * @method removeAllBinaryOps
   * @returns {Jsep}
   */
  static removeAllBinaryOps() {
    return g.binary_ops = {}, g.max_binop_len = 0, g;
  }
  /**
   * @method removeLiteral
   * @param {string} literal_name The name of the literal to remove
   * @returns {Jsep}
   */
  static removeLiteral(e) {
    return delete g.literals[e], g;
  }
  /**
   * @method removeAllLiterals
   * @returns {Jsep}
   */
  static removeAllLiterals() {
    return g.literals = {}, g;
  }
  // ==================== END CONFIG ============================
  /**
   * @returns {string}
   */
  get char() {
    return this.expr.charAt(this.index);
  }
  /**
   * @returns {number}
   */
  get code() {
    return this.expr.charCodeAt(this.index);
  }
  /**
   * @param {string} expr a string with the passed in express
   * @returns Jsep
   */
  constructor(e) {
    this.expr = e, this.index = 0;
  }
  /**
   * static top-level parser
   * @returns {jsep.Expression}
   */
  static parse(e) {
    return new g(e).parse();
  }
  /**
   * Get the longest key length of any object
   * @param {object} obj
   * @returns {number}
   */
  static getMaxKeyLen(e) {
    return Math.max(0, ...Object.keys(e).map((n) => n.length));
  }
  /**
   * `ch` is a character code in the next three functions
   * @param {number} ch
   * @returns {boolean}
   */
  static isDecimalDigit(e) {
    return e >= 48 && e <= 57;
  }
  /**
   * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
   * @param {string} op_val
   * @returns {number}
   */
  static binaryPrecedence(e) {
    return g.binary_ops[e] || 0;
  }
  /**
   * Looks for start of identifier
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierStart(e) {
    return e >= 65 && e <= 90 || // A...Z
    e >= 97 && e <= 122 || // a...z
    e >= 128 && !g.binary_ops[String.fromCharCode(e)] || // any non-ASCII that is not an operator
    g.additional_identifier_chars.has(String.fromCharCode(e));
  }
  /**
   * @param {number} ch
   * @returns {boolean}
   */
  static isIdentifierPart(e) {
    return g.isIdentifierStart(e) || g.isDecimalDigit(e);
  }
  /**
   * throw error at index of the expression
   * @param {string} message
   * @throws
   */
  throwError(e) {
    const n = new Error(e + " at character " + this.index);
    throw n.index = this.index, n.description = e, n;
  }
  /**
   * Run a given hook
   * @param {string} name
   * @param {jsep.Expression|false} [node]
   * @returns {?jsep.Expression}
   */
  runHook(e, n) {
    if (g.hooks[e]) {
      const t = {
        context: this,
        node: n
      };
      return g.hooks.run(e, t), t.node;
    }
    return n;
  }
  /**
   * Runs a given hook until one returns a node
   * @param {string} name
   * @returns {?jsep.Expression}
   */
  searchHook(e) {
    if (g.hooks[e]) {
      const n = {
        context: this
      };
      return g.hooks[e].find(function(t) {
        return t.call(n.context, n), n.node;
      }), n.node;
    }
  }
  /**
   * Push `index` up to the next non-space character
   */
  gobbleSpaces() {
    let e = this.code;
    for (; e === g.SPACE_CODE || e === g.TAB_CODE || e === g.LF_CODE || e === g.CR_CODE; )
      e = this.expr.charCodeAt(++this.index);
    this.runHook("gobble-spaces");
  }
  /**
   * Top-level method to parse all expressions and returns compound or single node
   * @returns {jsep.Expression}
   */
  parse() {
    this.runHook("before-all");
    const e = this.gobbleExpressions(), n = e.length === 1 ? e[0] : {
      type: g.COMPOUND,
      body: e
    };
    return this.runHook("after-all", n);
  }
  /**
   * top-level parser (but can be reused within as well)
   * @param {number} [untilICode]
   * @returns {jsep.Expression[]}
   */
  gobbleExpressions(e) {
    let n = [], t, a;
    for (; this.index < this.expr.length; )
      if (t = this.code, t === g.SEMCOL_CODE || t === g.COMMA_CODE)
        this.index++;
      else if (a = this.gobbleExpression())
        n.push(a);
      else if (this.index < this.expr.length) {
        if (t === e)
          break;
        this.throwError('Unexpected "' + this.char + '"');
      }
    return n;
  }
  /**
   * The main parsing function.
   * @returns {?jsep.Expression}
   */
  gobbleExpression() {
    const e = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
    return this.gobbleSpaces(), this.runHook("after-expression", e);
  }
  /**
   * Search for the operation portion of the string (e.g. `+`, `===`)
   * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
   * and move down from 3 to 2 to 1 character until a matching binary operation is found
   * then, return that binary operation
   * @returns {string|boolean}
   */
  gobbleBinaryOp() {
    this.gobbleSpaces();
    let e = this.expr.substr(this.index, g.max_binop_len), n = e.length;
    for (; n > 0; ) {
      if (g.binary_ops.hasOwnProperty(e) && (!g.isIdentifierStart(this.code) || this.index + e.length < this.expr.length && !g.isIdentifierPart(this.expr.charCodeAt(this.index + e.length))))
        return this.index += n, e;
      e = e.substr(0, --n);
    }
    return !1;
  }
  /**
   * This function is responsible for gobbling an individual expression,
   * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
   * @returns {?jsep.BinaryExpression}
   */
  gobbleBinaryExpression() {
    let e, n, t, a, r, i, b, s, u;
    if (i = this.gobbleToken(), !i || (n = this.gobbleBinaryOp(), !n))
      return i;
    for (r = {
      value: n,
      prec: g.binaryPrecedence(n),
      right_a: g.right_associative.has(n)
    }, b = this.gobbleToken(), b || this.throwError("Expected expression after " + n), a = [i, r, b]; n = this.gobbleBinaryOp(); ) {
      if (t = g.binaryPrecedence(n), t === 0) {
        this.index -= n.length;
        break;
      }
      r = {
        value: n,
        prec: t,
        right_a: g.right_associative.has(n)
      }, u = n;
      const c = (y) => r.right_a && y.right_a ? t > y.prec : t <= y.prec;
      for (; a.length > 2 && c(a[a.length - 2]); )
        b = a.pop(), n = a.pop().value, i = a.pop(), e = {
          type: g.BINARY_EXP,
          operator: n,
          left: i,
          right: b
        }, a.push(e);
      e = this.gobbleToken(), e || this.throwError("Expected expression after " + u), a.push(r, e);
    }
    for (s = a.length - 1, e = a[s]; s > 1; )
      e = {
        type: g.BINARY_EXP,
        operator: a[s - 1].value,
        left: a[s - 2],
        right: e
      }, s -= 2;
    return e;
  }
  /**
   * An individual part of a binary expression:
   * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
   * @returns {boolean|jsep.Expression}
   */
  gobbleToken() {
    let e, n, t, a;
    if (this.gobbleSpaces(), a = this.searchHook("gobble-token"), a)
      return this.runHook("after-token", a);
    if (e = this.code, g.isDecimalDigit(e) || e === g.PERIOD_CODE)
      return this.gobbleNumericLiteral();
    if (e === g.SQUOTE_CODE || e === g.DQUOTE_CODE)
      a = this.gobbleStringLiteral();
    else if (e === g.OBRACK_CODE)
      a = this.gobbleArray();
    else {
      for (n = this.expr.substr(this.index, g.max_unop_len), t = n.length; t > 0; ) {
        if (g.unary_ops.hasOwnProperty(n) && (!g.isIdentifierStart(this.code) || this.index + n.length < this.expr.length && !g.isIdentifierPart(this.expr.charCodeAt(this.index + n.length)))) {
          this.index += t;
          const r = this.gobbleToken();
          return r || this.throwError("missing unaryOp argument"), this.runHook("after-token", {
            type: g.UNARY_EXP,
            operator: n,
            argument: r,
            prefix: !0
          });
        }
        n = n.substr(0, --t);
      }
      g.isIdentifierStart(e) ? (a = this.gobbleIdentifier(), g.literals.hasOwnProperty(a.name) ? a = {
        type: g.LITERAL,
        value: g.literals[a.name],
        raw: a.name
      } : a.name === g.this_str && (a = {
        type: g.THIS_EXP
      })) : e === g.OPAREN_CODE && (a = this.gobbleGroup());
    }
    return a ? (a = this.gobbleTokenProperty(a), this.runHook("after-token", a)) : this.runHook("after-token", !1);
  }
  /**
   * Gobble properties of of identifiers/strings/arrays/groups.
   * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
   * It also gobbles function calls:
   * e.g. `Math.acos(obj.angle)`
   * @param {jsep.Expression} node
   * @returns {jsep.Expression}
   */
  gobbleTokenProperty(e) {
    this.gobbleSpaces();
    let n = this.code;
    for (; n === g.PERIOD_CODE || n === g.OBRACK_CODE || n === g.OPAREN_CODE || n === g.QUMARK_CODE; ) {
      let t;
      if (n === g.QUMARK_CODE) {
        if (this.expr.charCodeAt(this.index + 1) !== g.PERIOD_CODE)
          break;
        t = !0, this.index += 2, this.gobbleSpaces(), n = this.code;
      }
      this.index++, n === g.OBRACK_CODE ? (e = {
        type: g.MEMBER_EXP,
        computed: !0,
        object: e,
        property: this.gobbleExpression()
      }, e.property || this.throwError('Unexpected "' + this.char + '"'), this.gobbleSpaces(), n = this.code, n !== g.CBRACK_CODE && this.throwError("Unclosed ["), this.index++) : n === g.OPAREN_CODE ? e = {
        type: g.CALL_EXP,
        arguments: this.gobbleArguments(g.CPAREN_CODE),
        callee: e
      } : (n === g.PERIOD_CODE || t) && (t && this.index--, this.gobbleSpaces(), e = {
        type: g.MEMBER_EXP,
        computed: !1,
        object: e,
        property: this.gobbleIdentifier()
      }), t && (e.optional = !0), this.gobbleSpaces(), n = this.code;
    }
    return e;
  }
  /**
   * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
   * keep track of everything in the numeric literal and then calling `parseFloat` on that string
   * @returns {jsep.Literal}
   */
  gobbleNumericLiteral() {
    let e = "", n, t;
    for (; g.isDecimalDigit(this.code); )
      e += this.expr.charAt(this.index++);
    if (this.code === g.PERIOD_CODE)
      for (e += this.expr.charAt(this.index++); g.isDecimalDigit(this.code); )
        e += this.expr.charAt(this.index++);
    if (n = this.char, n === "e" || n === "E") {
      for (e += this.expr.charAt(this.index++), n = this.char, (n === "+" || n === "-") && (e += this.expr.charAt(this.index++)); g.isDecimalDigit(this.code); )
        e += this.expr.charAt(this.index++);
      g.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + e + this.char + ")");
    }
    return t = this.code, g.isIdentifierStart(t) ? this.throwError("Variable names cannot start with a number (" + e + this.char + ")") : (t === g.PERIOD_CODE || e.length === 1 && e.charCodeAt(0) === g.PERIOD_CODE) && this.throwError("Unexpected period"), {
      type: g.LITERAL,
      value: parseFloat(e),
      raw: e
    };
  }
  /**
   * Parses a string literal, staring with single or double quotes with basic support for escape codes
   * e.g. `"hello world"`, `'this is\nJSEP'`
   * @returns {jsep.Literal}
   */
  gobbleStringLiteral() {
    let e = "";
    const n = this.index, t = this.expr.charAt(this.index++);
    let a = !1;
    for (; this.index < this.expr.length; ) {
      let r = this.expr.charAt(this.index++);
      if (r === t) {
        a = !0;
        break;
      } else if (r === "\\")
        switch (r = this.expr.charAt(this.index++), r) {
          case "n":
            e += `
`;
            break;
          case "r":
            e += "\r";
            break;
          case "t":
            e += "	";
            break;
          case "b":
            e += "\b";
            break;
          case "f":
            e += "\f";
            break;
          case "v":
            e += "\v";
            break;
          default:
            e += r;
        }
      else
        e += r;
    }
    return a || this.throwError('Unclosed quote after "' + e + '"'), {
      type: g.LITERAL,
      value: e,
      raw: this.expr.substring(n, this.index)
    };
  }
  /**
   * Gobbles only identifiers
   * e.g.: `foo`, `_value`, `$x1`
   * Also, this function checks if that identifier is a literal:
   * (e.g. `true`, `false`, `null`) or `this`
   * @returns {jsep.Identifier}
   */
  gobbleIdentifier() {
    let e = this.code, n = this.index;
    for (g.isIdentifierStart(e) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (e = this.code, g.isIdentifierPart(e)); )
      this.index++;
    return {
      type: g.IDENTIFIER,
      name: this.expr.slice(n, this.index)
    };
  }
  /**
   * Gobbles a list of arguments within the context of a function call
   * or array literal. This function also assumes that the opening character
   * `(` or `[` has already been gobbled, and gobbles expressions and commas
   * until the terminator character `)` or `]` is encountered.
   * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
   * @param {number} termination
   * @returns {jsep.Expression[]}
   */
  gobbleArguments(e) {
    const n = [];
    let t = !1, a = 0;
    for (; this.index < this.expr.length; ) {
      this.gobbleSpaces();
      let r = this.code;
      if (r === e) {
        t = !0, this.index++, e === g.CPAREN_CODE && a && a >= n.length && this.throwError("Unexpected token " + String.fromCharCode(e));
        break;
      } else if (r === g.COMMA_CODE) {
        if (this.index++, a++, a !== n.length) {
          if (e === g.CPAREN_CODE)
            this.throwError("Unexpected token ,");
          else if (e === g.CBRACK_CODE)
            for (let i = n.length; i < a; i++)
              n.push(null);
        }
      } else if (n.length !== a && a !== 0)
        this.throwError("Expected comma");
      else {
        const i = this.gobbleExpression();
        (!i || i.type === g.COMPOUND) && this.throwError("Expected comma"), n.push(i);
      }
    }
    return t || this.throwError("Expected " + String.fromCharCode(e)), n;
  }
  /**
   * Responsible for parsing a group of things within parentheses `()`
   * that have no identifier in front (so not a function call)
   * This function assumes that it needs to gobble the opening parenthesis
   * and then tries to gobble everything within that parenthesis, assuming
   * that the next thing it should see is the close parenthesis. If not,
   * then the expression probably doesn't have a `)`
   * @returns {boolean|jsep.Expression}
   */
  gobbleGroup() {
    this.index++;
    let e = this.gobbleExpressions(g.CPAREN_CODE);
    if (this.code === g.CPAREN_CODE)
      return this.index++, e.length === 1 ? e[0] : e.length ? {
        type: g.SEQUENCE_EXP,
        expressions: e
      } : !1;
    this.throwError("Unclosed (");
  }
  /**
   * Responsible for parsing Array literals `[1, 2, 3]`
   * This function assumes that it needs to gobble the opening bracket
   * and then tries to gobble the expressions as arguments.
   * @returns {jsep.ArrayExpression}
   */
  gobbleArray() {
    return this.index++, {
      type: g.ARRAY_EXP,
      elements: this.gobbleArguments(g.CBRACK_CODE)
    };
  }
}
const k = new S();
Object.assign(g, {
  hooks: k,
  plugins: new D(g),
  // Node Types
  // ----------
  // This is the full set of types that any JSEP node can be.
  // Store them here to save space when minified
  COMPOUND: "Compound",
  SEQUENCE_EXP: "SequenceExpression",
  IDENTIFIER: "Identifier",
  MEMBER_EXP: "MemberExpression",
  LITERAL: "Literal",
  THIS_EXP: "ThisExpression",
  CALL_EXP: "CallExpression",
  UNARY_EXP: "UnaryExpression",
  BINARY_EXP: "BinaryExpression",
  ARRAY_EXP: "ArrayExpression",
  TAB_CODE: 9,
  LF_CODE: 10,
  CR_CODE: 13,
  SPACE_CODE: 32,
  PERIOD_CODE: 46,
  // '.'
  COMMA_CODE: 44,
  // ','
  SQUOTE_CODE: 39,
  // single quote
  DQUOTE_CODE: 34,
  // double quotes
  OPAREN_CODE: 40,
  // (
  CPAREN_CODE: 41,
  // )
  OBRACK_CODE: 91,
  // [
  CBRACK_CODE: 93,
  // ]
  QUMARK_CODE: 63,
  // ?
  SEMCOL_CODE: 59,
  // ;
  COLON_CODE: 58,
  // :
  // Operations
  // ----------
  // Use a quickly-accessible map to store all of the unary operators
  // Values are set to `1` (it really doesn't matter)
  unary_ops: {
    "-": 1,
    "!": 1,
    "~": 1,
    "+": 1
  },
  // Also use a map for the binary operations but set their values to their
  // binary precedence for quick reference (higher number = higher precedence)
  // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  binary_ops: {
    "||": 1,
    "??": 1,
    "&&": 2,
    "|": 3,
    "^": 4,
    "&": 5,
    "==": 6,
    "!=": 6,
    "===": 6,
    "!==": 6,
    "<": 7,
    ">": 7,
    "<=": 7,
    ">=": 7,
    "<<": 8,
    ">>": 8,
    ">>>": 8,
    "+": 9,
    "-": 9,
    "*": 10,
    "/": 10,
    "%": 10,
    "**": 11
  },
  // sets specific binary_ops as right-associative
  right_associative: /* @__PURE__ */ new Set(["**"]),
  // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
  additional_identifier_chars: /* @__PURE__ */ new Set(["$", "_"]),
  // Literals
  // ----------
  // Store the values to return for the various literals we may encounter
  literals: {
    true: !0,
    false: !1,
    null: null
  },
  // Except for `this`, which is special. This could be changed to something like `'self'` as well
  this_str: "this"
});
g.max_unop_len = g.getMaxKeyLen(g.unary_ops);
g.max_binop_len = g.getMaxKeyLen(g.binary_ops);
const f = (o) => new g(o).parse(), I = Object.getOwnPropertyNames(class {
});
Object.getOwnPropertyNames(g).filter((o) => !I.includes(o) && f[o] === void 0).forEach((o) => {
  f[o] = g[o];
});
f.Jsep = g;
const R = "ConditionalExpression";
var T = {
  name: "ternary",
  init(o) {
    o.hooks.add("after-expression", function(n) {
      if (n.node && this.code === o.QUMARK_CODE) {
        this.index++;
        const t = n.node, a = this.gobbleExpression();
        if (a || this.throwError("Expected expression"), this.gobbleSpaces(), this.code === o.COLON_CODE) {
          this.index++;
          const r = this.gobbleExpression();
          if (r || this.throwError("Expected expression"), n.node = {
            type: R,
            test: t,
            consequent: a,
            alternate: r
          }, t.operator && o.binary_ops[t.operator] <= 0.9) {
            let i = t;
            for (; i.right.operator && o.binary_ops[i.right.operator] <= 0.9; )
              i = i.right;
            n.node.test = i.right, i.right = n.node, n.node = t;
          }
        } else
          this.throwError("Expected :");
      }
    });
  }
};
f.plugins.register(T);
const A = 47, L = 92;
var U = {
  name: "regex",
  init(o) {
    o.hooks.add("gobble-token", function(n) {
      if (this.code === A) {
        const t = ++this.index;
        let a = !1;
        for (; this.index < this.expr.length; ) {
          if (this.code === A && !a) {
            const r = this.expr.slice(t, this.index);
            let i = "";
            for (; ++this.index < this.expr.length; ) {
              const s = this.code;
              if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57)
                i += this.char;
              else
                break;
            }
            let b;
            try {
              b = new RegExp(r, i);
            } catch (s) {
              this.throwError(s.message);
            }
            return n.node = {
              type: o.LITERAL,
              value: b,
              raw: this.expr.slice(t - 1, this.index)
            }, n.node = this.gobbleTokenProperty(n.node), n.node;
          }
          this.code === o.OBRACK_CODE ? a = !0 : a && this.code === o.CBRACK_CODE && (a = !1), this.index += this.code === L ? 2 : 1;
        }
        this.throwError("Unclosed Regex");
      }
    });
  }
};
const C = 43, N = 45, E = {
  name: "assignment",
  assignmentOperators: /* @__PURE__ */ new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "||=", "&&=", "??="]),
  updateOperators: [C, N],
  assignmentPrecedence: 0.9,
  init(o) {
    const e = [o.IDENTIFIER, o.MEMBER_EXP];
    E.assignmentOperators.forEach((t) => o.addBinaryOp(t, E.assignmentPrecedence, !0)), o.hooks.add("gobble-token", function(a) {
      const r = this.code;
      E.updateOperators.some((i) => i === r && i === this.expr.charCodeAt(this.index + 1)) && (this.index += 2, a.node = {
        type: "UpdateExpression",
        operator: r === C ? "++" : "--",
        argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
        prefix: !0
      }, (!a.node.argument || !e.includes(a.node.argument.type)) && this.throwError(`Unexpected ${a.node.operator}`));
    }), o.hooks.add("after-token", function(a) {
      if (a.node) {
        const r = this.code;
        E.updateOperators.some((i) => i === r && i === this.expr.charCodeAt(this.index + 1)) && (e.includes(a.node.type) || this.throwError(`Unexpected ${a.node.operator}`), this.index += 2, a.node = {
          type: "UpdateExpression",
          operator: r === C ? "++" : "--",
          argument: a.node,
          prefix: !1
        });
      }
    }), o.hooks.add("after-expression", function(a) {
      a.node && n(a.node);
    });
    function n(t) {
      E.assignmentOperators.has(t.operator) ? (t.type = "AssignmentExpression", n(t.left), n(t.right)) : t.operator || Object.values(t).forEach((a) => {
        a && typeof a == "object" && n(a);
      });
    }
  }
};
f.plugins.register(U, E);
f.addUnaryOp("typeof");
f.addLiteral("null", null);
f.addLiteral("undefined", void 0);
const $ = /* @__PURE__ */ new Set(["constructor", "__proto__", "__defineGetter__", "__defineSetter__"]), _ = {
  /**
   * @param {jsep.Expression} ast
   * @param {Record<string, any>} subs
   */
  evalAst(o, e) {
    switch (o.type) {
      case "BinaryExpression":
      case "LogicalExpression":
        return _.evalBinaryExpression(o, e);
      case "Compound":
        return _.evalCompound(o, e);
      case "ConditionalExpression":
        return _.evalConditionalExpression(o, e);
      case "Identifier":
        return _.evalIdentifier(o, e);
      case "Literal":
        return _.evalLiteral(o, e);
      case "MemberExpression":
        return _.evalMemberExpression(o, e);
      case "UnaryExpression":
        return _.evalUnaryExpression(o, e);
      case "ArrayExpression":
        return _.evalArrayExpression(o, e);
      case "CallExpression":
        return _.evalCallExpression(o, e);
      case "AssignmentExpression":
        return _.evalAssignmentExpression(o, e);
      default:
        throw SyntaxError("Unexpected expression", o);
    }
  },
  evalBinaryExpression(o, e) {
    return {
      "||": (t, a) => t || a(),
      "&&": (t, a) => t && a(),
      "|": (t, a) => t | a(),
      "^": (t, a) => t ^ a(),
      "&": (t, a) => t & a(),
      // eslint-disable-next-line eqeqeq -- API
      "==": (t, a) => t == a(),
      // eslint-disable-next-line eqeqeq -- API
      "!=": (t, a) => t != a(),
      "===": (t, a) => t === a(),
      "!==": (t, a) => t !== a(),
      "<": (t, a) => t < a(),
      ">": (t, a) => t > a(),
      "<=": (t, a) => t <= a(),
      ">=": (t, a) => t >= a(),
      "<<": (t, a) => t << a(),
      ">>": (t, a) => t >> a(),
      ">>>": (t, a) => t >>> a(),
      "+": (t, a) => t + a(),
      "-": (t, a) => t - a(),
      "*": (t, a) => t * a(),
      "/": (t, a) => t / a(),
      "%": (t, a) => t % a()
    }[o.operator](_.evalAst(o.left, e), () => _.evalAst(o.right, e));
  },
  evalCompound(o, e) {
    let n;
    for (let t = 0; t < o.body.length; t++) {
      o.body[t].type === "Identifier" && ["var", "let", "const"].includes(o.body[t].name) && o.body[t + 1] && o.body[t + 1].type === "AssignmentExpression" && (t += 1);
      const a = o.body[t];
      n = _.evalAst(a, e);
    }
    return n;
  },
  evalConditionalExpression(o, e) {
    return _.evalAst(o.test, e) ? _.evalAst(o.consequent, e) : _.evalAst(o.alternate, e);
  },
  evalIdentifier(o, e) {
    if (Object.hasOwn(e, o.name))
      return e[o.name];
    throw ReferenceError(`${o.name} is not defined`);
  },
  evalLiteral(o) {
    return o.value;
  },
  evalMemberExpression(o, e) {
    const n = o.computed ? _.evalAst(o.property) : o.property.name, t = _.evalAst(o.object, e);
    if (t == null)
      throw TypeError(`Cannot read properties of ${t} (reading '${n}')`);
    if (!Object.hasOwn(t, n) && $.has(n))
      throw TypeError(`Cannot read properties of ${t} (reading '${n}')`);
    const a = t[n];
    return typeof a == "function" ? a.bind(t) : a;
  },
  evalUnaryExpression(o, e) {
    return {
      "-": (t) => -_.evalAst(t, e),
      "!": (t) => !_.evalAst(t, e),
      "~": (t) => ~_.evalAst(t, e),
      // eslint-disable-next-line no-implicit-coercion -- API
      "+": (t) => +_.evalAst(t, e),
      typeof: (t) => typeof _.evalAst(t, e)
    }[o.operator](o.argument);
  },
  evalArrayExpression(o, e) {
    return o.elements.map((n) => _.evalAst(n, e));
  },
  evalCallExpression(o, e) {
    const n = o.arguments.map((a) => _.evalAst(a, e));
    return _.evalAst(o.callee, e)(...n);
  },
  evalAssignmentExpression(o, e) {
    if (o.left.type !== "Identifier")
      throw SyntaxError("Invalid left-hand side in assignment");
    const n = o.left.name, t = _.evalAst(o.right, e);
    return e[n] = t, e[n];
  }
};
class M {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(e) {
    this.code = e, this.ast = f(this.code);
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(e) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return _.evalAst(this.ast, n);
  }
}
function p(o, e) {
  return o = o.slice(), o.push(e), o;
}
function w(o, e) {
  return e = e.slice(), e.unshift(o), e;
}
class j extends Error {
  /**
   * @param {AnyResult} value The evaluated scalar value
   */
  constructor(e) {
    super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'), this.avoidNew = !0, this.value = e, this.name = "NewError";
  }
}
function h(o, e, n, t, a) {
  if (!(this instanceof h))
    try {
      return new h(o, e, n, t, a);
    } catch (i) {
      if (!i.avoidNew)
        throw i;
      return i.value;
    }
  typeof o == "string" && (a = t, t = n, n = e, e = o, o = null);
  const r = o && typeof o == "object";
  if (o = o || {}, this.json = o.json || n, this.path = o.path || e, this.resultType = o.resultType || "value", this.flatten = o.flatten || !1, this.wrap = Object.hasOwn(o, "wrap") ? o.wrap : !0, this.sandbox = o.sandbox || {}, this.eval = o.eval === void 0 ? "safe" : o.eval, this.ignoreEvalErrors = typeof o.ignoreEvalErrors > "u" ? !1 : o.ignoreEvalErrors, this.parent = o.parent || null, this.parentProperty = o.parentProperty || null, this.callback = o.callback || t || null, this.otherTypeCallback = o.otherTypeCallback || a || function() {
    throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.");
  }, o.autostart !== !1) {
    const i = {
      path: r ? o.path : e
    };
    r ? "json" in o && (i.json = o.json) : i.json = n;
    const b = this.evaluate(i);
    if (!b || typeof b != "object")
      throw new j(b);
    return b;
  }
}
h.prototype.evaluate = function(o, e, n, t) {
  let a = this.parent, r = this.parentProperty, {
    flatten: i,
    wrap: b
  } = this;
  if (this.currResultType = this.resultType, this.currEval = this.eval, this.currSandbox = this.sandbox, n = n || this.callback, this.currOtherTypeCallback = t || this.otherTypeCallback, e = e || this.json, o = o || this.path, o && typeof o == "object" && !Array.isArray(o)) {
    if (!o.path && o.path !== "")
      throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
    if (!Object.hasOwn(o, "json"))
      throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
    ({
      json: e
    } = o), i = Object.hasOwn(o, "flatten") ? o.flatten : i, this.currResultType = Object.hasOwn(o, "resultType") ? o.resultType : this.currResultType, this.currSandbox = Object.hasOwn(o, "sandbox") ? o.sandbox : this.currSandbox, b = Object.hasOwn(o, "wrap") ? o.wrap : b, this.currEval = Object.hasOwn(o, "eval") ? o.eval : this.currEval, n = Object.hasOwn(o, "callback") ? o.callback : n, this.currOtherTypeCallback = Object.hasOwn(o, "otherTypeCallback") ? o.otherTypeCallback : this.currOtherTypeCallback, a = Object.hasOwn(o, "parent") ? o.parent : a, r = Object.hasOwn(o, "parentProperty") ? o.parentProperty : r, o = o.path;
  }
  if (a = a || null, r = r || null, Array.isArray(o) && (o = h.toPathString(o)), !o && o !== "" || !e)
    return;
  const s = h.toPathArray(o);
  s[0] === "$" && s.length > 1 && s.shift(), this._hasParentSelector = null;
  const u = this._trace(s, e, ["$"], a, r, n).filter(function(c) {
    return c && !c.isParentSelector;
  });
  return u.length ? !b && u.length === 1 && !u[0].hasArrExpr ? this._getPreferredOutput(u[0]) : u.reduce((c, y) => {
    const l = this._getPreferredOutput(y);
    return i && Array.isArray(l) ? c = c.concat(l) : c.push(l), c;
  }, []) : b ? [] : void 0;
};
h.prototype._getPreferredOutput = function(o) {
  const e = this.currResultType;
  switch (e) {
    case "all": {
      const n = Array.isArray(o.path) ? o.path : h.toPathArray(o.path);
      return o.pointer = h.toPointer(n), o.path = typeof o.path == "string" ? o.path : h.toPathString(o.path), o;
    }
    case "value":
    case "parent":
    case "parentProperty":
      return o[e];
    case "path":
      return h.toPathString(o[e]);
    case "pointer":
      return h.toPointer(o.path);
    default:
      throw new TypeError("Unknown result type");
  }
};
h.prototype._handleCallback = function(o, e, n) {
  if (e) {
    const t = this._getPreferredOutput(o);
    o.path = typeof o.path == "string" ? o.path : h.toPathString(o.path), e(t, n, o);
  }
};
h.prototype._trace = function(o, e, n, t, a, r, i, b) {
  let s;
  if (!o.length)
    return s = {
      path: n,
      value: e,
      parent: t,
      parentProperty: a,
      hasArrExpr: i
    }, this._handleCallback(s, r, "value"), s;
  const u = o[0], c = o.slice(1), y = [];
  function l(m) {
    Array.isArray(m) ? m.forEach((v) => {
      y.push(v);
    }) : y.push(m);
  }
  if ((typeof u != "string" || b) && e && Object.hasOwn(e, u))
    l(this._trace(c, e[u], p(n, u), e, u, r, i));
  else if (u === "*")
    this._walk(e, (m) => {
      l(this._trace(c, e[m], p(n, m), e, m, r, !0, !0));
    });
  else if (u === "..")
    l(this._trace(c, e, n, t, a, r, i)), this._walk(e, (m) => {
      typeof e[m] == "object" && l(this._trace(o.slice(), e[m], p(n, m), e, m, r, !0));
    });
  else {
    if (u === "^")
      return this._hasParentSelector = !0, {
        path: n.slice(0, -1),
        expr: c,
        isParentSelector: !0
      };
    if (u === "~")
      return s = {
        path: p(n, u),
        value: a,
        parent: t,
        parentProperty: null
      }, this._handleCallback(s, r, "property"), s;
    if (u === "$")
      l(this._trace(c, e, n, null, null, r, i));
    else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(u))
      l(this._slice(u, c, e, n, t, a, r));
    else if (u.indexOf("?(") === 0) {
      if (this.currEval === !1)
        throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
      const m = u.replace(/^\?\((.*?)\)$/u, "$1"), v = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(m);
      v ? this._walk(e, (d) => {
        const O = [v[2]], x = v[1] ? e[d][v[1]] : e[d];
        this._trace(O, x, n, t, a, r, !0).length > 0 && l(this._trace(c, e[d], p(n, d), e, d, r, !0));
      }) : this._walk(e, (d) => {
        this._eval(m, e[d], d, n, t, a) && l(this._trace(c, e[d], p(n, d), e, d, r, !0));
      });
    } else if (u[0] === "(") {
      if (this.currEval === !1)
        throw new Error("Eval [(expr)] prevented in JSONPath expression.");
      l(this._trace(w(this._eval(u, e, n.at(-1), n.slice(0, -1), t, a), c), e, n, t, a, r, i));
    } else if (u[0] === "@") {
      let m = !1;
      const v = u.slice(1, -2);
      switch (v) {
        case "scalar":
          (!e || !["object", "function"].includes(typeof e)) && (m = !0);
          break;
        case "boolean":
        case "string":
        case "undefined":
        case "function":
          typeof e === v && (m = !0);
          break;
        case "integer":
          Number.isFinite(e) && !(e % 1) && (m = !0);
          break;
        case "number":
          Number.isFinite(e) && (m = !0);
          break;
        case "nonFinite":
          typeof e == "number" && !Number.isFinite(e) && (m = !0);
          break;
        case "object":
          e && typeof e === v && (m = !0);
          break;
        case "array":
          Array.isArray(e) && (m = !0);
          break;
        case "other":
          m = this.currOtherTypeCallback(e, n, t, a);
          break;
        case "null":
          e === null && (m = !0);
          break;
        default:
          throw new TypeError("Unknown value type " + v);
      }
      if (m)
        return s = {
          path: n,
          value: e,
          parent: t,
          parentProperty: a
        }, this._handleCallback(s, r, "value"), s;
    } else if (u[0] === "`" && e && Object.hasOwn(e, u.slice(1))) {
      const m = u.slice(1);
      l(this._trace(c, e[m], p(n, m), e, m, r, i, !0));
    } else if (u.includes(",")) {
      const m = u.split(",");
      for (const v of m)
        l(this._trace(w(v, c), e, n, t, a, r, !0));
    } else !b && e && Object.hasOwn(e, u) && l(this._trace(c, e[u], p(n, u), e, u, r, i, !0));
  }
  if (this._hasParentSelector)
    for (let m = 0; m < y.length; m++) {
      const v = y[m];
      if (v && v.isParentSelector) {
        const d = this._trace(v.expr, e, v.path, t, a, r, i);
        if (Array.isArray(d)) {
          y[m] = d[0];
          const O = d.length;
          for (let x = 1; x < O; x++)
            m++, y.splice(m, 0, d[x]);
        } else
          y[m] = d;
      }
    }
  return y;
};
h.prototype._walk = function(o, e) {
  if (Array.isArray(o)) {
    const n = o.length;
    for (let t = 0; t < n; t++)
      e(t);
  } else o && typeof o == "object" && Object.keys(o).forEach((n) => {
    e(n);
  });
};
h.prototype._slice = function(o, e, n, t, a, r, i) {
  if (!Array.isArray(n))
    return;
  const b = n.length, s = o.split(":"), u = s[2] && Number.parseInt(s[2]) || 1;
  let c = s[0] && Number.parseInt(s[0]) || 0, y = s[1] && Number.parseInt(s[1]) || b;
  c = c < 0 ? Math.max(0, c + b) : Math.min(b, c), y = y < 0 ? Math.max(0, y + b) : Math.min(b, y);
  const l = [];
  for (let m = c; m < y; m += u)
    this._trace(w(m, e), n, t, a, r, i, !0).forEach((d) => {
      l.push(d);
    });
  return l;
};
h.prototype._eval = function(o, e, n, t, a, r) {
  this.currSandbox._$_parentProperty = r, this.currSandbox._$_parent = a, this.currSandbox._$_property = n, this.currSandbox._$_root = this.json, this.currSandbox._$_v = e;
  const i = o.includes("@path");
  i && (this.currSandbox._$_path = h.toPathString(t.concat([n])));
  const b = this.currEval + "Script:" + o;
  if (!h.cache[b]) {
    let s = o.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
    if (i && (s = s.replaceAll("@path", "_$_path")), this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
      h.cache[b] = new this.safeVm.Script(s);
    else if (this.currEval === "native")
      h.cache[b] = new this.vm.Script(s);
    else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
      const u = this.currEval;
      h.cache[b] = new u(s);
    } else if (typeof this.currEval == "function")
      h.cache[b] = {
        runInNewContext: (u) => this.currEval(s, u)
      };
    else
      throw new TypeError(`Unknown "eval" property "${this.currEval}"`);
  }
  try {
    return h.cache[b].runInNewContext(this.currSandbox);
  } catch (s) {
    if (this.ignoreEvalErrors)
      return !1;
    throw new Error("jsonPath: " + s.message + ": " + o);
  }
};
h.cache = {};
h.toPathString = function(o) {
  const e = o, n = e.length;
  let t = "$";
  for (let a = 1; a < n; a++)
    /^(~|\^|@.*?\(\))$/u.test(e[a]) || (t += /^[0-9*]+$/u.test(e[a]) ? "[" + e[a] + "]" : "['" + e[a] + "']");
  return t;
};
h.toPointer = function(o) {
  const e = o, n = e.length;
  let t = "";
  for (let a = 1; a < n; a++)
    /^(~|\^|@.*?\(\))$/u.test(e[a]) || (t += "/" + e[a].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
  return t;
};
h.toPathArray = function(o) {
  const {
    cache: e
  } = h;
  if (e[o])
    return e[o].concat();
  const n = [], a = o.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function(r, i) {
    return "[#" + (n.push(i) - 1) + "]";
  }).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function(r, i) {
    return "['" + i.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']";
  }).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function(r, i) {
    return ";" + i.split("").join(";") + ";";
  }).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(r) {
    const i = r.match(/#(\d+)/u);
    return !i || !i[1] ? r : n[i[1]];
  });
  return e[o] = a, e[o].concat();
};
h.prototype.safeVm = {
  Script: M
};
const B = function(o, e, n) {
  const t = o.length;
  for (let a = 0; a < t; a++) {
    const r = o[a];
    n(r) && e.push(o.splice(a--, 1)[0]);
  }
};
class K {
  /**
   * @param {string} expr Expression to evaluate
   */
  constructor(e) {
    this.code = e;
  }
  /**
   * @param {object} context Object whose items will be added
   *   to evaluation
   * @returns {EvaluatedResult} Result of evaluated code
   */
  runInNewContext(e) {
    let n = this.code;
    const t = Object.keys(e), a = [];
    B(t, a, (u) => typeof e[u] == "function");
    const r = t.map((u) => e[u]);
    n = a.reduce((u, c) => {
      let y = e[c].toString();
      return /function/u.test(y) || (y = "function " + y), "var " + c + "=" + y + ";" + u;
    }, "") + n, !/(['"])use strict\1/u.test(n) && !t.includes("arguments") && (n = "var arguments = undefined;" + n), n = n.replace(/;\s*$/u, "");
    const b = n.lastIndexOf(";"), s = b !== -1 ? n.slice(0, b + 1) + " return " + n.slice(b + 1) : " return " + n;
    return new Function(...t, s)(...r);
  }
}
h.prototype.vm = {
  Script: K
};
function F(o, e = {}) {
  if (!o || o.trim() === "") return [];
  const n = o.replace(/\s+/g, "").split("");
  if (n.length === 0) return [];
  const t = e.enable_over_match || !1, a = e.tsuchinoe_inu_flag || !1, r = e.tsuchinoto_mi_flag || !1, b = (e.range || "").match(/^(\d*)-(\d*)$/), s = b ? b[1] : "", u = b ? b[2] : "";
  let c = n.map((y) => a && (y === "戊" || y === "戌") ? "(@.match(/戊/) || @.match(/戌/))" : r && (y === "己" || y === "巳") ? "(@.match(/己/) || @.match(/巳/))" : `@.match(/${y}/)`).join(" && ");
  return c = `$.*[?(@property === "ambiguos" &&${c})]^`, h({ path: c, json: P }).reduce((y, l) => {
    const m = parseInt(l.year);
    if (s && parseInt(s) > m || u && parseInt(u) < m || !t && l.over_match) return y;
    const v = Object.assign({}, l);
    return delete v.ambiguos, v.year = m, y.push(v), y;
  }, []);
}
export {
  F as ambiguousSearch
};
