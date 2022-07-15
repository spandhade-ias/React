//Event handling in Functional Component
//EVENT HANDLER IS A FUNCTION AND NOT A FUNCTION CALL(DONT ADD PARENTHESIS)
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
         
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick