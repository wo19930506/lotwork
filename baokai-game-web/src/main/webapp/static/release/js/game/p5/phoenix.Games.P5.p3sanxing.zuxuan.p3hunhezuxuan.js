!function(a,b){var c={name:"p3sanxing.zuxuan.p3hunhezuxuan",UIContainer:"#J-balls-main-panel",exampleText:"113 264<br />223 184<br />334 270<br />122 629<br />118 235"},d=a.Games,e=d.P5.getInstance(),f={init:function(){var a=this;setTimeout(function(){a.initFrame()},25)},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},checkNumSameIndex:function(a,b){for(var c,d=this,e=a.length>0?a:[],f=0;f<e.length;f++)if(d.arrIndexOf(e[f],e)==b){c=!0;break}return c||!1},checkBallIsComplete:function(a){var b=this,c=0,d=[];if(b.isFirstAdd)for(b.aData=[],b.vData=[],b.sameData=[],b.errorData=[],b.tData=[],b.vDataBack={},b.aDataBack={},b.tDataBack={},b.sameDataBack={},b.errorDataBack={},d=b.iterator(b.filterLotters(a))||[];c<d.length;c++){var e,f;e=d[c].split("").sort(function(a,b){return a-b}),f=e.join(""),b.defConfig.checkNum.test(f)&&f.length==b.balls.length&&!b.checkNumSameIndex(f,3)?(b.vDataBack[f]?b.sameData.push(e):b.tData.push(e),b.vDataBack[f]=e,b.vData.push(e)):(b.errorDataBack[f]?b.sameData.push(e):b.errorData.push(e),b.errorDataBack[f]=e),b.aDataBack[f]?"":b.aData.push(e),b.aDataBack[f]=e}return b.vData.length>0?(b.isBallsComplete=!0,b.isFirstAdd?b.vData:b.tData.length>0?b.tData:[]):(b.isBallsComplete=!1,[])},createRandomNum:function(){for(var a=this,b=0,c=[],d=a.getBallData().length,e=a.getBallData()[0].length;d>b;b++)c[b]=2==b?a.removeSameNum(c):Math.floor(Math.random()*e);return c.sort(function(a,b){return a>b?1:-1}),c},randomNum:function(){{var a=this,b=[],c=[],e=null,f=[];a.getBallData(),a.getBallData().length,a.getBallData()[0].length,a.defConfig.name}return a.addRanNumTag(),b=a.checkRandomBets(),f=[[b.join(",")],[],[]],c.push(b),e={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:f,lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},e.amountText=d.getCurrentGameStatistics().formatMoney(e.num*e.moneyUnit*e.multiple*e.onePrice),e}},g=a.Class(f,b);g.defConfig=c,e[c.name]=new g}(phoenix,phoenix.Games.P5.Danshi);