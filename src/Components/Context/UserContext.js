import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const [servicesx, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    const authInfo={
        servicesx
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      )
}
export default UserContext;