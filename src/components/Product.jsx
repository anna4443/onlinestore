import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = (props) => {

    const{product} = props;
    const dispatch = useDispatch();

  return (
    <div className="card" style={{width:"253px"}}>
        <img src={product?.thumbnail} className="card-img-top" alt={product?.title} style={{width:"251px", height:"170px"}}/>
        <div className="card-body">
            <p className="card-title">{product?.title}</p>
            <p className="card-text">{product?.price}$</p>
            <button type="button" className="btn btn-dark" onClick={()=>{dispatch(addItem(product))}}>Add to cart</button>
        </div>
    </div>
  )
}

export default Product