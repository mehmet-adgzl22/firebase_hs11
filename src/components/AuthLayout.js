import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

const AuthLayout = () => {

 const [user, isLoggedIn] =   useAuthState(auth);

 if(isLoggedIn) {
    return <h1>Loading...</h1>
 }

    if(user) {
        return <Navigate to="/" replace />;
    }
return <Outlet />;
   
};

export default AuthLayout;