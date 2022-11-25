import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layOut/DashBoardLayout";
import Main from "../layOut/Main";
import Login from "../Pages/Athentication/Login";
import Register from "../Pages/Athentication/Register";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddAProduct from "../Pages/Dashboard/SellerOnly/AddAProduct";
import MyProducts from "../Pages/Dashboard/SellerOnly/MyProducts";
import MyOrders from "../Pages/Dashboard/UserOnly/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductDetailes from "../Pages/ProductDetailes/ProductDetailes";
import Products from "../Pages/Products/Products";
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
    ],
  },
]);

export default router;
