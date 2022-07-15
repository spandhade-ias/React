//27 Memo 
import React from 'react'

function MemoComp({name}) {
    console.log('Log from MemoComp')
  return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)