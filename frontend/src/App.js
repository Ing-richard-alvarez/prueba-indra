import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OperationList from './OperationList';
import ViewFormOperation from './ViewFormOperation';

class App extends Component {
  state = {
    operations : []
  }

    render() {
        return (
            <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/operations' exact={true} component={OperationList}/>
                <Route path='/create-operation' exact={true} component={ViewFormOperation}/>
            </Switch>
            </Router>
        )
    }
}


export default App;
