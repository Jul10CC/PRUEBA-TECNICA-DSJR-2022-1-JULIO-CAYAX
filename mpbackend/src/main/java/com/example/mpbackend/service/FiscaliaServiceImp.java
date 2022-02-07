package com.example.mpbackend.service;

import com.example.mpbackend.model.Fiscalia;
import com.example.mpbackend.repository.FiscaliaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FiscaliaServiceImp implements FiscaliaService{
    @Autowired
    private FiscaliaRepository fiscaliaRepository;

    //Save
    @Override
    public Fiscalia saveFiscalia(Fiscalia fiscalia) {
        return fiscaliaRepository.save(fiscalia);
    }

    //List

    @Override
    public List<Fiscalia> getAllFiscalias() {
        return fiscaliaRepository.findAll();
    }
}
