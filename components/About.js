import Image from "next/image";

function About() {
  return (
    <div className=" h-screen pl-6 pr-5 bg-[#fad909]  flex flex-col xl:flex-row xl:items-center">
      <div className="xl:w-[50%] pt-[50px] xl:pt-0  ">
        <div>
          <h4 className="font-Coto text-2xl">About Us</h4>
          <div className="h-[2px] w-[60px] bg-green-800" />
        </div>
        <div>
          <div className="mt-10 flex">
            <h1 className="Poppins text-5xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold">
              WHO WE <br /> ARE ?
            </h1>
          </div>
          <div className="mt-9">
            <p className="text-[12px] font-Poppins font-light md:text-[14px] xl:text-[18px] xl:max-w-[500px]  text-green-900">
              Tabitha Alms Ministry Organization is a relief and development arm
              established as a ministry in JCC Nakuru church with the purpose of
              reaching out to the needy and vulnerable with care and love of God
              to empower them lead wholesome and dignified lives.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-36 md:h-[180px] lg:h-[250px] shadow-2xl w-full xl:w-[360px] xl:h-[590px] mt-8 md:mt-10 xl:ml-32">
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
