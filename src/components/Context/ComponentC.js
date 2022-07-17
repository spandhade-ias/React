import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserProvider } from './userContext'
export class ComponentC extends Component {
  render() {
    return (
            <ComponentE />
    )
  }
}

export default ComponentC