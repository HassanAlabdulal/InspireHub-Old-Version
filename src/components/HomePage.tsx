import Lottie from "lottie-react";
import animationData from "../assets/Homapage-Animation.json";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-3 max-md:mt-30">
      <div className="mt-6 w-96 h-96">
        <Lottie animationData={animationData} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-6xl mb-8 text-6xl font-extrabold leading-none tracking-tight text-center max-xl:text-5xl max-xl:max-w-5xl max-md:text-4xl max-md:max-w-4xl max-sm:text-2xl max-sm:max-w-2xl text-blcak font-nunito">
          <span className="">InspireHub:</span>
          Where Ideas Take Flight and Creativity Meets Opportunity!
        </h1>

        <p className="mb-8 text-2xl font-normal text-center text-gray-500 font-roboto lg:text-xl max-sm:text-xl max-sm:max-w-sm sm:px-16 lg:px-48">
          A platform for showcasing and evolving creative projects
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex select-none bg-black items-center gap-2 rounded-lg py-3 px-4  text-center align-middle
           text-md font-bold font-nunito  text-[#f7f7f7] transition-all shadow:md hover:shadow-lg
         hover:bg-indigo-500/100 active:bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none duration-500
         max-md:py-3 max-md:px-4 max-md:mt-3"
          type="button"
          data-ripple-dark="true"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>

        <button className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black align-middle transition-all duration-500 border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 max-md:py-3 max-md:px-4 max-md:mt-3">
          Learn More
        </button>
      </div>
    </main>
  );
}
