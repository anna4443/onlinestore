import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useSelector } from 'react-redux';

export const LoginContext = createContext();
export const UserContext = () => useContext(LoginContext);

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const {amount} = useSelector((store) => store.cart);

  const [user, setUser] = useState(null);

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(loggedUser);
    }
  },[])

  return (
    <LoginContext.Provider value={{user,setUser}}>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link to='/home'>Products</Link>
      </li>
      <li className="nav-item">
        <Link to='/cart'>
          <i className="fa fa-shopping-cart" id='cartQuantity' value={amount}></i>
        </Link>
      </li>
      <li className="nav-item">
          {!user ? <button type="button" className="btn btn-light" onClick={handleOpenDialog}>Login</button>  : <button type="button" className="btn btn-light" onClick={logout}>Logout</button>  } 
          <Login isOpen={{open, handleCloseDialog}}/>
      </li>
    </ul>
    </LoginContext.Provider>
  )
}

export default Navbar