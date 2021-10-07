package com.example.demo.services;

import java.math.BigInteger;
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

    public String productBetweenIntegers(Long number1,Long number2) {
        
        BigInteger numero1 = new BigInteger(Long.toString(number1));
        BigInteger numero2 = new BigInteger(Long.toString(number2));
        BigInteger operation = numero1.multiply(numero2);
        String results = operation.toString();
        // System.out.println("Number 1 => " + numero1 + "\nNumber 2 => " + numero2 + "\nResult => " + results);
        return results;

    }

}
