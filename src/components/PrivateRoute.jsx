import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoute = ({component}) => {
    const isAuth = useSelector((state) => state.profile.isAuth);

    if (!isAuth){
        return <Navigate to='/signIn' />;
    } 

    return component ? component : <Outlet />
}