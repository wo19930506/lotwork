!function(a,b){var c={name:"xuansan.renxuansanzhongsan.renxuanfushi",tips:"从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",exampleTip:"选一任选一中一复式"},d=a.Games,e=a.Games.N115.getInstance(),f={init:function(){var a=this;a.initHotColdEvent()},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=0;d>c;c++)b[c]>0&&e++;return a.isBallsComplete=e>=3?!0:!1},getLottery:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=[];d>c;c++)b[c]>0&&e.push(c);return a.checkBallIsComplete()?a.combine(e,3):[]},makePostParameter:function(a){for(var b=[],c=[],d=[],e=a.length,f=0;e>f;f++){d=[],c=a[f];for(var g=0;g<c.length;g++)d.push(Number(c[g])<10?"0"+c[g]:c[g]);b.push(d.join(","))}return b.join(",")},createRandomNum:function(){for(var a=this,b=[],c=[],d=(a.getBallData().length,a.getBallData()[0].length),e=d-1;e>=0;e--)e>0&&c.push(e);for(var f=0;3>f;f++){var g=Math.floor(Math.random()*c.length);b.push(c[g]),c.splice(g,1)}return b.sort(function(a,b){return a-b}),[b]},randomNum:function(){var a=this,b=[],c=null,e=(a.getBallData(),a.defConfig.name,[]),f=[];return b=a.checkRandomBets(),f=b,e=f,c={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:f,lotterys:e,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:e.length},c.amountText=d.getCurrentGameStatistics().formatMoney(c.num*c.moneyUnit*c.multiple*c.onePrice),c}},g=[];g.push('<div class="number-select-title balls-type-title clearfix">'),g.push('<ul class="function-select-title game-frequency-type">'),g.push('<li class="lost" data-type="lost">遗漏</li>'),g.push('<li class="fre" data-type="fre">冷热</li>'),g.push("</ul>"),g.push('<ul class="function-select-content">'),g.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),g.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),g.push("</ul>"),g.push("</div>"),g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<div class="ball-title">'),h.push("<strong><#=title#></strong>"),h.push("<span>当前遗漏</span>"),h.push("</div>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9,10,11],function(a){h.push(0==a?'<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>':10>a?'<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0'+this+'&row=<#=row#>" class="ball-number">0'+this+'</a><span class="ball-aid-hot">0</span></li>':'<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>')}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=0" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=0" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each(["选三中三"],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);