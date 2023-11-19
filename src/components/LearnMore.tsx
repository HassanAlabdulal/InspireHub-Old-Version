export default function LearnMore() {
  return (
    <section id="learn-more">
      <div className="py-8 text-white bg-black">
        <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
          <div className="sticky flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">
              Working Process
            </p>
            <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
              Working Process of Fest
            </p>
            <p className="mb-4 text-sm md:text-base text-gray-50">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            <a
              href="#"
              className="px-4 py-2 mr-auto text-yellow-300 bg-transparent border border-yellow-300 rounded shadow hover:bg-yellow-300 hover:text-white hover:shadow-lg hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="sticky ml-0 md:ml-12 lg:w-2/3">
            <div className="container w-full h-full mx-auto">
              <div className="relative h-full p-10 overflow-hidden wrap">
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  // style={{right: "50%", border: "2px" solid #FFC100; borderRadius: "1%"}}
                ></div>
                <div
                  className="absolute h-full border border-2-2 border-yellow-555"
                  //   style="left: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                ></div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Registration
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Participation
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      {" "}
                      10 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2021 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full mb-8 right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      12 May, 2021
                    </p>
                    <h4 className="mb-3 text-lg font-bold text-left md:text-2xl">
                      Prize Distribution
                    </h4>
                    <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
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
      </div>
    </section>
  );
}
