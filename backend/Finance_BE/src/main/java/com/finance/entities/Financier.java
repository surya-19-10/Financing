package com.finance.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "financier")
@AllArgsConstructor
@NoArgsConstructor
public class Financier {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String primaryContact;
    private String fType;
    private String secondaryContact;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    private String email;
}
