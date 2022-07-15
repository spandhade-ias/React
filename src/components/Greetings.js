//Stateless Functional Component

import React from 'react'

//function Greet(){
  //  return <h1>Hello</h1>
//}


const Greet = ()=>{

    /*USING JSX */
    return <h1>Hello</h1>

    /*WITHOUT USING JSX */
    //return React.createElement('div',{id:'id1',className:'dummyClass'},React.createElement('h1',null,'Hello without jsx'))
}



export default Greet