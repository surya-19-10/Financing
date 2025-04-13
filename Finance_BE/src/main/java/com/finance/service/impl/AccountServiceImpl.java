package com.finance.service.impl;

import com.finance.dao.AccountDetailsDao;
import com.finance.entities.Accounts;
import com.finance.entities.Financier;
import com.finance.repo.AccountRepo;
import com.finance.repo.FinancierRepo;
import com.finance.service.AccountService;
import com.finance.utils.AccountUtils;
import com.finance.utils.FinancierUtils;
import com.finance.vo.AccountDetailsResponseVO;
import com.finance.vo.DashboardResponseVO;
import com.finance.vo.AccountDetailsVO;
import com.finance.vo.CreateAccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepo accountRepo;
    @Autowired
    AccountDetailsDao accountDetailsDao;
    @Autowired
    FinancierRepo financierRepo;
    @Override
    public CreateAccountVO saveAccount(CreateAccountVO accountVO) {
        try {
            Financier financier = financierRepo.save(FinancierUtils.prepareFinancier(accountVO));
            accountVO.setBorrowerId(financier.getId());
            Accounts account = AccountUtils.prepareAccount(accountVO);
            setCommission(accountVO.getCommissionPercentage(), account);
            accountRepo.save(account);
        } catch(Exception e) {
            System.out.println(e);
        }
        return accountVO;
    }

    @Override
    public DashboardResponseVO getAccountDetails(AccountDetailsVO accountDetailsVO) {
        List<AccountDetailsResponseVO> vos = accountDetailsDao.getAccountDetailsVO(accountDetailsVO);
        DashboardResponseVO dashboardResponseVO = new DashboardResponseVO();
        AtomicReference<Float> investment =  new AtomicReference<>(0.0f);
        AtomicReference<Float> commission = new AtomicReference<>(0.0f);
        AtomicReference<Float> interest = new AtomicReference<>(0.0f);
        vos.forEach(vo -> {
            interest.updateAndGet(v -> v + vo.getInterest()*vo.getDays());
            commission.updateAndGet(v -> v + vo.getBorrowerComm());
            investment.updateAndGet(v -> v + vo.getAmount());
        });
        dashboardResponseVO.setPrincipalAmount(investment.get());
        dashboardResponseVO.setCommission(commission.get());
        dashboardResponseVO.setInterest(interest.get());
        dashboardResponseVO.setAccountDetailsResponseVOs(vos);
        return dashboardResponseVO;
    }

    private void setCommission(int commissionRate, Accounts account) {
        float commission = ((float) commissionRate /100) * account.getPrincipalAmount();
        account.setCommission(commission);
        account.setInterest(account.getPrincipalAmount()-commission);
    }
}
