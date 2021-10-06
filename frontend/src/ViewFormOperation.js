import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import CreateOperation from './CreateOperation';

class ViewFormOperation extends Component {

    render() {
        return(
            <div>
                <AppNavbar />
                <Container className="mt-5"> 
                    <CreateOperation />
                </Container>
            </div>
        )
    }
}

export default ViewFormOperation;