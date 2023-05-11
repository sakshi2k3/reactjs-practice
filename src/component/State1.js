import React, { useState } from 'react'

function State1() {
    const[count,setCount] = useState(0)
    const[mystyle,setMystyle] = useState({
      color: 'white',
      backgroundColor: 'black'
    })
    const[btntext,setBtntext] = useState("Enalble Light Mode")

   let DarkMode = () =>{
      if(mystyle.color === 'white'){
        setMystyle({
          color: 'black',
      backgroundColor: 'white'
        })
        setBtntext("Enable Dark Mode")
      }
      else{
        setMystyle({
        color: 'white',
        backgroundColor: 'black'
          })
          setBtntext("Enable Light Mode")
      }
    }
    // console.log('render')
    // let mystyle={
    //   color: 'red',
    //   backgroundColor: 'blue'
    // }
   
  return (
    <div>
     <br/> <br/> <br/> <br/> <br/> 
     <div className='container mt-5' style={mystyle}> 
     <p>You Clicked {count} times</p>
    
    <button onClick={() => setCount(count + 1)}>Click me</button>


    <p> First Fiddle Restaurants, formerly known as The Lazeez Affaire
              Group, was conceived in the year 1999 by Priyank Sukhija and Y.P.
              Ashok. Since then, the company has made a name for itself as
              innovators and leaders in the industry. Starting with their first
              brand, Lazeez Affaire, Priyank popularised the conceptof fine
              dining at a time when the same was unheard of. Following its
              success, First Fiddle introduced the concept of casual dining with
              brands such as Warehouse Cafe, Tamasha, Lord of The Drinks, Flying
              Saucer Cafe, and more, storming Delhi’s nightlife. WIth each new
              brand, First Fiddle brought a concept that was never experienced
              or heard of before, such as Plum by Bent Chair, Miso Sexy, Diablo,
              and more. The restaurants are spread all over India in major
              metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and
              more, with plans to expand internationally soon.</p>

    <button claasName='btn btn-info mt-5 mb-5' onClick={DarkMode} >{btntext}</button>
    </div>
    </div>
  )
}

export default State1
