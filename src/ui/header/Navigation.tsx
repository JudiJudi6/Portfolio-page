import React from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <div className="  w-full">
      <div className="hidden sm:block w-full">
        <DeskNav />
      </div>
      <div className="sm:hidden w-full">
        <MobileNav />
      </div>
    </div>
  );
}
