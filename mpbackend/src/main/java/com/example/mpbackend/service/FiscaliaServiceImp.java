package com.example.mpbackend.service;

import com.example.mpbackend.model.Fiscalia;
import com.example.mpbackend.repository.FiscaliaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FiscaliaServiceImp implements FiscaliaService{
    @Autowired
    private FiscaliaRepository fiscaliaRepository;

    @Override
    public Fiscalia saveFiscalia(Fiscalia fiscalia) {
        return fiscaliaRepository.save(fiscalia);
    }
}
