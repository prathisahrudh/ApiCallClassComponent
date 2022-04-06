import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // API CAlls
    const API_LINK = "https://dog.ceo/api/breeds/list/all";
    fetch(API_LINK)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
