package com.finance.repo;

import com.finance.entities.AccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountDetailsRepo extends JpaRepository<AccountDetails, Integer> {
}
