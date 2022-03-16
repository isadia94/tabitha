import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";

function Header() {
  return (
    <div
      className="fixed top-0 left-0 z-50 pl-6 pr-5 flex justify-between w-full
    pt-5"
    >
      <div className="xl:hidden">
        <h1 className="font-Coto text-2xl text-white">Tabitha Alms</h1>
      </div>
      <div>
        <MenuAlt3Icon className="h-8 text-white" />
      </div>
    </div>
  );
}

export default Header;
