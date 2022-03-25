import { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  LocationMarkerIcon,
  DeviceMobileIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import Footer from "../components/Footer";
import Link from "next/link";
function Contact() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {isActive ? (
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
      ) : (
        <div>
          <div className="pl-6 pr-5">
            <Header isActive={isActive} setIsActive={setIsActive} />
            <div className="mt-24 xl:mt-32 ">
              <h1 className="text-center font-Magenda text-4xl xl:text-6xl text-green-600 font-bold">
                Contact Us
              </h1>
              <div className="mt-4">
                <p className="text-center text-gray-600">
                  Have any questions? Would you like to say Hi ? Get in touch
                  with us with any of the platforms below
                </p>
              </div>
              <div className="flex flex-col xl:flex-row xl:justify-center xl:space-x-12">
                <div className="flex justify-center flex-col mt-8">
                  <LocationMarkerIcon className="h-16 xl:h-20 xl:mt-10" />
                  <div className="text-center text-[12px] xl:text-[16px] mt-2">
                    <h6 className="font-Magenda font-bold text-lg text-gray-500">
                      ADDRESS
                    </h6>
                    <p className="">P.O BOX 16904-100 20100</p>
                    <p>Langa Langa</p>
                    <p>Nakuru, Kenya</p>
                  </div>
                </div>
                <div className="flex justify-center flex-col mt-8">
                  <DeviceMobileIcon className="h-16 xl:h-20" />
                  <div className="text-center text-[12px] xl:text-[16px] mt-2">
                    <h6 className="font-Magenda font-bold text-lg text-gray-500">
                      PHONE
                    </h6>
                    <p className="">(+254)740239992</p>
                  </div>
                </div>
                <div className="flex justify-center flex-col mt-8">
                  <DocumentTextIcon className="h-16 xl:h-20" />
                  <div className="text-center text-[12px] xl:text-[16px] mt-2">
                    <h6 className="font-Magenda font-bold text-lg text-gray-500">
                      E-MAIL
                    </h6>
                    <p className="">info@tabithaalms.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-24">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
