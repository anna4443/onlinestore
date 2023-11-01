import React from "react";
import Dialog from '@mui/material/Dialog';
import { UserContext } from "./Navbar";

const Login = (props) => {

  const {isOpen} = props;

  const {user,setUser} = UserContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const createdUser = Object.fromEntries(formData);
    setUser(createdUser);
    localStorage.setItem('user', createdUser);
    
    e.currentTarget.reset();
  } 
  
  return (
    <Dialog open={isOpen.open} onClose={isOpen.handleCloseDialog} fullWidth maxWidth="sm">
    <form onSubmit={handleSubmit} style={{margin:'25px'}}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password"/>
      </div>
      <button type="button" className="btn btn-dark" onClick={isOpen.handleCloseDialog} style={{marginRight:'20px'}}>Cancel</button>
      <button type="submit" className="btn btn-dark">Login</button>
    </form>
    </Dialog>
  );
};

export default Login;
