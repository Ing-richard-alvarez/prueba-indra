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

    const multiplyBigIntegers = (event) => {
        event.preventDefault();
        const number1 = BigInt(data.number1);
        const number2 = BigInt(data.number2);
        let resultado = number1 * number2;
        
        setData({
            ...data,
            result : resultado.toString()
        })

    }

    const sendData = (event) => {
        event.preventDefault();
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
                            className="btn btn-primary" 
                            name="btnCalculate" 
                            id="btnCalculate"
                            onClick={multiplyBigIntegers}
                        >
                            Calulate Operation
                        </Button>
                    </FormGroup>
                    <FormGroup className="col-12 col-md-3">
                        
                        <Button 
                            type="submit"
                            className="btn btn-primary" 
                            name="btnSubmitOperation" 
                            id="btnSubmitOperation"
                        >
                            Save Operation
                        </Button>
                    </FormGroup>
                </div>
            </Row>
        </Form>
        
    );
}


export default CreateOperation;