import React from "react";
import Header from "../components/Header";
import {
  LocationMarkerIcon,
  DeviceMobileIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import Footer from "../components/Footer";
function Contact() {
  return (
    <div>
      <div className="pl-6 pr-5">
        <Header />
        <div className="mt-24 xl:mt-32 ">
          <h1 className="text-center font-Magenda text-4xl xl:text-6xl text-green-600 font-bold">
            Contact Us
          </h1>
          <div className="mt-4">
            <p className="text-center text-gray-600">
              Have any questions? Would you like to say Hi ? Get in touch with
              us with any of the platforms below
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
  );
}

export default Contact;
