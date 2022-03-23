import React from "react";
import Header from "../components/Header";
import {
  LocationMarkerIcon,
  DeviceMobileIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";

function Contact() {
  return (
    <div>
      <div className="pl-6 pr-5">
        <Header />
        <div className="mt-24 ">
          <h1 className="text-center font-Magenda text-4xl text-green-600 font-bold">
            Contact Us
          </h1>
          <div className="mt-4">
            <p className="text-center text-gray-600">
              Have any questions? Would you like to say Hi ? Get in touch with
              us with any of the platforms below
            </p>
          </div>
          <div className="">
            <div className="flex justify-center flex-col mt-8">
              <LocationMarkerIcon className="h-16" />
              <div className="text-center text-[12px] mt-2">
                <p className="">P.O BOX 16904-100 20100</p>
                <p>Langa Langa</p>
                <p>Nakuru, Kenya</p>
              </div>
            </div>
            <div className="flex justify-center flex-col mt-8">
              <DeviceMobileIcon className="h-16" />
              <div className="text-center text-[12px] mt-2">
                <p className="">(+254)740239992</p>
              </div>
            </div>
            <div className="flex justify-center flex-col mt-8">
              <DocumentTextIcon className="h-16" />
              <div className="text-center text-[12px] mt-2">
                <p className="">mail@tabithaalms.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
