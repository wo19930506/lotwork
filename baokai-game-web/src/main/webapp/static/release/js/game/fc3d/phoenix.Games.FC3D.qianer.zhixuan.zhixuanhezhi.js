!function(a,b){var c={name:"qianer.zhixuan.zhixuanhezhi",tips:"后二直选和值玩法提示",exampleTip:"后二直选和值范例"},d=a.Games,e=d.FC3D.getInstance(),f={init:function(){var a=this;a.getHotCold(a.getGameMethodName(),"currentFre","lost"),a.initHotColdEvent()},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},makePostParameter:function(a){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b].join());return d.join(",")},mathResult:function(a,b,c){var d,e,f=[];for(d=b;c>=d;d++)for(e=b;c>=e;e++)d+e==a&&f.push([d,e]);return f},getLottery:function(){var a=this,b=a.getBallData()[0],c=0,d=b.length,e=!0,f=[],g=[];for(c=0;d>c;c++)b[c]>0&&(e=!1,f.push(c));if(e)return a.isBallsComplete=!1,[];for(a.isBallsComplete=!0,c=0,d=f.length;d>c;c++)g=g.concat(a.mathResult(f[c],0,9));return g},randomNum:function(){{var a=this,b=[],c=[],e=null;a.getBallData(),a.getBallData()[0].length,a.defConfig.name}return b[0]=a.checkRandomBets(),c=a.mathResult(b[0],0,9),e={type:d.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:[b],lotterys:c,moneyUnit:d.getCurrentGameStatistics().getMoneyUnit(),multiple:d.getCurrentGameStatistics().getMultip(),onePrice:d.getCurrentGameStatistics().getOnePrice(),num:c.length},e.amountText=d.getCurrentGameStatistics().formatMoney(e.num*e.moneyUnit*e.multiple*e.onePrice),e}},g=[];g.push('<div class="number-select-title balls-type-title clearfix">'),g.push('<ul class="function-select-title game-frequency-type">'),g.push('<li class="lost" data-type="lost">遗漏</li>'),g.push('<li class="fre" data-type="fre">冷热</li>'),g.push("</ul>"),g.push('<ul class="function-select-content">'),g.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),g.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),g.push("</ul>"),g.push("</div>"),g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">&nbsp;</span></li>')}),h.push("</ul>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each([""],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);