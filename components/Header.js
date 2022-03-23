import { useEffect } from "react";
import { MenuAlt3Icon } from "@heroicons/react/solid";
import Image from "next/image";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

function Header({ isActive, setIsActive }) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".fixed", { duration: 0.7, y: -100, ease: Power3.out });
  }, [isActive]);
  useEffect(() => {
    gsap.fromTo(
      ".header",
      {
        color: "white",
      },
      {
        color: "black",
        ease: "Expo.easeOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".servicesTitle",
          start: "top +=100px",
        },
      }
    );
  });

  return (
    <div
      className="fixed header top-0 left-0 z-50 pl-6 pr-5 flex justify-between items-center w-full
    pt-5"
    >
      <div>
        <h1
          className={
            isActive
              ? "text-green-600 font-Coto text-2xl xl:hidden "
              : "text-yellow-400 font-Coto text-2xl xl:hidden "
          }
        >
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
      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="xl:hidden cursor-pointer"
        >
          <MenuAlt3Icon
            className={isActive ? "h-8 text-black" : "h-8 text-white"}
          />
        </div>
        <div className="hidden xl:flex text-[12px] font-semibold space-x-12">
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="about">
            <a>ABOUT</a>
          </Link>
          <Link href="/">
            <a>SERVICES</a>
          </Link>
          <Link href="/">
            <a>TEAM</a>
          </Link>

          <Link href="/">
            <a>CONTACT</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
