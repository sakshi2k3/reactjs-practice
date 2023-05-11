import React, { useState } from 'react'

function Formss() {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[pass,setPass] = useState()
    function Getdata(e){
      e.preventDefault()
      console.log(name,email,pass)
    }
  return (
   <>
    <form onSubmit={Getdata}>
        <br/> <br/> <br/> <br/>
        <br/> <br/> <br/> <br/>
                  <label htmlfor="" >Name</label>
                    <input type='text' onChange={(e)=>setName(e.target.value)} /> <br/> <br/>
                    <label htmlfor="" >Email</label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} /> <br/> <br/>
                    <label htmlfor="" >password</label>
                    <input type='password' onChange={(e)=>setPass(e.target.value)} /> <br/> <br/>
                    <button type='submit' className='btn btn-info text-center'>Submit</button>
                   </form>
   </>
  )
}

export default Formss
