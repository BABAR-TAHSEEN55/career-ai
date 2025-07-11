import { Rocket } from "lucide-react";
import { FeaturesConstant } from "../Constants/constants";

const Features = () => {
  return (
    <section className="text-white py-20 ">
      <h1 className="text-5xl text-center font-semibold">Features</h1>
      <p className="max-w-lg text-xl mx-auto mt-8 font-medium text-white/70 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        perspiciatis nemo! Cupiditate, ab!
      </p>
      <div className="container py-20">
        <div className="flex justify-evenly gap-10 space-x-10">
          {/* //Icon */}
          {/* <h1 className="font-bold text-2xl">Career Booster</h1>
          <p className="max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            enim. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Omnis, tempora!\
          </p> */}
          {FeaturesConstant.map(({ icon: Icon, title, description }) => (
            <div className="flex  px-8 py-8 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)]">
              <div>
                {/* //Hover when clicked */}
                <Icon className="mb-4" />
                <h1 className="font-bold text-2xl pb-4">{title}</h1>
                <p className="max-w-sm py-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
