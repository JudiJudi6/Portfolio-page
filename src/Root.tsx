import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ui/ScrollToTop";

export default function Root() {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
