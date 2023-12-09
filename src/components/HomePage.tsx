import Lottie from "lottie-react";
import animationData from "../assets/Animations/Homapage-Animation.json";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex items-center justify-center w-full h-screen gap-3 max-md:mt-30 bg-[#f7f7f7]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2 h-1/2 lg:w-2/5 lg:h-2/5">
          <Lottie animationData={animationData} />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.02,
              },
            },
            hidden: {},
          }}
          className="my-16 mx-6 text-3xl max-w-2xl sm:text-4xl sm:max-w-3xl lg:text-5xl lg:max-w-4xl  xl:text-6xl xl:max-w-6xl
           font-black leading-none tracking-tight text-center text-[#bfa260] font-nunito"
        >
          {Array.from(
            "InspireHub: Where Ideas Take Flight and Creativity Meets Opportunity!"
          ).map((char, index) => (
            <motion.span
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* <p className="mb-8 text-2xl font-normal text-center text-[#121212] font-roboto max-md:text-3xl max-md:max-w-2xl max-sm:text-xl max-sm:max-w-sm sm:px-16 lg:px-48">
          A platform for showcasing and evolving creative projects
        </p> */}

        <div className="flex items-center gap-3">
          <a
            href="MainPage"
            className="flex select-none items-center cursor-pointer justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] px-3 py-2.5
             text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
               disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </a>

          <a
            className="flex select-none items-center justify-center rounded-lg border-2 border-[#5f7fbf]
           px-[1.623rem] py-2.5 text-base font-bold text-[#5f7fbf] align-middle transition-all duration-500
            hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            href="#learn-more"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
