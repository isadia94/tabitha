import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Link from "next/link";
import Services from "../components/Services";

function Team() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {isActive ? (
        <div>
          <div className="pl-6 pr-5">
            <Header isActive={isActive} setIsActive={setIsActive} />
            <div className="flex flex-col justify-center h-screen text-6xl font-extrabold  font-Magenda text-black space-y-7">
              <Link href="/">
                <a className="navLink">HOME</a>
              </Link>
              <Link href="/about">
                <a className="navLink">ABOUT</a>
              </Link>
              <Link href="/">
                <a className="navLink">SERVICES</a>
              </Link>
              <Link href="/team">
                <a className="navLink">TEAM</a>
              </Link>

              <Link href="/contact">
                <a className="navLink">CONTACT</a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header isActive={isActive} setIsActive={setIsActive} />
          <div className="mt-[80px]">
            <Services />
          </div>

          <div className="mt-[200px]">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
