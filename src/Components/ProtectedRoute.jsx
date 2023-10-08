import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const {Component}=props;
  const Navigate=useNavigate();
  useEffect(()=>{
    let login =localStorage.getItem("login");
    if(!login){
      Navigate("/Login");
    }
  });
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoute