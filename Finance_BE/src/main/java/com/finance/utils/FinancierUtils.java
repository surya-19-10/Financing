package com.finance.utils;

import com.finance.entities.Financier;
import com.finance.vo.CreateAccountVO;

import java.time.LocalDateTime;

public class FinancierUtils {
    public static Financier prepareFinancier(CreateAccountVO vo) {
        Financier financier = new Financier();
        financier.setCreatedDate(LocalDateTime.now());
        financier.setEmail(validateNull(vo.getEmail()));
        financier.setFirstName(vo.getFirstName());
        financier.setMiddleName(validateNull(vo.getMiddleName()));
        financier.setLastName(vo.getLastName());
        financier.setPrimaryContact(vo.getPrimaryContact());
        financier.setSecondaryContact(validateNull(vo.getSecondaryContact()));
        financier.setFType(vo.getFType());
        financier.setUpdatedDate(LocalDateTime.now());
        return financier;
    }

    public static String validateNull(String field) {
        return field==null ?  "" :  field;
    }
}
