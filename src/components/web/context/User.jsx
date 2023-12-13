import { createContext,useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
export let UserContext = createContext(null);

export function UserContextProvider({children}){
    const [userToken,setUserToken] = useState(null);
    const [userData,setUserData] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const getUserData= async()=>{
        if (userToken){
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile`,
            { headers:{authorization:`Tariq__${userToken}`} });
            setUserData(data.user);
            setLoading(false);
        }
    }
    useEffect(()=>{
        getUserData();
    },[userToken])
    return <UserContext.Provider value={{userToken,setUserToken,userData,setUserData,loading}} >
        {children}
    </UserContext.Provider>
}