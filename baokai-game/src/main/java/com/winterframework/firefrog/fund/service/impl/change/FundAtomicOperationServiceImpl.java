package com.winterframework.firefrog.fund.service.impl.change;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DeadlockLoserDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.winterframework.firefrog.acl.entity.AclUser;
import com.winterframework.firefrog.common.config.service.IConfigService;
import com.winterframework.firefrog.common.util.SecurityUtil;
import com.winterframework.firefrog.fund.dao.IFundChangeLogDao;
import com.winterframework.firefrog.fund.dao.IFundDao;
import com.winterframework.firefrog.fund.dao.impl.FundDaoImpl;
import com.winterframework.firefrog.fund.dao.vo.Fund;
import com.winterframework.firefrog.fund.entity.UserFund;
import com.winterframework.firefrog.fund.enums.EnumItem;
import com.winterframework.firefrog.fund.enums.FundModel;
import com.winterframework.firefrog.fund.exception.FundBalanceShortageException;
import com.winterframework.firefrog.fund.exception.FundChangedException;
import com.winterframework.firefrog.fund.exception.FundOverAvailBalException;
import com.winterframework.firefrog.fund.service.IFundAtomicOperationService;
import com.winterframework.firefrog.fund.util.ISNGenerator;
import com.winterframework.firefrog.fund.web.controller.vo.FundChangeDetail;
import com.winterframework.firefrog.game.fund.ff.bean.FundGameVo;
import com.winterframework.firefrog.user.entity.BaseUser;
import com.winterframework.orm.dal.ibatis3.BaseManager;

/** 
* @ClassName: FundChangeServiceImpl 
* @author 你的名字 
* @date 2013-12-16 下午1:41:58 
*/
@Service("fundChangeServiceImpl")
@Transactional(rollbackFor=Exception.class)
public class FundAtomicOperationServiceImpl extends BaseManager<FundDaoImpl, Fund> implements
		IFundAtomicOperationService {
 
	private static final Logger logger = LoggerFactory.getLogger(FundAtomicOperationServiceImpl.class);

	@Autowired
	private FundChangeLog2Service fundChangeLog2Service;
	@Resource(name = "fundDaoImpl")
	protected IFundDao fundDao;
	@Resource(name = "configServiceImpl")
	private IConfigService configService;
	@Resource(name = "fundChangeLogDaoImpl")
	private IFundChangeLogDao fundChangeLogDao;

	@Resource(name = "securityUtil")
	private SecurityUtil securityUtil;

	@Resource(name = "SNUtilFund")
	private ISNGenerator sNUtil; 
	/**提現比率參數*/
	private Long betReduce;

	@Override
	public void setEntityDao(FundDaoImpl entityDao) {
		this.entityDao = entityDao;
	}

	public UserFund getUserFund(Long userId) {
		return fundDao.getUserFund(userId);
	}

	/** 
	* @Title: updateFund 
	* @Description: 更改资金表信息
	* @param beforeFund
	* @param afterFund
	* @return
	*/
	public String updateFund(UserFund beforeFund, UserFund afterFund, String sn, BaseUser user, EnumItem item,
			Long isVisiblebyFrontUser, String exCode, String planCode, String note, Boolean needBal)
			throws FundChangedException,Exception {
		needBal=false;
		resetAvalbalBal(afterFund);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("beforeBal", beforeFund.getBal());
		map.put("beforeDisableAmt", beforeFund.getDisableAmt());
		map.put("beforeUserId", beforeFund.getUser().getId());
		map.put("id", beforeFund.getId());

		map.put("bal", afterFund.getBal());
		map.put("disableAmt", afterFund.getDisableAmt());
		map.put("userId", afterFund.getUser().getId());
		map.put("security",
				securityUtil.createSecurity(afterFund.getBal(), afterFund.getDisableAmt(), afterFund.getUser().getId()));
		map.put("frozenAmt", afterFund.getFrozenAmt());
		
		map.put("cbal",  minute(afterFund.getBal(),beforeFund.getBal()));
		map.put("cdisableAmt",  minute(afterFund.getDisableAmt(),beforeFund.getDisableAmt()));
		map.put("cfrozenAmt", minute(afterFund.getFrozenAmt(),beforeFund.getFrozenAmt()));
		if (needBal != null && needBal)
			map.put("needBal", needBal);
		int count =0;
		try{ 
			count=fundDao.updateFund(map);
		}catch(DeadlockLoserDataAccessException e){
			//遇到deadlock，重试一次
			log.error("updateFund error now retry:", e);  
			try{ 
				log.error("-----------deadlock 1 sleep_time  1sec--------------"); 
				Thread.sleep(1000); //休息1秒
				count=fundDao.updateFund(map);
			}catch(DeadlockLoserDataAccessException ee){
				log.error("updateFund error now retry secondly:", e);  
				log.error("-----------deadlock 2 sleep_time  3sec--------------"); 
				Thread.sleep(3000); //休息3秒
				count=fundDao.updateFund(map);
			}
		}
		sn =fundChangeLog2Service.logFundChange(beforeFund, afterFund, sn, user, item, isVisiblebyFrontUser, exCode, planCode, note);
		if (count < 1) {
			logger.error("更新可用余额及冻结余额失败,可用余额已改变！");
			throw new FundChangedException();
		} 
		return sn;
	}
	private Long minute(Long a,Long b){
		return a==null?0:a-((b==null)?0:b);
	}

	private UserFund copy(UserFund beforeFund) {
		UserFund afterFund = new UserFund();

		afterFund.setId(beforeFund.getId());
		afterFund.setDisableAmt(beforeFund.getDisableAmt());
		afterFund.setUser(beforeFund.getUser());
		afterFund.setBal(beforeFund.getBal());
		afterFund.setFrozenAmt(beforeFund.getFrozenAmt());

		return afterFund;
	}
	private FundChangeDetail frozenAmt(Long userId, BaseUser user, Long amount, String sn, EnumItem item, String exCode,
			Long ableAmount, String planCode, String note) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		checkBalCanbereduceor(beforeFund, amount, ableAmount);
		UserFund afterFund = copy(beforeFund);
		if (beforeFund.getFrozenAmt() == null) {
			beforeFund.setFrozenAmt(0L);
		}
		afterFund.setBal(new BigDecimal(beforeFund.getBal()).subtract(BigDecimal.valueOf(amount)).longValue());
		if (ableAmount != null && ableAmount > 0) {
			afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).subtract(BigDecimal.valueOf(ableAmount))
					.longValue());
		}
		afterFund.setFrozenAmt(new BigDecimal(beforeFund.getFrozenAmt()).add(BigDecimal.valueOf(amount)).longValue());

		sn=updateFund(beforeFund, afterFund, sn, user, item, 0l, exCode, planCode, note, true);

		return new FundChangeDetail(sn, item.getSummaryCode(), false, afterFund.getBal());
	}

	@Transactional(rollbackFor = Exception.class)
	private void checkBalCanbereduceor(UserFund beforeFund, Long amount, Long ableAmount)
			throws FundBalanceShortageException {
		beforeFund = getUserFund(beforeFund.getUser().getId());
		if (ableAmount != null && ableAmount > 0) {
			if (beforeFund.getDisableAmt() < amount) {
				throw new FundOverAvailBalException();
			}
		}
		if (beforeFund.getBal() < amount) {
			throw new FundBalanceShortageException();
		}
	}

	@Override
	public void action(FundGameVo... vos) throws FundChangedException,Exception {
		this.action(Arrays.asList(vos), new ArrayList<FundChangeDetail>());
	}

	@Override
	public void action(List<FundGameVo> vos, List<FundChangeDetail> map) throws FundChangedException,Exception {
		init();
		for (FundGameVo vo : vos) {
			logger.debug(vo.getReason() + vo.getAmount());
			FundChangeDetail detail = null;
			EnumItem item = FundModel.getEnumItemBySummary(null, vo.getReason());
			Long userId = vo.getUserId();
			BaseUser user = this.getOperatorUser(vo);
			Long amount = vo.getAmount();
			String sn = vo.getSn();
			String planCode = vo.getPlanCode();
			String note = vo.getNote();
			String exCode = vo.getExCode();
			if (StringUtils.isEmpty(sn)) {
				sn = sNUtil.createBusinessSn(item, userId.longValue());
			}
			if (item == null) {
				logger.error(vo.getReason() + ":当前action无效");
				return;
			}
			//frozenAmt,unFrozenAmt,cleanFrozenAmt,addAmt,reduceAmt,None
			switch (item.getMethod()) {
			case frozenAmt: {
				detail = this.frozenAmt(userId, user, amount, sn, item, exCode, null, planCode, note);
				break;
			}
			case frozenAmtWithBal: {
				detail = this.frozenAmt(userId, user, amount, sn, item, exCode, amount, planCode, note);
				break;
			}
			case unFrozenAmt: {
				detail = this.unFrozenAmt(userId, user, amount, sn, item, exCode, null, planCode, note);
				break;
			}
			case addAmyRefund: {
				detail = this.addAmtRefund(userId, user, amount, sn, item, exCode, null, planCode, note);
				break;
			}
			case unFrozenAmtWithBal: {
				detail = this.unFrozenAmt(userId, user, amount, sn, item, exCode, amount, planCode, note);
				break;
			}
			case cleanFrozenAmt: {
				detail = this.cleanFrozenAmt(userId, user, amount, sn, item, exCode, null, planCode, note);
				break;
			}
			case cleanFrozenAmtWithBal: {
				detail = this.cleanFrozenAmt(userId, user, amount, sn, item, exCode, amount, planCode, note);
				break;
			}
			case cleanFrozenAmtWithBetBal: {
				detail = this.cleanFrozenAmt(userId, user, amount, sn, item, exCode, amount * betReduce, planCode,
							note);
				break;
			}
			case addAmt: {
				detail = this.addAmt(userId, user, amount, sn, item, exCode, null, planCode, note);
				break;
			}
			case addAmtWithBal: {
				detail = this.addAmt(userId, user, amount, sn, item, exCode, amount, planCode, note);
				break;
			}
			case reduceAmt: {
				detail = this.reduceAmt(userId, user, amount, sn, item, exCode, null, planCode, note, false);
				break;
			}
			case reduceAmtWithBal: {
				detail = this.reduceAmt(userId, user, amount, sn, item, exCode, amount * betReduce, planCode, note,
							false);
				break;
			}
			case reduceAmtWithSingleBal: {
				detail = this.reduceAmt(userId, user, amount, sn, item, exCode, amount, planCode, note, false);
				break;
			}
			case reduceAmtForbidden: {
				detail = this.reduceAmt(userId, user, amount, sn, item, exCode, null, planCode, note, true);
				break;
			}
			case None: 
			default: {
				logger.error(vo.getReason() + ":当前action无效");
				break;
			}
			}
			map.add(detail);
		}

	}

	@Override
	@Transactional(rollbackFor = Exception.class,timeout=5)
	public void actions(List<FundGameVo> vos) throws FundChangedException,Exception {
		List<FundChangeDetail> maps = new ArrayList<FundChangeDetail>();
		this.action(vos, maps);
	} 

	/**
	 * 创建具体的操作人员
	 * @param vo
	 * @return
	 */
	private BaseUser getOperatorUser(FundGameVo vo) {
		BaseUser operator = null;
		if (vo.getIsAclUser() == 0) {
			operator = new AclUser();
			operator.setId(vo.getOperator());
		} else {
			operator = new AclUser();
			operator.setId(vo.getOperator());
		}
		return operator;
	}
	private FundChangeDetail unFrozenAmt(Long userId, BaseUser user, Long amount, String sn, EnumItem item,
			String exCode, Long ableBal, String planCode, String note) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		UserFund afterFund = copy(beforeFund);

		if (amount > 0) {
			afterFund.setBal(new BigDecimal(beforeFund.getBal()).add(BigDecimal.valueOf(amount)).longValue());
			afterFund.setFrozenAmt(new BigDecimal(beforeFund.getFrozenAmt()).subtract(BigDecimal.valueOf(amount))
					.longValue());
			if (ableBal != null){
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(ableBal))
						.longValue());
			}
			if (ableBal == null && beforeFund.getBal() > 0L &&  beforeFund.getBal().equals(beforeFund.getDisableAmt()) == true){
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(amount)).longValue());
			}
			sn = updateFund(beforeFund, afterFund, sn, user, item, 0l, exCode, planCode, note, false);
		}
		return new FundChangeDetail(sn, item.getSummaryCode(), true, afterFund.getBal());
	}

	private void resetAvalbalBal(UserFund afterFund) {
		if (afterFund != null && afterFund.getDisableAmt() >= afterFund.getBal()) {
			afterFund.setDisableAmt(afterFund.getBal());
		}
	}
	public FundChangeDetail cleanFrozenAmt(Long userId, BaseUser user, Long amount, String sn, EnumItem item,
			String exCode, Long ableBal, String planCode, String note) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		UserFund afterFund = copy(beforeFund);

		if (amount > 0) {
			afterFund.setFrozenAmt(new BigDecimal(beforeFund.getFrozenAmt()).subtract(BigDecimal.valueOf(amount))
					.longValue());
			if (ableBal != null)
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(ableBal))
						.longValue());
			//游戏投注的时候，先冻结，再清楚冻结；如果撤销的话，就解冻。
			sn = updateFund(beforeFund, afterFund, sn, user, item, 1l, exCode, planCode, note, false);
		}
		return new FundChangeDetail(sn, item.getSummaryCode(), false, afterFund.getBal());
	}
	
	private FundChangeDetail addAmtRefund(Long userId, BaseUser user, Long amount, String sn, EnumItem item, String exCode,
			Long ableBal, String planCode, String note) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		UserFund afterFund = copy(beforeFund);
		if (amount > 0) {
			afterFund.setBal(new BigDecimal(beforeFund.getBal()).add(BigDecimal.valueOf(amount)).longValue());
			if (ableBal != null)
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(ableBal))
						.longValue());

			if (ableBal == null && beforeFund.getBal() > 0L && beforeFund.getBal().equals(beforeFund.getDisableAmt()) == true){
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(amount)).longValue());
			}

			sn = updateFund(beforeFund, afterFund, sn, user, item, 1l, exCode, planCode, note, false);
		}
		return new FundChangeDetail(sn, item.getSummaryCode(), true, afterFund.getBal());
	}
	
	private FundChangeDetail addAmt(Long userId, BaseUser user, Long amount, String sn, EnumItem item, String exCode,
			Long ableBal, String planCode, String note) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		UserFund afterFund = copy(beforeFund);
		if (amount > 0) {
			afterFund.setBal(new BigDecimal(beforeFund.getBal()).add(BigDecimal.valueOf(amount)).longValue());
			if (ableBal != null)
				afterFund.setDisableAmt(new BigDecimal(beforeFund.getDisableAmt()).add(BigDecimal.valueOf(ableBal))
						.longValue());
			sn = updateFund(beforeFund, afterFund, sn, user, item, 1l, exCode, planCode, note, false);
		}
		return new FundChangeDetail(sn, item.getSummaryCode(), true, afterFund.getBal());
	}
	private FundChangeDetail reduceAmt(Long userId, BaseUser user, Long amount, String sn, EnumItem item, String exCode,
			Long ableAmount, String planCode, String note, boolean forbidden) throws FundChangedException,Exception {
		UserFund beforeFund = getUserFund(userId);
		if (!forbidden)
			checkBalCanbereduceor(beforeFund, amount, ableAmount);
		UserFund afterFund = copy(beforeFund);
		if (amount > 0) {
			afterFund.setBal(new BigDecimal(beforeFund.getBal()).subtract(BigDecimal.valueOf(amount)).longValue());
			if (ableAmount != null) {
				afterFund.setDisableAmt((beforeFund.getDisableAmt() - ableAmount));
			}
			sn = updateFund(beforeFund, afterFund, sn, user, item, 1l, exCode, planCode, note, false);
		}
		return new FundChangeDetail(sn, item.getSummaryCode(), false, afterFund.getBal());
	}
	
	/**
	 * 設定 betReduce(提現比率參數)的預設值，若 config table 內未設定預設帶 5。
	 */
	private void init() {
		try {
			betReduce = Long.parseLong(configService.getConfigValueByKey("fund", "bet"));
		} catch (Exception e) {
			logger.error("由 config table 取得提現比率參數發生錯誤。" + e.getMessage(), e);
			betReduce = 5L;
		}
	}
}