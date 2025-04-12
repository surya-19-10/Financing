package com.finance.utils;

import com.finance.entities.Accounts;
import com.finance.vo.CreateAccountVO;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class AccountUtils {
    public static Accounts prepareAccount(CreateAccountVO vo) {
        Accounts account = new Accounts();
        account.setMoneyLender(vo.getMoneyLenderId());
        account.setBorrower(vo.getBorrowerId());
        account.setPrincipalAmount(vo.getPrincipalAmount());
        account.setCreatedDate(LocalDateTime.now());
        account.setUpdatedDate(LocalDateTime.now());
        account.setSignedDate(LocalDate.now());
        account.setStatus("Active");
        account.setEndDate(LocalDate.now().plusDays(100));
        return account;
    }
}
