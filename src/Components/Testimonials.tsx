import { motion } from "framer-motion";
import { Test } from "../Constants/constants";
const Testimonials = () => {
  return (
    <section>
      <div className=" container py-20 text-white  ">
        <div className="text-center">
          <div className="text-4xl tracking-wide font-medium md:text-5xl">
            <h1 className="lg:text-6xl md:text-5xl ">Beyond Expectations.</h1>
          </div>
          <div className="mt-6 mb-8 md:p-2">
            <p className="text-sm text-white/70 tracking-tight md:text-xl font-semibold text-center max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            </p>
          </div>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 60,
            }}
            className="flex gap-8 flex-none "
          >
            {[...Test, ...Test].map((test) => (
              // Here I wanted to change the width of the container so always remember you have to do max-w-and whatever you want
              <div
                key={test.name}
                className="p-6 md:p-10 md:max-w-md   border border-white/15  rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none"
              >
                <div>
                  <div>{test.text}</div>
                  <div className="flex mt-4">
                    <div>
                      <img
                        src={test.avatarImg}
                        height={50}
                        width={50}
                        className="rounded-full grayscale"
                      />
                    </div>
                    <div className="px-4 mt-2">
                      <div>{test.name}</div>
                      <div className="text-white/30">{test.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] mt-10">
          <motion.div
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 60,
            }}
            className="flex gap-8 flex-none "
          >
            {[...Test, ...Test].map((test) => (
              // Here I wanted to change the width of the container so always remember you have to do max-w-and whatever you want
              <div
                key={test.name}
                className="p-6 md:p-10 md:max-w-md   border border-white/15  rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none"
              >
                <div>
                  <div>{test.text}</div>
                  <div className="flex mt-4">
                    <div>
                      <img
                        src={test.avatarImg}
                        height={50}
                        width={50}
                        className="rounded-full grayscale"
                      />
                    </div>
                    <div className="px-4 mt-2">
                      <div>{test.name}</div>
                      <div className="text-white/30">{test.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
