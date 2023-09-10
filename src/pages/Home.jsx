import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";

const home = () => {
  return (
    <>
      <section className="py-24" id="home">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className="py-24" id="about">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="py-24" id="pricing">
        <div className="container">
          <Pricing />
        </div>
      </section>
      <section className="py-24" id="contact">
        <div className="container">
          <Contact />
        </div>
      </section>
    </>
  );
};

export default home;
