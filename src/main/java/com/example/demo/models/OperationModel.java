package com.example.demo.models;

import java.math.BigInteger;
import java.sql.Timestamp;

import javax.persistence.*;

@Entity
@Table(name = "operation")
public class OperationModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private Long number1;
    private Long number2;
    private Boolean status;

    private Timestamp created_at;
    @Column(name = "UPDATED_AT", nullable = true)
    private Timestamp updated_at;
    @Column(name = "DELETED_AT", nullable = true)
    private Timestamp deleted_at;

    @Transient
    private String results;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getNumber1() {
        return number1;
    }

    public void setNumber1(Long number1) {
        this.number1 = number1;
    }

    public Long getNumber2() {
        return number2;
    }

    public void setNumber2(Long number2) {
        this.number2 = number2;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    public Timestamp getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Timestamp updated_at) {
        this.updated_at = updated_at;
    }

    public Timestamp getDeleted_at() {
        return deleted_at;
    }

    public void setDeleted_at(Timestamp deleted_at) {
        this.deleted_at = deleted_at;
    }

    @PostLoad()
    private void postLoad() {
        
        BigInteger numero1 = new BigInteger(Long.toString(this.number1));
        BigInteger numero2 = new BigInteger(Long.toString(this.number2));
        BigInteger operation = numero1.multiply(numero2);
        this.results = operation.toString();


    }
    
    public String getResults() {
        return results;
    }

    public void setResults(String results) {
        this.results = results;
    }
}
