package com.finance.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "financier")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Financier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String primaryContact;
    private String fType;
    private String secondaryContact;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;
    @NonNull
    private String email;
}
