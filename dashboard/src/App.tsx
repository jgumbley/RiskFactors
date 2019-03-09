import React, { Component } from 'react';
import * as firebase from "firebase";
import { Table } from 'reactstrap';
import { any } from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <p className="navbar-dark navbar-brand col-sm-3 col-md-2 mr-0">RiskFactors</p>
          </nav>
          <RiskTable/>
      </div>
    );
  }
}

class RiskTable extends Component {
  state = {
    message: "whats up"
  }
  componentWillMount() {
    var callableFunction = firebase.functions().httpsCallable('callable');
    var output = callableFunction()
     .then( result => {
        // Read result of the Cloud Function.
        console.log("who is your palos, yes palos");
        var helloworld = result.data["result"];
        console.log(helloworld);
        this.setState({message: helloworld});
        return helloworld;
        }
        );
    console.log(output);
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
