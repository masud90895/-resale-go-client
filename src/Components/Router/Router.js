import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Login from "../Pages/Athentication/Login";
import Register from "../Pages/Athentication/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductDetailes from "../Pages/ProductDetailes/ProductDetailes";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
    {
      path : '/',
      element: <Main/>,
      errorElement : <ErrorPage/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "products",
          element: <Products/>
        },
        {
          path: "category/:id",
          element: <ProductDetailes/>
        },
        {
          path: "blog",
          element: <Blog/>
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "login",
          element: <Login/>
        },
      ]

    }
  ])


  export default router;