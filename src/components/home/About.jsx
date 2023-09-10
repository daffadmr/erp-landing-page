import about from "../../assets/about.svg";

const About = () => {
  return (
    <div className="flex flex-col justify-center gap-12 items-center max-w-full">
      <h3 className="border px-5 py-2 rounded-3xl border-indigo-500">
        Our Story
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
        <img src={about} className="w-4/6 lg:w-1/3 xl:w-[500px]" alt="" />
        <div className="flex flex-col items-center justify-center gap-5 max-w-lg">
          <h2 className="font-bold text-3xl lg:self-start text-center lg:text-start">
            Our tools lorem ipsum
          </h2>
          <p className="text-justify max-w-sm lg:max-w-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            maiores reiciendis, a provident, consequatur at esse cum quisquam
            dolores eaque inventore soluta alias fuga doloribus ratione iste
            laboriosam? Iste, debitis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
