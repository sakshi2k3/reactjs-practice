import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[count,setCount] = useState(0);

    useEffect(() => {
        console.log('Hello Gwalior')
    },[])
  return (
   <>
       <br/> <br/> <br/> <br/> <br/>
   <h1>UseEffect</h1>
   <p>You Clicked {count} times</p>
    <button onClick={() => setCount(count + 1)} className='btn btn-danger'>Click me</button>
   </>
  )
}

export default UseEffect
