import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


export const PublicRoute = ({component}) => {
    const isAuth = useSelector((state) => state.profile.isAuth);

    if (isAuth){
        return <Navigate to='/' />;
    } 

    return component ? component : <Outlet />
}