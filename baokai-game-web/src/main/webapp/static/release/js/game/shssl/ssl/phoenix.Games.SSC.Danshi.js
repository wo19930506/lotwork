!function(a,b,c){var d={name:"wuxing.zhixuan.danshi",editorobj:".content-text-balls",uploadButton:"#file",exampleText:"12345 33456 87898 <br />12345 33456 87898 <br />12345 33456 87898 ",tips:"五星直选单式玩法提示",exampleTip:"这是单式弹出层提示",checkFont:/[\u4E00-\u9FA5]|[/\n]|[/W]/g,filtration:/[\s]|[,]|[;]|[<br>]|[，]|[；]/i,checkNum:/^[0-9]*$/,normalTips:'<p style="color:#888;font-size:12px;line-height:170%;">'+["说明：",'1、请参照"标准格式样本"格式录入或上传方案。',"2、每一注号码之间的间隔符支持 回车 空格[ ] 逗号[,] 分号[;] 冒号[:] 竖线 [|]","3、文件格式必须是.txt格式。","4、文件较大时会导致上传时间较长，请耐心等待！","5、将文件拖入文本框即可快速实现文件上传功能。","6、导入文本内容后将覆盖文本框中现有的内容。"].join("<br>")+"</p>"},e=a.Games,f=a.Games.SSC,g={init:function(){var a=this;a.ieRange="",a.vData=[],a.aData=[],a.tData=[],a.errorData=[],a.sameData=[],a.firstfocus=!0,a.ranNumTag=!1,a.isFirstAdd=!0,e.getCurrentGameStatistics().addEvent("afterStatisReset",function(){var b=this,c=b.defConfig;methodName=b.getGameMethodName(),methodName==a.defConfig.name&&(b.multipleDom.setValue(c.multiple),b.moneyUnitDom.setValue(c.moneyUnit))}),e.getCurrentGameOrder().addEvent("beforeAdd",function(b,c){a.tData;c.type==a.defConfig.name&&(a.isFirstAdd?a.ranNumTag||(c.lotterys=[],a.isFirstAdd=null,a.updateData(),e.getCurrentGameOrder().add(e.getCurrentGameStatistics().getResultData())):((""!=a.errorData.join("")||""!=a.sameData.join(""))&&a.ballsErrorTip(),a.checkLimitBall(c),a.isFirstAdd=!0))})},initFrame:function(){var b=this;b.win=b.container.find(b.defConfig.editorobj)[0].contentWindow,b.doc=b.win.document,b._bulidEditDom();var c=a.Tip.getInstance();b.container.find(".balls-example-danshi-tip").click(function(a){a.preventDefault();var d=$(this);c.setText(b.getExampleText()),c.show(d.outerWidth()+10,0,this)}).mouseout(function(){c.hide()})},getExampleText:function(){return this.defConfig.exampleText},rebuildData:function(){var a=this;a.balls=[[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]},buildUI:function(){var a=this;a.container.html(a.getHTML())},reSelect:function(){},batchSetBallDom:function(){},getNormalTips:function(){return this.defConfig.normalTips},showNormalTips:function(){var a=this;a.replaceText(a.getNormalTips.call(a)),a.firstfocus=!0},_bulidEditDom:function(){var a=this,b="";a.doc.designMode="On",a.doc.contentEditable=!0,a.doc.open(),b='<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',b+="<style>*{margin:0;padding:0;font-size:14px;}</style>",b+="</head>",a.doc.writeln("<html>"+b+'<body style="word-break: break-all">'+a.getNormalTips()+"</body></html>"),a.doc.close(),a.bindPress(),document.all&&(a.doc.onkeypress=function(){return a._ieEnter()}),a.dragUpload()},dragUpload:function(){var a=this,b=$(a.doc.body);window.FileReader&&(b.bind("dragover",function(a){a.preventDefault(),a.stopPropagation()}),b.get(0).addEventListener("drop",function(b){b.preventDefault(),b.stopPropagation();var c=b.dataTransfer.files,d=c[0],e=new FileReader,f=d.type?d.type:"n/a";"text/plain"==f&&(e.onload=function(b){var c=b.target.result;""!=$.trim(c)&&(a.replaceText(c),a.firstfocus=!1,a.updateData())},e.readAsText(d))},!1))},_ieEnter:function(){var a=this,b=a.win.event;return 13==b.keyCode?(this._saveRange(),this._insert("<br/>"),!1):void 0},_insert:function(a){var b=this;if(b.ieRange)b.ieRange.pasteHTML(a),b.ieRange.select(),b.ieRange=!1;else if(b.win.focus(),document.all)b.doc.body.innerHTML+=a;else{var c=win.getSelection(),d=c.getRangeAt(0),e=d.createContextualFragment(a);d.insertNode(e)}},_saveRange:function(){if(document.all&&!me.ieRange){var a=me.doc.selection;if(me.ieRange=a.createRange(),"Control"!=a.type){var b=me.ieRange.parentElement();("INPUT"==b.tagName||b==document.body)&&(me.ieRange=!1)}}},getHtml:function(){var a=this;return a.doc?$(a.doc.body).html():""},getText:function(){var a=this;return a.doc?$(a.doc.body).text():""},replaceText:function(a){var b=this,a=a.replace(/\n/g,"<br>");b.doc&&a&&$(b.doc.body).html(a)},bindPress:function(){var a=this,b=a.container.find(a.defConfig.uploadButton),c=window.navigator.userAgent.toLowerCase();$(a.doc).bind("input",function(){a.updateData()}),c.indexOf("msie")>0&&($(a.doc.body).bind("keyup",function(){a.updateData()}),$(a.doc.body).bind("blur",function(){a.updateData()})),$(a.doc).bind("focus",function(){a.firstfocus&&(a.replaceText(" "),a.firstfocus=!1)}),$(a.doc).bind("blur",function(){var b=a.getText();""==$.trim(b)&&a.showNormalTips()}),$(a.doc.body).bind("focus",function(){a.firstfocus&&(a.replaceText(" "),a.firstfocus=!1)}),$(a.doc.body).bind("blur",function(){var b=a.getText();""==$.trim(b)&&a.showNormalTips()}),b.bind("change",function(){var b=$(this).parent();a.checkFile(this,b)})},iterator:function(a){for(var b=this,c=b.defConfig,d=[],e=0,f=0;f<a.length;f++)c.filtration.test(a.charAt(f))&&(d.push(a.substr(e,f-e)),e=f+1);return d},checkResult:function(a,b){for(var c=b.length-1;c>=0;c--)if(b[c].join("")==a)return!1;return!0},filterLotters:function(a){var b=this,c="";return c=a.replace(/<br>+|&nbsp;+/gi," "),c=c.replace(/[\s]|[,]+|[;]+|[，]+|[；|]+/gi," "),c=c.replace(/<(?:"[^"]*"|'[^']*'|[^>'"]*)+>/g," "),c=c.replace(b.defConfig.checkFont,"")+" "},checkSingleNum:function(a){var b=this;return b.defConfig.checkNum.test(a)&&a.length==b.balls.length},checkBallIsComplete:function(a){var b=this,c=0,d=[];for(b.aData=[],b.vData=[],b.sameData=[],b.errorData=[],b.tData=[],d=b.iterator(b.filterLotters(a))||[];c<d.length;c++)b.checkSingleNum(d[c])?(b.checkResult(d[c],b.tData)?b.tData.push(d[c].split("")):b.checkResult(d[c],b.sameData)&&b.sameData.push(d[c].split("")),b.vData.push(d[c].split(""))):b.checkResult(d[c],b.errorData)&&b.errorData.push(d[c].split("")),b.checkResult(d[c],b.aData)&&b.aData.push(d[c].split(""));return b.tData.length>0?(b.isBallsComplete=!0,b.isFirstAdd?b.vData:b.tData):(b.isBallsComplete=!1,[])},countInstances:function(a,b){var c=[],d=0;do d=a.indexOf(b,d),-1!=d&&(c.push(d),d+=b.length);while(-1!=d);return c},removeOrderError:function(){var a=this,b=a.vData.length>0?"":" ";if(!a.firstfocus){for(var c=0;c<a.vData.length;c++)b+=a.vData[c].join("")+"&nbsp;";if(a.errorDataTips(),""==$.trim(b))return void a.showNormalTips();a.replaceText(b),a.checkBallIsComplete(b),a.updateData()}},removeOrderSame:function(){var a=this,b=a.aData.length>0?"":" ";if(!a.firstfocus){for(var c=0;c<a.aData.length;c++)b+=a.aData[c].join("")+"&nbsp;";a.sameDataTips(),a.replaceText(b),a.checkBallIsComplete(b),a.updateData()}},removeOrderAll:function(){var a=this;a.firstfocus||(a.replaceText(" "),a.sameData=[],a.aData=[],a.tData=[],a.vData=[],e.getCurrentGameStatistics().reSet(),a.showNormalTips())},checkFile:function(a,b){var c=a.value,d=c.substring(c.lastIndexOf("."),c.length),d=d.toLowerCase();return".txt"!=d?(alert("对不起，导入数据格式必须是.txt格式文件哦，请您调整格式后重新上传，谢谢 ！"),!1):void b[0].submit()},getFile:function(a){var b=this,c=b.container.find(":reset");a&&(b.replaceText(a),b.firstfocus=!1,b.updateData(),c.click())},errorTip:function(){var a=this;alert(a.errorData.join())},sameDataTips:function(){var a=this,b=a.sameData,c="",d=e.getCurrentGameMessage(),f=[];if(""!=b.join("")){for(var g=0;g<b.length;g++)$.trim(b[g].join(""))&&f.push(b[g].join(""));c='<h4 class="pop-text" style="display:block;font-weight:bold">以下号码重复，已进行自动过滤</h4><p class="pop-text" style="display:block">'+f.join(", ")+"</p>",d.show({mask:!0,content:['<div class="bd text-center">','<div class="pop-waring">','<i class="ico-waring <#=icon-class#>"></i>','<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">'+c+"</div>","</div>","</div>"].join(""),closeIsShow:!0,closeFun:function(){this.hide()}})}},errorDataTips:function(){var a=this,b=a.errorData,c="",d=e.getCurrentGameMessage(),f=[];if(""!=b.join("")){for(var g=0;g<b.length;g++)$.trim(b[g].join(""))&&f.push(b[g].join(""));c='<h4 class="pop-text" style="display:block;font-weight:bold">以下号码错误，已进行自动过滤</h4><p class="pop-text" style="display:block">'+f.join(", ")+"</p>",d.show({mask:!0,content:['<div class="bd text-center">','<div class="pop-waring">','<i class="ico-waring <#=icon-class#>"></i>','<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">'+c+"</div>","</div>","</div>"].join(""),closeIsShow:!0,closeFun:function(){this.hide()}})}},ballsErrorTip:function(){var a=this,b=a.errorData,c=a.sameData,d="",f="",g=e.getCurrentGameMessage(),h=[],i=[];if(""!=c.join("")){for(var j=0;j<c.length;j++)$.trim(c[j].join(""))&&i.push(c[j].join(""));f='<h4 class="pop-text" style="display:block;font-weight:bold">以下号码重复，已进行自动过滤</h4><p class="pop-text" style="display:block">'+i.join(", ")+"</p>"}if(""!=b.join("")){for(var j=0;j<b.length;j++)$.trim(b[j].join(""))&&h.push(b[j].join(""));d='<h4 class="pop-text" style="display:block;font-weight:bold">以下号码错误，已进行自动过滤</h4><p class="pop-text" style="display:block">'+h.join(", ")+"</p>"}g.show({mask:!0,content:['<div class="bd text-center">','<div class="pop-waring">','<i class="ico-waring <#=icon-class#>"></i>','<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">'+f+d+"</div>","</div>","</div>"].join(""),closeIsShow:!0,closeFun:function(){this.hide()}})},reSet:function(){var a=this;a.isBallsComplete=!1,a.rebuildData(),a.updateData(),a.ranNumTag||a.showNormalTips(),a.removeRanNumTag()},makePostParameter:function(a,b){for(var c=[],a=b.lotterys,d=0;d<a.length;d++)c=c.concat(a[d].join(""));return c.join(" ")},getLottery:function(){var a=this,b=a.getHtml();if(""!=b)return a.checkBallIsComplete(b)},removeSameNum:function(a){var b,c=0,d=this,e=this.getBallData()[0].length;for(len=a.length,b=Math.floor(Math.random()*e);c<a.length;c++)if(b==a[c])return arguments.callee.call(d,a);return b},emptySameData:function(){this.sameData=[]},emptyErrorData:function(){this.errorData=[]},addRanNumTag:function(){var a=this;a.ranNumTag=!0,a.emptySameData(),a.emptyErrorData()},getTdata:function(){return this.tData},getOriginal:function(){var a=this,b=a.getBallData(),c=b.length,d=b[0].length;for(i=0,j=0,row=[],tData=a.getTdata(),data=a.getHtml(),result=[];c>i;i++){for(row=[],j=0;d>j;j++)b[i][j]>0&&row.push(j);result.push(row)}return tData.length>0&&(result[0][0]=a.getTdata().join(",")),result},removeRanNumTag:function(){this.ranNumTag=!1},checkRandomBets:function(a,b){var c=this,d="undefined"==typeof a?!0:!1,a=a||{},f=[],b=b||0,g=(c.getBallData().length,c.getBallData()[0].length,e.getCurrentGameOrder().getTotal().orders);if(f=c.createRandomNum(),Number(b)>Number(c.getRandomBetsNum()))return f;if(d)for(var h=0;h<g.length;h++)if(g[h].type==c.defConfig.name){var i=g[h].original.join("").replace(/,/g,"");a[i]=i}return a[f.join("")]?(b++,arguments.callee.call(c,a,b)):f},randomNum:function(){var a=this,b=[],c=null,d=(a.getBallData(),a.defConfig.name,[]),f=[];return a.addRanNumTag(),b=a.checkRandomBets(),f=b,d=a.combination(f),c={type:e.getCurrentGame().getCurrentGameMethod().getGameMethodName(),original:f,lotterys:d,moneyUnit:e.getCurrentGameStatistics().getMoneyUnit(),multiple:e.getCurrentGameStatistics().getMultip(),onePrice:e.getCurrentGameStatistics().getOnePrice(),num:d.length},c.amountText=e.getCurrentGameStatistics().formatMoney(c.num*c.moneyUnit*c.multiple*c.onePrice),c},getHTML:function(){var a=[];return a.push('<div class="balls-import clearfix">'),a.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="'+e.getCurrentGame().getGameConfig().getInstance().getUploadPath()+'" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),a.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="导入" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),a.push('<input type="button" class="balls-import-input" value="" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),a.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),a.push('<iframe src="" name="check_file_frame" style="display:none;"></iframe>'),a.push("</form>"),a.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),a.push('<div class="panel-btn">'),a.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>删除错误项</a>'),a.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>删除重复项</a>'),a.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>清空文本框</a>'),a.push("</div>"),a.push("</div>"),a.join("")}},h=a.Class(g,c);h.defConfig=d,f[b]=h}(phoenix,"Danshi",phoenix.GameMethod);