import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {clearCart, decrementQuantity, incrementQuantity, removeItem} from '../redux/cartSlice'

const Cart = () => {
  const {cartItems, total} = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Navbar />
      <div className="cart" style={{marginTop:'50px'}}>
      <header>
        <h2 className="cartTitle">Your bag</h2>
      </header>
      <table className="table" style={{marginTop:'25px'}}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const {id} = item;
            return(<tr key={item.id}>
              <td>{item.title}</td>
              <td><span style={{marginRight:'15px'}} onClick={()=>{dispatch(incrementQuantity({id}))}}>+</span>{item.amount}<span style={{marginLeft:'15px'}} onClick={()=>{dispatch(decrementQuantity({id}))}}>-</span></td>
              <td>{item.amount*item.price}$</td>
              <td><button className="btn btn-dark" onClick={() => {dispatch(removeItem({id}))}}>x</button></td>
            </tr>)
          })}
        </tbody>
      </table> 
      <footer>
        <h4>Total <span>{total}$</span></h4>
        <button className="btn btn-dark" onClick={() => {dispatch(clearCart())}}>Clear cart</button>
      </footer>
      </div>
    </>
  );
};

export default Cart;
