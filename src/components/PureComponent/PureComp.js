//26 Pure Components
//A pure component
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Log from Pure')
    return (
        
      <div>
        
        Render from Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp