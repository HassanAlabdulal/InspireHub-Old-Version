export default function LearnMore() {
  return (
    <section id="learn-more">
      <div className="py-8 text-[#bfa260] bg-[#f7f7f7] font-roboto">
        <h1 className="ml-2 mb-10 mt-24 text-[#bfa260] text-3xl font-extrabold uppercase tracking-loose text-center ">
          Discover. Collaborate. Innovate.
        </h1>
        <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
          {/* Left side content */}
          <div className="sticky top-0 flex flex-col w-full px-8 mt-2 lg:w-1/3 md:mt-12">
            {/* <p className="ml-2 text-[#5f7fbf] tracking-loose">
              Welcome to InspireHub, where creativity meets opportunity.
            </p> */}
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              What is InspireHub?
            </p>
            <p className="mb-16 text-sm text-black md:text-base">
              InspireHub is not just a platform; it's a community pulsating with
              innovative ideas, where students and creative minds bring their
              visions to life. It's a space where your projects leap off the
              screen and into the world, where feedback becomes the forge for
              excellence, and where AI meets human ingenuity to spark new ideas.
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Our Mission
            </p>
            <p className="mb-4 text-sm text-black md:text-base">
              To catalyze collaboration that turns innovative ideas into
              reality, foster an ecosystem of feedback that nurtures growth, and
              unlock opportunities that connect talent with the market.
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Join Us
            </p>
            <p className="mb-4 text-sm text-black md:text-base">
              Are you ready to be inspired and to inspire others? Sign up today
              and start your journey.
            </p>
            <a
              href="#"
              className="px-4 py-2 mr-auto text-[#5f7fbf] bg-transparent border-2 border-[#5f7fbf]
               rounded shadow hover:bg-[#5f7fbf] hover:text-white hover:shadow-lg transition-all duration-500"
            >
              Sign up
            </a>
          </div>

          {/* Right side timeline */}
          <div className="relative ml-0 md:ml-12 lg:w-2/3">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-10 overflow-hidden wrap">
                {/* Vertical line */}
                <div
                  className="absolute transform -translate-x-1/2 border-[#5f7fbf] left-1/2"
                  style={{ height: "100%", top: "0", borderLeftWidth: "2px" }}
                ></div>

                {/* Timeline entries */}
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    {/* <p className="mb-3 text-base text-[#5f7fbf]">
                      1-6 May, 2021
                    </p> */}
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Showcase Your Genius
                    </h4>
                    <p className="text-sm leading-snug text-black text-opacity-100 md:text-base">
                      Your projects deserve an audience. Upload your work and
                      let it shine in a space visited by peers, mentors, and
                      industry leaders.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    {/* <p className="mb-3 text-base text-[#5f7fbf]">
                      6-9 May, 2021
                    </p> */}
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Thrive on Collaboration
                    </h4>
                    <p className="text-sm leading-snug text-black text-opacity-100 md:text-base">
                      Dive into a sea of feedback that polishes your ideas to
                      perfection.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    {/* <p className="mb-3 text-base text-[#5f7fbf]">
                      10 May, 2021
                    </p> */}
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Fuel Your Creativity
                    </h4>
                    <p className="text-sm leading-snug text-black text-opacity-100 md:text-base">
                      Let our AI suggest your next big idea, tailored to the
                      latest trends and your personal interests.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4">
                    {/* <p className="mb-3 text-base text-[#5f7fbf]">
                      12 May, 2021
                    </p> */}
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      Rise to the Top
                    </h4>
                    <p className="text-sm leading-snug text-black text-opacity-100 md:text-base">
                      Climb the ranks with our rating system and stand out to
                      potential employers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
