import React, { useState } from 'react'

function State() {
    const[data,setData] = useState('raja sharma')        
    function UpdateData(){
        setData('ram')
    }
    console.log('renderComponent')
  return (
  <>

  <br/> <br/> <br/> <br/> <br/> 
  <h1>{data}</h1>
  <button onClick={UpdateData}>Click</button>
  </>
  )
}

export default State

