package com.finance.repo;

import com.finance.entities.Financier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinancierRepo extends JpaRepository<Financier, Integer> {
}
