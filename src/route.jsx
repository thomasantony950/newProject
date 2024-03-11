import React from "react";
import { BrowserRouter,createBrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/index";
import Products from "./components/Products/Products";
import HomePage from "./components/HomePage";

// export default function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/product" element={<Products />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
const router = createBrowserRouter([
  {
    title: "Home",
    path: "/",
    element: <HomePage />,
    // loader: rootLoader,
  },
  {
    title: "Products",
    path: "/product",
    element: <Products />,
    // loader: rootLoader,
  },
]);
export default router;