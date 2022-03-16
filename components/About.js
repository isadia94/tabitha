import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  const h1 = useRef();
  let tl = gsap.timeline();

  useEffect(() => {
    const letters = new SplitType(h1.current).chars;

    gsap.from(".aboutTitle", {
      scrollTrigger: {
        trigger: ".aboutTitle",
      },
      x: -100,
      duration: 0.7,
    });

    gsap.from(letters, {
      scrollTrigger: {
        trigger: letters,
      },
      opacity: 0,
      y: 10,

      duration: 0.6,
      stagger: 0.2,
      scale: 1.6,
      ease: Power3.easeInOut,
      delay: 1,
    });

    gsap.from(".aboutPara", {
      scrollTrigger: {
        trigger: ".aboutPara",
      },
      opacity: 0,
      ease: Power3.easeIn,
      delay: 3,
    });
    gsap.from(".aboutImage", {
      scrollTrigger: {
        trigger: ".aboutPara",
      },
      opacity: 0,
      y: 90,
      duration: 0.7,
      ease: Power3.easeInOut,
      delay: 3.5,
    });
  }, []);
  return (
    <div className=" h-screen pl-6 pr-5 bg-[#fad909]  flex flex-col xl:flex-row xl:items-center">
      <div className="xl:w-[50%] pt-[50px] xl:pt-0  ">
        <div>
          <h4 className="aboutTitle font-Coto text-2xl">About Us</h4>
          <div className="h-[2px] w-[60px] bg-green-800" />
        </div>
        <div>
          <div className="mt-10 flex">
            <h1
              ref={h1}
              className="Poppins text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold"
            >
              WHO WE <br /> ARE ?
            </h1>
          </div>
          <div className="mt-9">
            <p className="aboutPara text-[12px] font-Poppins font-light md:text-[14px] xl:text-[18px] xl:max-w-[500px]  text-green-900">
              Tabitha Alms Ministry Organization is a relief and development arm
              established as a ministry in JCC Nakuru church with the purpose of
              reaching out to the needy and vulnerable with care and love of God
              to empower them lead wholesome and dignified lives.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutImage relative h-36 md:h-[180px] lg:h-[250px] shadow-2xl w-full xl:w-[360px] xl:h-[590px] mt-8 md:mt-10 xl:ml-32">
        <Image
          src="/assets/img12.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded shadow-2xl"
        />
      </div>
    </div>
  );
}

export default About;
