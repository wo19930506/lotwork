<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="com.winterframework.modules.page.Page" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri ="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Access-Control-Allow-Origin" content="*">
    <title>${lotteryName}</title>

    <style>
        .loadding img {
            font-size: 14px;
            max-width: 70px;
            max-height: 52px;
        }

        .loadding {
            text-align: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 99999;
        }

        .loadding-bg {
            opacity: 1;
            background: #fff;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

        }

        .spinner {
            height: 70px;
            width: 70px;
            text-align: center;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;

        }

        .spinner > div {
            width: 18px;
            height: 18px;
            background-color: #545067;
            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        }

        .spinner .bounce1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .spinner .bounce2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0)
            }
            40% {
                -webkit-transform: scale(1.0)
            }
        }

        @keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            }
            40% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
            }
        }
    </style>

    <link href="${staticFileContextPath}/static/images/wap/slmmc/app.min.css" rel="stylesheet">
</head>
<body ng-app="starter" ng-controller="allCtrl" ng-click="allClick()">
<div class="loadding">
    <div class="loadding-bg"></div>
    <div class="spinner">
        <img src="${staticFileContextPath}/static/images/wap/slmmc/${lotteryCode}_LOGO.jpg" alt=""/>
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</div>
<ion-nav-view></ion-nav-view>

<script id="templates/pick.html" type="text/ng-template">
    <ion-view ng-click="cloaseAllWindow()" xmlns:btsp="http://www.w3.org/1999/html">
        <div class="bar bar-header bar-stable">
            <!--弹出选择菜单-->
            <div class="ar-popmenu {{menuShow? '':'menuShow'}}">
                <ul>
                    <li ng-click="trend('{{moreRecordUrl}}')">走势图</li>
                    <li ng-click="yuanjiao()">模式 {{ moneyUnit==1?"元":(moneyUnit==0.01?"分":"角") }}</li>
                    <li ng-click="volumeSwich()">声音 {{ volume ?'开':'关'}}</li>
                    <li ng-click="showPlayInfo()">玩法说明</li>
                    <li ng-click="trend('{{backToPcUrl}}')">电脑版</li>
                </ul>
            </div>

            <a class="button button-icon icon ion-chevron-left" ng-hide="iseditor" ng-click="goBack(true)"></a>

            <h1 class="title" ng-click="changeMethod($event)">
				{{ currentMethodTitle }}
				<span class="icon ion-chevron-down {{ poptypeshow ? 'ion-chevron-up':'ion-chevron-down'}}" ng-hide="iseditor"></span>
			</h1>

            <a class="button button-icon icon ion-more" ng-click="menuShowHander($event)"></a>
        </div>

        <!--游戏类型开始-->
        <div class="ar-poptype" onscroll="true" ng-class="{active: poptypeshow}">
            <!--业务模板数据开始-->
			<div class="strategy-select">
                <div class="row">
                    <div class="col mytitle {{initilesData[i].active ? 'active':''}}"
                        ng-repeat="(i,gameClass) in serverGameConfig.gameMethods track by initiles($index,gameClass)"
                        ng-click="slideChange(i,$event)">
                        <span>{{gameClass.title | split:'_':'latest'}}</span>
                    </div>
                </div>

                <ion-slide-box on-slide-changed="slideHasChanged($index)" ng-click="slideChange()">
					<ion-slide ng-repeat="(iii,gameClass) in serverGameConfig.isSupport2000 ? serverGameConfig.gameMethods : serverGameConfig.gameMethods.slice(0,8) track by initMM($index)">
                        <div class="strategy-list">
                            <dl ng-repeat="gamelabel in gameClass.childs">
                                <dt>{{gamelabel.title }}:</dt>
                                <dd>
                                    <span class="{{ gameMethod.cur ? 'active':'' }}"
                                            ng-click="chooseGame(gameMethod,iii)"
                                            ng-repeat="gameMethod in gamelabel.childs track by initMethed($index,gameMethod,gameMethod.mode+'.'+gameMethod.parent+'.'+gameMethod.name,gameClass.title+gameMethod.title,iii)">
                                        {{gameMethod.title}}
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </ion-slide>
                </ion-slide-box>
            </div>
            <!--业务模板数据结束-->
        </div>
        <!--游戏类型结束-->

        <div class="pick-scroll" style="margin-top:30px;">
            <!--游戏记录开始-->
            <div class="game-history {{isDanshi? 'isDanshi':'' }}" style="position: fixed; top:44px;">
                <div class="history-bar">
                    <div class="{{historyShow ? '': 'record-list'}}">
                        <table class="table table-hover morespecial" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>期号</th>
                                    <th>开奖号码</th>
                                    <th>投注</th>
                                    <th>奖金</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr ng-repeat="item in historyRecord">
                                    <td><span class="time">{{item.time}}</span></td>
                                    <td>{{item.numberRecord}}</td>
                                    <td>{{item.totalprice / 10000}}</td>
                                    <td>{{item.bonus}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="history-bar-title">
                        <span ng-click="showRecord10($event)">
                            {{ historyShow?'点击收起开奖记录':'点击查看开奖记录' }}
                            <span class="{{historyShow?'ion-chevron-up' :'ion-chevron-down'}}"></span>
                        </span>

                        <span class="ai-random" ng-click="getRandom()">机选</span>
                    </div>
                </div>
            </div>
            <!--游戏记录结束-->

            <ion-content  class="has-footer has-header " delegate-handle="mainScroll" style="top:77px; overflow:auto;">
                <!--选号容器-->
                <div class="number-select-content {{isDanshi? 'isDanshi':'' }}">
                    <!--业务模板数据-->
                    <div class="number-select-list" ng-repeat="(ballLabel,balls) in ballsTree">
                        <div class="list-top">
                            &nbsp;
                            <h3>{{ ballLabel =='isEditor' ? '': ballLabel}}</h3>
                            <ol>
                                <li class="{{ val.cur ? 'active':''  }}" ng-repeat="(name,val) in balls.dxqdsq"
                                    ng-click="setGrounpChoose(name,balls,val,balls.dxqdsq,currentMethodName)">{{ val.val }}
                                </li>
                            </ol>
                        </div>
                        <ul class="ball-list">
                            <li ng-repeat="(k,v) in range(this.startPosstion,balls.length+this.startPosstion)"
                                class="{{ balls[k] ? 'active':'' }}" ng-click="result(balls,k,currentMethodName,v)">{{ v }}
                            </li>
                        </ul>
                    </div>
                    <!--业务模板数据-->
                </div>
                <!--单式-->
                <div class="number-select-content number-select-content2 {{isDanshi? '': 'isDanshi'}}">
                    <div class="row option-label {{beforesubmited?'':'beforesubmited'}}">
                        <div class="col label">请输入注单:</div>
                        <div ng-click="helprule()" class="col">帮助</div>
                        <div ng-click="clearVal()" class="col">清空</div>
                    </div>

                    <div class="row option-label {{beforesubmited?'beforesubmited':''}}">
                        <div class="col label">请输入注单:</div>
                        <div ng-click="helprule()" class="col">规则</div>
                        <div ng-click="cancelSubmited()" class="col">返回</div>
                    </div>

                    <div class="number-select-content-danshi">
                        <p id="tips-danshi" class="tips-danshi" style="color:#888;font-size:12px;line-height:170%;">
                            1.输入的注单请参照如下规则：单注内各号码保持相连，不同注号码间用分隔符隔开;<br>
                            2.分隔符支持：回车[ ]空格[ ]逗号[,]分号[;]冒号[:]竖线[|];<br>
                            3.文件较大时，提交注单可能需要一定时间，请耐心等待;<br>
                        </p>
                        
                        <div class="nano" id="about">
                            <div class="nano-content">
                                <textarea class="text-areas" ng-focus="textareaFocus()" ng-blur="textareaBlur()" rows="8"></textarea>
                            </div>
                        </div>
                    </div>
                    <div ng-show="hasDanshiErrror">
                        <div class="showtextarea-err" ng-click="showtextareaError()">
                            被排除的问题
                        </div>
                    </div>
                </div>
            </ion-content>            
        </div>

        <div class="bar bar-footer bar-stable {{ hasChoose && !isDanshi ?'active':'' }}">
            <em class="text-center submit-button {{isDanshi && beforesubmited ? '': 'isDanshi'}} {{isfocus?'textareasubmitactive':''}}"
                ng-click="textareaSubmit()">提交</em>
            <ul class="custompluse" ng-class="{ titleText : extraisShow}">
                <li class="pluseitem" ng-click="customMutiple(-10,$event)"><span class="n">-10</span></li>
                <li class="pluseitem" ng-click="customMutiple(-1,$event)"><span class="n">-1</span></li>
                <li class="pluseitem" ng-click="customMutiple(1,$event)"><span class="n">+1</span></li>
                <li class="pluseitem" ng-click="customMutiple(10,$event)"><span class="n">+10</span></li>
            </ul>

            <div ng-hide="iseditor">
                <!-- select-result 當頁面超過 width 時，底色會走位  -->
                <div class="select-result">
                    <div class="result-title" ng-click="clickMutit($event)">
                        <span id='shopCarMultiple' ng-class="{ titleText : extraisShow}">{{ shopCar.multiple == 1?"倍投x1": ('x'+shopCar.multiple) }}</span>
                        <input ng-class="{ titleInput : extraisShow}" type="tel" disabled ng-model="shopCar.multiple"
                               ng-init="shopCar.multiple=1"
                               ng-value="shopCar.multiple ">
                    </div>

                    <dl class="result-money" ng-click="setBukets(isDanshi ? 'imadanshi':undefined)">
                        <!--业务模板数据-->
                        <dt>已选{{ shopCar.count }}注x{{ shopCar.onePrice * shopCar.moneyUnit }}元</dt>
                        <dd>{{ shopCar.count * shopCar.onePrice * shopCar.moneyUnit * shopCar.multiple | number:1}}元</dd>
                        <!--业务模板数据-->
                    </dl>
                    <span class="result-plus" ng-click="setBukets(isDanshi ? 'imadanshi':undefined)">{{isDanshi ? ' ':'+'}}</span>
                </div>
                <div id='ballBucketResult' class="result-next {{isDanshi?'result-next2':''}}" ng-click="goBucket()">{{isDanshi?'确定':'号码篮'}}<span
                        ng-show="ballBucket.length"
                        class="result-count">{{ ballBucket.length }}</span>
                </div>
            </div>

            <div ng-show="iseditor">
                <div class="select-result select-result2">
                    <div class="result-title" ng-click="clickMutit($event)">
                        <span ng-class="{ titleText : extraisShow}">{{ shopCar.multiple == 1?"倍投x1": ('x'+shopCar.multiple) }}</span>
                        <input ng-class="{ titleInput : extraisShow}" type="tel" disabled ng-model="shopCar.multiple"
                               ng-init="shopCar.multiple=1"
                               ng-value="shopCar.multiple ">
                    </div>
                    <span ng-click="goBucket(true)" class="comfirm">确定</span>
                </div>
            </div>
        </div>
    </ion-view>
</script>

<script id="templates/drawing.html" type="text/ng-template">
    <ion-view view-title="号码篮">
        <div class="bar bar-header bar-stable">
            <!--弹出选择菜单-->
            <div class="ar-popmenu {{menuShow? '':'menuShow'}}">
                <ul>
                    <li ng-click="trend('{{moreRecordUrl}}')">走势图</li>
                    <li ng-click="yuanjiao()">模式 {{ moneyUnit==1?"元":(moneyUnit==0.01?"分":"角") }}</li>
                    <li ng-click="volumeSwich()">声音 {{ volume ?'开':'关'}}</li>
                    <li ng-click="showPlayInfo()">玩法说明</li>
                    <li ng-click="trend('{{backToPcUrl}}')">电脑版</li>
                </ul>
            </div>

            <a id='backGoPick' class="button button-icon icon ion-chevron-left" ng-click="goPick()"></a>

            <h1 class="title" ng-click="poptypeshow = !poptypeshow">号码篮</h1>

            <a class="button button-icon icon ion-more" ng-click="menuShowHander($event)"></a>
        </div>
        <ion-content class="has-footer has-header bg-drawing" overflow-scroll="true">
            <!--老虎机-->
            <div class="slot">
                <div class="slot-center">
                    <div class="slot-number">
                        <div class="slot-light"></div>
                        <ul class="number-list">
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                        </ul>
                    </div>
                    <div class="drawbar" ng-click="gosubmit()">
                        <span class="drawbar-up"></span>
                        <span class="drawbar-down"></span>
                    </div>
                    <div class="big-win"></div>
                </div>
            </div>

            <!--彩票方案操作-->
            <div class="result-box">
                <div class="result-operate">
                    <span id='selfGoPick' class="ar-btn" ng-click="goPick()">自选号码</span>
                    <span id='randomBall' class="ar-btn" ng-click="getrandomBalls()">机选</span>
                    <span id='cleanConfirm' class="ar-btn" ng-click="showConfirm()">清空</span>
                </div>

                <div class="result-list">
                    <div class="result-list-shadow"></div>
                      <ul class="scheme-list">
                        <li class="scheme {{obj.isDanshi? 'scheme2':''}}" ng-repeat="(i,obj) in ballBucket track by initBacketList($index,obj)"
                            ng-click="editLottory(obj)">
                            <dl>
                                <dt>{{obj.isDanshi?  obj.ballLabel :(obj.checkBallArray | filterArray:obj.type:obj)}}</dt>
                                <dd>{{ obj.label | split:'_':'latest' }} {{ obj.count }}注x{{ obj.onePrice * obj.moneyUnit }}元</dd>
                            </dl>
                            <span class="scheme-multiple">
                                {{ obj.totalMultiple }}倍
                            </span>
                            <span class="scheme-delete" ng-click="removeBucketItem(i,$event)"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </ion-content>
        <div class="extra-operate extraOperateShow">
            <div class="extra-box">
                <label>投</label>

                <p>
                    <span class="op-plus" ng-click="minderMutl()">-</span>
                    <input type="tel" ng-model="globelMultipleData.multiple" id="globleMultipleChange"/>

                    <span class="op-minus" ng-click="globleMultipleChange(true)">+</span>
                </p>
                <label>倍</label>
            </div>
            <div class="extra-box">
                <label>连开</label>

                <p>
                    <span class="op-plus" ng-click="globelMultipleData.continuesBet <= 1?(globelMultipleData.continuesBet = 1): (globelMultipleData.continuesBet=globelMultipleData.continuesBet-1)">-</span>
                    <input type="tel" ng-model="globelMultipleData.continuesBet" id="changeContinuesBet"/>
                    <span class="op-minus" ng-click="changeContinuesBet(true)">+</span>
                </p>
                <label>期</label>
            </div>
        </div>

        <div class="bar bar-footer bar-stable">
            <div class="select-result">
                <dl class="result-money confirm-money">
                    <dt>共{{ totalObject.totalCount }}注,<span>{{(totalMoney = totalObject.totalM * globelMultipleData.multiple| number:1)  }}元 </span></dt>
                    <dd>余额：{{serverGameConfig.balance | currency: ''}}元</dd>
                </dl>
            </div>
            <div id="gosubmitClick" class="result-next result-confirm" ng-click="gosubmit(0)">投注</div>
        </div>
    </ion-view>
</script>

<script id="templates/submit.html" type="text/ng-template">
    <ion-view view-title="投注成功">
        <div class="bar bar-header bar-stable">
            <!--弹出选择菜单-->
            <div class="ar-popmenu {{menuShow? '':'menuShow'}}">
                <ul>
                    <li ng-click="trend('{{moreRecordUrl}}')">走势图</li>
                    <li ng-click="yuanjiao()">模式 {{ moneyUnit==1?"元":(moneyUnit==0.01?"分":"角") }}</li>
                    <li ng-click="volumeSwich()">声音 {{ volume ?'开':'关'}}</li>
                    <li ng-click="showPlayInfo()">玩法说明</li>
                    <li ng-click="trend('{{backToPcUrl}}')">电脑版</li>
                </ul>
            </div>

            <h1 class="title" ng-click="poptypeshow = !poptypeshow">投注成功</h1>

            <a class="button button-icon icon ion-more" ng-click="menuShowHander($event)"></a>
        </div>

        <ion-content class="has-footer has-header bg-drawing" overflow-scroll="true" id="drawingContent">
            <!--老虎机-->
            <div class="slot" id="slot">
                <div class="slot-center">
                    <div class="slot-number slot-number2">
                        <div class="slot-light"></div>
                        <ul class="number-list">
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                            <li><span style="margin-top: -6336px"></span></li>
                        </ul>
                    </div>
                    <div class="big-win"></div>
                </div>
            </div>

            <!--开奖结果-->
            <div class="drawing-box">
                <div class="drawing-account">
                    <h3>第<span>{{ currentIndex }}/{{ globelMultipleData.continuesBet }}</span>期<strong> &nbsp;&nbsp;<b
                            id="status"></b></strong></h3>

                    <h2>奖金：<span id="countUp" style="float: right"></span></h2>
                </div>
                <div class="drawing-list">
                    <div class="drawing-list-shadow"></div>
                    <ul class="wining-list">
                        <li class="wining repeated-item" ng-repeat="item in winnings">
                            <div class="wining-bg">
                                <dl>
                                    <dt>{{item.numbers}}</dt>
                                    <dd>{{item.type}}</dd>
                                </dl>
                                <span class="wining-money"><em>奖金</em><br><i>{{item.money}}</i></span>
                            </div>
                        </li>

                        <li class="wining repeated-item" ng-repeat="item in isNoshow">
                            <div class="wining-bg nowining">
                                <span class="jiong">囧</span><span>这局没中,再来一局...</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </ion-content>
        
        <div class="bar bar-footer bar-custom">
            <div class="bar-btn backtodw" style=" display: none;" ng-click="backtDraw()">返回</div>
            <span class="bar-btn" id="barBtn">加载中...</span>
        </div>
    </ion-view>
</script>

<script id="templates/intro.html" type="text/ng-template">
    <ion-view view-title="玩法说明">
        <div class="bar bar-header bar-stable">
            <a class="button button-icon icon ion-chevron-left" ng-click="goPick()"></a>

            <h1 class="title" ng-click="poptypeshow = !poptypeshow">玩法说明</h1>
        </div>
        <ion-content class="has-header" overflow-scroll="true" scrollbar-x="false" scrollbar-y="false">
            <iframe ng-src="{{introUrl}}" width="100%" height="100%"></iframe>
        </ion-content>
    </ion-view>
</script>

<script src="${staticFileContextPath}/static/js/wap/slmmc/game.js"></script>
<script src="${staticFileContextPath}/static/js/wap/slmmc/app.min.js"></script>
<script src="${staticFileContextPath}/static/js/phoenix.GameGa.js"></script>
<script src="${currentContextPath}/gameBet/${lotteryCode}/config"></script>

<script type="text/javascript">
    window.debug = false;
    var returnUrl = '${userContextPath}';
    var basePath = '';
    var introUrl = '${userContextPath}'+phoenix.Games.SSC.Config.defConfig.helpLink.replace('/help/','/help/wap/');
    // 走勢圖接口
    var moreRecordUrl = '/game/chart/${lotteryCode}/Wuxing';
    var backToPcUrl = '/gameBet/${lotteryCode}?isPass=true';
    // 音效檔接口
    var audioUrl = '${staticFileContextPath}/static/images/wap/slmmc/';
    
    phoenix.Games.SSC.Config.pros.init();
    var configData = {
        "gameTypeCn":phoenix.Games.SSC.Config.defConfig.gameTypeCn,
        "defaultMethod": phoenix.Games.SSC.Config.pros.getDefaultMethod(),
        "gameMethods": phoenix.Games.SSC.Config.pros.getTypes(),
        "records": [],
        "gameLimits": {},
        "awardRetStatus":phoenix.Games.SSC.Config.defConfig.awardRetStatus,
        "awardGroups": phoenix.Games.SSC.Config.defConfig.awardGroups,
        "awardGroupRetStatus": phoenix.Games.SSC.Config.defConfig.awardGroupRetStatus,
        "isSupport2000": phoenix.Games.SSC.Config.defConfig.isSupport2000
    };
    //上海时时乐不支持超级2000[mantis:#0010004]
    if(configData.gameTypeCn == '上海时时乐'){
        configData.isSupport2000 = false;
        moreRecordUrl = '/game/chart/${lotteryCode}/Housan';
    }

    // 提交用户奖金组设置的接口
    var saveBetAwardUrl = phoenix.Games.SSC.Config.pros.getSaveProxyBetGameAwardGroupUrl();

    // 提交投注接口
    var submitUrl = phoenix.Games.SSC.Config.pros.submitUrl();

    // 调用接口获取动态配置数据, 如投注倍数的限制等
    var dynamicConfigUrl = phoenix.Games.SSC.Config.pros.getDynamicConfigUrl();
    configData.dynamicConfigUrl = dynamicConfigUrl;
    $.getJSON(dynamicConfigUrl, function(data){
        configData.gameLimits = data.data.gamelimit[0];
    });

    // 调用接口获取近期开奖信息
    var gameChartUrl = '/game/chart/${lotteryCode}';
    $.getJSON(gameChartUrl, function(data){
        configData.records = data.body.result;
    });

    // 调用接口获取用户账户余额
    var queryUserBalUrl = phoenix.Games.SSC.Config.pros.getUserBalUrl();
    $.getJSON(queryUserBalUrl, function (data){
        configData.balance = data / 10000;
    });

    if(/#\/drawing|#\/submit|#\/intro/.test(location.hash)){
        location.hash = '#/pick';
    }
</script>
</body>
</html>