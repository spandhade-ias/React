//12.Destructuring Props and state
import React, { Component } from 'react'

export class Greetings2 extends Component {
  render() {
    const {name,title} = this.props
    return (
      <div>
            <h1>Name is {name} and the title is {title}</h1>
      </div>
    )
  }
}

export default Greetings2