import { createContext, useContext, useEffect, useState } from "react"

export const Auth = createContext()

const initialState = { isAuth: false, user: {} }

const AuthContext = ({ children }) => {
    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)
    const readProfile = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            return setState({ isAuth: true, user })
        }
    }

    const handleLogout = () => {
        setState(initialState)
        localStorage.removeItem('user')
    }


    useEffect(() => {
        setTimeout(() => {
            readProfile()
            setIsAppLoading(false)
        }, 1800);

    }, [])

    return (
        <Auth.Provider value={{ ...state, dispatch: setState, handleLogout, isAppLoading }}>
            {children}
        </Auth.Provider>
    )
}

export default AuthContext
export const useAuth = () => useContext(Auth)