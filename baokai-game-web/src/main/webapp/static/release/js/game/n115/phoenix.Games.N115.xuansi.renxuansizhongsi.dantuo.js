!function(a,b){var c={name:"xuansi.renxuansizhongsi.dantuo",tips:"从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",exampleTip:"选一任选一中一复式"},d=0,e=a.Games,f=a.Games.N115.getInstance(),g={init:function(){var a=this;a.initHotColdEvent(),a.addEvent("afterSetBallData",function(b,c,d,e){a.ensureSoleBall(c,d,e)})},ensureSoleBall:function(a,b,c){{var f=this;f.getBallData()}if(e.getCurrentGame().getCurrentGameMethod().getGameMethodName()==f.getGameMethodName()){var g=f.countBallsNumInLine(0);c>0&&(0==a?(g>3&&f.setBallData(0,d,-1),f.setBallData(1,b,-1),d=b):f.setBallData(0,b,-1))}},rebuildData:function(a){var b=this;return"undefined"!=typeof a?void(b.balls[a]=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]):void(b.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]])},buildUI:function(){var a=this;a.container.html(k.join(""))},makePostParameter:function(a){for(var b=[],c=[],d=[],e=[],f=a.length,g=0;f>g;g++){d=[],c=a[g];for(var h=0;h<c.length;h++)0==g?e.push(Number(c[h])<10?"0"+c[h]:c[h]):d.push(Number(c[h])<10?"0"+c[h]:c[h]);b.push(d.join(","))}return b.unshift("[胆"+e.join(",")+"]"),b.join(" ")},checkBallIsComplete:function(){for(var a=this,b=a.getBallData(),c=0,d=b[0].length,e=0,f=0;d>c;c++)b[0][c]>0&&f++,b[1][c]>0&&e++;return a.isBallsComplete=e>=1&&f>=1?!0:!1},getLottery:function(){var a=this,b=a.getBallData(),c=0,d=a.countBallsNumInLine(0),e=b[1].length,f=[];if(arr=[],danMaArr=[],nr=new Array,a.checkBallIsComplete()){for(;e>c;c++)b[1][c]>0&&arr.push(c);f=a.combine(arr,4-d);for(var c=0;c<b[0].length;c++)1==b[0][c]&&danMaArr.push(c);for(var g=0;g<f.length;g++)nr.push(f[g].concat(danMaArr));return nr}return[]},removeSame:function(a){{var b,c=0,d=this,e=this.getBallData()[0].length;a.length}for(b=Math.ceil(Math.random()*(e-1));c<a.length;c++)if(b==a[c])return arguments.callee.call(d,a);return b},createRandomNum:function(){for(var a=this,b=[],c=[],d=[],e=0,f=(a.getBallData().length,a.getBallData()[0].length,0);4>f;f++)1>f?(e=a.removeSame(c),b=b.concat(e),c.push(e)):(e=a.removeSame(c),d=d.concat(e),c.push(e));return d.sort(function(a,b){return a-b}),b=[b,d]},randomNum:function(){var a=this,b=[],c=null,d=(a.getBallData(),a.defConfig.name,[]),f=[];return b=a.checkRandomBets(),f=b,d=[f],c={type:e.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:f,lotterys:d,moneyUnit:e.getCurrentGameStatistics().getMoneyUnit(),multiple:e.getCurrentGameStatistics().getMultip(),onePrice:e.getCurrentGameStatistics().getOnePrice(),num:d.length},c.amountText=e.getCurrentGameStatistics().formatMoney(c.num*c.moneyUnit*c.multiple*c.onePrice),c}},h=[];h.push('<div class="number-select-title balls-type-title clearfix">'),h.push('<ul class="function-select-title game-frequency-type">'),h.push('<li class="lost" data-type="lost">遗漏</li>'),h.push('<li class="fre" data-type="fre">冷热</li>'),h.push("</ul>"),h.push('<ul class="function-select-content">'),h.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),h.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),h.push("</ul>"),h.push("</div>"),h.push('<div class="number-select-content">'),h.push('<ul class="ball-section">');var i=[];i.push("<li>"),i.push('<div class="ball-title">'),i.push("<strong><#=title#></strong>"),i.push("<span>当前遗漏</span>"),i.push("</div>"),i.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9,10,11],function(a){i.push(0==a?'<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>':10>a?'<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0'+this+'&row=<#=row#>" class="ball-number">0'+this+'</a><span class="ball-aid-hot">0</span></li>':'<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>')}),i.push("</ul>"),i.push('<div class="ball-control" style="<#=style#>">'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">全</a>'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=0" href="javascript:void(0);">大</a>'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=0" href="javascript:void(0);">小</a>'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">偶</a>'),i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),i.push("</div>"),i.push("</li>");var j=[];j.push("</ul>"),j.push("</div>");var k=[],l=i.join("");k.push(h.join("")),$.each(["胆码","拖码"],function(a){k.push("胆码"==this?l.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a).replace(/<#=style#>/,"display:none"):l.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),k.push(j.join(""));var m=a.Class(g,b);m.defConfig=c,f[c.name]=new m}(phoenix,phoenix.GameMethod);