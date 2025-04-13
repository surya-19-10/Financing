package com.finance.service;

import com.finance.vo.DashboardResponseVO;
import com.finance.vo.AccountDetailsVO;
import com.finance.vo.CreateAccountVO;

public interface AccountService {
    CreateAccountVO saveAccount(CreateAccountVO accountVO);

    DashboardResponseVO getAccountDetails(AccountDetailsVO accountDetailsVO);
}
