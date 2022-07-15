//15.Methods as Props
import React from 'react'

function ChildComponent(props) {
  return (
    <div>

        <button onClick={props.greet}>Click</button>

        {/*Passing parameter from Child component to parent component method(USE ARROW FUNCTION)
        <button onClick ={()=>{props.greet('child')}}/> */}
    </div>
  )
}

export default ChildComponent