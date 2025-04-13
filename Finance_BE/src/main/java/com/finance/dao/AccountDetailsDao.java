package com.finance.dao;

import com.finance.vo.AccountDetailsResponseVO;
import com.finance.vo.AccountDetailsVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.sql.Types;
import java.util.List;
import java.util.Objects;

@Service
public class AccountDetailsDao {

    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public List<AccountDetailsResponseVO> getAccountDetailsVO(AccountDetailsVO accountDetailsVO) {
        StringBuilder query = new StringBuilder("WITH t AS ( SELECT a.borrower AS id, a.principal_amount AS amount, a.commission AS borrowerComm, a.interest AS interest, a.status AS status, a.signed_date as startDate FROM financier f, accounts a WHERE f.email = :email AND a.money_lender = f.id ) SELECT t.id as accId, concat(f.first_name,' ', f.last_name) AS borrowerName, f.email AS borrowerEmail, t.amount, t.borrowerComm, t.interest, t.status, t.startDate, COUNT(CASE WHEN ad.curr_date IS NOT NULL THEN 1 END) AS days FROM t JOIN financier f ON f.id = t.id left join account_details ad on ad.account_id = t.id WHERE (:first_name IS NULL OR f.first_name = :first_name) AND (:last_name IS NULL OR f.last_name = :last_name) ");
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("email", accountDetailsVO.getLender());
        params.addValue("first_name", accountDetailsVO.getBorrower(), Types.VARCHAR);
        params.addValue("last_name", accountDetailsVO.getBorrower(), Types.VARCHAR);
        if(Objects.nonNull(accountDetailsVO.getBorrower())) {
            mapNameParam(accountDetailsVO.getBorrower(), params);
        }
        if(accountDetailsVO.getYear()>0) {
            query.append(" and (EXTRACT(YEAR FROM t.startDate) = :year) ");
            if(accountDetailsVO.getMonth()>0) {
                query.append(" and (EXTRACT(YEAR FROM t.startDate) = :year and EXTRACT(MONTH FROM ad.curr_date) = :month) ");
                params.addValue("month", accountDetailsVO.getMonth());
            }
            params.addValue("year", accountDetailsVO.getYear());
        }
        query.append("group by accId, borrowerName, borrowerEmail, t.amount, t.borrowerComm, t.interest, t.status, t.startDate order by t.startDate desc;");
        return namedParameterJdbcTemplate.query(query.toString(), params, new BeanPropertyRowMapper<>(AccountDetailsResponseVO.class));
    }

    private void mapNameParam(String borrower, MapSqlParameterSource params) {
        String[] fullName = borrower.split(" ");
        params.addValue("first_name", fullName[0]);
        params.addValue("last_name", fullName[fullName.length-1]);
    }
}
