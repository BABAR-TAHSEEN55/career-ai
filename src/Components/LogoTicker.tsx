// import acme from "../assets/logo-acme.png";
// import apex from "../assets/logo-apex.png";
// import celestial from "../assets/logo-celestial.png";
// import echo from "../assets/logo-echo.png";
// import pulse from "../assets/logo-pulse.png";

// import quantum from "../assets/logo-quantum.png";
import Google from "../assets/download (1).svg";
import Netflix from "../assets/download (2).svg";
import Air from "../assets/download.svg";
import Super from "../assets/download5.svg";
import Duper from "../assets/download.svg";
import Luper from "../assets/download.svg";
import Cuper from "../assets/download (1).svg";

import Stupid from "../assets/download (1).svg";

const LogoTicker = () => {
  return (
    <section className=" text-white relative text-center   mt-8">
      <div>
        <h1 className="text-5xl">Trusted by Top Companies</h1>
        <p className="text-lg my-6">
          Millions of People get places and find their paths Lorem ipsum dolor
          sit amet.
        </p>
      </div>
      <div className="container grid grid-cols-4  gap-8 my-20">
        {[Google, Netflix, Air, Super, Duper, Luper, Cuper, Stupid].map(
          (logo, index) => (
            <div className=" flex items-center justify-center  ">
              <img
                src={logo}
                alt="companies"
                key={index}
                height={200}
                width={200}
                className="opacity-60 transition-all duration-300  group-hover:scale-150 filter grayscale hover:grayscale-0"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default LogoTicker;
