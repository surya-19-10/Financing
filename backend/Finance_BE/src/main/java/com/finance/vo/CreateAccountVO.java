package com.finance.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateAccountVO {
    private String firstName;
    private String middleName;
    private String lastName;
    private String primaryContact;
    private String secondaryContact;
    private String email;
    private String fType;
    private Float principalAmount;
    private int commissionPercentage;
    private int moneyLenderId;
    private int borrowerId;
}
