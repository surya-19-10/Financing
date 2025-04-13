package com.finance.vo;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

@Getter
@Setter
public class AccountDetailsVO {
    private int year;
    private int month;
    private String borrower;
    @NonNull
    private String lender;
}
