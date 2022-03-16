import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function Hero() {
  const innerRef = useRef();
  const imageRef = useRef();

  const q = gsap.utils.selector(innerRef);

  useEffect(() => {
    gsap.from(q(".child"), {
      y: "40px",
      opacity: 0,
      stagger: 1,
      duration: 0.8,
      ease: "easeInOut",
      delay: 1.5,
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      duration: 0.4,

      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="relative h-screen xl:flex bg-gray-50">
      <div
        ref={imageRef}
        className="relative h-screen w-screen xl:absolute xl:right-0 xl:w-[50%]"
      >
        <Image
          src="/assets/img4.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="absolute top-0 h-screen w-screen xl:w-[50%] xl:hidden bg-green-800 opacity-[0.6] xl:opacity-[0.2]" />
      <div
        ref={innerRef}
        className="absolute top-0 h-screen z-40 flex flex-col justify-center pl-6 "
      >
        <p className="child font-Poppins text-xs font-bold text-white xl:text-green-800 lg:text-[14px] mb-4">
          COMING TOGETHER TO
        </p>
        <h1 className="child font-Magenda font-extrabold text-[40px] md:text-6xl xl:text-7xl max-w-[550px] text-white xl:text-black">
          <span className="text-yellow-400 shadow-md">Empower</span> People,
          Help the Needy & Transform{" "}
          <span className="text-yellow-400 shadow-md">Lives</span>
        </h1>
        <div className="child relative mt-6 text-white">
          <p className="absolute left-9 text-xs font-Poppins font-medium">
            Learn More
          </p>
          <svg
            width="114"
            height="32"
            viewBox="0 0 114 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="font-bold"
          >
            <circle cx="16" cy="16" r="15.5" stroke="#fff" />
            <path
              d="M113.354 16.3536C113.549 16.1583 113.549 15.8417 113.354 15.6464L110.172 12.4645C109.976 12.2692 109.66 12.2692 109.464 12.4645C109.269 12.6597 109.269 12.9763 109.464 13.1716L112.293 16L109.464 18.8284C109.269 19.0237 109.269 19.3403 109.464 19.5355C109.66 19.7308 109.976 19.7308 110.172 19.5355L113.354 16.3536ZM16 16.5H113V15.5H16V16.5Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
