package com.finance.controller;

import com.finance.service.AccountService;
import com.finance.vo.DashboardResponseVO;
import com.finance.vo.AccountDetailsVO;
import com.finance.vo.CreateAccountVO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    AccountService accountService;
    @PostMapping("/create")
    public ResponseEntity<CreateAccountVO> createAccount(@RequestBody CreateAccountVO accountVO) {
        return new ResponseEntity<>(accountService.saveAccount(accountVO), HttpStatus.CREATED);
    }

    @PostMapping("/details")
    public ResponseEntity<DashboardResponseVO> getAccountDetails(@Valid @RequestBody AccountDetailsVO accountDetailsVO) {
        return new ResponseEntity<>(accountService.getAccountDetails(accountDetailsVO), HttpStatus.OK);
    }
}
