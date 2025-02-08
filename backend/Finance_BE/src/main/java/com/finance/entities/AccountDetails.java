package com.finance.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "account_details")
@AllArgsConstructor
@NoArgsConstructor
public class AccountDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Float amount;
    private LocalDate currDate;
    private String receivedStatus;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private int accountId;
}
