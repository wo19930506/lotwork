!function(a,b){var c={name:"qianer.zhixuan.fushi",tips:"前二直选复式玩法提示",exampleTip:"前二直选复式范例"},d=a.Games,e=d.FFC.getInstance(),f={init:function(){var a=this;a.getHotCold(a.getGameMethodName(),"currentFre","lost"),a.initHotColdEvent()},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(j.join(""))},makePostParameter:function(a){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b].join(""));return d.push("-"),d.push("-"),d.push("-"),d.join(",")}},g=[];g.push('<div class="number-select-title balls-type-title clearfix">'),g.push('<ul class="function-select-title game-frequency-type">'),g.push('<li class="lost" data-type="lost">遗漏</li>'),g.push('<li class="fre" data-type="fre">冷热</li>'),g.push("</ul>"),g.push('<ul class="function-select-content">'),g.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),g.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),g.push("</ul>"),g.push("</div>"),g.push('<div class="number-select-content">'),g.push('<ul class="ball-section">');var h=[];h.push("<li>"),h.push('<div class="ball-title">'),h.push("<strong><#=title#>位</strong>"),h.push("<span>当前遗漏</span>"),h.push("</div>"),h.push('<ul class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9],function(){h.push('<li><a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>')}),h.push("</ul>"),h.push('<div class="ball-control">'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">大</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">小</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">偶</a>'),h.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),h.push("</div>"),h.push("</li>");var i=[];i.push("</ul>"),i.push("</div>");var j=[],k=h.join("");j.push(g.join("")),$.each(["万","千"],function(a){j.push(k.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),j.push(i.join(""));var l=a.Class(f,b);l.defConfig=c,e[c.name]=new l}(phoenix,phoenix.GameMethod);