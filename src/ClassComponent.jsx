import React from 'react';

// convert class component to functional component;

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      loading: true,
    };
    this.removeAllEmployees = this.removeAllEmployees.bind(this);
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  removeAllEmployees() {
    this.setState({
      employees: [],
    });
  }

  fetchEmployees() {
    const _this = this;
    _this.setState({
      loading: true,
    });
    fetch('./employees.json')
      .then((response) => response.json())
      .then((data) => data.objects)
      .then((data) => {
        _this.setState({
          employees: data,
          loading: false,
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
        <button
          className="btn btn-sm btn-success"
          onClick={this.fetchEmployees}
        >
          Fetch Employees 🥳
        </button>
        &nbsp;
        <button
          className="btn btn-sm btn-danger"
          onClick={this.removeAllEmployees}
        >
          Remove All 😞
        </button>
        <hr />
        <p>Props :{JSON.stringify(this.props, null, 2)}</p>
        {this.state.loading ? (
          'Loading ⌛️'
        ) : (
          <p>State :{JSON.stringify(this.state?.employees, null, 2)}</p>
        )}
      </div>
    );
  }
}
