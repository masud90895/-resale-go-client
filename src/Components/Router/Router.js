import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../Pages/Home/Home";
import ProductDetailes from "../Pages/ProductDetailes/ProductDetailes";
import Products from "../Pages/Products/Products";

const router = createBrowserRouter([
    {
      path : '/',
      element: <Main/>,
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
      ]

    }
  ])


  export default router;