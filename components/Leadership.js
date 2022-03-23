import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Power3, Back } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";
function Leadership() {
  gsap.registerPlugin(ScrollTrigger);
  const h1 = useRef();
  const h2 = useRef();
  const rev1 = useRef();
  const rev2 = useRef();
  let tl = gsap.timeline();

  useEffect(() => {
    const letters = new SplitType(h1.current).chars;
    const letters2 = new SplitType(h2.current).chars;

    gsap.from(".leadershipImage", {
      scrollTrigger: {
        trigger: ".leadershipImage",
      },
      opacity: 0,
      y: 90,
      duration: 1,
      ease: Power3.easeInOut,
    });
    gsap.from(".leadershipTitle", {
      scrollTrigger: {
        trigger: ".leadershipTitle",
        start: "top center",
      },
      x: "-100vw",
      duration: 1,
    });
    gsap.from(".underline", {
      scrollTrigger: {
        trigger: ".underline",
        start: "top center",
      },
      opacity: 0,
      x: 50,
      duration: 0.9,
    });

    gsap.from(letters, {
      scrollTrigger: {
        trigger: letters,
        start: "top center",
      },
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.1,
      scale: 1.6,
      ease: Back.easeInOut,
    });

    gsap.from(letters2, {
      scrollTrigger: {
        trigger: letters,
        start: "top center",
      },
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.1,
      scale: 1.6,
      ease: Power3.easeInOut,
    });

    gsap.from(".leadershipPara", {
      scrollTrigger: {
        trigger: letters2,
        start: "top center",
      },
      opacity: 0,
      y: 10,
      duration: 0.8,
      ease: Power3.easeIn,
      delay: 0.7,
    });
  }, []);
  return (
    <div className="xl:relative mb-16 rounded-lg -mt-[100px] xl:mt-[10px] ">
      <div className="leadershipImage relative rounded-lg  h-80 xl:h-[600px] shadow-2xl">
        <Image
          src="/assets/leader.png"
          objectFit="contain"
          layout="fill"
          className="rounded-lg object-bottom xl:object-right"
          id="image"
        />
      </div>
      <div className="xl:absolute xl:top-12 pl-6 pr-5">
        <h3
          className="leadershipTitle mt-10  text-2xl font-light font-Coto"
          id="heading"
        >
          Our Leadership
        </h3>
        <div className="underline h-[2px] w-[60px] bg-green-800" />
        <div className="  mt-5">
          <div className="leadership__title">
            <h1
              ref={h1}
              className="text-5xl xl:text-7xl font-extrabold font-Poppins leader"
            >
              Rev.
              <span className="rev1" ref={rev1}>
                Anthony
              </span>{" "}
              +
            </h1>
            <h1
              ref={h2}
              className="text-5xl xl:text-7xl font-extrabold font-Poppins leader2"
            >
              Rev.{" "}
              <span ref={rev2} className="text-yellow-400">
                Mourine
              </span>{" "}
              <br />
              Musembi
            </h1>
          </div>

          <p className="leadershipPara mt-6 text-[13px] leading-relaxed max-w-[450px]  font-Poppins text-green-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl risus,
            tristique risus ut in nulla pretium massa. In pretium, venenatis
            rutrum lectus ullamcorper sodales pellentesque. Convallis ultricies
            amet massa, neque varius amet, vestibulum in. Lacus cursus morbi et
            eget. Vel fermentum mattis enim aliquet. Lacinia scelerisque sit
            quam elit.
          </p>
          <Link href="/team">
            <div className="relative mt-6 cursor-pointer">
              <p className="heading absolute left-9 text-xs font-Poppins">
                More
              </p>
              <svg
                width="114"
                height="32"
                viewBox="0 0 114 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15.5" stroke="#fad909" />
                <path
                  d="M113.354 16.3536C113.549 16.1583 113.549 15.8417 113.354 15.6464L110.172 12.4645C109.976 12.2692 109.66 12.2692 109.464 12.4645C109.269 12.6597 109.269 12.9763 109.464 13.1716L112.293 16L109.464 18.8284C109.269 19.0237 109.269 19.3403 109.464 19.5355C109.66 19.7308 109.976 19.7308 110.172 19.5355L113.354 16.3536ZM16 16.5H113V15.5H16V16.5Z"
                  fill="#fad909"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
