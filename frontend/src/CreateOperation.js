import React, { useState } from 'react';
import {  
    Row, 
    Col, 
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2'

function CreateOperation() {

    const [data,setData] = useState({
        number1: '',
        number2: '',
        status:true,
        created_at: moment(),
        result: 0
    });

    const handleInputChange = ( event ) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const multiplyBigIntegers = async (number1,number2) => {
        axios
            .post('/api/v1/operation/get-multiply-result?number1='+number1+'&number2='+number2, {})
            .then(function (response) {
                //console.log(data);
                setData({
                    ...data,
                    result : response.data.result
                })
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There are empty values at the form!',
                })
                setData({
                    ...data,
                    result : 0
                })
            })
        ;

    }

    const sendData = async (event) => {
        event.preventDefault();
        await multiplyBigIntegers(data.number1,data.number2);
        await callServiceToSaveOperation();    
    }

    const callServiceToSaveOperation = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want save this operation?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/v1/operation/save-operation', data)
                    .then(function (response) {
                        console.log(response);
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(()=>{
                            console.log('redirect to operation');
                            window.location.href='/operations';
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                ;
            }
          })
        ;
    }
    return(
        
        <Form onSubmit={sendData}>
            <Row>
                <Col className="mb-3" sm="12" md="12">
                    <h2 className='text-center'>Create Operation</h2>
                </Col>
                <Col sm="12" md="6" lg="6">
                    <FormGroup>
                        <Label for="number1">Number 1</Label>
                        <FormFeedback tooltip>invalid input</FormFeedback>
                        <Input type="text" onChange={handleInputChange} name="number1" placeholder="Write a number" required />
                    </FormGroup>
                </Col>
                <Col sm="12" md="6" lg="6">
                <FormGroup>
                    <Label for="number2">Number 2</Label>
                    <FormFeedback tooltip>invalid input</FormFeedback>
                    <Input type="text" onChange={handleInputChange} name="number2" placeholder="Write a number" required />
                </FormGroup>
                </Col>
                <Col sm="12" md="12" lg="12">
                <FormGroup>
                    <Label for="result">Result</Label>
                    <Input type="text"  className="disabled" name="result" id="result" placeholder="" value={data.result} readOnly />
                </FormGroup>
                </Col>
                <div className="w-100 d-flex flex-row align-items-center justify-content-center">
                    <FormGroup className="col-12 col-md-3">
                        
                        <Button 
                            type="submit"
                            className="btn btn-primary" 
                            name="btnSubmitOperation" 
                            id="btnSubmitOperation"
                        >
                            Calculate and Save Operation
                        </Button>
                    </FormGroup>
                </div>
            </Row>
        </Form>
        
    );
}


export default CreateOperation;