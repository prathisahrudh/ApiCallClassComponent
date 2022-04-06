import React, { Component } from "react";
import Display from "./Display";
export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // https://dog.ceo/api/breeds/list/all

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState(data);
      });
  }

  render() {
    return (
      <div>
        App Component
        <Display data={this.state.message} />
      </div>
    );
  }
}

export default App;
