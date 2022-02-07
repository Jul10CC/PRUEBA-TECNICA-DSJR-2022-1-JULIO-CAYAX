package com.example.mpbackend.controller;

import com.example.mpbackend.model.Fiscalia;
import com.example.mpbackend.service.FiscaliaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fiscalia")
public class FiscaliaController {
    @Autowired
    private FiscaliaService fiscaliaService;

    @PostMapping("/add")
    public String add(@RequestBody Fiscalia fiscalia){
        fiscaliaService.saveFiscalia(fiscalia);
        return "Nueva Fiscalia agregada";
    }
}
