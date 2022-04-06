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

  // https://dog.ceo/api/breeds/list/all

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.message,
          dataLoaded: true,
        });
      });
  }
  render() {
    const { data, dataLoaded } = this.state;
    if (!dataLoaded) {
      return (
        <div>
          <h6>Data is Being Loaded</h6>
        </div>
      );
    } else {
      return (
        <div>
          {Object.entries(data).map(item => <Display dat={item[0]} />)  }
          {/* {Object.entries(data).map((item) => console.log(item[0]))} */}
        </div>
      );
    }
  }
}

export default App;
