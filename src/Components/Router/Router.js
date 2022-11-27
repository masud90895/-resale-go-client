import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layOut/DashBoardLayout";
import Main from "../layOut/Main";
import Login from "../Pages/Athentication/Login";
import Register from "../Pages/Athentication/Register";
import Blog from "../Pages/Blog/Blog";
import AddBuyers from "../Pages/Dashboard/AdminOnly/AddBuyers";
import AllSeller from "../Pages/Dashboard/AdminOnly/AllSeller";
import ReportedItems from "../Pages/Dashboard/AdminOnly/ReportedItems";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddAProduct from "../Pages/Dashboard/SellerOnly/AddAProduct";
import MyProducts from "../Pages/Dashboard/SellerOnly/MyProducts";
import MyOrders from "../Pages/Dashboard/UserOnly/MyOrders";
import Payment from "../Pages/Dashboard/UserOnly/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductDetailes from "../Pages/ProductDetailes/ProductDetailes";
import Products from "../Pages/Products/Products";
import AdminRoute from "./AdminRoute";
import PriveteRoute from "./PriveteRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "category/:id",
        element: (
          <PriveteRoute>
            <ProductDetailes />
          </PriveteRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PriveteRoute>
        <DashBoardLayout />
      </PriveteRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PriveteRoute>
            <Dashboard />
          </PriveteRoute>
        ),
      },
      {
        path: "/dashboard/myorders",
        element: (
          <PriveteRoute>
            <MyOrders />
          </PriveteRoute>
        ),
      },
      {
        path: "/dashboard/addAProduct",
        element: (
          <SellerRoute>
            <AddAProduct />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSeller />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AddBuyers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItem",
        element: (
          <AdminRoute>
            <ReportedItems />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          
            <Payment />
          
        ),
        loader : ({params})=> fetch(`http://localhost:5000/dashboard/payment/${params.id}`)
      },
    ],
  },
]);

export default router;
