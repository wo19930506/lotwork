!function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n={gameType:"LLN115",gameTypeCn:"11选5"};!function(){var a={title:"复式",name:"fushi",parent:"renxuanyizhongyi",mode:"xuanyi"},b={title:"单式",name:"danshi",parent:"renxuanyizhongyi",mode:"xuanyi"},c={title:"复式",name:"fushi",parent:"dingweidan",mode:"xuanyi"},d={title:"复式",name:"fushi",parent:"qiansanyimabudingwei",mode:"xuanyi"},f={title:"任选一中一",name:"renxuanyizhongyi",parent:"xuanyi",childs:[a,b]},g={title:"定位胆",name:"dingweidan",parent:"xuanyi",childs:[c]},h={title:"前三一码不定位",name:"qiansanyimabudingwei",parent:"xuanyi",childs:[d]};e={title:"选一",name:"xuanyi",childs:[f,g,h]}}(),function(){var a={title:"复式",name:"renxuanfushi",parent:"renxuanerzhonger",mode:"xuaner"},b={title:"单式",name:"renxuandanshi",parent:"renxuanerzhonger",mode:"xuaner"},c={title:"胆拖",name:"renxuandantuo",parent:"renxuanerzhonger",mode:"xuaner"},d={title:"复式",name:"zhixuanfushi",parent:"qianerzhixuan",mode:"xuaner"},e={title:"单式",name:"zhixuandanshi",parent:"qianerzhixuan",mode:"xuaner"},g={title:"复式",name:"zuxuanfushi",parent:"qianerzuxuan",mode:"xuaner"},h={title:"单式",name:"zuxuandanshi",parent:"qianerzuxuan",mode:"xuaner"},i={title:"胆拖",name:"zuxuandantuo",parent:"qianerzuxuan",mode:"xuaner"},j={title:"任选二中二",name:"renxuanerzhonger",parent:"xuaner",childs:[a,b,c]},k={title:"前二直选",name:"qianerzhixuan",parent:"xuaner",childs:[d,e]},l={title:"前二组选",name:"qianerzuxuan",parent:"xuaner",childs:[g,h,i]};f={title:"选二",name:"xuaner",childs:[j,k,l]}}(),function(){var a={title:"复式",name:"renxuanfushi",parent:"renxuansanzhongsan",mode:"xuansan"},b={title:"单式",name:"renxuandanshi",parent:"renxuansanzhongsan",mode:"xuansan"},c={title:"胆拖",name:"renxuandantuo",parent:"renxuansanzhongsan",mode:"xuansan"},d={title:"复式",name:"zhixuanfushi",parent:"qiansanzhixuan",mode:"xuansan"},e={title:"单式",name:"zhixuandanshi",parent:"qiansanzhixuan",mode:"xuansan"},f={title:"复式",name:"zuxuanfushi",parent:"qiansanzuxuan",mode:"xuansan"},h={title:"单式",name:"zuxuandanshi",parent:"qiansanzuxuan",mode:"xuansan"},i={title:"胆拖",name:"zuxuandantuo",parent:"qiansanzuxuan",mode:"xuansan"},j={title:"任选三中三",name:"renxuansanzhongsan",parent:"xuansan",childs:[a,b,c]},k={title:"前三直选",name:"qiansanzhixuan",parent:"xuansan",childs:[d,e]},l={title:"前三组选",name:"qiansanzuxuan",parent:"xuansan",childs:[f,h,i]};g={title:"选三",name:"xuansan",childs:[j,k,l]}}(),function(){var a={title:"复式",name:"fushi",parent:"renxuansizhongsi",mode:"xuansi"},b={title:"单式",name:"danshi",parent:"renxuansizhongsi",mode:"xuansi"},c={title:"胆拖",name:"dantuo",parent:"renxuansizhongsi",mode:"xuansi"},d={title:"任选四中四",name:"renxuansizhongsi",parent:"xuansi",childs:[a,b,c]};h={title:"选四",name:"xuansi",childs:[d]}}(),function(){var a={title:"复式",name:"fushi",parent:"renxuanwuzhongwu",mode:"xuanwu"},b={title:"单式",name:"danshi",parent:"renxuanwuzhongwu",mode:"xuanwu"},c={title:"胆拖",name:"dantuo",parent:"renxuanwuzhongwu",mode:"xuanwu"},d={title:"任选五中五",name:"renxuanwuzhongwu",parent:"xuanwu",childs:[a,b,c]};i={title:"选五",name:"xuanwu",childs:[d]}}(),function(){var a={title:"复式",name:"fushi",parent:"renxuanliuzhongwu",mode:"xuanliu"},b={title:"单式",name:"danshi",parent:"renxuanliuzhongwu",mode:"xuanliu"},c={title:"胆拖",name:"dantuo",parent:"renxuanliuzhongwu",mode:"xuanliu"},d={title:"任选六中五",name:"renxuanliuzhongwu",parent:"xuanliu",childs:[a,b,c]};j={title:"选六",name:"xuanliu",childs:[d]}}(),function(){var a={title:"复式",name:"fushi",parent:"renxuanqizhongwu",mode:"xuanqi"},b={title:"单式",name:"danshi",parent:"renxuanqizhongwu",mode:"xuanqi"},c={title:"胆拖",name:"dantuo",parent:"renxuanqizhongwu",mode:"xuanqi"},d={title:"任选七中五",name:"renxuanqizhongwu",parent:"xuanqi",childs:[a,b,c]};k={title:"选七",name:"xuanqi",childs:[d]}}(),function(){var a={title:"复式",name:"fushi",parent:"renxuanbazhongwu",mode:"xuanba"},b={title:"单式",name:"danshi",parent:"renxuanbazhongwu",mode:"xuanba"},c={title:"胆拖",name:"dantuo",parent:"renxuanbazhongwu",mode:"xuanba"},d={title:"任选八中五",name:"renxuanbazhongwu",parent:"xuanba",childs:[a,b,c]};l={title:"选八",name:"xuanba",childs:[d]}}(),function(){var a={title:"定单双",name:"dingdanshuang",parent:"normal",mode:"quwei"},b={title:"猜中位",name:"caizhongwei",parent:"normal",mode:"quwei"},c={title:"趣味",name:"normal",parent:"quwei",childs:[a,b]};m={title:"趣味",name:"quwei",childs:[c]}}();var o={init:function(){var a=this;a.types=[e,f,g,h,i,j,k,l,m]},getTypes:function(){return this.types},getGameTypeCn:function(){return this.defConfig.gameTypeCn},getTitleByName:function(a){for(var b,c,d,e,f=this,g=a.split("."),h=g.length,i=f.types,j=0,k=i.length,l=[],m=[];k>j;j++)if(i[j].name==g[0]){if(!(h>1&&i[j].childs.length>0))return m;for(l=i[j].childs,c=l.length,b=0;c>b;b++)if(l[b].name==g[1]){if(m.push(l[b].title.replace(/&nbsp;/g,"")),!(h>2&&l[b].childs.length>0))return m;for(l=l[b].childs,e=l.length,d=0;e>d;d++)if(l[d].name==g[2])return m.push(l[d].title.replace(/&nbsp;/g,"")),m}}return""}},p=a.Class(o,c);p.defConfig=n,p.getInstance=function(a){return d||(d=new p(a))},a.Games.LLN115[b]=p}(phoenix,"Config",phoenix.Event);