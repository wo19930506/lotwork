<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri ="http://java.sun.com/jsp/jstl/fmt" %>
<head>
	<title>1.125奖金组（列表页）-修改奖金组</title>
</head>
<body>
    <div id="tab_menu_id" style="display:none">awardGroupMenu</div>
			<div class="col-crumbs">
            <div class="crumbs">
            	<strong>当前位置：</strong><a href="${currentContextPath}/gameoa/lotteryList?lotteryId=&status=">游戏中心</a>><a href="${currentContextPath}/gameoa/lotteryList?lotteryId=&status="><spring:message code="gameCenter_caizhongxinxiliebiao" /></a>><a href="${currentContextPath}/gameoa/queryGameAwardGroupList?lotteryid=${gameAward.lotteryId }&status=&awardId="><spring:message code="gameCenter_jiangjinzu"/></a>>修改奖金组
            </div>
            </div>
			<div class="col-content">
				<div class="col-main">
					<div class="main">
						<div class="ui-tab">
							<div class="ui-tab-title clearfix">
								<ul>
									<jsp:include page="../../lotteryConfigHeader.jsp"></jsp:include>
								</ul>
							</div>
							<div class="">
								<h3 class="ui-title"><a href="${currentContextPath}/gameoa/queryGameAwardGroupList?lotteryid=${gameAward.lotteryId }&status=&awardId=">&lt;&lt; 返回奖金组列表</a></h3>
								<ul class="ui-search">
									<li>
										<label class="ui-label" for=""><spring:message code="gameCenter_caizhongmingcheng" />：</label>
										<span class="ui-text-info">${gameAward.lotteryName }</span>
										<input type="hidden" name="gameAward.lotteryId" value="${gameAward.lotteryId }"/>
										<input type="hidden" id="miniLotteryProfit" value="${miniLotteryProfit}"/>
									</li>
									
									<li>
									<span class="ui-text-info">当前状态：</span><c:if test="${gameBonusPool.status==1 }">
									<span class="ui-text-info color-red">待审核</span>
									</c:if>
									<c:if test="${gameBonusPool.status==2 }">
									<span class="ui-text-info color-red">待发布</span>
									</c:if>
									<c:if test="${gameBonusPool.status==3 }">
									<span class="ui-text-info color-red"><spring:message code="gameCenter_shenhebutongguo" /></span>
									</c:if>
									<c:if test="${gameBonusPool.status==4 }">
									<span class="ui-text-info color-red">已发布</span>
									</c:if>
										<input type="hidden" class="input input-decimal w-1" name="gameAwardGroup.directRet" value="${gameAward.directRet}" id="J-point-general" disabled="disabled"/>
										
									</li>
								</ul>
								<table class="table table-info table-border" id="J-data-table">
									<thead>
										<tr>
											<th>玩法群</th>
											<th>玩法组</th>
											<th>玩法/投注方式</th>
											<th>奖级</th>
											<th>奖金（元）</th>
											<th>总利润</th>
											<th>总代返点</th>
											<th>公司留水</th>
										</tr>
									</thead>
									<tbody>
										<c:forEach items="${awardList}" var="awards" varStatus="awardIndex">
											
											<c:forEach items="${awards.setCodeList}" var="setCodes" varStatus="setCodeIndex">
												
												<c:forEach	items="${setCodes.methodCodeList}" var="methodCodes" varStatus="methodIndex">
												<c:if test="${methodIndex.index==0 }">
													<c:forEach items="${methodCodes.assistBonusList }" var="assistBonus" varStatus="assistBonusIndex">
												   
													<c:if test="${setCodeIndex.index==0}">
													<tr>
														<c:if test="${methodIndex.index==0 && assistBonusIndex.index==0}">
															<td rowspan="${methodCodes.methodCount }">${awards.groupName }</td>
														</c:if>
														
														<c:if test="${methodIndex.index==0 && assistBonusIndex.index==0}">
															<td rowspan="${methodCodes.methodCount}"></td>
														</c:if>
														
														<c:if test="${assistBonusIndex.index==0}">
															<td rowspan="${methodCodes.methodCount}">复式</br>单式</br>拖胆</td>
														</c:if>

															<td>
															${assistBonus.methodTypeName }
															</td>	
															<td>${assistBonus.actualBonus/100 }
															<c:if test="${assistBonus.actualBonusDown != null}">
															</br>${assistBonus.actualBonusDown/100}
															</c:if>
															</td>
														<c:if test="${assistBonusIndex.index==0}">
															<td rowspan="${methodCodes.methodCount}"><span class="point-lirun">${methodCodes.totalProfit }</span></td>
															
															
															<td rowspan="${methodCodes.methodCount}"><span class="point-proxy">${methodCodes.topAgentPoint }</span></td>
															<td rowspan="${methodCodes.methodCount}"><span class="point-liushui">${methodCodes.companyProfit }</span></td>														
														</c:if>
													</tr>	
													</c:if>
													</c:forEach>
													</c:if>
												</c:forEach>
												
											</c:forEach>
										</c:forEach>
										
									</tbody>
								</table>
								<ul class="ui-search">
									<li>
										<label class="ui-label" for="">奖池设定：</label>
										
									</li>
							
								</ul>
								<form id="J-form" action="${currentContextPath}/gameoa/editGameBonusPool" method="post">
								<table class="table table-info table-border">
									
									<tbody>
										<tr>
											<td >奖池现有金额</td>
											<td  colspan="3"><span><fmt:formatNumber
											value="${gameBonusPool.actualBonus/10000 }" pattern="#,###.##"  minFractionDigits="2" /></span></td>
											
										</tr>
										<tr>
											<td >改变奖池金额</td>
											<td  colspan="3"><input id="actualBonusProcess" type="text" name="actualBonusProcess" class="ui-info textarea" style="padding:0 10px;" value=""></td>
											
										</tr>
										<tr>
											<td >改变原因</td>
											<td  colspan="3"><input id="changeReason" type="text" name="changeReason" class="ui-info textarea" style="padding:0 10px;" value=""></td>
											
										</tr>
										<tr>
											<td >奖池保底金额</td>
											<td colspan="3"><input id="minimumBonusProcess" type="text" name="minimumBonusProcess" class="ui-info textarea" style="padding:0 10px;" value="<fmt:formatNumber
											value="${gameBonusPool.actualBonus/10000 }" pattern="#.00" />">
											</td>
											
										</tr>
										<tr>
											<td >奖池金额分配</td>
											<td >一等奖 &nbsp&nbsp <input id="distribute1process" type="text" name="distribute1process" class="ui-info textarea" style="padding:0 10px;" value="${gameBonusPool.distribute1/10000 }">%</td>
											<td >二等奖 &nbsp&nbsp <input id="distribute2process" type="text" name="distribute2process" class="ui-info textarea" style="padding:0 10px;" value="${gameBonusPool.distribute2/10000 }">%</td>
										</tr>
										<input type="hidden" name="id" value="${gameBonusPool.id }"/>
										<input type="hidden" name="lotteryid" value="${gameAward.lotteryId}"/>
										<input type="hidden" name="awardId" value="${awardId }"/>
										
									</tbody>
								</table><div style="margin:0 auto;width:300px;">
								<a id="J-button-submit" href="#" class="btn btn-important">保存修改<b class="btn-inner"></b></a></div>
								</form>
							</div>
						</div>
						
					</div>
				</div>
			</div>

<script type="text/javascript">

var inputs2 = $('.ui-info').not('#changeReason'),checkFn2;				
checkFn2 = function(){
	var v = this.value.replace(/[^0-9|^\.]/g, '').replace(/^0[0-9]+/g, '');
	this.value = v;
};
inputs2.keyup(checkFn2);
inputs2.blur(checkFn2);
$('#J-button-submit').click(function(){
	if($('#actualBonusProcess').val() == ''||$('#changeReason').val() == ''||$('#minimumBonusProcess').val() == ''||$('#distribute1Process').val() == ''||$('#distribute2Process').val() == ''){
		alert('您还有未填内容，请完整填写');
		return;
	}
	$('#actualBonusProcess').val(Number($('#actualBonusProcess').val())*10000);
	$('#minimumBonusProcess').val(Number($('#minimumBonusProcess').val())*10000);
	$('#distribute1process').val(Number($('#distribute1process').val())*10000);
	$('#distribute2process').val(Number($('#distribute2process').val())*10000);
	$('#J-form').submit();
})

</script>
</body>