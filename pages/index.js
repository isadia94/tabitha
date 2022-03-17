import { useEffect, useState } from "react";
import Head from "next/head";
import About from "../components/About";
import Services from "../components/Services";
import Leadership from "../components/Leadership";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Link from "next/link";
import { gsap, Power3 } from "gsap";

export default function Home() {
  const [preload, setPreload] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setPreload(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();

    tl.from("a", {
      opacity: 0,
      duration: 0.4,
      y: -30,
      autoAlpha: 0,
      // delay: 1,
      ease: Power3.easeOut,

      stagger: 0.1,
    });
    tl.to(".navLink", {
      duration: 0.4,
      color: "#444",

      // delay: 1,
      ease: Power3.easeOut,

      stagger: 0.1,
    });
  });

  return (
    <div>
      <Head>
        <title>Tabitha Alms Organization</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {preload ? (
        <div className="h-screen bg-green-700 flex items-center justify-center">
          <h1 className="text-white font-Coto text-3xl animate-pulse">
            Tabitha Alms
          </h1>
        </div>
      ) : (
        <>
          {isActive ? (
            <div>
              <Header isActive={isActive} setIsActive={setIsActive} />
              <div className="h-screen  bg-gray-200 pl-6 ">
                <div className="flex flex-col justify-center h-screen text-6xl font-extrabold  font-Magenda text-white space-y-7 ">
                  <Link href="/">
                    <a className="navLink">HOME</a>
                  </Link>
                  <Link href="/">
                    <a className="navLink">ABOUT</a>
                  </Link>
                  <Link href="/">
                    <a className="navLink">SERVICES</a>
                  </Link>
                  <Link href="/">
                    <a className="navLink">TEAM</a>
                  </Link>

                  <Link href="/">
                    <a className="navLink">CONTACT</a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Header isActive={isActive} setIsActive={setIsActive} />
              <Hero />
              <About />
              <Services />
              <Leadership />
              <Footer />
            </div>
          )}
        </>
      )}
    </div>
  );
}
