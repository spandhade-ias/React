import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    //METHOD1
    if(this.state.isLoggedIn){
        return (
            <div>Welcome user</div>
        )
    }
    else{
        return(
            <div>Welcome guest</div>
        )
    }

    //METHOD-2
    //return this.state.isLoggedIn ? <div>Welcome user</div> : <div>Welcome guest</div>
    
    /*METHOD-3
    let message
    if(this.state.isLoggedIn){
        message=<div>Welcome user</div>
    }
    else{
        message=<div>Welcome guest</div>
    }
    return <div>{message}</div>*/
  }
}

export default UserGreeting