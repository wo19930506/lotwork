package com.winterframework.firefrog.game.web.dto;

import java.io.Serializable;

/** 
* @ClassName: QueryLevelRecycleHistoryRequest 
* @Description: 查询一代回收纪录
* @author Andy 
* @date 2015-10-12 下午03:10:00 
*  
*/
public class QueryLevelRecycleHistoryRequest implements Serializable {

	private static final long serialVersionUID = -1905020680742501824L;
	
	private Long userId;

	private String account;
	
	private Integer taskStatus;
	
	private String operator;
	
	private Integer startNo;
	
	private Integer endNo; 

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}	

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public Integer getStartNo() {
		return startNo;
	}

	public void setStartNo(Integer startNo) {
		this.startNo = startNo;
	}

	public Integer getEndNo() {
		return endNo;
	}

	public void setEndNo(Integer endNo) {
		this.endNo = endNo;
	}

	public Integer getTaskStatus() {
		return taskStatus;
	}

	public void setTaskStatus(Integer taskStatus) {
		this.taskStatus = taskStatus;
	}

	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

}