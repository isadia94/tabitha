import Link from "next/link";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="relative footer">
      <div className="grid footer grid-cols-1 xl:grid-cols-4  gap-3 pl-6 pr-5 text-gray-200 border border-b-[1px] border-x-0">
        <div className="mt-12  mb-10 border-gray-600">
          <h3 className="text-white font-Poppins font-extrabold">
            TABITHA ALMS ORGANISATION
          </h3>
          <div className="h-[0.4px] bg-white mt-8 xl:hidden" />
        </div>

        <div className="xl:mt-12">
          <h4 className="title text-white font-Poppins font-extrabold">
            LINKS
          </h4>
          <div className="mt-2 flex flex-col space-y-2 text-sm">
            <Link href="/">
              <a className="cursor-pointer font-Poppins font-light">US</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Poppins font-light">
                WHAT WE DO
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Poppins font-light">PROJECTS</a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer font-Poppins font-light">
                OUR LEADERSHIP
              </a>
            </Link>

            <Link href="/">
              <a className="cursor-pointer font-Poppins font-light">DONATE</a>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-Poppins font-extrabold mt-10">
            CONTACTS
          </h4>
          <div className="mt-4 flex space-x-2">
            <PhoneIcon className="h-6" />
            <p className="font-Poppins">+254740239992</p>
          </div>
          <div className="mt-4 flex space-x-2">
            <MailIcon className="h-6" />
            <p className="font-Poppins">info@tabithaalms.org</p>
          </div>
          <div className="mt-6 flex space-x-5 mb-10">
            <Link href="/">
              <a>
                <img
                  src="assets/youtube.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  src="/assets/facebook.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  src="/assets/twitter.png"
                  loading="lazy"
                  alt=""
                  className="h-10 object-contain"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="xl:mt-12">
          <form action="" className="relative mb-10">
            <h3 className="title max-w-[200px] text-white font-Poppins font-extrabold ">
              STAY UP TO DATE WITH TABITHA ALMS
            </h3>
            <input
              type="text"
              autoComplete="false"
              className="w-full  outline-none  py-2 bg-transparent border border-b-1 mt-2 border-t-0 border-x-0 "
              placeholder="Enter Email Address"
            />
            <input
              type="submit"
              value="Submit"
              className="absolute right-3 bottom-2 text-yellow-400 font-Poppins"
            />
          </form>
          <div className="md:hidden w-full h-[1px] bg-gray-500 mt-8" />
        </div>
      </div>
      <div>
        <div className="text-center mt-8 text-xs space-y-2 mb-3 text-gray-400">
          <p>
            &copy; <span className="font-Poppins">2022 TABITHA ALMS</span>
          </p>
          <p className="font-Poppins">PRIVACY POLICY</p>
          <p className="font-Poppins">Terms + Conditions</p>
          <p className="font-Poppins">SMS Terms + Conditions</p>
        </div>
        <div className="md:hidden w-full h-[1px] bg-gray-500 mt-8" />
        <div className="mt-4 text-xs text-white pr-5">
          <p className="text-center xl:text-right xl:text-[15px]">
            Developed by 0796661363 - Brian
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
