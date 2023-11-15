export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full gap-3 mt-36 max-md:mt-30">
      <div className="flex flex-col items-center justify-center">
        <h1
          className="max-w-6xl text-4xl font-extrabold tracking-tight leading-none text-center max-xl:text-5xl max-xl:max-w-5xl
         max-md:text-4xl max-md:max-w-4xl max-sm:text-2xl max-sm:max-w-2xl  mb-8 text-[#3b5382] font-nunito"
        >
          <span className="">InspireHub:</span>
          Where Ideas Take Flight and Creativity Meets Opportunity!
        </h1>

        <p className="mb-8 text-lg font-normal text-center text-gray-300 font-roboto lg:text-xl max-sm:text-xl max-sm:max-w-sm sm:px-16 lg:px-48">
          A platform for showcasing and evolving creative projects
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="flex select-none bg-[#3b5382] items-center gap-2 rounded-lg py-3 px-4  text-center align-middle
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

        <button className="inline-flex items-center justify-center px-5 py-3  text-base font-bold  align-middle text-center text-[#f7f7f7] border border-[#f7f7f7] rounded-lg hover:text-[#3b5382] hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 max-md:py-3 max-md:px-4 max-md:mt-3 transition-all duration-500">
          Learn More
        </button>
      </div>
    </main>
  );
}
