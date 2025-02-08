package com.finance.service;

import com.finance.vo.CreateAccountVO;

public interface AccountService {
    CreateAccountVO saveAccount(CreateAccountVO accountVO);
}
