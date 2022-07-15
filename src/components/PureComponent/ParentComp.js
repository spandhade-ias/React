//26 Pure Components
import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Sahil'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sahil'
            })
        },2000)
    }
  render() {
    console.log('Log from Parent')
    return (
      <div>
        Render from Parent 
        {/*<PureComp name={this.state.name}></PureComp>
        <RegComp name={this.state.name}></RegComp>*/}

        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp