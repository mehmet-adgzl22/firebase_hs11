import { Navigate, Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "../firebase";


const MainLayout = () => {

   const [user, isLoggedIn] = useAuthState(auth);

   if(isLoggedIn) {
    return <h1>Loading...</h1>
   }

    if(!user) {
        return <Navigate  to="/sign-in" replace />;
    }

    return  <Outlet/>;
};

export default MainLayout;