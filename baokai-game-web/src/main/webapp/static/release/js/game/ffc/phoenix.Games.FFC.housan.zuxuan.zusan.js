!function(a,b){var c={name:"housan.zuxuan.zusan"},d=a.Games,e=a.Games.FFC.getInstance(),f={init:function(){},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},makePostParameter:function(a){for(var b=[],c=a.length,d=0;c>d;d++)b=b.concat(a[d].join(","));return b.join("")},checkBallIsComplete:function(){for(var a=this,b=a.getBallData(),c=0,d=b[0].length,e=0;d>c;c++)b[0][c]>0&&e++;return a.isBallsComplete=e>=2?!0:!1},getLottery:function(){var a=this,b=a.getBallData(),c=0,d=b[0].length,e=[],f=[],g=[];if(arr=[],nr=new Array,a.checkBallIsComplete()){for(;d>c;c++)b[0][c]>0&&arr.push(c);for(var h=0;h<arr.length;h++)f=[],e=arr.concat(),f.push([[arr[h],arr[h]].join("")]),e.splice(h,1),f.push(e),g=g.concat(a.combination(f));for(var i=0;i<g.length;i++)g[i]=g[i].join("").split("");return g}return[]},getLotteryOriginal:function(a){for(var b=a,c=this,d=c.getBallData(),e=(d[0].length,[]),f=[],g=[],h=0;h<b.length;h++)f=[],e=b.concat(),f.push([[b[h],b[h]].join("")]),e.splice(h,1),f.push(e),g=g.concat(c.combination(f));for(var i=0;i<g.length;i++)g[i]=g[i].join("").split("");return g},removeSame:function(a){var b,c=0,d=this,e=this.getBallData()[0].length;for(len=a.length,b=Math.floor(Math.random()*e);c<a.length;c++)if(b==a[c])return arguments.callee.call(d,a);return b},randomNum:function(){var a=this,b=0,c=[],e=[],f=null;for(a.getBallData(),a.getBallData()[0].length,a.defConfig.name;2>b;b++)c[b]=a.removeSame(c);return c.sort(function(a,b){return a>b?1:-1}),e=a.getLotteryOriginal(c),f={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:[c],lotterys:e,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:e.length},f.amountText=d.getCurrentGameStatistics().formatMoney(f.num*f.moneyUnit*f.multiple*f.onePrice),f}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);