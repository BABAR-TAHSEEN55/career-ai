import logo from "../assets/logo.svg";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import MenuBurger from "../assets/icon-menu.svg";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Navbar = () => {
  const color = useMotionValue(COLORS[0]);
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
    <header className="fixed left-0 right-0 top-0 z-50  ">
      <div className="text-white container py-6 border-b border-white/15 md:border-none sticky top-0 z-50 backdrop-blur md:backdrop-blur-none ">
        <div className="flex items-center justify-between md:border-b border-white/15 rounded-xl p-3  lg:max-w-4xl max-w-3xl mx-auto -mb-2 md:backdrop-blur ">
          <div>
            <img src={logo} height={40} width={40} className="bg-white" />
          </div>
          <div className="hidden md:block">
            <nav className="flex lg:gap-12 gap-8 text-white/70 font-mono text-sm lg:text-base font-semibold leading-loose">
              <a href="#Features" className="hover:text-white transition ">
                Features
              </a>
              <a href="#" className="hover:text-white transition">
                Developers
              </a>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="hover:text-white transition">
                ChangeLog
              </a>
            </nav>
          </div>
          <div className="flex gap-4">
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
            <img
              src={MenuBurger}
              height={30}
              width={30}
              className="md:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
