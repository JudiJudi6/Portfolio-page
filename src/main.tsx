import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Bitchain from "./pages/Bitchain.tsx";
import Homepage from "./pages/Homepage.tsx";
import WalletWise from "./pages/WalletWise.tsx";
import ThreeAnimation from "./pages/ThreeAnimation.tsx";
import UselessTools from "./pages/UselessTools.tsx";
import FireDesk from "./pages/FireDesk.tsx";
import Baza from "./pages/Baza.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HandwrittenDigits from "./pages/HandwrittenDigits.tsx";
import Readit from "./pages/Readit.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "bitchain", element: <Bitchain /> },
      { path: "readIt", element: <Readit /> },
      { path: "firedesk", element: <FireDesk /> },
      { path: "baza", element: <Baza /> },
      { path: "wallet-wise", element: <WalletWise /> },
      { path: "three-animation", element: <ThreeAnimation /> },
      { path: "useless-tools", element: <UselessTools /> },
      { path: "cnn-handwritten-digits", element: <HandwrittenDigits /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </React.StrictMode>
);
