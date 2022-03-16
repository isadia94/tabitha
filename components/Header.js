import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import Image from "next/image";
function Header() {
  return (
    <div
      className="fixed top-0 left-0 z-50 pl-6 pr-5 flex justify-between items-center w-full
    pt-5"
    >
      <div>
        <h1 className="font-Coto text-2xl text-white xl:hidden">
          Tabitha Alms
        </h1>
        <div className="hidden xl:block">
          <Image
            src="/assets/logo.jpeg"
            width={65}
            height={65}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="xl:bg-green-600 px-2 py-2 xl:opacity-[0.8] rounded-md">
        <MenuAlt3Icon className="h-8 text-white   " />
      </div>
    </div>
  );
}

export default Header;
