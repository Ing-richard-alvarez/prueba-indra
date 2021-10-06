import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import './App.css';
import AppNavbar from './AppNavbar';

function Home(props) 
{
    return(
        <div>
            <AppNavbar />
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <Jumbotron>
                            <h1 className="display-3">Hello, Indra!</h1>
                            <p className="lead">This small SPA(Single Page Application) was builded on the next tools: Java SpringBoot and ReactJs merged with others libraries for example axios, sweetaler, moment etc.</p>
                            <hr className="my-2" />
                            <p>For the API testing i used POSTMAN and with react js i used just tools for debugging.</p>
                        </Jumbotron>
                        </Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default Home;