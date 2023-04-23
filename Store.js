import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import Product from './Product'
const Store = () => {
  return (
    <>
      <Card className="text-white text-center" variant="light" style={{ width: "100%", height: "30vh", fontSize: "10vw", backgroundColor: "grey"}}>The Generics</Card>
      <h3 style={{textAlign:'center',fontWeight:'bold',padding:'20px 0'}}>PRODUCTS</h3>
      <Product/>
      <Button variant="primary" className='d-flex  mx-auto mb-1rem'>SEE CART</Button>
    </>
  )
}

export default Store
