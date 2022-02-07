package com.example.mpbackend.controller;

import com.example.mpbackend.model.Fiscalia;
import com.example.mpbackend.service.FiscaliaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

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

    @GetMapping("/getAll")
    public List<Fiscalia> getAllFiscalias(){
        return fiscaliaService.getAllFiscalias();
    }

    //@GetMapping("/{id}")
    //public ResponseEntity<Fiscalia> get(@PathVariable Integer id){
      //  try{
        //    Fiscalia fiscalia = fiscaliaService.getAllFiscalias(id);
          //  return new ResponseEntity<Fiscalia>(fiscalia, HttpStatus.OK);
        //}catch (NoSuchElementException e){
          //  return new ResponseEntity<Fiscalia>(HttpStatus.NOT_FOUND);
        //}
    //}
}
