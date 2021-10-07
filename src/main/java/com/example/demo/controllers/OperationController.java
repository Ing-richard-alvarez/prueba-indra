package com.example.demo.controllers;

import java.util.ArrayList;

import com.example.demo.models.OperationModel;
import com.example.demo.services.OperationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/operation")
public class OperationController {
    
    @Autowired
    OperationService operationService;

    @RequestMapping(value = "/get-all-operation", method = RequestMethod.GET)
    @ResponseBody
    public ArrayList<OperationModel> getAllOperation() 
    {
        ArrayList<OperationModel> operationResponse = (ArrayList<OperationModel>) operationService.getAllOperation();
        return operationResponse;
    }

    @RequestMapping(value = "/save-operation", method = RequestMethod.POST)
    public OperationModel saveOperation(@RequestBody OperationModel operation) 
    {
        OperationModel saveResponse = (OperationModel) operationService.saveOperation(operation);
        return saveResponse;
    }

    @RequestMapping(value = "/delete-single-operation", method = RequestMethod.DELETE)
    public void deleteOperationById(@RequestBody OperationModel operation)
    {
        operationService.deleteOperationById(operation);
    }

    @RequestMapping(value = "/delete-all-operation", method = RequestMethod.DELETE)
    public void deleteAllRow() {
        operationService.deleteAllRow();
    }

    @RequestMapping(value = "/get-multiply-result", method = RequestMethod.POST)
    public String getMultiplyResult(
        @RequestParam(name="number1", required = true) Long number1,
        @RequestParam(name="number2", required = true) Long number2
    ) 
    {
        return operationService.productBetweenIntegers(number1, number2);
    }
}
