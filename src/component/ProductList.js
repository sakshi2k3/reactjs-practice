import React from 'react'
import Product from './Product.js'

function ProductList(props) {

  console.log(props)
  return (
     props.productList.map((productList,i) =>{
      return <Product productList={productList} key={i} increamentQuantity={props.increamentQuantity} index={i} />
     })
  )
}

export default ProductList


