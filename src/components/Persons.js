//17 List Rendering 2
import React from 'react'

function Persons({person}) {
  return (
    <div>
        <h2>This is {person.name} age {person.age} from {person.city}</h2>
    </div>
  )
}

export default Persons