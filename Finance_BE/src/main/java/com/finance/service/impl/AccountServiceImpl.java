package com.finance.service.impl;

import com.finance.entities.Accounts;
import com.finance.entities.Financier;
import com.finance.repo.AccountRepo;
import com.finance.repo.FinancierRepo;
import com.finance.service.AccountService;
import com.finance.utils.AccountUtils;
import com.finance.utils.FinancierUtils;
import com.finance.vo.CreateAccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    AccountRepo accountRepo;
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

    public void setCommission(int commissionRate, Accounts account) {
        float commission = ((float) commissionRate /100) * account.getPrincipalAmount();
        account.setCommission(commission);
        account.setAmount(account.getPrincipalAmount()-commission);
    }
}
