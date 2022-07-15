//14 : Binding Event Handlers
import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      //Method 4
      this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message:'Bye!'
        })
    }

    //FOR METHOD 3
    /*clickHandler = ()=>{
        this.setState({
            message:'Bye!'
        })
    }*/

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        { /*THIS WILL NOT WORK BECAUSE this KEYWORD IS UNDEFINED*/ 
        /*<button onClick={this.clickHandler}>Click</button>*/ }

        {/*Method 1 bind in render itself: <button onClick={this.clickHandler.bind(this)}></button>*/}
        {/*Method 2 arrow func: <button onClick={()=>{this.clickHandler()}}>Click</button>*/}
        {/*Method 3 : <button onClick={this.clickHandler}>Click</button>*/}
        {/*Method 4 bind in constructor: <button onClick={this.clickHandler}>Click</button>*/}
      </div>
    )
  }
}

export default Eventbind