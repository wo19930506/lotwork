!function(a,b){var c={name:"biaozhuntouzhu.biaozhun.dantuo"},d=0,e=0,f=0,g=a.Games,h=g.getCurrentGameMessage(),i=g.SSQ.getInstance(),j=[],k=[],l=[],m=!1,n={init:function(){var a=this;a.initHotColdEvent(),a.addEvent("afterSetBallData",function(b,c,d,e){a.ensureSoleBall(c,d,e)}),new phoenix.Select({realDom:"#J-tuo-balls-num-choose",isInput:!0,expands:{inputEvent:function(){var a=this;a.getInput().keyup(function(){var b=this.value;this.value=this.value.replace(/[^\d]/g,""),b=Number(this.value),b>11&&(this.value=11),a.setValue(this.value)})}}}),new phoenix.Select({realDom:"#J-dantuoblue-balls-num-choose",isInput:!0,expands:{inputEvent:function(){var a=this;a.getInput().keyup(function(){var b=this.value;this.value=this.value.replace(/[^\d]/g,""),b=Number(this.value),b>8&&(this.value=8),a.setValue(this.value)})}}})},ensureSoleBall:function(a,b,c){var g=this,i=(g.getBallData(),g.countBallsNumInLine(0)),j=g.countBallsNumInLine(1),k=g.countBallsNumInLine(2);c>0&&(0==a&&(j+i>12&&(g.setBallData(0,d,-1),h.show({type:"normal",msg:"红球胆码和拖码总个数不能超过12个，且最少需要选择1个胆码",mask:"true",time:3,data:{tplData:{msg:"红球胆码和拖码总个数不能超过12个，且最少需要选择1个胆码"}}})),i>5&&(g.setBallData(0,d,-1),h.show({type:"normal",msg:"红球胆码不能超过5个",mask:"true",time:3,data:{tplData:{msg:"红球胆码不能超过5个"}}})),g.setBallData(1,b,-1),d=b),1==a&&((j>11||j+i>12)&&(g.setBallData(1,e,-1),h.show({type:"normal",msg:"红球胆码和拖码总个数不能超过12个，且最少需要选择1个胆码",mask:"true",time:3,data:{tplData:{msg:"红球胆码和拖码总个数不能超过12个，且最少需要选择1个胆码"}}})),g.setBallData(0,b,-1),e=b),2==a&&(k>8&&(g.setBallData(2,f,-1),h.show({type:"normal",msg:"蓝球个数不能超过8个",mask:"true",time:3,data:{tplData:{msg:"蓝球个数不能超过8个"}}})),f=b))},rebuildData:function(a){var b=this,c=[33,33,16],d=[];if(a&&c[a])return void(b.balls[a]=b.createBallRowData(c[a]));for(q=0,r=c.length;r>q;q++){var e=c[q];d.push(b.createBallRowData(e))}b.balls=d},createBallRowData:function(a){for(var b=0,c=[];a>=b;)c.push(-1),b++;return c},buildUI:function(){var a=this;a.container.html(z.join(""))},checkBallIsComplete:function(){for(var a=this,b=a.getBallData(),c=b[0],d=b[1],e=b[2],f=tuoBallLen=blueBallLen=0,g=0,h=c.length;h>g;g++)c[g]>0&&f++;for(var g=0,h=d.length;h>g;g++)d[g]>0&&tuoBallLen++;for(var g=0,h=e.length;h>g;g++)e[g]>0&&blueBallLen++;return a.isBallsComplete=f>=1&&5>=f&&tuoBallLen>=1&&f+tuoBallLen>=6&&12>=f+tuoBallLen&&blueBallLen>=1&&8>=blueBallLen?!0:!1},getLottery:function(){var a=[],b=this,c=b.getBallData(),d=c[0],e=c[1],f=c[2];if(j=[],k=[],l=[],b.checkBallIsComplete()){for(var g=0,h=d.length;h>g;g++)d[g]>0&&j.push(g);for(var g=0,h=e.length;h>g;g++)e[g]>0&&k.push(g);for(var g=0,h=f.length;h>g;g++)f[g]>0&&l.push(g);redBallResultArray=b.combine(j.concat(k),6);for(var g=redBallResultArray.length-1;g>=0;g--){for(var i=!1,m=0,n=redBallResultArray[g],o=j.length-1;o>=0;o--)$.inArray(j[o],n)>=0&&m++,i=m==j.length?!0:!1;i&&a.push(n)}return buleBallResultArray=b.combine(l,1),b.combination([a,buleBallResultArray])}return[]},checkResult:function(a,b){for(var c=b.length-1;c>=0;c--)if(b[c].join("")==a)return!1;return!0},formatNum:function(a){var a=Number(a);return 10>a?"0"+a:a},mathResult:function(a,b,c){var d,e,f,g=this,h=[],i=[];for(d=b;c>=d;d++)for(e=b;c>=e;e++)for(f=b;c>=f;f++)if(d==a&&3!=g.arrIndexOf(d,[d,e,f])||e==a&&3!=g.arrIndexOf(d,[d,e,f])||f==a&&3!=g.arrIndexOf(d,[d,e,f])){var j=[d,e,f].sort(function(a,b){return a-b});g.checkResult(j.join(""),i)&&(i.push(j),h.push([d,e,f]))}return h},makePostParameter:function(a){var b=this;if(m){var c,d=[],e=[],f=0;for(c=a[0].length;c>f;f++)d.push(b.formatNum(a[0][f]));for(f=0,c=a[1].length;c>f;f++)e.push(b.formatNum(a[1][f]));return m=!1,d.join(",")+"+"+e.join(",")}var c,d=[],e=[],g=[],f=0,h=0,i=0;for(c=j.length;c>f;f++)d.push(b.formatNum(j[f]));for(c=k.length;c>h;h++)e.push(b.formatNum(k[h]));for(c=l.length;c>i;i++)g.push(b.formatNum(l[i]));return"D:"+d.join(",")+"_T:"+e.join(",")+"+"+g.join(",")},createRandomNum:function(){for(var a=this,b=[[],[]],c=[],d=[],e=a.getBallData(),f=(e.length,e[0].length),g=e[2].length,h=(e[0].length,f-1);h>=0;h--)h>0&&c.push(h);for(var h=g-1;h>=0;h--)h>0&&d.push(h);for(var i=0;6>i;i++){var j=Math.floor(Math.random()*c.length);b[0].push(c[j]),c.splice(j,1)}return b[0].sort(function(a,b){return a-b}),b[1].push(d[Math.floor(Math.random()*d.length)]),b},randomNum:function(){var a=this,b=[],c=null,d=(a.getBallData(),a.defConfig.name,[]),e=[];return b=a.checkRandomBets(),e=b,d=[e],m=!0,c={type:"biaozhuntouzhu.biaozhun.fushi",original:e,lotterys:d,moneyUnit:g.getCurrentGameStatistics().getMoneyUnit(),multiple:g.getCurrentGameStatistics().getMultip(),onePrice:g.getCurrentGameStatistics().getOnePrice(),num:d.length},c.amountText=g.getCurrentGameStatistics().formatMoney(c.num*c.moneyUnit*c.multiple*c.onePrice),c},randomTuoBall:function(a){var b=this,c=b.getBallData(),d=c[1].length,e=[],f=[];1>a&&(a=1),a>11&&(a=11);for(var g=d-1;g>=0;g--)g>0&&e.push(g);for(g=0;a>g;g++){var h=Math.floor(Math.random()*e.length);f.push(e[h]),e.splice(h,1)}return f.sort(function(a,b){return a-b}),f},randomBlueBall:function(a){var b=this,c=b.getBallData(),d=c[2].length,e=[],f=[];1>a&&(a=1),a>8&&(a=8);for(var g=d-1;g>=0;g--)g>0&&e.push(g);for(g=0;a>g;g++){var h=Math.floor(Math.random()*e.length);f.push(e[h]),e.splice(h,1)}return f.sort(function(a,b){return a-b}),f}},o=[];o.push('<div class="number-select-title balls-type-title clearfix">'),o.push('<ul class="function-select-title game-frequency-type">'),o.push('<li class="lost" data-type="lost">遗漏</li>'),o.push('<li class="fre" data-type="fre">冷热</li>'),o.push("</ul>"),o.push('<ul class="function-select-content">'),o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),o.push("</ul>"),o.push("</div>"),o.push('<div class="number-select-content dantuo-number-select-content">');var p=[];p.push('<div class="dan-ball-section ball-section" style="z-index:3">'),p.push('<div class="ball-title">'),p.push("<strong><#=title#></strong>"),p.push("<span>&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;请选择1-5个胆码</span>"),p.push("</div>"),p.push('<div class="ball-content">');for(var q=0,r=33,s=17,t="";r>q;q++){var u=q+1,v=u%s;1==v&&(t+='<ul class="ball-row">'),0==q&&(t+='<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=0&row=<#=row#>" class="ball-number">0</a><span class="ball-aid-hot">0</span></li>'),10>u&&(u="0"+u),t+='<li><a href="javascript:void(0);" data-num="'+u+'" data-param="action=ball&value='+u+'&row=<#=row#>" class="ball-number">'+u+'</a><span class="ball-aid-hot">'+u+"</span></li>",(0==v||parseInt(u)==r)&&(t+="</ul>")}p.push(t),p.push("</div>"),p.push('<div class="ball-control">'),p.push('<a href="javascript:void(0);" class="reset-ball reset-red-ball">清空</a>'),p.push("</div>"),p.push("</div>");var w=[];w.push('<div class="tuo-ball-section ball-section" style="z-index:2">'),w.push('<div class="ball-title">'),w.push("<strong><#=title#></strong>"),w.push("<span>&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;至少选择1个拖码，胆码加拖码最少6个，最多12个</span>"),w.push("</div>"),w.push('<div class="ball-content">');for(var q=0,r=33,s=17,t="";r>q;q++){var u=q+1,v=u%s;1==v&&(t+='<ul class="ball-row">'),0==q&&(t+='<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=0&row=<#=row#>" class="ball-number">0</a><span class="ball-aid-hot">0</span></li>'),10>u&&(u="0"+u),t+='<li><a href="javascript:void(0);" data-num="'+u+'" data-param="action=ball&value='+u+'&row=<#=row#>" class="ball-number">'+u+'</a><span class="ball-aid-hot">'+u+"</span></li>",(0==v||parseInt(u)==r)&&(t+="</ul>")}w.push(t),w.push("</div>"),w.push('<div class="ball-control">'),w.push('<select id="J-tuo-balls-num-choose" class="J-ui-select J-balls-num-choose">');for(var q=5,r=11;r>=q;q++)w.push('<option value="'+q+'"'+(5==q?' selected="selected"':"")+">"+q+"</option>");w.push("</select>"),w.push('<a href="javascript:void(0);" class="random-tuo-ball random-color-red">随机拖码</a>'),w.push('<a href="javascript:void(0);" class="reset-ball reset-tuo-ball">清空</a>'),w.push("</div>"),w.push("</div>");var x=[];x.push('<div class="tuodanblue-ball-section ball-section" style="z-index:1">'),x.push('<div class="ball-title">'),x.push("<strong><#=title#></strong>"),x.push("<span>&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;请选择1-8个蓝球号码</span>"),x.push("</div>"),x.push('<div class="ball-content">');for(var q=0,r=16,s=17,t="";r>q;q++){var u=q+1,v=u%s;1==v&&(t+='<ul class="ball-row">'),0==q&&(t+='<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=0&row=<#=row#>" class="ball-number">0</a><span class="ball-aid-hot">0</span></li>'),10>u&&(u="0"+u),t+='<li><a href="javascript:void(0);" data-num="'+u+'" data-param="action=ball&value='+u+'&row=<#=row#>" class="ball-number">'+u+'</a><span class="ball-aid-hot">'+u+"</span></li>",(0==v||parseInt(u)==r)&&(t+="</ul>")}x.push(t),x.push("</div>"),x.push('<div class="ball-control">'),x.push('<select id="J-dantuoblue-balls-num-choose" class="J-ui-select J-balls-num-choose">');for(var q=1,r=8;r>=q;q++)x.push('<option value="'+q+'"'+(1==q?' selected="selected"':"")+">"+q+"</option>");x.push("</select>"),x.push('<a href="javascript:void(0);" class="random-blue-ball random-color-blue">随机蓝球</a>'),x.push('<a href="javascript:void(0);" class="reset-ball reset-blue-ball">清空</a>'),x.push("</div>"),x.push("</div>");var y=[];y.push("</div>");var z=[],A=p.join(""),B=w.join(""),C=x.join("");z.push(o.join("")),$.each(["红球胆码区","红球拖码区","蓝球区"],function(a){z.push(0==a?A.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a):1==a?B.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a):C.replace(/<#=title#>/g,this).replace(/<#=row#>/g,a))}),z.push(y.join(""));var D=a.Class(n,b);D.defConfig=c,i[c.name]=new D}(phoenix,phoenix.GameMethod);