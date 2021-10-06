package com.example.demo.services;

import java.util.ArrayList;

import com.example.demo.models.OperationModel;
import com.example.demo.repositories.OperationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperationService {
    @Autowired
    OperationRepository operationRepository;

    public ArrayList<OperationModel> getAllOperation() {
        return (ArrayList<OperationModel>) operationRepository.findAll();
    }

    public OperationModel saveOperation(OperationModel operation) {
        return operationRepository.save(operation);
    }

    public void deleteOperationById(OperationModel operation) {
        operationRepository.deleteById(operation.getId());
    }

    public void deleteAllRow() {
        operationRepository.deleteAll();
    }

}
