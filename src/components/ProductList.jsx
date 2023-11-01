import React, { useEffect, useState } from 'react'
import useFetchData from '../custom-hooks/useFetchData';
import Product from './Product';
import SweetPagination from "sweetpagination";

const url = "https://dummyjson.com/products";

const ProductList = () => {

    const {data:products, isLoading, isError} = useFetchData(url);

    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

    if (isLoading) {
        return;
    }

    if (isError) {
        <h1>Error while loading data...</h1>
    }

  return (
    <>
    <div className='products-container'>
      {
         currentPageData.map((product, i) => {
            return <Product product={product} key={i}/>
        }) 
      }
    </div>
    <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={5}
        getData={products.products}
        navigation={true}
      />
    </> 
  )
}

export default ProductList