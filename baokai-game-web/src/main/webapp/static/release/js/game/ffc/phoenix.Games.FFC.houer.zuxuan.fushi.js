!function(a,b){var c={name:"houer.zuxuan.fushi",tips:"后二组选复式玩法提示",exampleTip:"后二组选复式范例"},d=a.Games,e=d.FFC.getInstance(),f={init:function(){var a=this;a.getHotCold(a.getGameMethodName(),"currentFre","lost"),a.initHotColdEvent()},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},makePostParameter:function(a){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b].join());return d.join(",")},getLottery:function(){var a=this,b=a.getBallData()[0],c=0,d=b.length,e=!0,f=[],g=[],h=0;for(c=0;d>c;c++)b[c]>0&&(h++,f.push(c));return h>1&&(e=!1),e?(a.isBallsComplete=!1,[]):(a.isBallsComplete=!0,g=a.combine(f,2))},randomNum:function(){var a=this,b=[],c=[],e=null,f=(a.getBallData()[0].length,[]);return b.push(a.removeSame(f)),f.push(b),b.push(a.removeSame(f)),b.sort(function(a,b){return a-b}),c=[[b[0],b[1]]],e={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:[b],lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},e.amountText=d.getCurrentGameStatistics().formatMoney(e.num*e.moneyUnit*e.multiple*e.onePrice),e}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);