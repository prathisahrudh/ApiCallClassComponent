import React, { Component } from "react";

export class FinalDisplay extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.data}
          <button onClick={() => this.props.handleDelete(this.props.data, this.props.pos)}>Delete</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default FinalDisplay;
