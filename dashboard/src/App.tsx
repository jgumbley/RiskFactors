import React, { Component } from 'react';
import * as firebase from "firebase";
import { Table, Button } from 'react-materialize';
import { Chart } from "react-google-charts";

class App extends Component {

  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <p className="navbar-dark navbar-brand col-sm-3 col-md-2 mr-0">RiskFactors</p>
          </nav>
          <RiskTable/>
          <AddRiskButton/>
          <Chart
      chartType="ScatterChart"
      rows={[[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]]}
      columns={[
        {
          type: "number",
          label: "Age"
        },
        {
          type: "number",
          label: "Weight"
        }
      ]}
      options={
        // Chart options
        {
          title: "Age vs. Weight comparison",
          hAxis: {
            title: "Age",
            viewWindow: { min: 0, max: 15 }
          },
          vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
          legend: "none"
        }
      }
      width={"100%"}
      height={"400px"}
      legendToggle
    />
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
    message: "loading",
    risks: []
  }

  componentWillMount() {
    var callableFunction = firebase.functions().httpsCallable('callable');
    callableFunction()
     .then( 
       result => { this.setState({message: result.data["result"]});}
       );
    
    firebase.firestore().collection("Risks").get()
     .then(
       result => { 
         const risks: firebase.firestore.DocumentData[] = [];
         result.forEach(risk => {
                    risks.push(risk.data())
                  });
         this.setState({ risks: risks });
        });
  }

  renderItems() {
    const listOfRisks = this.state.risks.map(
      (risk, index)  => {
        return (
          <tr key={index}>
            <th scope="row">{ index }</th>
            <td>{ risk["scope"] } </td>
            <td>{ risk["threat"] } </td>
            <td>{ risk["loss"] } </td>
          </tr>
        )
      });
    return (
      <tbody>{ listOfRisks}</tbody>
    );
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Scope</th>
            <th>Threat</th>
            <th>Loss</th>
          </tr>
        </thead>
        { this.renderItems() }
      </Table>
    );
  }
}

export default App;
