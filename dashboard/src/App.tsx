import React, { Component } from 'react';
import * as firebase from "firebase";
import { Table, Button } from 'reactstrap';
import { any } from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <p className="navbar-dark navbar-brand col-sm-3 col-md-2 mr-0">RiskFactors</p>
          </nav>
          <RiskTable/>
          <AddRiskButton/>
      </div>
    );
  }
}

class AddRiskButton extends Component {
  render() {
    return (
      <Button type="button" 
              data-test="addrisk" 
              className="btn btn-secondary">Add Risk</Button>
    );
  }
}

class RiskTable extends Component {
  state = {
    message: "loading"
  }

  componentWillMount() {
    var callableFunction = firebase.functions().httpsCallable('callable');
    callableFunction()
     .then( 
       result => { this.setState({message: result.data["result"]});}
       );
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Threat</th>
            <th>Scope</th>
            <th>Loss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Todo</td>
            <td>{ this.state.message }</td>
            <td>Todo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default App;
