package com.example.demo.repositories;

import com.example.demo.models.OperationModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationRepository extends CrudRepository<OperationModel, Long> {
    
}
