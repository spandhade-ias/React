//17 List Rendering
import React from 'react'
import Persons from './Persons'
function NameList() {
    const Data=[
        {
            id:1,
            name:'Sahil',
            age:20,
            city:'Akola'
        },
        {
            id:2,
            name:'Saurabh',
            age:25,
            city:'Akola'
        },
           
    ]
    const personList = Data.map((person)=>{return <Persons key={person.id} person={person}></Persons>})
  return (
    <div>
        {personList}
    </div>
  )
}

export default NameList