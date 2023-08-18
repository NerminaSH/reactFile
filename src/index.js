import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/home'
import Html from './pages/html'
import Css from './pages/css'
import JavaScript from './pages/javascript'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>soryyyy you cant fuond the page</h1>
  },

  {
    path: "Html",
    element: <Html />,
  },

  {
    path: "Css",
    element: <Css />,
  },
  
  {
    path: "JavaScript",
    element: <JavaScript />,
  },

  

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
