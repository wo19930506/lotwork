!function(a,b){var c={name:"renxuan.putongwanfa.renxuan2",tips:"从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",exampleTip:"选一任选一中一复式"};Games=a.Games,GameMessage=Games.getCurrentGameMessage(),BJKL8=a.Games.BJKL8.getInstance();var d={init:function(){var a=this;a.addEvent("afterSetBallData",function(a,b,c){var d=this;d.LimitMaxBalls(8)&&(GameMessage.show({type:"normal",msg:"最多选择8个选球",mask:"true",time:3,data:{tplData:{msg:"最多选择8个选球"}}}),d.setBallData(b,c,-1)),d.showSelectResult()})},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},showSelectResult:function(){var a=this,b="",c=a.container.find(".J-select-result"),d=a.countBallsNum();if(2>d||d>8)return void a.resetChartsResult();var b=a.ballsResultCharts({selectNum:d,mode:"任选2",maxNum:d,money:{1:25}});c.html(b)},resetChartsResult:function(){var a=this,b="",c=a.container.find(".J-select-result");b='<div class="ball-table-title">您选择的号码可能中奖结果如下：</div><table cellspacing="1" width="100%"><tbody><tr><th colspan="5">玩法：任选2　　　投注号码数：0</th></tr><tr><td>每注奖金</td><td>25.00</td><td></td><td></td><td></td></tr><tr><td>中奖号码数</td><td>选2中2</td><td>未中奖</td><td>总注数</td><td>总奖金</td></tr><tr><td>中0个号码</td><td>0</td><td>0</td><td>0</td><td style="text-align:center">0</td></tr></tbody></table>',c.html(b)},buildUI:function(){var a=this;a.container.html(e.join(""))},createRandomNum:function(){for(var a=this,b=[],c=[],d=(a.getBallData().length,a.getBallData()[0].length),e=d-1;e>=0;e--)e>0&&c.push(e);for(var f=0;2>f;f++){var g=Math.floor(Math.random()*c.length);b.push(c[g]),c.splice(g,1)}return b.sort(function(a,b){return a-b}),[b]},makePostParameter:function(a){for(var b=[],c=[],d=a.length,e=0;d>e;e++){c=a[e];for(var f=0;f<c.length;f++)b.push(Number(c[f])<10?"0"+c[f]:c[f])}return b.join(",")},checkBallIsComplete:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=0;d>c;c++)b[c]>0&&e++;return a.isBallsComplete=e>0&&9>e?!0:!1},getLottery:function(){for(var a=this,b=a.getBallData()[0],c=0,d=b.length,e=[];d>c;c++)b[c]>0&&e.push(c);return a.checkBallIsComplete()?a.combine(e,2):[]}},e=[];e.push('<div class="number-select-content">'),e.push('<div class="ball-section">'),e.push('<div class="clearfix">'),e.push('<div class="ball-number-section">'),e.push('<div class="ball-number-up">'),e.push('<div class="ball-title"><strong>上</strong></div>'),e.push('<div class="ball-content">'),$.each([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],function(a){e.push(0==a?'<a style="display:none" href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a>":10>a?'<a href="javascript:void(0);" data-param="action=ball&value=0'+this+'&row=<#=row#>" class="ball-number">0'+this+"</a>":'<a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a>")}),e.push("</div>"),e.push("</div>"),e.push('<div class="ball-number-down">'),e.push('<div class="ball-title"><strong>下</strong></div>'),e.push('<div class="ball-content">'),$.each([41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],function(){e.push('<a href="javascript:void(0);" data-param="action=ball&value='+this+'&row=<#=row#>" class="ball-number">'+this+"</a>")}),e.push("</div>"),e.push("</div>"),e.push("</div>"),e.push('<div class="J-select-result ball-table">'),e.push("</div>"),e.push("</div>"),e.push('<div class="ball-control">'),e.push('<span class="ball-control-title">趣味机选：</span>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=random&ranNum=8&start=1">随机</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=up&ranNum=8&start=1">上</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=down&ranNum=8">下</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=odd&ranNum=8">奇</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=even&ranNum=8&start=1">偶</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=upOdd&ranNum=8">上·单</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=upEven&ranNum=8&start=1">上·双</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=downOdd&ranNum=8">下·单</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=downEven&ranNum=8">下·双</a>'),e.push('<a href="javascript:void(0);" data-param="action=batchSetBall&row=<#=row#>&bound=none">清</a>'),e.push('<span class="ball-control-text">(每组选取8个号码)</span>'),e.push("</div>"),e.push("</div>"),e.push("</div>");var f=a.Class(d,b);f.defConfig=c,BJKL8[c.name]=new f}(phoenix,phoenix.Games.BJKL8.Renxuan);