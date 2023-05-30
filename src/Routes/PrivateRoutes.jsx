import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <h3 className="text-center">Reloading</h3>
    }
   if(user){
    return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;