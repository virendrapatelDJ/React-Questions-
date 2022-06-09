import React from 'react';

// convert class component to functional component;

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllEmployees = this.removeAllEmployees.bind(this);
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  removeAllEmployees() {
    this.setState({
      ...this.state,
      employees: [],
    });
  }

  fetchEmployees() {
    const _this = this;
    fetch('./employees.json')
      .then((response) => response.json())
      .then((data) => data.objects)
      .then((data) => {
        _this.setState({
          ..._this.state,
          employees: data,
        });
      });
  }

  componentDidMount() {
    console.log('COmponent mounted.');
    this.fetchEmployees();
  }

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <hr />
        <button className="btn btn-danger" onClick={this.fetchEmployees}>
          Fetch Employees
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={this.removeAllEmployees}>
          Remove All
        </button>
        <hr />
        <p>Props :{JSON.stringify(this.props, null, 2)}</p>
        <p>State :{JSON.stringify(this.state?.employees, null, 2)}</p>
      </div>
    );
  }
}
