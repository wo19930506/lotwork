!function(a,b){var c={name:"xuaner.qianerzuxuan.zuxuandanshi",tips:"",exampleTip:"",exampleText:"03 04<br />04 05 <br />01 04  <br />01 06  <br />01 03 "},d=a.Games,e=d.LLN115.getInstance(),f={init:function(){var a=this;setTimeout(function(){a.initFrame()},25)},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},getOriginal:function(){var a=this,b=a.getBallData(),c=b.length,d=b[0].length;for(i=0,j=0,row=[],tData=a.getTdata(),data=a.getHtml(),result=[];c>i;i++){for(row=[],j=0;d>j;j++)b[i][j]>0&&row.push(j);result.push(row)}return tData.length>0&&(result[0][0]=a.getTdata().join(",")),result},createRandomNum:function(){for(var a=this,b=[],c=[],d=[],e="",f=a.getBallData().length,g=a.getBallData()[0].length,h=g-1;h>=0;h--)h>0&&b.push(h);for(var i=0;f>i;i++){var j=Math.floor(Math.random()*b.length);d.push(Number(b[j])),b.splice(j,1)}d.sort(function(a,b){return a-b});for(var k=0;k<d.length;k++){var l=d[k];e+=10>l?" 0"+l:" "+l}return c.push([$.trim(e)]),c},randomNum:function(){var a=this,b=[],c=null,e=(a.getBallData(),a.defConfig.name,[]),f=[];return a.addRanNumTag(),b=a.checkRandomBets(),f=[[b.join("")],[]],e=b,c={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:f,lotterys:e,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:e.length},c.amountText=d.getCurrentGameStatistics().formatMoney(c.num*c.moneyUnit*c.multiple*c.onePrice),c},checkBallIsComplete:function(a){var b=this,c=0,d=999,e=[],f=[];for(b.aData=[],b.vData=[],b.sameData=[],b.errorData=[],b.tData=[],f=b.iterator(b.filterLotters(a),b.defConfig.filtration)||[],c=0;c<f.length;c++)d=$.trim(f[c]),e=d.match(/\d{2}/g),/^\d{2}[\s]\d{2}$/.test(d)&&Number(e[0])>0&&Number(e[0])<12&&Number(e[1])>0&&Number(e[1])<12&&Number(e[0])!=Number(e[1])?(d=[e[0],e[1]].sort(function(a,b){return a-b}),d=d.join(" "),b.checkResult(d,b.tData)?b.tData.push(d):b.checkResult(d,b.sameData)&&b.sameData.push(d),b.vData.push(d)):b.checkResult(d,b.errorData)?b.errorData.push(d):b.sameData.push(d),b.checkResult(d,b.aData)&&b.aData.push(d);return b.tData.length>0?(b.isBallsComplete=!0,b.isFirstAdd?b.vData:b.tData):(b.isBallsComplete=!1,[])}},g=a.Class(f,b);g.defConfig=c,e[c.name]=new g}(phoenix,phoenix.Games.LLN115.Danshi);