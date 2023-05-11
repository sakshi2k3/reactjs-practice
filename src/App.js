 import React, { useState } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import Homee from "./component/Homee";
import { Form, Route, Routes } from "react-router-dom";
import About from "./component/About";
import Brand from "./component/Brand";
import "./App.css";
import Ourteam from "./component/Ourteam";
import Contact from "./component/Contact";
import VariableUpdet from "./component/VariableUpdet";
import State from "./component/State";

import HideShoworToggle from "./component/HideShoworToggle";
import Formss from "./component/Formss";
import UseState from "./component/Hooks/UseState";
import State1 from "./component/State1";
import UseEffect from "./component/Hooks/UseEffect";
import UseEffect1 from "./component/Hooks/UseEffect1";
import Dispaly from "./component/Card/Dispaly";
import ProductList from "./component/ProductList";
import Product from "./component/Product";
import AddItem from "./component/Additem";
import EventHandler from "./component/EventHandler";


function App(){
  const productList = [
    {
      price: 99999,
      name: 'IPhone 10S Max',
      quantity: 4,
    },
    {
      price: 9999,
      name: 'Redmi Note 10S Max',
      quantity: 8,
    }
  ];
  let [productL,setproductL] = useState(productList)

 const increamentQuantity = (index) => {
    let newproductList = [...productL]
    newproductList[index].quantity++;
    setproductL(newproductList);
  }
 
 
  // const[title,setTitle] = useState('Ram')
  return (
    <div>
      <Header Abouttitle="ABOUT US" />
           <Routes>
           <Route path = '/' element = { <Homee/> } />

           <Route path = '/about' element = { <About/> } />
           <Route path = '/brand' element = { <Brand/> } />
           <Route path = '/ourteam' element = { <Ourteam/> } />
           <Route path = '/contact' element = { <Contact/> } />
           <Route path="/v" element = {<VariableUpdet />}  />
           <Route path="/s" element = {<State />}  />
           <Route path="/state1" element = {<State1 />}  />

           <Route path="/hst" element = {<HideShoworToggle />}  />
           <Route path="/form" element = {<Form />} />
           <Route path="/formss" element = {<Formss />}  />
           <Route path="/usestate" element = {<UseState />}  />
           
           <Route path="/productlist" element = {<ProductList productList = {productList} increamentQuantity = {increamentQuantity} />}  />
         
           <Route path="/product" element = {<Product productList = {productList} increamentQuantity={increamentQuantity} />}  />
           <Route path="/additem" element = {<AddItem />}  />
         
           <Route path="/useeffect" element = {<UseEffect />} />
           <Route path="/ue1" element = {<UseEffect1 />}  />
           <Route path="/display" element = {<Dispaly />}  />
           <Route path="/eventhendler" element = {<EventHandler />}  />

           </Routes>
      <Footer/>
    </div>
  )
}
export default App