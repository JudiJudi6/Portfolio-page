import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./ui/header/Header.tsx";
import Root from "./Root.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Bitchain from "./pages/Bitchain.tsx";
import Homepage from "./pages/Homepage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "project", element: <Bitchain /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
