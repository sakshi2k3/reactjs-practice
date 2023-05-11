import React from 'react'

function EventHandler() {
   function clickHandler(){
        document.write("heellooo");
        console.log("Hello Gwl")
    }
  return (
<>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<button onClick={clickHandler}>Click me</button>
</>
  )
}

export default EventHandler
