import { useEffect } from "react";

export default function LearnMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div
        id="learn-more"
        className="py-8 text-[#bfa260] bg-[#f7f7f7] font-nunito"
      >
        <h1 className="mx-6 mt-16 text-2xl font-extrabold text-center uppercase md:text-3xl xl:text-4xl tracking-loose">
          Discover, Collaborate, & Innovate
        </h1>
        <div className="flex flex-col-reverse items-center justify-center px-4 py-0 md:flex-row md:px-6 md:py-12 lg:px-8">
          {/* Left side content */}
          <div className="flex flex-col w-full px-4 md:w-6/12 lg:w-5/12 xl:w-4/12">
            <p className="mb-1 text-2xl font-semibold leading-normal md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
              What is InspireHub?
            </p>
            <p className="mb-6 font-roboto text-base text-[#121212] md:text-lg lg:text-xl">
              InspireHub is not just a platform; it's a community pulsating with
              innovative ideas, where students and creative minds bring their
              visions to life. It's a space where your projects leap off the
              screen and into the world, where feedback becomes the forge for
              excellence, and where AI meets human ingenuity to spark new ideas.
            </p>
            <p className="mb-1 text-2xl font-semibold leading-normal md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
              Our Mission
            </p>
            <p className="mb-6 font-roboto text-base text-[#121212] md:text-lg lg:text-xl">
              To catalyze collaboration that turns innovative ideas into
              reality, foster an ecosystem of feedback that nurtures growth, and
              unlock opportunities that connect talent with the market.
            </p>
            <p className="mb-1 text-2xl font-semibold leading-normal md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
              Join Us
            </p>
            <p className="mb-6 font-roboto text-base text-[#121212] md:text-lg lg:text-xl">
              Are you ready to be inspired and to inspire others? Sign up today
              and start your journey.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="SignUpPage"
                className="flex select-none items-center justify-center cursor-pointer
                 rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] px-[1.693rem]
                   py-2 text-base font-bold text-white align-middle
                   transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
               disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                Sign up
              </a>

              <a
                className="flex select-none items-center justify-center rounded-lg border-2 border-[#5f7fbf]
                px-2 py-2 text-base font-bold text-[#5f7fbf] align-middle transition-all duration-500
                 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                href="#features"
              >
                Our Features
              </a>
            </div>
          </div>
          {/* Right side image */}
          <div className="w-full px-4 mt-16 md:w-1/2">
            <img
              className="w-full h-auto mx-auto max-md:max-w-md md:w-5/6 md:h-5/6" // Adjust image size here
              src="src/assets/Website-Creator.png" // Update the path accordingly
              alt="Project Creator"
            />
          </div>
        </div>

        <div
          id="features"
          className="flex flex-col items-center justify-center mt-32 mb-8"
        >
          <h1 className="mx-6 mt-24 mb-16 text-2xl font-extrabold text-center uppercase md:text-3xl xl:text-4xl tracking-loose">
            Our Features
          </h1>
          <div className="relative ml-0 md:my-8 lg:w-10/12">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-8 overflow-hidden wrap">
                {/* Vertical line */}
                <div
                  className="absolute transform -translate-x-1/2 border-[#5f7fbf] left-1/2"
                  style={{ height: "100%", top: "0", borderLeftWidth: "2px" }}
                ></div>

                {/* Timeline entries */}
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-1 text-2xl font-semibold leading-normal text-left md:text-center md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
                      Showcase Your Genius
                    </h4>
                    <p className="text-base leading-snug text-left text-black text-opacity-100 font-roboto md:text-center md:text-lg lg:text-xl">
                      Unveil your creative prowess on InspireHub, where each
                      project is a beacon to industry pioneers and visionaries.
                      Share your work, captivate an audience of leaders, and let
                      your ideas resonate in a space that celebrates and
                      amplifies ingenuity.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div></div>
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-1 text-2xl font-semibold leading-normal text-left md:text-center md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
                      Thrive on Collaboration
                    </h4>
                    <p className="text-base leading-snug text-left text-black text-opacity-100 font-roboto md:text-center md:text-lg lg:text-xl">
                      Thrive on Collaboration Dive into a collaborative oasis
                      where feedback refines and perfects. Engage with a
                      community where each critique enriches your work, ensuring
                      your projects not only shine but evolve through a dynamic
                      exchange of ideas.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-1 text-2xl font-semibold leading-normal text-left md:text-center md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
                      Fuel Your Creativity
                    </h4>
                    <p className="text-base leading-snug text-left text-black text-opacity-100 font-roboto md:text-center md:text-lg lg:text-xl">
                      Spark your imagination with our AI-driven muse, crafting
                      bespoke project suggestions that marry your interests with
                      the pulse of current trends. It's the creative catalyst
                      you need to ignite new ideas and venture into uncharted
                      territories of innovation.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    <h4 className="mb-1 text-2xl font-semibold leading-normal text-left md:text-center md:text-3xl md:leading-relaxed lg:text-4xl lg:mb-2">
                      Rise to the Top
                    </h4>
                    <p className="text-base leading-snug text-left text-black text-opacity-100 font-roboto md:text-center md:text-lg lg:text-xl">
                      Rise to the Top Ascend the creative ladder with our
                      intuitive rating system, designed to showcase your
                      project's impact and propel your work into the spotlight.
                      It's more than recognition—it's a chance to be discovered
                      by potential employers and become a paragon of excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-6/12 mx-auto -mt-10"
              src="src/assets/undraw_launching_re_tomg.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
