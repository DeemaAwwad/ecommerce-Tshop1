import React ,{useContext} from 'react'
import { UserContext } from '../context/User'

export default function Usercontact() {
    const {userData,loading} = useContext(UserContext);
    if(loading){
        return <p>loading...</p>
    }
  return (
    <div>
        <h2>Email: {userData.email}</h2>
        <h2>Phone: {userData.phone}</h2>
    </div>
  )
}
