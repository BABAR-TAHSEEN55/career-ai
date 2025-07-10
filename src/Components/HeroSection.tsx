//Always remeber about Min-h-screen
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

import { useEffect } from "react";
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const HeroSection = () => {
  const color = useMotionValue(COLORS[0]);
  const BackgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const BoxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, []);
  return (
    <motion.section
      style={{
        backgroundImage: BackgroundImage,
      }}
      className="relative grid place-content-center overflow-hidden bg-gray-950 px-4 py-20 text-gray-200 min-h-screen"
    >
      <div className="flex items-center flex-col">
        <span className="border border-white/70 bg-gray-600/50 mb-1.5 px-1.5 rounded-xl py-1 ">
          Beta Live Now
        </span>
        <h1 className="md:text-7xl max-w-7xl font-mono bg-gradient-to-br from-white to-gray-400 bg-clip-text mt-3 text-center">
          Accelerate your Career
        </h1>
        <p className="max-w-2xl my-8 text-pretty leading-relaxed md:text-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          Ratione, aliquid. Lorem ipsum dolor sit amet.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          style={{
            border: border,
            boxShadow: BoxShadow,
          }}
          className="mt-4 border-2 border-white/70 rounded-xl px-2 py-0.5 hover:bg-gray-950/50 transition-colors"
        >
          Start Trial
        </motion.button>
      </div>
    </motion.section>
  );
};
export default HeroSection;
