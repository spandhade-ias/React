//Refs 
import React, { Component } from 'react'

class Refs extends Component {
  constructor(props) {
    super(props)
    
    this.inputRef =React.createRef()
  }
  componentDidMount(){
    //focus on the input box
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        {/*Attach element to ref using reserved ref attr */}
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Refs