package com.winterframework.firefrog.game.web.validate.composite.format;

import com.winterframework.firefrog.common.validate.business.CompositeValidateExecutor;
import com.winterframework.firefrog.common.validate.business.IValidateExecutorContext;
import com.winterframework.firefrog.game.entity.GameSlip;
import com.winterframework.firefrog.game.exception.GameBetContentPatternErrorException;
import com.winterframework.firefrog.game.web.validate.business.BetValidateContext;
import com.winterframework.firefrog.game.web.validate.impl.ssc.ValidateUtils;

/**
 * @author Lex
 * @ClassName: RegexFormatValidateExecutor
 * @Description: 正则表达式验证
 * @date 2014/4/10 15:59
 */
public class LHCFormatQuweiValidateExecutor extends CompositeValidateExecutor<GameSlip> {

    @Override
    public void execute(GameSlip validatedBean, IValidateExecutorContext context) throws Exception {
        System.out.println(validatedBean.getBetDetail());
        String[] bets = ValidateUtils.convertBet2String(validatedBean.getBetDetail(),
                validatedBean.getGameOrder().getFileMode().getValue(), "\\|");
        String str = "鼠、马、牛、羊、虎、猴、兔、鸡、龙、狗、蛇、猪、大、小、和大、和小、单、双、和单、和双、大肖、小肖、尾大、尾小、红、蓝、绿";
        ValidateUtils.checkRepeat(bets);
        for(String bet : bets) {
            if (str.indexOf(bet)<=-1) {
                throw new GameBetContentPatternErrorException();
            }
        }
        
        
        
        
        ((BetValidateContext) context).setBets(bets);
    }
}
