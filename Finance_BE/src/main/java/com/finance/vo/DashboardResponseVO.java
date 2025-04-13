package com.finance.vo;

import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponseVO {
    private Float principalAmount;
    private Float commission;
    private Float interest;
    private List<AccountDetailsResponseVO> accountDetailsResponseVOs;
}
