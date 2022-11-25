import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSeller } from "../Hooks/UseSeller";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Loader from "../Pages/Shared/Loader";

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isLoading) {
        return <Loader/>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;