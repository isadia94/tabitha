import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

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
          <div className="pl-6 pr-5">
            <Header isActive={isActive} setIsActive={setIsActive} />
            <div className="mt-24 xl:mt-[200px] xl:max-w-[800px] xl:mx-auto ">
              <h1 className="uppercase font-Magenda text-5xl xl:text-[50px] max-w-[300px] xl:max-w-[800px] font-bold xl:absolute z-30">
                Anthony <span className="font-light"> +</span> Moureen{" "}
                <span className="text-green-600">Musembi</span>
              </h1>
              <div className="flex flex-col-reverse mt-8 xl:flex-row ">
                <div className="mt-8 xl:max-w-[400px] xl:text-[18px] xl:leading-8 xl:pr-8 xl:mt-14">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod voluptates et tempora, numquam repudiandae quae nemo
                    praesentium dignissimos animi eligendi provident maxime
                    eveniet necessitatibus officia. Velit necessitatibus
                    exercitationem at ipsam.
                  </p>
                </div>
                <div className="relative h-[300px] xl:h-[500px] w-full xl:w-[400px]">
                  <Image
                    src="/assets/leader.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
