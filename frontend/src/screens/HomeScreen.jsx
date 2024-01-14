//import { useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
//import axios from 'axios';
//import products from '../products.js'; as now we fetch from backend
import { useGetProductsQuery } from '../slices/productApiSlice';

import React from 'react'

const HomeScreen = () => {
  // const [products, setProducts]=useState([]); //useState is for component level state
  // useEffect(()=>{
  //   const fetchProducts = async() => {
  //     const {data} = await axios.get('/api/products');
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // },[])
  const { data: products, isLoading, error} = useGetProductsQuery();
  return (
    <>
    { isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (<div>
      { error?.data?.message || error.error}
    </div>) : (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product)=>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
              </Col>
          ))
          }
        </Row>
      </>
    ) }
    
    </>
  )
}

export default HomeScreen