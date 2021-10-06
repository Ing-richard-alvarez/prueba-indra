import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import Swal from 'sweetalert2'

class OperationList extends Component {

    constructor( props ) {
        super(props);
        this.state = {operations: []};
        this.remove = this.remove.bind(this);
    }

    //get all rows
    async getAllOperation() {
        await fetch('/api/v1/operation/get-all-operation')
            .then(response => response.json())
            .then(data => this.setState({operations: data}))
        ;
       
    }

    componentDidMount(){
        this.getAllOperation();
    }

    // remove historial of the db
    async remove() {

        Swal.fire({
            title: 'Are you sure for delete all register?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {

                await fetch(`/api/v1/operation/delete-all-operation`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(() => {
                    this.setState({operations: []});
                    Swal.fire(
                        'Deleted!',
                        'All records has been deleted.',
                        'success'
                    )
                });

            }
          })
        ;
        
    }

    
    render() {

        const {operations, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const operationtList = operations.map(operation => {
            
            return <tr key={operation.id}>
                <td style={{whiteSpace: 'nowrap'}}>{operation.number1}</td>
                <td>{operation.number2}</td>
                <td>{operation.results}</td>
            </tr>

        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <div className="float-right my-4">
                        <Button color="danger" onClick={() => this.remove()}>Delete All Rows</Button>
                    </div>
                    <div className="float-right my-4 mr-2">
                        <Button color="success" tag={Link} to="/create-operation">Add Row</Button>
                    </div>
                    <h3>Operations</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Number 1</th>
                                <th width="30%">Number 2</th>
                                <th width="40%">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {operationtList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default OperationList;