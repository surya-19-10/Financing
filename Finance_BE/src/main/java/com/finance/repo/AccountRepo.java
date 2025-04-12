package com.finance.repo;

import com.finance.entities.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepo extends JpaRepository<Accounts, Integer> {
}
