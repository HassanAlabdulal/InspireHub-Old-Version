import Lottie from "lottie-react";
import animationData from "../assets/Homapage-Animation.json";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center w-full gap-3 mt-10 max-md:mt-30">
      <div className="flex flex-col items-center justify-center">
        <div className=" w-96 h-96 max-xl:w-80 max-xl:h-80 max-sm:mt-16 max-lg:mt-24">
          <Lottie animationData={animationData} />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
            hidden: {},
          }}
          className="max-w-6xl mb-16 text-6xl max-xl:text-5xl max-xl:max-w-4xl max-lg:text-4xl max-lg:max-w-3xl max-sm:text-3xl max-sm:max-w-2xl
           font-extrabold leading-none tracking-tight text-center text-[#bfa260] font-roboto"
        >
          {Array.from(
            "InspireHub:Where Ideas Take Flight and Creativity Meets Opportunity!"
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
            className="flex select-none items-center justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] px-3 py-2.5 text-base font-bold text-white align-middle transition-all duration-500 shadow-md hover:shadow-lg hover:bg-indigo-500/100 active:bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
            href="/learnMorePage"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
