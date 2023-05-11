import React, { useState } from 'react'

function HideShoworToggle() {
    const[status,setStatus]=useState(false)
  return (
   <>
   <h1>
    HideShoworToggle
   </h1>
   {
    status?<h1>Hello Gwalior</h1>:null
   }
   <button className='btn btn-danger' onClick={()=>setStatus(false)} >Hide</button> <br/> <br />
   <button className='btn btn-danger' onClick={()=>setStatus(true)}>Show</button> <br/> <br />
   <button className='btn btn-danger'onClick={()=>setStatus(!status)} >Toggle</button>  <br/> <br />
   </>
  )
}

export default HideShoworToggle

