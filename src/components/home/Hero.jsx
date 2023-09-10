import heroSvg from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="flex flex-wrap gap-20 h-[60vh] justify-around items-center">
      <div className="flex flex-col gap-5 items-center lg:items-start">
        <div className="typography text-center text-white lg:text-start flex flex-col gap-5">
          <h1 className="font-bold text-2xl lg:text-2xl xl:text-4xl lg:max-w-lg">
            Resourse Sync is a world class tool
          </h1>
          <p>Used by more than 5000 companies across the world</p>
        </div>
        <div className="button-container flex gap-5">
          <a
            className="py-2 px-5 text-center rounded-lg border bg-indigo-500 text-white shadow-md hover:opacity-70 active:bg-indigo-700"
            href="#contact"
          >
            Get Started Today!
          </a>
          <a
            className="py-2 px-5 text-center rounded-lg border border-indigo-500 bg-white text-indigo-500 shadow-md hover:opacity-80 active:bg-indigo-100"
            href="#pricing"
          >
            View Pricing
          </a>
        </div>
      </div>
      <img src={heroSvg} alt="" className="w-4/6 lg:w-1/3 xl:w-[500px]"/>
    </div>
  );
};

export default Hero;
