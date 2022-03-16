import { useRef } from "react";
import { ArrowNarrowDownIcon, ArrowNarrowUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
const services = [
  {
    title: "Economic Empowerment",
    desc: "Targeted women are empowered through business trainings and support for business establishment",

    quote: "01.",
  },
  {
    title: "Talent Development",
    desc: "Tabitha Alms organization at developing talents such as music and dancing",

    quote: "02.",
  },
  {
    title: "Vocational Skills",
    desc: "Tabitha Alms organization aims at providing vocational skills such as: Driving, welding, hair dressing, cosmetics /beauty therapy etc",

    quote: "03.",
  },
  {
    title: "ICT Training School",
    desc: "There is a plan to establish ICT training school to offer training in the following areas",

    quote: "04.",
  },
  {
    title: "Income Generation Activities",
    desc: "The organization aims at supporting the targeted groups especially widows, single mothers and teenage mothers to improve living standards",

    quote: "05.",
  },
  {
    title: "Early Child Development & Education",
    desc: "Tabitha Alms ministry support education of identified needy learners through paying of school fees",

    quote: "06.",
  },
  {
    title: "Community outreach Program",
    desc: "Entails provision of food to targeted vulnerable groups i.e. street children, street families and other needy people",

    quote: "07.",
  },
  {
    title: "Church leaders / Labourers support",
    desc: "Tabitha Alms Organization aims at establishing an ECD Centre for supporting orphans and vulnerable children",

    quote: "08.",
  },
  {
    title: "Church Development Fund",
    desc: "Tabitha Alms organization being founded in JCC Nakuru church is also focused on the church welfare and development.",

    quote: "09.",
  },
  {
    title: "Food Security Support and Empowerment Centre",
    desc: "The organization aims at establishing a food security support Centre for hosting the following activities",

    quote: "10.",
  },
  {
    title: "Education program",
    desc: "Tabitha Alms ministry support education of identified needy learners through paying of school fees",

    quote: "11.",
  },
];

function Services() {
  let sideBarRef = useRef(null);
  let mainSlideRef = useRef(null);
  let containerRef = useRef(null);

  let activeSlideIndex = 0;
  const handleDown = () => {
    changeSlide("down");
    console.log("slideDown");
  };
  const handleUp = () => {
    changeSlide("up");
    console.log("slideUp");
  };

  function changeSlide(direction) {
    const sidebar = sideBarRef.current;
    const mainSlide = mainSlideRef.current;
    const container = containerRef.current;
    const slidesCount = 11;
    if (direction === "up") {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  }
  return (
    <div className="h-screen pl-6 pr-5 pt-[50px]">
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="xl:w-[50%]  xl:pt-0  "
      >
        <div>
          <h4 className="font-Coto text-2xl">Services</h4>
          <div className="h-[2px] w-[60px] bg-green-800" />
        </div>
        <div>
          <div className="mt-6 flex">
            <h1 className="Poppins text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold">
              WHAT WE <br /> DO ?
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[300px]  mt-16 ">
        <div className="container mx-auto xl:h-[450px] " ref={containerRef}>
          <div className="sidebar" ref={sideBarRef}>
            <div className="sidebar_1 relative">
              <Image src="/assets/img1.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_2 relative">
              <Image src="/assets/img11.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_3 relative">
              <Image src="/assets/img3.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_4 relative">
              <Image src="/assets/img4.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_5 relative">
              <Image src="/assets/img5.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_6 relative">
              <Image src="/assets/img6.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_7 relative">
              <Image src="/assets/img3.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_8 relative">
              <Image src="/assets/img14.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_9 relative">
              <Image src="/assets/img9.jpg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_10 relative">
              <Image src="/assets/img2.jpeg" layout="fill" objectFit="cover" />
            </div>
            <div className="sidebar_11 relative">
              <Image src="/assets/img8.jpg" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className="main-slide" ref={mainSlideRef}>
            {services.map(({ quote, title, desc }) => (
              <div
                key={quote}
                className="slide_1 shadow-2xl text-gray-100 flex justify-center x "
              >
                <p className="font-Magenda text-3xl -mt-[100px] xl:-mt-[150px] text-gray-500 mb-2 xl:text-7xl">
                  {quote}
                </p>
                <h1 className="font-Poppins text-[16px] font-extrabold mb-2   xl:text-6xl xl:my-6">
                  {title}
                </h1>
                <p className="font-Poppins text-[12px] xl:text-[16px] text-green-600  xl:leading-5 pr-4 xl:max-w-[500px] text-left">
                  {desc}
                </p>
              </div>
            ))}

            {/*  */}
          </div>
          <div className="controls">
            <button className="down-button cursor-pointer" onClick={handleDown}>
              <ArrowNarrowDownIcon className="h-4" />
            </button>
            <button className="up-button cursor-pointer" onClick={handleUp}>
              <ArrowNarrowUpIcon className="h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
