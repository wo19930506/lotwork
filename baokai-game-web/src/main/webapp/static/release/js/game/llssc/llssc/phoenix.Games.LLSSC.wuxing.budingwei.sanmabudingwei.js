!function(a,b){var c={name:"wuxing.budingwei.sanmabudingwei"},d=a.Games,e=a.Games.LLSSC.getInstance(),f={init:function(){},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=0;d>c;c++)b[c]>0&&e++;return a.isBallsComplete=e>=3?!0:!1},getLottery:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=[];d>c;c++)b[c]>0&&e.push(c);return a.checkBallIsComplete()?a.combine(e,3):[]},makePostParameter:function(a){for(var b=[],c=a.length,d=0;c>d;d++)b=b.concat(a[d].join(","));return b.join("")},randomNum:function(){for(var a,b=this,c=0,e=[],f=[],g=(b.getBallData()[0].length,[]);3>c;c++)a=b.removeSame(g),e=e.concat(a),g.push(a);return e.sort(function(a,b){return a-b}),f.push([e[0],e[1],e[2]]),original=[[f[0][0],f[0][1],f[0][2]]],order={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:original,lotterys:f,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:f.length},order.amountText=d.getCurrentGameStatistics().formatMoney(order.num*order.moneyUnit*order.multiple*order.onePrice),order}},g=[];g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a></li>")}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);