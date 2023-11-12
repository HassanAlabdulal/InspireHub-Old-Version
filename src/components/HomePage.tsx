export default function HomePage() {
  return (
    <main className=" flex items-center justify-center flex-col gap-3 mt-56 w-full max-md:mt-36 ">
      <div className=" ml-8">
        <h1 className="font-bold tracking-wide text-2xl">
          InspireHub: Where Ideas Take Flight and Creativity Meets Opportunity!
        </h1>

        <p>
          Dive into a collaborative universe where your projects earn the
          spotlight and feedback fuels your next big leap
        </p>

        {/* <button className="bg-indigo-600 text-white py-2 px-6 mt-4 rounded hover:bg-indigo-500 duration-300">
          Get Started
        </button> */}
      </div>
      <div>
        <button
          className="flex select-none bg-indigo-600 items-center gap-2 rounded-lg py-3 px-6 mt-4 text-center align-middle
           font-sans text-md font-bold uppercase text-white transition-all shadow:md hover:shadow-lg
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
            className="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </main>
  );
}
