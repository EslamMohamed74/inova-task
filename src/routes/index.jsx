import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "productdetails/:id",
    element: <ProductDetails />,
  },
]);
