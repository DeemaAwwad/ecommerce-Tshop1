import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/User'
import style from './Profile.module.css'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Profile() {
    let{userData,loading} = useContext(UserContext);
    if(loading){
      return <p>loading...</p>
    }
if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`${style.profile}`}>

      <div className={`${style.profileLinks}`} >
        <nav>
          <Link to='/profile' >info</Link>
          <Link to='contact' >contact</Link>
          <Link to='getorder' >order</Link>
        </nav>
      </div>
      <div className={`${style.userData}`}  >
        <Outlet/>
      </div>

    </div>
  );
};
