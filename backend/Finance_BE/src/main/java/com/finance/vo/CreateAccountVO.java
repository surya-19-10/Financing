package com.finance.vo;

import lombok.Data;

@Data
public class CreateAccountVO {
    private String firstName;
    private String middleName;
    private String lastName;
    private String primaryContact;
    private String secondaryContact;
    private String email;
    private Float principalAmount;
    private int commissionPercentage;
    private int moneyLenderId;
}
