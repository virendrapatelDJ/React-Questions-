import React from 'react';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <h1>Class Component</h1>;
  }
}
