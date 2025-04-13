package com.finance.vo;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountDetailsResponseVO {
    private int accId;
    private Float amount;
    private String borrowerName;
    private Float borrowerComm;
    private String status;
    private int days;
    private String borrowerEmail;
    private Float interest;
    private LocalDate startDate;
}
