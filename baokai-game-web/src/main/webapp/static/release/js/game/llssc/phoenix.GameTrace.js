!function(a,b,c){var d,e={mainPanel:"#J-trace-panel",advancedTypeHas:["fanbei","yingli","yinglilv"],dataRowHeader:'<tr><th style="width:125px;" class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox"  checked="checked"/> 追号期次</th><th>倍数</th><th>金额</th><th>预计开奖时间</th></tr>',dataRowTemplate:'<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number" issueCode=<#=issueCode#>><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td><span  style="font-family: Arial,verdana;"><dfn>&yen;</dfn><span class="trace-row-money"><#=money#></span> 元</span> </td><td><span class="trace-row-time"><#=publishTime#></span></td></tr>',dataRowYingliHeader:'<tr><th class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox" /> 追号期次</th><th>倍数</th><th>金额</th><th>奖金</th><th>预期盈利金额</th><th>预期盈利率</th></tr>',dataRowYingliTemplate:'<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number" issueCode=<#=issueCode#>><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td><span  style="font-family: Arial,verdana;"><dfn>&yen;</dfn><span class="trace-row-money"><#=money#></span> 元</span></td><td><span  style="font-family: Arial,verdana;"><dfn>&yen;</dfn> <span class="trace-row-userGroupMoney"><#=userGroupMoney#></span> </span>元</td><td><span  style="font-family: Arial,verdana;"><dfn>&yen;</dfn> <span class="trace-row-winTotalAmount"><#=winTotalAmout#></span> 元</span></td><td><span class="trace-row-yinglilv"><#=yinglilv#></span>%</td></tr>'},f=a.Games,g=function(a,b,c){var a=""+a,c=c||1e9;return a=a.replace(/[^\d]/g,""),a=""==a?b:Number(a)>c?c:a,Number(a)},h=function(a){return a=a.replace(/[^\d]/g,""),Number(a)},j={init:function(a){var b=this;f.setCurrentGameTrace(b),b.panel=$(a.mainPanel),b.TraceTab=null,b.TraceAdvancedTab=null,b.isOpenPanel=!1,b.orderData=null,b.traceType="normal",b.times=0,b.traceStartNumber="",b.currentTraceNumber="",b.advancedType=a.advancedTypeHas[0],b.typeTypeType="a",b.initEvent(),b.setCurrentTraceNumber(),f.getCurrentGame().addEvent("changeDynamicConfig",function(){b.buildStartNumberSelectDom(),b.updateTableNumber()})},setAdvancedType:function(a){this.advancedType="[object Number]"==Object.prototype.toString.call(a)?this.getAdvancedTypeBuIndex(a):a},getAdvancedType:function(){return this.advancedType},getAdvancedTypeBuIndex:function(a){var b=this,c=b.defConfig.advancedTypeHas,d=c.length;return d>a?c[a]:""},initEvent:function(){var b=this;$("#J-trace-switch").click(function(){if(this.checked){var a=f.getCurrentGameOrder().getTotal().amount,b=f.getCurrentGameMessage();if(0>=a)return b.show({type:"mustChoose",msg:"请至少选择一注投注号码！",data:{tplData:{msg:"请至少选择一注投注号码！"}}}),void($("#J-trace-switch").get(0).checked=!1);f.getCurrentGameTrace().show()}else f.getCurrentGameTrace().hide()}),b.TraceTab=TraceTab=new a.Tab({par:"#J-trace-panel",triggers:".chase-tab-t",panels:".chase-tab-content",currPanelClass:"chase-tab-content-current",eventType:"click"}),TraceTab.addEvent("afterSwitch",function(a,c){var d=["normal","advanced"];c<d.length&&b.setTraceType(d[c]),b.updateStatistics()}),b.TraceAdvancedTab=TraceAdvancedTab=new a.Tab({par:"#J-trace-advanced-type-panel",triggers:".tab-title li",panels:".tab-content li",eventType:"click"}),TraceAdvancedTab.addEvent("afterSwitch",function(a,c){var d=this.getPanel(c).find(".trace-advanced-type-switch");b.setAdvancedType(c),d.each(function(){return this.checked?(b.setTypeTypeType($(this).parent().attr("data-type")),!1):void 0})});var c=new a.Hover({triggers:"#J-trace-iswintimesstop-hover",panels:"#chase-stop-tip-1",currPanelClass:"chase-stop-tip-current",hoverDelayOut:900});$("#chase-stop-tip-1").mouseleave(function(){c.hide()});var d=new a.Hover({triggers:"#J-trace-iswinstop-hover",panels:"#chase-stop-tip-2",currPanelClass:"chase-stop-tip-current",hoverDelayOut:900});$("#chase-stop-tip-2").mouseleave(function(){d.hide()}),$("#J-chase-stop-switch-1").click(function(a){a.preventDefault(),$("#J-trace-iswintimesstop-panel").hide(),$("#J-trace-iswinstop-panel").show(),$("#J-trace-iswintimesstop").get(0).checked=!1,$("#J-trace-iswinstop").get(0).checked=!0,$("#J-trace-iswinstop-money").removeAttr("disabled"),$("#J-trace-iswintimesstop-times").attr("disabled","disabled")}),$("#J-chase-stop-switch-2").click(function(a){a.preventDefault(),$("#J-trace-iswinstop-panel").hide(),$("#J-trace-iswintimesstop-panel").show(),$("#J-trace-iswintimesstop").get(0).checked=!0,$("#J-trace-iswinstop").get(0).checked=!1,$("#J-trace-iswinstop-money").attr("disabled","disabled"),$("#J-trace-iswintimesstop-times").removeAttr("disabled")}),$("#J-trace-iswinstop-money").keyup(function(){this.value=g(this.value,1,999999)}),$("#J-trace-iswintimesstop-times").keyup(function(){this.value=g(this.value,1,999999)}),$("#J-trace-iswintimesstop").click(function(){var a=$("#J-trace-iswintimesstop-times");this.checked?a.attr("disabled",!1).focus():a.attr("disabled","disabled")}),$("#J-trace-iswinstop").click(function(){var a=$("#J-trace-iswinstop-money");this.checked?a.attr("disabled",!1).focus():a.attr("disabled","disabled")}),$("#J-trace-normal-times").keyup(function(){var a,c=f.getCurrentGame().getDynamicConfig().tracemaxtimes,d=""+this.value,g=$("#J-function-select-tab").find(".function-select-title li"),h="current";d=d.replace(/[^\d]/g,""),d=""==d?1:Number(d)>c?c:d,this.value=d,a=Number(d),a>0&&20>=a&&a%5==0?(g.removeClass(h).eq(a/5-1).addClass(h),e.index=a/5-1):(g.removeClass(h),e.index=22),b.buildDetail()});var e=new a.Tab({par:"#J-function-select-tab",triggers:".function-select-title li",panels:".function-select-panel li",eventType:"click",index:1});e.addEvent("afterSwitch",function(a,c){var d=this,e=parseInt(d.getTrigger(c).text());$("#J-trace-normal-times").val(e),b.buildDetail()}),b.normalSelectMultiple=new a.Select({realDom:"#J-trace-normal-multiple",isInput:!0,expands:{inputEvent:function(){var a=this;a.getInput().keyup(function(){var b=this.value,c=99999;this.value=this.value.replace(/[^\d]/g,""),b=Number(this.value),1>b&&(this.value=1),b>c&&(this.value=c),a.setValue(this.value)})}}}),b.normalSelectMultiple.addEvent("change",function(a,c){var d=b.getOrderData().amount,e=Number(c),g=f.getCurrentGameOrder().getOrderMaxMultiple(),h=g.maxnum,i=f.getCurrentGameMessage(),j="";e>h?(j=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(g.gameMethod).join("-"),i.show({confirmIsShow:!0,mask:!0,msg:"",tpl:'<div class="pop-waring"><i class="ico-waring &lt;#=icon-class#&gt;"></i><h4 class="pop-text"><#=msg#></h4></div>',data:{tplData:{msg:"您输入的倍数超过了<b>["+j+"]</b> 玩法的最高倍数限制，系统将自动修改为最大可输入倍数"}},confirmFun:function(){c=h,b.normalSelectMultiple.setValue(c),i.hide(),b.getTable().find(".trace-row-multiple").val(c),b.getTable().find(".trace-row-money").each(function(){{var a=$(this);Number(a.parent().parent().find(".trace-row-multiple").val())}a.html(b.formatMoney(d*Number(c)))}),b.updateStatistics()}})):(b.getTable().find(".trace-row-multiple").val(c),b.getTable().find(".trace-row-money").each(function(){{var a=$(this);Number(a.parent().parent().find(".trace-row-multiple").val())}a.html(b.formatMoney(d*Number(c)))}),b.updateStatistics())}),b.panel.find(".chase-table").keyup(function(a){var c=$(a.target),d=b.getOrderData().amount;if(c.hasClass("trace-row-multiple")){var e=Number(c.val()),g=b.getRowTableType(),h=Number(f.getCurrentGameOrder().getOrderMaxMultiple().maxnum);0==e?(c.val(c.val().replace(/^0/g,"")),c.parent().parent().find(".trace-row-money").html("0.00")):e>h?(e=h,c.val(e),c.parent().parent().find(".trace-row-money").html(b.formatMoney(d*e))):(c.parent().parent().find(".trace-row-money").html(b.formatMoney(d*e)),("trace_advanced_yingli_a"==g||"trace_advanced_yingli_b"==g||"trace_advanced_yinglilv_a"==g||"trace_advanced_yinglilv_b"==g)&&b.rebuildYinglilvRows()),b.updateStatistics()}}).on("blur",".trace-row-multiple",function(a){var c=$(a.target),d=(Number(c.val()),b.getOrderData().amount);c.val(g(c.val(),1,f.getCurrentGameOrder().getOrderMaxMultiple().maxnum)),c.parent().parent().find(".trace-row-money").html(b.formatMoney(d*Number(c.val()))),b.updateStatistics()}),setTimeout(function(){b.buildStartNumberSelectDom()},10),$("#J-trace-advanced-times").keyup(function(){this.value=g(this.value,10,Number($("#J-trace-number-max").text()))}),$("#J-trace-advance-multiple").keyup(function(a){var b=$(a.target),c=Number(h(b.val())),d=Number(f.getCurrentGameOrder().getOrderMaxMultiple().maxnum);b.val(0==c?b.val().replace(/^0/g,""):c>d?d:c)}).blur(function(){this.value=g(this.value,1,f.getCurrentGameOrder().getOrderMaxMultiple().maxnum)}),b.panel.find(".trace-advanced-type-switch").click(function(){var a,c=$(this),d=c.parent(),e=d.parent().children();e.each(function(h){a=e.get(h),d.get(0)!=a?$(a).find('input[type="text"]').attr("disabled","disabled"):($(a).find('input[type="text"]').attr("disabled",!1).eq(0).focus(),b.setTypeTypeType(d.attr("data-type"))),this.value=c.parent().hasClass("trace-input-multiple")?g(this.value,1,f.getCurrentGameOrder().getOrderMaxMultiple().maxnum):g(this.value,1,99999)})}),$("#J-trace-advanced-type-panel").on("keyup","input[type=text]",function(a){var b=$(a.target);this.value=b.hasClass("trace-input-multiple")?g(this.value,1,f.getCurrentGameOrder().getOrderMaxMultiple().maxnum):g(this.value,1,99999)}),$("#J-trace-builddetail").click(function(){b.confirmSetting()}),b.panel.find(".chase-table").click(function(a){var c,d=$(a.target),e=$.trim(d.attr("data-action")),f=!0;if(e&&""!=e)switch(e){case"checkedAll":f=d.get(0).checked?!0:!1,c=b.getRowTableType(),b.getTable().find(".trace-row-checked").each(function(){this.checked=f}),("trace_advanced_yingli_a"==c||"trace_advanced_yingli_b"==c||"trace_advanced_yinglilv_a"==c||"trace_advanced_yinglilv_b"==c)&&b.rebuildYinglilvRows(),b.updateStatistics();break;case"checkedRow":d.size()>0&&(c=b.getRowTableType(),("trace_advanced_yingli_a"==c||"trace_advanced_yingli_b"==c||"trace_advanced_yinglilv_a"==c||"trace_advanced_yinglilv_b"==c)&&b.rebuildYinglilvRows(),b.updateStatistics())}})},buildStartNumberSelectDom:function(){var b,c=this,d=f.getCurrentGame().getDynamicConfig().gamenumbers,e=d.length,g=0,h=[],i=f.getCurrentGame().getCurrentNumber(),j="(当前期)",k=j,l="";for(c.traceStartNumberSelect&&(b=c.traceStartNumberSelect.getValue());e>g;g++)k=i==d[g].number?j:"",l=c.traceStartNumberSelect&&d[g].number==b?' selected="selected" ':"",h.push('<option value="'+d[g].number+'" '+l+" >"+d[g].number+k+"</option>");$("#J-traceStartNumber").html(h.join("")),$("#J-trace-number-max").text(e),c.traceStartNumberSelect&&c.traceStartNumberSelect.dom.remove(),c.traceStartNumberSelect=new a.Select({realDom:"#J-traceStartNumber",cls:"chase-trace-startNumber-select"}),c.traceStartNumberSelect.addEvent("change",function(a,b){c.setTraceStartNumber(b)})},updateTableNumber:function(){var a,b,c,d,e,g,h,i,j,k=this,l=f.getCurrentGame().getDynamicConfig().gamenumbers,m=l.length,n=f.getCurrentGame().getCurrentNumber(),o="",p="",q='<span class="icon-period-current"></span>',r=0,s=0;m>0&&(a=k.getNormalRowTable().find("tr"),b=k.getAdvancedRowTable().find("tr"),h=k.getStartNumberIndexByNumber(c),a.each(function(a){if(0==a)return!0;if(d=$(this),e=d.find(".trace-row-number"),issuecodeNumber=d.find(".trace-row-number").attr("issuecode"),g=d.find(".trace-row-time"),multipleDom=d.find(".trace-row-multiple"),c=e.text().replace(/[^\d]/g,""),i=d.find(".text-center"),d.find(".trace-row-multiple").removeAttr("disabled"),m>h+1){if(o=l[h+1].number==n?q:"",e.html(l[h+1].number+o),multipleDom.text("1"),g.text(l[h+1].time),i.html("").html(a),p!=issuecodeNumber.substr(0,8)&&""!=p){switch(r){case 0:j="明天 ";break;case 1:j="后天 ";break;case 2:j="大后天 ";break;default:j="明天 "}r++,i.html("").append('<div class="icon-chase-mark">'+j+" "+d.find(".trace-row-number").text().substr(0,8)+"</div>")}p=issuecodeNumber.substr(0,8),h++}}),h=k.getStartNumberIndexByNumber(c),b.each(function(a){if(0==a)return!0;if(d=$(this),e=d.find(".trace-row-number"),issuecodeNumber=d.find(".trace-row-number").attr("issuecode"),g=d.find(".trace-row-time"),multipleDom=d.find(".trace-row-multiple"),c=e.text().replace(/[^\d]/g,""),i=d.find(".text-center"),d.find(".trace-row-multiple").removeAttr("disabled"),m>h+1){if(o=l[h+1].number==n?q:"",e.html(l[h+1].number+o),multipleDom.text("1"),g.text(l[h+1].time),i.html("").html(a),p!=issuecodeNumber.substr(0,8)&&""!=p){switch(s){case 0:j="明天 ";break;case 1:j="后天 ";break;case 2:j="大后天 ";break;default:j="明天 "}s++,i.html("").append('<div class="icon-chase-mark">'+j+" "+d.find(".trace-row-number").text().substr(0,8)+"</div>")}p=issuecodeNumber.substr(0,8),h++}}))},rebuildYinglilvRows:function(){var a=this,b=a.getRowTable().find("tr"),c=a.getOrderData(),d=a.getWinMoney(),e=null,f=null,g=null,h=1,i=null,j=0,k=null,l=null,m=null,n=-1;costAmount=0,b.each(function(b){b>0&&(e=$(this),f=e.find(".trace-row-checked"),f.size()>0&&f.get(0).checked&&(g=e.find(".trace-row-multiple"),h=Number(g.val()),i=e.find(".trace-row-money"),j=Number(i.text().replace(",","")),k=e.find(".trace-row-userGroupMoney"),l=e.find(".trace-row-winTotalAmount"),m=e.find(".trace-row-yinglilv"),costAmount+=c.amount*h,i.text(a.formatMoney(c.amount*h)),k.text(a.formatMoney(d*h)),l.text(a.formatMoney(d*h-costAmount)),n=(d*h-costAmount)/costAmount*100,m.text(Number(n).toFixed(2))))})},isOpen:function(){return this.isOpenPanel},setTypeTypeType:function(a){this.typeTypeType=a},getTypeTypeType:function(){return this.typeTypeType},getIsWinStop:function(){var a=$("#J-trace-iswintimesstop"),b=$("#J-trace-iswinstop");return a.get(0).checked?1:b.get(0).checked?2:0},getTraceWinStopValue:function(){var a=this,b=a.getIsWinStop();return 1==b?Number($("#J-trace-iswintimesstop-times").val()):2==b?Number($("#J-trace-iswinstop-money").val()):-1},updateStatistics:function(){var a=this,b=a.getResultData();$("#J-trace-statistics-times").html(b.times),$("#J-trace-statistics-lotterys-num").html(b.lotterysNum),$("#J-trace-statistics-amount").html(a.formatMoney(b.amount))},getResultData:function(){var a,b,c,d,e,g,h=this,i=h.getOrderData(),j=h.getRowTable().find("tr"),k=0,l=0,m=0,n=[],o={times:0,lotterysNum:0,amount:0,orderData:i,traceData:[],traceType:h.getTraceType()},p="",q=f.getCurrentGame().getDynamicConfig().gamenumbers,r=0;return j.each(function(f){if(a=$(this),b=a.find(".trace-row-checked"),tracenumber=a.find(".trace-row-number").attr("issuecode"),traceNo=a.find(".text-center"),0!=f&&traceNo.html("").html(f),b.size()>0&&b.get(0).checked){if(c=b.parent(),e=h.getStartNumberIndexByNumber(c.find(".trace-row-number").text()),e=-1==e?0:e,d=q[e].issueCode,a.find(".trace-row-multiple").removeAttr("disabled"),"0"==a.find(".trace-row-multiple").val()&&(a.find(".trace-row-multiple").val("1"),a.find(".trace-row-money").text(h.formatMoney(1*i.amount))),n.push({traceNumber:c.find(".trace-row-number").text(),issueCode:d,multiple:Number(c.parent().find(".trace-row-multiple").val())}),k++,m+=Number(a.find(".trace-row-money").text().replace(/,/g,"")),p!=tracenumber.substr(0,8)&&""!=p){switch(r){case 0:g="明天 ";break;case 1:g="后天 ";break;case 2:g="大后天 ";break;default:g="明天 "}traceNo.html("").append('<div class="icon-chase-mark">'+g+" "+a.find(".trace-row-number").text().substr(0,8)+"</div>"),r++}p=tracenumber.substr(0,8)}else a.find(".trace-row-money").text("0"),a.find(".trace-row-multiple").val("0"),a.find(".trace-row-multiple").attr("disabled","disabled").css("border-color","#CECECE")}),i&&(l=k*i.count,o={times:k,lotterysNum:l,amount:m,orderData:i,traceData:n,traceType:h.getTraceType()}),o},updateOrder:function(a){var b=this,c=f.getCurrentGameOrder().getTotal(),d=b.getRowTableType(),e=f.getCurrentGameOrder().getOrderMaxMultiple(),g=e.maxnum,h=Number(b.normalSelectMultiple.getValue()),i=Number($("#J-trace-advance-multiple").val());b.setOrderData(c),h>g&&b.normalSelectMultiple.setValue(g),i>g&&$("#J-trace-advance-multiple").val(g),a||"trace_advanced_fanbei_a"!=d&&"trace_advanced_fanbei_b"!=d&&"trace_advanced_yingli_a"!=d&&"trace_advanced_yingli_b"!=d&&"trace_advanced_yinglilv_a"!=d&&"trace_advanced_yinglilv_b"!=d||f.getCurrentGameMessage().show({type:"normal",closeFun:function(){this.hide()},data:{tplData:{msg:"您的方案已被修改，如果需要根据最新方案进行追号，请点击生成追号计划按钮"}}}),b.getAdvancedRowTable().html(""),b.updateDetail(c.amount),b.updateStatistics()},updateDetail:function(a){var b,c=this,d=c.getTable().find("tr"),e=null,f=c.getRowTableType();"trace_advanced_yingli_a"==f||"trace_advanced_yingli_b"==f||"trace_advanced_yinglilv_a"==f||"trace_advanced_yinglilv_b"==f?c.rebuildYinglilvRows():(b=c.getAdvancedRowTable().attr("data-type"),("trace_advanced_fanbei_a"==b||"trace_advanced_fanbei_b"==b)&&(d=c.getAdvancedTable().find("tr"),d.each(function(){e=$(this),rowMoney=e.find(".trace-row-money"),rowMultiple=Number(e.find(".trace-row-multiple").val()),rowMoney.text(c.formatMoney(rowMultiple*a))}))),d=c.getNormalTable().find("tr"),d.each(function(){e=$(this),rowMoney=e.find(".trace-row-money"),rowMultiple=Number(e.find(".trace-row-multiple").val()),rowMoney.text(c.formatMoney(rowMultiple*a))})},getWinMoney:function(){for(var a=this,b=a.getOrderData().orders,c=0,d=b.length,e=0;d>c;c++)e+=a.getPlayGroupMoneyByGameMethodName(b[c].type)*b[c].moneyUnit;return e},confirmSetting:function(){var a=this;a.setOrderData(f.getCurrentGameOrder().getTotal()),a.buildDetail()},isMoreBounsMethod:function(){for(var a=this,b=a.getOrderData().orders,c=0,d=b.length;d>c;c++)if(type=b[c].type,"undefined"!=typeof f.currentIsMoreBouns.moreBouns[type]&&1==f.currentIsMoreBouns.moreBouns[type])return b[c].typeText;return""},isSameGameMethod:function(){var a=this,b=a.getOrderData().orders,c="",d=-1;for(i=0,len=b.length;len>i;i++){if(""!=c){if(c!=b[i].type)return!1}else c=b[i].type;if(-1!=d){if(d!=b[i].moneyUnit)return!1}else d=b[i].moneyUnit}return!0},getSameGameMethodName:function(){var a=this,b=a.getOrderData().orders;return b.length>0?b[0].type:void 0},getSameGameMoneyUnti:function(){var a=this,b=a.getOrderData().orders;return b.length>0?b[0].moneyUnit:void 0},setOrderData:function(a){this.orderData=a},getOrderData:function(){return null==this.orderData?{count:0,amount:0,orders:[]}:this.orderData},getStartNumberIndexByNumber:function(a){for(var b=f.getCurrentGame().getDynamicConfig().gamenumbers,c=b.length,d=0;c>d;d++)if(b[d].number==a)return d;return-1},getStartNumberByIndex:function(a){var b=f.getCurrentGame().getDynamicConfig().gamenumbers;return b.length>a?b[a]:{}},buildDetail:function(){var a=this,b=a.getTraceType(),c=f.getCurrentGameMessage();return a.setOrderData(f.getCurrentGameOrder().getTotal()),orderAmount=a.getOrderData().amount,"normal"!=b&&0>=orderAmount?void c.show({type:"mustChoose",msg:"请至少选择一注投注号码！",data:{tplData:{msg:"请至少选择一注投注号码！"}}}):($.isFunction(a["trace_"+b])&&a["trace_"+b].call(a),void a.updateStatistics())},trace_normal:function(){{var a,b,c,d=this,e=d.defConfig,g=e.dataRowTemplate,h=[],i=(d.getTraceType(),d.getTimes()),j=d.getMultiple(),k=(f.getCurrentGameOrder().getOrderMaxMultiple().maxnum,0),l=0,m=f.getCurrentGame().getCurrentNumber(),n='<span class="icon-period-current"></span>',o="",p=d.traceStartNumberSelect.getValue();f.getCurrentGame().getDynamicConfig().gamenumbers.length}for(d.setOrderData(f.getCurrentGameOrder().getTotal()),k=d.getOrderData().amount,h.push(e.dataRowHeader),a=d.getStartNumberIndexByNumber(p),l=a,i+=l;i>l;l++)b=d.getStartNumberByIndex(l),o=b.number,o==m&&(o+=n),b.number&&(c={No:l+1,traceNumber:o,issueCode:b.issueCode,multiple:j,money:d.formatMoney(k*j),publishTime:b.time},h.push(d.formatRow(g,c)));d.getRowTable().html(h.join("")),d.getRowTable().attr("data-type","trace_normal")},trace_advanced:function(){var a=this,b=a.getTraceType(),c=a.getAdvancedType(),d=a.getTypeTypeType(),e="trace_"+b+"_"+c+"_"+d,g="",h="",i=a.isMoreBounsMethod();if("fanbei"==c);else if(!a.isSameGameMethod()&&("yingli"==c||"yinglilv"==c)||""!=i){if("fanbei"==c)return;return g="yingli"==c?"盈利金额追号":"yinglilv"==c?"盈利率追号":"盈利追号方式",a.isSameGameMethod()?""!=i&&(h=g+"时，"+i+",为多奖金玩法，不支持盈利/盈利率追号"):h=g+"不支持混投<br />请确保您的投注都为同一玩法类型<br />且元角模式一致。",a.getRowTable().html(""),void f.getCurrentGameMessage().show({type:"mustChoose",msg:"",data:{tplData:{msg:h}}})}$.isFunction(a[e])&&a[e](),a.getRowTable().attr("data-type",e)},trace_advanced_fanbei_a:function(a){var b,c,d,e=this,g=e.defConfig.dataRowTemplate,h=[],i=e.getTimes(),j=f.getCurrentGameOrder().getOrderMaxMultiple(),k=a||j.maxnum,l=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(j.gameMethod).join("-"),m=Number($("#J-trace-advanced-fanbei-a-jiange").val()),n=e.getMultiple(),o=n,p=Number($("#J-trace-advanced-fanbei-a-multiple").val()),q=0,r=m,s=f.getCurrentGame().getCurrentNumber(),t='<span class="icon-period-current"></span>',u="",v=e.traceStartNumberSelect.getValue(),w=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),x="";for(h.push(e.defConfig.dataRowHeader),b=e.getStartNumberIndexByNumber(v),q=b,i+=q,c=e.getStartNumberByIndex(q);i>q;q++){if(0>=r&&(r=m,o*=p),r--,o>k&&(f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){e.trace_advanced_fanbei_a(k),e.updateStatistics(),this.hide()},data:{tplData:{msg:"翻倍追号中的<b>["+l+"]</b>的倍数超过了最大倍数限制，系统将自动调整为最大可设置倍数"}}}),!a))return;if(o=o>k?k:o,c=e.getStartNumberByIndex(q),!c.number)break;u=c.number,u==s&&(u+=t),d={No:x,traceNumber:u,issueCode:c.issueCode,multiple:o,money:e.formatMoney(orderAmount*o),publishTime:c.time},w=u.substr(0,8),h.push(e.formatRow(g,d))}e.getRowTable().html(h.join(""))},trace_advanced_fanbei_b:function(){var a,b,c,d=this,e=d.defConfig.dataRowTemplate,g=[],h=d.getTimes(),i=f.getCurrentGameOrder().getOrderMaxMultiple().maxnum,j=(Number($("#J-trace-advanced-fanbei-a-jiange").val()),d.getMultiple(),1),k=(Number($("#J-trace-advanced-fanbei-a-multiple").val()),0),l=Number($("#J-trace-advanced-fanbei-b-num").val()),m=Number($("#J-trace-advance-multiple").val()),n=Number($("#J-trace-advanced-fanbei-b-multiple").val()),o=f.getCurrentGame().getCurrentNumber(),p='<span class="icon-period-current"></span>',q="",r=d.traceStartNumberSelect.getValue(),s=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),t="";for(g.push(d.defConfig.dataRowHeader),a=d.getStartNumberIndexByNumber(r),k=a,h+=k,b=d.getStartNumberByIndex(k);h>k&&(j=l+a>k?m>i?i:m:n>i?i:n,b=d.getStartNumberByIndex(k),b.number);k++)q=b.number,q==o&&(q+=p),c={No:t,traceNumber:q,issueCode:b.issueCode,multiple:j,money:d.formatMoney(orderAmount*j),publishTime:b.time},s=q.substr(0,8),g.push(d.formatRow(e,c));d.getRowTable().html(g.join(""))},trace_advanced_yingli_a:function(a){var b,c,d,e=this,g=e.defConfig.dataRowTemplate,h=[],i=e.getTimes(),j=f.getCurrentGameOrder().getOrderMaxMultiple(),k=a||j.maxnum,l=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(j.gameMethod).join("-"),m=e.getMultiple(),n=0,o=(e.getSameGameMethodName(),Number($("#J-trace-advanced-yingli-a-money").val())),p=e.getSameGameMoneyUnti(),q=e.getWinMoney(),m=1,g=e.defConfig.dataRowYingliTemplate,r=e.getOrderData().orders,s=0,t=0,u=0,v=0,w=f.getCurrentGame().getCurrentNumber(),x='<span class="icon-period-current"></span>',y="",z=e.traceStartNumberSelect.getValue(),A=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),B="";for(h.push(e.defConfig.dataRowYingliHeader),b=e.getStartNumberIndexByNumber(z),n=b,i+=n,c=e.getStartNumberByIndex(n);i>n;n++){if(s=0,u=0,m=1,$.each(r,function(){var a=this,b=a.num,c=a.onePrice,d=a.multiple,e=b*d*c*p,f=q*d;u+=f,s+=e}),m=e.getMultipleByMoney(q,o,s,t),0>m)return f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){this.hide()},data:{tplData:{msg:"您设置的盈利金额追号参数过高，无法达到您预期的目标值，请您重新修改参数设置。"}}}),void e.getRowTable().html("");if(m>k){if(f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){e.trace_advanced_yingli_a(k),e.updateStatistics(),this.hide()},data:{tplData:{msg:"盈利金额追号中的<b>["+l+"]</b>的倍数超过了最大倍数限制，系统将自动调整为最大可设置倍数"}}}),m=a,!a)return;m=a}if(s*=m,t+=s,u=q*m-t,v=u/t,o>u)break;if(c=e.getStartNumberByIndex(n),!c.number)break;y=c.number,y==w&&(y+=x),d={No:B,traceNumber:y,issueCode:c.issueCode,multiple:m,money:e.formatMoney(s),userGroupMoney:e.formatMoney(q*m),winTotalAmout:e.formatMoney(u),yinglilv:Number(100*v).toFixed(2)},A=y.substr(0,8),h.push(e.formatRow(g,d))}e.getRowTable().html(h.join(""))},trace_advanced_yingli_b:function(a){var b,c,d,e=this,g=e.defConfig.dataRowTemplate,h=[],i=e.getTimes(),j=f.getCurrentGameOrder().getOrderMaxMultiple(),k=a||j.maxnum,l=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(j.gameMethod).join("-"),m=e.getMultiple(),n=0,o=(e.getSameGameMethodName(),Number($("#J-trace-advanced-yingli-b-num").val())),p=Number($("#J-trace-advanced-yingli-b-money1").val()),q=Number($("#J-trace-advanced-yingli-b-money2").val()),r=e.getSameGameMoneyUnti(),s=e.getWinMoney(),m=1,g=e.defConfig.dataRowYingliTemplate,t=e.getOrderData().orders,u=0,v=0,w=0,x=0,y=f.getCurrentGame().getCurrentNumber(),z='<span class="icon-period-current"></span>',A="",B=e.traceStartNumberSelect.getValue(),C=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),D="";for(h.push(e.defConfig.dataRowYingliHeader),b=e.getStartNumberIndexByNumber(B),n=b,i+=n,c=e.getStartNumberByIndex(n);i>n;n++){if(n+1>o+b&&(p=q),u=0,w=0,m=1,$.each(t,function(){var a=this,b=a.num,c=a.onePrice,d=a.multiple,e=b*d*c*r,f=s*d;w+=f,u+=e}),m=e.getMultipleByMoney(s,p,u,v),0>m)return f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){this.hide()},data:{tplData:{msg:"您设置的盈利金额追号参数过高，无法达到您预期的目标值，请您重新修改参数设置。"}}}),void e.getRowTable().html("");if(m>k){if(f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){e.trace_advanced_yingli_b(k),e.updateStatistics(),this.hide()},data:{tplData:{msg:"盈利金额追号中的<b>["+l+"]</b>的倍数超过了最大倍数限制，系统将自动调整为最大可设置倍数"}}}),m=a,!a)return;m=a}if(u*=m,v+=u,w=s*m-v,x=w/v,c=e.getStartNumberByIndex(n),!c.number)break;A=c.number,A==y&&(A+=z),d={No:D,traceNumber:A,issueCode:c.issueCode,multiple:m,money:e.formatMoney(u),userGroupMoney:e.formatMoney(s*m),winTotalAmout:e.formatMoney(w),yinglilv:Number(100*x).toFixed(2)},C=A.substr(0,8),h.push(e.formatRow(g,d))}e.getRowTable().html(h.join(""))},trace_advanced_yinglilv_a:function(a){var b,c,d,e=this,g=e.defConfig.dataRowTemplate,h=[],i=e.getTimes(),j=f.getCurrentGameOrder().getOrderMaxMultiple(),k=a||j.maxnum,l=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(j.gameMethod).join("-"),m=e.getMultiple(),n=0,o=(e.getSameGameMethodName(),Number($("#J-trace-advanced-yinglilv-a").val())/100),p=e.getSameGameMoneyUnti(),q=e.getWinMoney(),m=1,g=e.defConfig.dataRowYingliTemplate,r=e.getOrderData().orders,s=0,t=0,u=0,v=f.getCurrentGame().getCurrentNumber(),w='<span class="icon-period-current"></span>',x="",y=e.traceStartNumberSelect.getValue(),z=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),A="";for(h.push(e.defConfig.dataRowYingliHeader),b=e.getStartNumberIndexByNumber(y),n=b,i+=n,c=e.getStartNumberByIndex(n);i>n;n++){if(s=0,u=0,m=1,$.each(r,function(){var a=this,b=a.num,c=a.onePrice,d=a.multiple,e=b*d*c*p,f=q*d;u+=f,s+=e}),m=e.getMultipleByYinglilv(o,q,s,t),0>m)return f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){this.hide()},data:{tplData:{msg:"盈利率追号无法到达您预期设定的目标值，请修改您的设置"}}}),void e.getRowTable().html("");if(m>k){if(f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){e.trace_advanced_yinglilv_a(k),e.updateStatistics(),this.hide()},data:{tplData:{msg:"盈利率追号中的<b>["+l+"]</b>的倍数超过了最大倍数限制，系统将自动调整为最大可设置倍数"}}}),m=a,!a)return;m=a}if(s*=m,t+=s,u=q*m-t,Number(u/t)<o)break;if(c=e.getStartNumberByIndex(n),!c.number)break;x=c.number,x==v&&(x+=w),d={No:A,traceNumber:x,issueCode:c.issueCode,multiple:m,money:e.formatMoney(s),userGroupMoney:e.formatMoney(q*m),winTotalAmout:e.formatMoney(u),yinglilv:Number(u/t*100).toFixed(2)},h.push(e.formatRow(g,d))}z=x.substr(0,8),e.getRowTable().html(h.join(""))},trace_advanced_yinglilv_b:function(a){var b,c,d,e=this,g=e.defConfig.dataRowTemplate,h=[],i=e.getTimes(),j=f.getCurrentGameOrder().getOrderMaxMultiple(),k=a||j.maxnum,l=f.getCurrentGame().getGameConfig().getInstance().getTitleByName(j.gameMethod).join("-"),m=e.getMultiple(),n=0,o=(e.getSameGameMethodName(),Number($("#J-trace-advanced-yinglilv-b-num").val())),p=Number($("#J-trace-advanced-yingli-b-yinglilv1").val())/100,q=Number($("#J-trace-advanced-yingli-b-yinglilv2").val())/100,r=0,s=e.getSameGameMoneyUnti(),t=e.getWinMoney(),m=1,g=e.defConfig.dataRowYingliTemplate,u=e.getOrderData().orders,v=0,w=0,x=0,y=f.getCurrentGame().getCurrentNumber(),z='<span class="icon-period-current"></span>',A="",B=e.traceStartNumberSelect.getValue(),C=(f.getCurrentGame().getDynamicConfig().gamenumbers.length,""),D="";for(h.push(e.defConfig.dataRowYingliHeader),b=e.getStartNumberIndexByNumber(B),n=b,i+=n,c=e.getStartNumberByIndex(n);i>n;n++){if(v=0,x=0,m=1,$.each(u,function(){var a=this,b=a.num,c=a.onePrice,d=a.multiple,e=b*d*c*s,f=b*t*d;x+=f,v+=e}),r=o+b>n?p:q,m=e.getMultipleByYinglilv(r,t,v,w),0>m)return f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){this.hide()},data:{tplData:{msg:"盈利率追号无法到达您预期设定的目标值，请修改您的设置"}}}),void e.getRowTable().html("");if(m>k){if(f.getCurrentGameMessage().show({type:"normal",closeText:"确定",closeFun:function(){e.trace_advanced_yinglilv_a(k),e.updateStatistics(),this.hide()},data:{tplData:{msg:"盈利率追号中的<b>["+l+"]</b>的倍数超过了最大倍数限制，系统将自动调整为最大可设置倍数"}}}),m=a,!a)return;m=a}if(v*=m,w+=v,x=t*m-w,c=e.getStartNumberByIndex(n),!c.number)break;A=c.number,A==y&&(A+=z),d={No:D,traceNumber:A,issueCode:c.issueCode,multiple:m,money:e.formatMoney(v),userGroupMoney:e.formatMoney(t*m),winTotalAmout:e.formatMoney(x),yinglilv:Number(x/w*100).toFixed(2)},C=A.substr(0,8),h.push(e.formatRow(g,d))}e.getRowTable().html(h.join(""))},getMultipleByYinglilv:function(a,b,c,d){for(var e=1,f=1e5;f>e;e++)if((b*e-c*e-d)/(c*e+d)>=a)return e;return-1},getMultipleByMoney:function(a,b,c,d){for(var e=1,f=1e5;f>e;e++)if(a*e-d-c*e>b)return e;return-1},getPlayGroupMoneyByGameMethodName:function(a){var b=f.getCurrentGame().getDynamicConfig().gamelimit[a].usergroupmoney,c=f.getCurrentGame().getCurrentGameMethod().getGameMethodName(),d=f.getCurrentGame().getGameConfig().getInstance().getBetAwardUrl()+"?type="+c+"&extent=currentFre&line=5&lenth=30";return b&&Number(b)>0?b:f.cacheData.gameBonus[d]&&f.cacheData.gameBonus[d]>0?Number(f.cacheData.gameBonus[d]):void alert(f.getCurrentGame().getGameConfig().getInstance().getTitleByName(a)+"玩法类型奖金组读取失败，请刷新页面重试！")},formatRow:function(a,b){var c,d,e=b;for(c in e)e.hasOwnProperty(c)&&(d=RegExp("<#="+c+"#>","g"),a=a.replace(d,e[c]));return a},formatMoney:function(a){var a=Number(a),b=/(-?\d+)(\d{3})/;for(a=Number.prototype.toFixed?a.toFixed(2):Math.round(100*a)/100,a=""+a;b.test(a);)a=a.replace(b,"$1,$2");return a},getAdvancedTable:function(){var a=this;return a._advancedTable||(a._advancedTable=$("#J-trace-table-advanced"))},getAdvancedRowTable:function(){var a=this;return a._advancedTableContainer||(a._advancedTableContainer=$("#J-trace-table-advanced-body"))},getNormalTable:function(){var a=this;return a._table||(a._table=$("#J-trace-table"))},getNormalRowTable:function(){var a=this;return a._tableContainer||(a._tableContainer=$("#J-trace-table-body"))},getTable:function(){var a=this;return a.isAdvanced()?a._advancedTable||(a._advancedTable=$("#J-trace-table-advanced")):a._table||(a._table=$("#J-trace-table"))},getRowTable:function(){var a=this;return a.isAdvanced()?a._advancedTableContainer||(a._advancedTableContainer=$("#J-trace-table-advanced-body")):a._tableContainer||(a._tableContainer=$("#J-trace-table-body"))},setCurrentTraceNumber:function(a){var b=this;b.currentTraceNumber=a},getCurrentTraceNumber:function(){return me.currentTraceNumber
},setTraceStartNumber:function(a){var b=this;b.traceStartNumber=a},getTraceStartNumber:function(){return me.traceStartNumber},getMultiple:function(){var a=this;return a.isAdvanced()?a.getAdvancedMultiple():a.getNormalMultiple()},getNormalMultiple:function(){return Number(this.normalSelectMultiple.getValue())},getAdvancedMultiple:function(){return Number($("#J-trace-advance-multiple").val())},setIsWinStop:function(a){this.isWinStop=!!a},getTimes:function(){var a=this;return a.isAdvanced()?a.getAdvancedTimes():Number($("#J-trace-normal-times").val())},getAdvancedTimes:function(){return Number($("#J-trace-advanced-times").val())},isAdvanced:function(){var a=this;return"advanced"==a.traceType},setTraceType:function(a){var b=this;a!=b.traceType&&(a=a?a:"normal",b.traceType=a)},getTraceType:function(){return this.traceType},getRowTableType:function(){var a=this;return a.getRowTable().attr("data-type")},emptyRowTable:function(){var a=this;$("#J-trace-table-body").html(""),$("#J-trace-table-advanced-body").html(""),a.updateStatistics()},show:function(){var a=this;f.getCurrentGameOrder().editMultiples(1),a.setOrderData(f.getCurrentGameOrder().getTotal()),f.getCurrentGameStatistics().getMultipleDom().hide(),f.getCurrentGameStatistics().getMultipleTextDom().show(),a.panel.show(),a.isOpenPanel=!0,a.buildDetail()},hide:function(){var a=this;f.getCurrentGameOrder().restoreMultiples(),f.getCurrentGameStatistics().getMultipleDom().show(),f.getCurrentGameStatistics().getMultipleTextDom().hide(),a.panel.hide(),a.isOpenPanel=!1,a.reSetTab(),a.emptyRowTable(),$("#J-trace-switch").get(0).checked=!1,$("#J-trace-iswinstop-panel").hide(),$("#J-trace-iswintimesstop-panel").show(),$("#J-trace-iswintimesstop").get(0).checked=!1},reSetTab:function(){var a=this,b=a.TraceTab,c=a.TraceAdvancedTab;b.triggers.removeClass(b.defConfig.currClass),b.triggers.eq(0).addClass(b.defConfig.currClass),b.panels.removeClass(b.defConfig.currPanelClass),b.panels.eq(0).addClass(b.defConfig.currPanelClass),b.index=0,c.triggers.removeClass(c.defConfig.currClass),c.triggers.eq(0).addClass(c.defConfig.currClass),c.panels.removeClass(c.defConfig.currPanelClass),c.panels.eq(0).addClass(c.defConfig.currPanelClass),c.index=0,$("#J-trace-normal-times").val(10),$("#J-function-select-tab .function-select-title li").removeClass("current").eq(1).addClass("current"),a.normalSelectMultiple.setValue(1),$("#J-trace-advanced-times").val(10),$("#J-trace-advance-multiple").val(1),$("#J-trace-advanced-fanbei-a-jiange").val(2),$("#J-trace-advanced-fanbei-a-multiple").val(2),$("#J-trace-advanced-fanbei-b-num").val(5),$("#J-trace-advanced-fanbei-b-multiple").val(3),$("#J-trace-advanced-yingli-a-money").val(100),$("#J-trace-advanced-yingli-b-num").val(2),$("#J-trace-advanced-yingli-b-money1").val(100),$("#J-trace-advanced-yingli-b-money2").val(50),$("#J-trace-advanced-yinglilv-a").val(10),$("#J-trace-advanced-yinglilv-b-num").val(5),$("#J-trace-advanced-yingli-b-yinglilv1").val(30),$("#J-trace-advanced-yingli-b-yinglilv2").val(10),a.setTraceType("normal"),a.advancedType=a.defConfig.advancedTypeHas[0],a.typeTypeType="a",$("#J-trace-advanced-type-panel").find('input[type="radio"]').each(function(a){if((a+1)%2!=0){var b,c=$(this),d=c.parent(),e=d.parent().children();this.checked=!0,e.each(function(a){b=e.get(a),d.get(0)!=b?$(b).find('input[type="text"]').attr("disabled","disabled"):$(b).find('input[type="text"]').attr("disabled",!1)})}})}},k=a.Class(j,c);k.defConfig=e,k.getInstance=function(a){return d||(d=new k(a))},a[b]=k}(phoenix,"GameTrace",phoenix.Event);