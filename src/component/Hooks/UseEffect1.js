import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const[count,setCount] = useState(100);
    const[data,setData] = useState(10);

    useEffect(() => {
        //alert("useEffect")
        console.warn("Called with data state");
    },[data]);

    useEffect(() => {
        //alert("count is" + count)
        console.warn("count is" + count)
    },[count]);
  return (
  <>
  <br/> <br/> <br/> <br/> <br/>
  <h1>Use Effect with condition</h1>
  <h1>Count : {count} </h1>
  <h1>Data : {data} </h1>
  <button onClick={() => setCount(count + 1)} className='btn btn-danger'>Update Count</button>
  <button onClick={() => setData(data + 1)} className='btn btn-danger'>Update Data</button>

  </>
  )
}

export default UseEffect1
