import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
        // Only set localStorage if it doesn't exist
        if (!localStorage.getItem('users')) {
            setLocalStorage()
        }
        const { employee, admin } = getLocalStorage()
        setUserData({ employee, admin })
    }, [])

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider