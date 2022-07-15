//Event handler from Class Component
import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
       console.log("Button click from Class") 
    }
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default ClassClick