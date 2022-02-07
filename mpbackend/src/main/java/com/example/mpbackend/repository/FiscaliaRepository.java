package com.example.mpbackend.repository;
import com.example.mpbackend.model.Fiscalia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FiscaliaRepository extends JpaRepository<Fiscalia, Integer> {


}
