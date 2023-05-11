import React, { useState } from 'react'

function UseState() {
    const[count,setCount] = useState(0);
  return (
    <>
     <br/> <br/> <br/> <br/> <br/> 
    <p>You Clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default UseState
