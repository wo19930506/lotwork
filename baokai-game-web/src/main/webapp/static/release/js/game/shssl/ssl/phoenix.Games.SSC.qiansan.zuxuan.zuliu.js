!function(a,b){var c={name:"qiansan.zuxuan.zuliu"},d=a.Games,e=a.Games.SSC.getInstance(),f={init:function(){},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=0;d>c;c++)b[c]>0&&e++;return a.isBallsComplete=e>=3?!0:!1},makePostParameter:function(a){for(var b=[],c=a.length,d=0;c>d;d++)b=b.concat(a[d].join(","));return b.join(",")},getLottery:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=[];d>c;c++)b[c]>0&&e.push(c);return a.checkBallIsComplete()?a.combine(e,3):[]},checkRandomBets:function(a,b){for(var c=this,e="undefined"==typeof a?!0:!1,a=a||{},f=[],b=b||0,g=(c.getBallData().length,c.getBallData()[0].length,d.getCurrentGameOrder().getTotal().orders),h=0;3>h;h++)f[h]=[c.removeSame(f)];if(f.sort(function(a,b){return a-b}),Number(b)>Number(c.getRandomBetsNum()))return f;if(e)for(var i=0;i<g.length;i++)if(g[i].type==c.defConfig.name){var j=g[i].original.join("");a[j]=j}return a[f.join("")]?(b++,arguments.callee.call(c,a,b)):f},randomNum:function(){{var a=this,b=[],c=[],e=null;a.getBallData(),a.getBallData()[0].length,a.defConfig.name}return b=a.checkRandomBets(),c=[b],e={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:b,lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},e.amountText=d.getCurrentGameStatistics().formatMoney(e.num*e.moneyUnit*e.multiple*e.onePrice),e}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);