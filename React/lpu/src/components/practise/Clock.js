import React, { Component } from 'react';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      dt: "",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ dt: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.dt}
      </div>
      );
    }
}