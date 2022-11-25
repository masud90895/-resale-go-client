import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAdmin } from "../Hooks/UseAdmin";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin(user?.email);

  const { data: users = {} } = useQuery({
    queryKey: ["brand"],
    queryFn: () =>
      fetch(`http://localhost:5000/user/?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <h1>loading.........</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-base-200">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard ">Welcome Page</Link>
            </li>
            {users?.role === "Buyer" && (
              <>
                <li>
                  <Link to="/dashboard/myOrders ">My Orders</Link>
                </li>
              </>
            )}
            {users?.role === "Seller" && (
              <>
                <li>
                  <Link to="/dashboard/addAProduct ">Add A product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
              </>
            )}

            {(isAdmin || users?.role === "Admin") && (
              <>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItem">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
