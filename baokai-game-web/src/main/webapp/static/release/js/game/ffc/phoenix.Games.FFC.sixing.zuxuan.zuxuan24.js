!function(a,b){var c={name:"sixing.zuxuan.zuxuan24"},d=a.Games,e=a.Games.FFC.getInstance(),f={init:function(){},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=0;d>c;c++)b[c]>0&&e++;return a.isBallsComplete=e>=4?!0:!1},getLottery:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=[];d>c;c++)b[c]>0&&e.push(c);return a.checkBallIsComplete()?a.combine(e,4):[]},makePostParameter:function(a){for(var b=[],c=a.length,d=0;c>d;d++)b=b.concat(a[d].join(","));return b.join(",")},checkRandomBets:function(a,b){for(var c=this,e="undefined"==typeof a?!0:!1,a=a||{},f=[],b=b||0,g="",h=[],i=(c.getBallData().length,c.getBallData()[0].length,d.getCurrentGameOrder().getTotal().orders),j=0;4>j;j++)g=c.removeSame(h),f=f.concat(g),h.push(g);if(f.sort(function(a,b){return a-b}),f=[f[0],f[1],f[2],f[3]],Number(b)>Number(c.getRandomBetsNum()))return f;if(e)for(var k=0;k<i.length;k++)if(i[k].type==c.defConfig.name){var l=i[k].original.join("");a[l]=l}return a[f.join(",")]?(b++,arguments.callee.call(c,a,b)):f},randomNum:function(){{var a=this,b=[],c=[];a.getBallData()[0].length}return b=a.checkRandomBets(),c.push([[b[0]],[b[1]],[b[2]],[b[3]]]),order={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:[b],lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},order.amountText=d.getCurrentGameStatistics().formatMoney(order.num*order.moneyUnit*order.multiple*order.onePrice),order}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);