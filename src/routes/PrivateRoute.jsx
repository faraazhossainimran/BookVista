import { useContext } from "react"

import { Navigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProviders"


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56" value="100" max="100"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to={'/login'} replace></Navigate>
}

export default PrivateRoute