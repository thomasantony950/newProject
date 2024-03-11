import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AppRouter from "./route";
import {RouterProvider} from "react-router-dom";
import  router  from "./route";

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
