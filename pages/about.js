import { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

function About() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="">
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
            <div className="relative h-[250px] sm:h-[300px] xl:h-[550px] w-full  mt-20 xl:mt-28">
              <div className="relative h-full w-full ">
                <Image
                  className=""
                  src="/assets/img7.jpeg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-16 sm:bottom-20 xl:bottom-40 -left-7 xl:-left-20">
                <h2 className=" -rotate-90 font-Magenda text-4xl sm:text-5xl xl:text-[100px] text-white font-bold ">
                  Curious
                </h2>
              </div>
              <div className="absolute bottom-6 left-14 sm:left-20 pr-4 sm:pr-5 xl:left-32 xl:bottom-12">
                <p className="text-[12px] sm:text-[14px] xl:text-[22px] font-light text-white xl:max-w-[400px] ">
                  About us, our services and what makes us
                  <span className="font-bold ml-2">
                    stand out from other Organizations?
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-12 xl:mt-28 font-Magenda text-4xl font-bold">
              <h2 className="text-center text-green-600">Our Story</h2>
              <p className=" mt-8 font-Poppins text-center text-[12px] sm:text-[14px] font-normal leading-5 text-gray-600 xl:max-w-[650px] xl:mx-auto xl:text-[16px] xl:leading-8">
                Tabitha Alms Ministry Organization is a relief and development
                arm established as a ministry in JCC Nakuru Church with the
                purpose of reaching out to the needy and vulnerable with care
                and love of God to empower them lead wholesome and dignified
                lives.
              </p>
            </div>

            <div className="mt-8 flex flex-col xl:flex-row xl:items-center xl:mt-24">
              <div className="xl:max-w-[600px]">
                <h3 className="text-green-600 font-Magenda font-bold text-[22px] sm:text-[24px]">
                  Transforming Communities
                </h3>
                <div className=" mt-3 font-Poppins text-[12px] font-normal leading-5 text-gray-600 sm:text-[13px] xl:text-[16px] xl:leading-8">
                  <p>
                    Tabitha Alms has mitigated human suffering and impacted
                    lives of its beneficiaries through the following ongoing
                    activities: Providing feeding program of needy children and
                    families, economic empowerment and psychosocial support of
                    widows, single mothers, and teenage mothers
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-[220px] xl:h-[400px] w-full rounded-lg">
                <Image
                  src="/assets/community.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 xl:mt-24 flex flex-col-reverse xl:flex-row-reverse xl:items-center ">
              <div className="xl:pl-6 xl:max-w-[600px]">
                <h3 className="text-green-600 font-Magenda font-bold text-[22px] sm:text-[24px] mt-4">
                  Educating the needy
                </h3>
                <div className=" mt-1 font-Poppins text-[12px] font-normal leading-5 text-gray-600 sm:text-[13px] xl:text-[16px] xl:leading-8 ">
                  <p>
                    Education of identified needy learners pupils in primary
                    schools and students in secondary schools through paying of
                    school fees and providing necessary support for learners
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-[220px] xl:h-[400px] w-full rounded-lg">
                <Image
                  src="/assets/don2.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 xl:mt-24 flex flex-col xl:flex-row xl:items-center ">
              <div className="xl:max-w-[600px]">
                <h3 className="text-green-600 font-Magenda font-bold text-[22px] sm:text-[24px] mt-4">
                  Talent Development
                </h3>
                <div className=" mt-1 font-Poppins text-[12px] font-normal leading-5 text-gray-600 sm:text-[13px]">
                  <p className="xl:text-[16px] xl:leading-8">
                    Talent development and support of needy youths to acquire
                    vocational skills such as driving, welding ,hair dressing,
                    cosmetics /beauty therapy etc.
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-[220px] w-full xl:h-[400px] rounded-lg">
                <Image
                  src="/assets/img10.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 xl:mt-24 flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between ">
              <div className="xl:max-w-[600px] xl:pl-6">
                <h3 className="text-green-600 font-Magenda font-bold text-[22px] sm:text-[24px] mt-4">
                  Community Outreach
                </h3>
                <div className=" mt-1 font-Poppins text-[12px] font-normal leading-5 text-gray-600 sm:text-[13px]">
                  <p className="xl:text-[16px] xl:leading-8 ">
                    The department also carries out community outreach program
                    which entails: spiritual nourishment - counseling and
                    ministering to people in different communities, medical
                    camps, outreach feeding program for street children , street
                    families and other needy people and cloth donation for needy
                    people.
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-[220px] xl:h-[400px] w-full rounded-lg">
                <Image
                  src="/assets/img14.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col xl:flex-row xl:mt-24 xl:items-center ">
              <div className="max-w-[600px]">
                <h3 className="text-green-600 font-Magenda font-bold text-[22px] sm:text-[24px] mt-4">
                  Empowering Lives
                </h3>
                <div className=" mt-1 font-Poppins text-[12px] font-normal leading-5 text-gray-600 sm:text-[13px]">
                  <p className="xl:text-[16px] xl:leading-8 xl:pr-6">
                    The organization is also focusing on rehabilitating street
                    families back into their families and helping them to leave
                    streets for an improved and dignified life. It also does
                    mobile beauty parlor services during outreach program to
                    inspire and show love to the needy who do not have resources
                    to access such services. Tabitha Alms as well supports
                    various church leaders/laborers across churches in meeting
                    their needs as they do the work of ministry and get involved
                    in service to humanity.
                  </p>
                </div>
              </div>
              <div className="mt-6 relative h-[220px] xl:h-[400px] w-full rounded-lg">
                <Image
                  src="/assets/happinness.jpeg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="mt-8 xl:mt-24 text-center">
              <p className="xl:max-w-[650px] xl:mx-auto xl:text-[28px] font-bold font-Magenda xl:text-green-600 xl:leading-relaxed">
                {" "}
                The ministry has done much to ensure an all-round approach of
                nourishment for the body and the soul. This takes after the
                Lords master plan of sharing not only the gospel but also our
                lives with the less privileged in the society.
              </p>
            </div>
            <div className="mt-8 text-center xl:mt-24">
              <h3 className="font-Magenda sm:text-[24px] font-bold">
                Our Vision
              </h3>
              <p className="mt-2 text-center text-green-500 text-3xl font-bold leading-9 xl:max-w-[600px] xl:mx-auto">
                {" "}
                Empowering the needy and vulnerable to lead wholesome and
                dignified lives.
              </p>
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

export default About;
