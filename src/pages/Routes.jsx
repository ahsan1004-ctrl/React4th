import { Navigate, Route, Routes } from "react-router-dom"

import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard"
import PrivateRoutes from "../components/PrivateRoute/PrivateRoutes"
import { useAuth } from "../context/Auth"


const Index = () => {
    const {isAuth} = useAuth()
    return (
        <>
            <Routes>
                <Route path="/*" element={<Frontend />} />
                <Route path="/auth/*" element={!isAuth ? <Auth /> : <Navigate to='/dashboard' replace />} />
                <Route path="/dashboard/*" element={<PrivateRoutes Component={Dashboard} />} />
            </Routes>
        </>
    )
}

export default Index