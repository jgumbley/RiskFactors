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

class AddRiskButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
     threat: "hello there",
     scope: "mr ed",
     loss: "the talking horse"
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    firebase.firestore().collection("Risks").add({
      threat: this.state.threat,
      scope: this.state.scope,
      loss: this.state.loss 
    });  
  }

  render() {
    return (
      <form>
          <input
            type="text"
            name="threat"
            placeholder="Threat"
          />
          <input
            type="text"
            name="scope"
            placeholder="Scope"
          />
          <input
            type="text"
            name="loss"
            placeholder="Loss"
          />
      <Button type="button" 
              data-test="addrisk" 
              onClick={this.handleClick}
              className="btn btn-secondary">Add Risk</Button>
        </form>
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
