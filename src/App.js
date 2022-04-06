import React, { Component } from "react";
import Display from "./Display";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const temp = Object.entries(data.message).map((item) => item[0]);
        this.setState({
          data: temp,
          dataLoaded: true,
        });
      });
  }

  render() {
    return (
      <div>
        App Component
        {this.state.dataLoaded && <Display data={this.state.data} />}
      </div>
    );
  }
}

export default App;
