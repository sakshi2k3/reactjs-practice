import React from 'react'

function VariableUpdet() {

  let data = 'Saksham'
  function updateData(){
    data = 'ram'
    alert(data)
  }
  console.log('renderComponent')
  return (
  <>
  <br/><br/><br/><br/><br/>
  <h1>{data}</h1>
  <button onClick={updateData}>Click</button>
  </>
  )
}

export default VariableUpdet

