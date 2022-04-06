import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (
      <div>
          <p>
              {this.props.dat}
          </p>
      </div>
    )
  }
}

export default Display