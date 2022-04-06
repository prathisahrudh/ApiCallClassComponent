import React, { Component } from "react";
import FinalDisplay from "./FinalDisplay";
export class Display extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.state = { data: this.props.data };
  }

  handleDelete(id) {
    console.log(id);
    let temp = this.state.filter(el => el!==id)
    this.setState({data: temp})
    console.log(this.state);
  }
  render() {
    return (
      <div>
        Display Component
        {this.state.data.map((item, index) => {
          return (
            <FinalDisplay
              key={index}
              data={item}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Display;
