import React, { Component } from "react";
import FinalDisplay from "./FinalDisplay";
export class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id, ind) {
    console.log("Inside Handle Delete");
    let tempStore = this.state.data;
    const res = tempStore.filter((data) => data !== id);
    this.setState({
      data: res,
    });
  }
  render() {
    return (
      <div>
        Display Component
        {this.state.data.map((item, index) => {
          return (
            <FinalDisplay
              key={index}
              pos={index}
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
