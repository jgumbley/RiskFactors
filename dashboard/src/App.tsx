import React, { Component } from 'react';
import { Table } from 'reactstrap';

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
            <td>Hello world comment here</td>
            <td>Todo</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default App;
