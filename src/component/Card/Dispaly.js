import React, { useEffect, useState } from 'react'
import axios from "axios";

function Dispaly() {
    const[user,setUser] = useState({})
    const userList = async()=>{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
       // console.log(data)
       setUser(data);
      }
    useEffect(()=>{
     userList()
    },[])
    console.log(user);
  return (
    <>
  <div className='container'>
  <div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>NAME</th>
                    <th scope='col'>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    </div>
    <div className='col-md-4'></div>
  </div>
  </div>
    </>
  )
}

export default Dispaly
