!function(a,b){var c={name:"wuxing.zuxuan.zuxuan60"},d=a.Games,e=a.Games.LLSSC.getInstance(),f={init:function(){},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData(),c=0,d=b[0].length,e=0,f=0;d>c;c++)b[0][c]>0&&f++,b[1][c]>0&&e++;return a.isBallsComplete=e>=3&&f>=1?!0:!1},getLottery:function(){var a=this,b=a.getBallData(),c=0,d=b[1].length,e=[];if(arr=[],nr=new Array,a.checkBallIsComplete()){for(;d>c;c++)b[1][c]>0&&arr.push(c);e=a.combine(arr,3);for(var c=0;c<b[0].length;c++)if(1==b[0][c])for(var f=0;f<e.length;f++)-1==a.arrIndexOf(c,e[f])&&nr.push(e[f].concat([c,c]));return nr}return[]},removeSame:function(a){var b,c=0,d=this,e=this.getBallData()[0].length;for(len=a.length,b=Math.floor(Math.random()*e);c<a.length;c++)if(b==a[c])return arguments.callee.call(d,a);return b},makePostParameter:function(a){var b,c=[],d=[],e=[],f=0;for(b=a[0].length;b>f;f++)d.push(a[0][f]);for(f=0,b=a[1].length;b>f;f++)e.push(a[1][f]);return c=[d.join(""),e.join("")],c.join(",")},checkRandomBets:function(a,b){for(var c=this,e="undefined"==typeof a?!0:!1,a=a||{},f=[],b=b||0,g="",h=[],i=[],j=(c.getBallData().length,c.getBallData()[0].length,d.getCurrentGameOrder().getTotal().orders),k=0;4>k;k++)1>k?(g=c.removeSame(h),f=f.concat(g),h.push(g)):(g=c.removeSame(h),i=i.concat(g),h.push(g));if(i.sort(function(a,b){return a-b}),f=[f,i],Number(b)>Number(c.getRandomBetsNum()))return f;if(e)for(var l=0;l<j.length;l++)if(j[l].type==c.defConfig.name){var m=j[l].original.join("");a[m]=m}return a[f.join("")]?(b++,arguments.callee.call(c,a,b)):f},randomNum:function(){{var a=this,b=[],c=[];a.getBallData()[0].length}return b=a.checkRandomBets(),c=[[b[0],b[0],[b[1][0]],[b[1][1]],[b[1][2]]]],order={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:b,lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},order.amountText=d.getCurrentGameStatistics().formatMoney(order.num*order.moneyUnit*order.multiple*order.onePrice),order}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<div class="ball-title">'),h.push("<strong><#=title#>位</strong>"),h.push("<span></span>"),h.push("</div>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each(["二重号","单号"],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);