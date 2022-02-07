package com.example.mpbackend.service;

import com.example.mpbackend.model.Fiscalia;

import java.util.List;

public interface FiscaliaService {
    public Fiscalia saveFiscalia(Fiscalia fiscalia);

    public List<Fiscalia> getAllFiscalias();
}
