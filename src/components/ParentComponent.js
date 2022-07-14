//15.Methods as Props
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'parent'
      }
      this.greetHandler = this.greetHandler.bind(this)
      //this.greetHandler2 = this.greetHandler2.bind(this)
    }

    greetHandler(){
        console.log(`Hello to ${this.state.message} `)
    }
    
    //Passing paramters from Child component to parent component method
    /*greetHandler2(childName){
        console.log(`Hello to ${this.state.message} from ${childName}`)
    }*/

  render() {
    return (
      <div>
            <ChildComponent greet={this.greetHandler}/>
            {/*<ChildComponent greet={this.greetHandler2}/>*/}
      </div>
    )
  }
}

export default ParentComponent