!function(a,b){var c={name:"housan.zuxuan.zusandanshi",UIContainer:"#J-balls-main-panel",exampleText:"001<br />114<br />225"},d=a.Games,e=d.SSC.getInstance(),f={init:function(){var a=this;setTimeout(function(){a.initFrame()},25)},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},checkNumSameIndex:function(a,b){for(var c,d=this,e=a.length>0?a:[],f=0;f<e.length;f++)if(d.arrIndexOf(e[f],e)==b){c=!0;break}return c||!1},checkBallIsComplete:function(a){var b=this,c=0,d=[];if(b.isFirstAdd)for(b.aData=[],b.sameData=[],b.errorData=[],b.tData=[],b.vData=[],b.vDataBack={},b.aDataBack={},b.tDataBack={},b.sameDataBack={},b.errorDataBack={},d=b.iterator(b.filterLotters(a))||[];c<d.length;c++){var e,f,g;f=d[c].split(""),e=d[c].split("").sort(function(a,b){return a-b}),g=e.join(""),b.defConfig.checkNum.test(g)&&g.length==b.balls.length&&b.checkNumSameIndex(g,2)?(b.vDataBack[g]?b.sameData.push(f):b.tData.push(e),b.vDataBack[g]=f,b.vData.push(f)):(b.errorDataBack[g]?b.sameData.push(f):b.errorData.push(f),b.errorDataBack[g]=f),b.aDataBack[g]?"":b.aData.push(f),b.aDataBack[g]=f}return b.vData.length>0?(b.isBallsComplete=!0,b.isFirstAdd?b.vData:b.tData.length>0?b.tData:[]):(b.isBallsComplete=!1,[])},randomNum:function(){{var a=this,b=0,c=[],e=[],f=null,g=[];a.getBallData(),a.getBallData().length,a.getBallData()[0].length,a.defConfig.name}for(a.addRanNumTag();2>b;b++){var h=a.removeSameNum(c);1>b?c.push(h,h):c.push(h)}return c.sort(function(a,b){return a>b?1:-1}),g=[[c.join(",")],[],[]],e.push(c),f={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:g,lotterys:e,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:e.length},f.amountText=d.getCurrentGameStatistics().formatMoney(f.num*f.moneyUnit*f.multiple*f.onePrice),f}},g=a.Class(f,b);g.defConfig=c,e[c.name]=new g}(phoenix,phoenix.Games.SSC.Danshi);