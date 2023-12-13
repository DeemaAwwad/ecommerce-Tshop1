import React, { useEffect,useContext } from 'react'
import {RouterProvider} from "react-router-dom";
import {router} from './layouts/Routes'
import { UserContext } from './components/web/context/User';
import { CartContext } from './components/web/context/Cart';

export default function App() {
  let {setUserToken} = useContext(UserContext);
  let {setCount,getCartContext} = useContext(CartContext);
  useEffect(()=>{
    if(localStorage.getItem("userToken") != null){
      setUserToken(localStorage.getItem("userToken"));
      setCount(getCartContext().count);
    }
  },[]);
  return (
        <RouterProvider router={router} />
      
  )
}