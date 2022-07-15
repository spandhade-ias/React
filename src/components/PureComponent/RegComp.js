//26 Pure Components

//This is a regular component
import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Log from Regular')
    return (
      <div>
        
        Render from Regular Component {this.props.name}
        </div>
    )
  }
}

export default RegComp