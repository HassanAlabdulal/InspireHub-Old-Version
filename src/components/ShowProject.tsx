import React, { useState, useEffect, Fragment } from "react";
import { renderStars } from "../utils/renderStars";
import CardWithImage from "../components/UI/Card.tsx";
import AccordionItem from "../components/UI/Accordion.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faScrewdriverWrench,
  faPeopleGroup,
  faBook,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { Database } from "../../types/supabase.ts";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

// TeamMember interface
// interface TeamMember {
//   name: string;
//   linkedIn: string;
//   twitter: string;
// }

// interface project {
//   title: string;
//   images: string[];
//   date: string;
//   rate: number;
//   category: string;
//   budget: string;
//   currency: string;
//   description: string;
//   motivation: string;
//   teamMembers: TeamMember[];
//   features: string;
//   resources: string;
//   tools: string;
//   others: string;
// }

// const project: project = {
//   title: "InspireHub",
//   images: ["src/assets/ContactUs.png"],
//   date: "2023-01-01",
//   rate: 3.5,
//   category: "Technology",
//   budget: "5000",
//   currency: "SAR",
//   description:
//     "It is a website that is a hub for inspiring and innovative project ideas...",
//   motivation:
//     "The primary motivation behind InspireHub is to address a significant challenge...",
//   teamMembers: [
//     { name: "Abdullah Almatawah", linkedIn: "aamhaamm", twitter: "aamhaamm" },
//     {
//       name: "Hassan Alabdulal",
//       linkedIn: "HassanAlabdulal",
//       twitter: "HassanAlabdulal",
//     },
//   ],
//   features: "Easy to use, Suitable for everyone ...",
//   resources: "https://github.com/InspireHub",
//   tools: "React, Astro ...",
//   others:
//     "This is the first version, we are working to update it as soon as depending on your suggestions...",
// };
type Slide = {
  url: string;
};

const slides: Slide[] = [
  {
    url: "src/assets/Reset password.png",
  },
  {
    url: "src/assets/Forgot password.png",
  },
  {
    url: "src/assets/ContactUs.png",
  },
];

type Props = {
  project: Database["public"]["Views"]["projectdetails_extended"]["Row"];
  teamMembers: Database["public"]["Tables"]["TeamMembers"]["Row"][];
  tools: Database["public"]["Tables"]["Tools"]["Row"][];
};

const StyledRating = withStyles({
  iconFilled: {
    color: '#aa8a41',
  },
  iconHover: {

  },
})(Rating);

const ShowProject: React.FC<Props> = ({ project, teamMembers, tools }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [open, setOpen] = useState(false); // Rating Modal State
  const [ratingValue, setRatingValue] = useState<number | null>(null); // Track rating value
  const [hasRated, setHasRated] = useState(false); // Track if the user has rated
  const [showSuccessfulRatingMessage, setShowSuccessfulRatingMessage] = useState(false); // Show message if user rated successfully
  const [showRepeatedRatingMessage, setShowRepeatedRatingMessage] = useState(false); // Show message if user has already rated

  const goToPrevious = (): void => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 2500);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToNext = (): void => {
    const isLastSlide: boolean = currentIndex === slides.length - 1;
    const newIndex: number = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleRateButtonClick = () => {
    if (hasRated) {
      // Show message if user has already rated
      setShowRepeatedRatingMessage(true);
      return;
    }

    console.log('Rating Value:', ratingValue);
    // Logic to save the rating
    setHasRated(true); // Set hasRated to true after rating
    setShowSuccessfulRatingMessage(true);
    setOpen(false);
  };

  return (
    <div className="min-h-screen px-8 py-12 mx-auto bg-[#f7f7f7] text-[#121212]">
      <div className="flex flex-col-reverse gap-6 mt-12 lg:flex-row">
        <section className="w-1/4 min-h-screen pt-5 bg-[#fafafa] rounded-lg shadow-md max-lg:w-full ">
          <div className="flex flex-col items-center justify-center max-w-md mx-auto my-6 text-[#121212] font-roboto divide-y divide-[#c4c4c4]">
            <div className="flex flex-col items-center justify-center gap-2 pt-6 pb-12 w-full">
              <p className="mb-2 text-base font-medium tracking-wider text-[#2b2b2b] uppercase">
                Rating
              </p>
              <span className="text-[#5e5e5e]">
                {project.average_rate!} out of 5
              </span>
              <span className="flex items-center">
                {renderStars(project.average_rate!)}
              </span>
              <div className="mt-6">
                <a
                  className="flex select-none items-center cursor-pointer justify-center rounded-lg  bg-[#5f7fbf] border-2 border-[#5f7fbf] px-4 py-2
                                    text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] hover:border-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
                  onClick={() => setOpen(true)}
                >
                  Rate Project
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-12 w-full">
              <p className="mb-2 text-base font-medium tracking-wider text-[#2b2b2b] uppercase">
                Category
              </p>
              <p className="text-base font-medium text-[#5e5e5e]">{project.category}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-12 w-full">
              <p className="mb-2 text-base font-medium tracking-wider text-[#2b2b2b] uppercase">
                Budget
              </p>
              <p className="text-base font-medium text-[#5e5e5e]">
                {/* {project.budget} <span>{project.currency}</span> */}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 py-12 w-full">
              <dt className="mb-2 text-base font-medium tracking-wider text-[#2b2b2b] uppercase">
                Date
              </dt>
              <dd className="text-base font-medium text-[#5e5e5e]">{project.created_at}</dd>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 px-16 py-12 w-full">
              <AccordionItem
                id={1}
                header="Team Members"
                icon={
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="text-[#121212] mr-2"
                  />
                }
              >
                <div className="space-y-4">
                  {" "}
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span>{member.name}</span>
                      <div>
                        <a
                          href={`https://twitter.com/${member.Twitter}`}
                          target="_blank"
                          className="mx-2 text-xl text-gray-800 hover:text-[#121212] transition-all duration-300"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/in/${member.LinkedIn}`}
                          target="_blank"
                          className="mx-2 text-xl text-[#5f7fbf] hover:text-[#3a60a3] transition-all duration-300"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            </div>

            <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="hidden sm:inline-block sm:align-middle sm:h-screen"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <Dialog.Panel className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                          <button
                            type="button"
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3e60a3]"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="sm:flex sm:items-start">
                          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                            <StarIcon className="w-6 h-6 text-[#3e60a3]" aria-hidden="true" />
                          </div>
                          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              Rate Project
                            </Dialog.Title>
                            <div className="my-12 space-y-8">
                              <Box component="fieldset" mb={3} borderColor="transparent">
                                <StyledRating
                                  name="rating"
                                  precision={0.5}
                                  size="large"
                                  onChange={(event, newValue) => setRatingValue(newValue)}
                                />
                              </Box>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 gap-3 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            className="flex select-none items-center cursor-pointer justify-center rounded-lg  bg-[#5f7fbf] border-2 border-[#5f7fbf] px-4 py-2 mt-3
                                    text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] hover:border-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:mt-0 sm:w-auto"
                            type="button"
                            data-ripple-dark="true"
                            onClick={handleRateButtonClick}
                            disabled={ratingValue == null}
                          >
                            Rate
                          </button>
                          <a
                            className="flex select-none items-center justify-center rounded-lg border-2 border-[#5f7fbf] cursor-pointer shadow-md hover:shadow-xl
                                    px-4 py-2 mt-3 text-base font-bold text-[#5f7fbf] align-middle transition-all duration-500
                                  hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 sm:mt-0 sm:w-auto"
                            type="button"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </a>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            <div
              aria-live="assertive"
              className="fixed inset-0 flex items-end px-4 py-6 mt-12 pointer-events-none sm:p-6 sm:items-start"
            >
              <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                  show={showSuccessfulRatingMessage}
                  as={Fragment}
                  enter="transform ease-out duration-300 transition"
                  enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                  enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                          <p className="text-sm font-medium text-gray-900">Thank You!</p>
                          <p className="mt-1 text-sm text-gray-500">Your feedback has been successfully recorded.</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex">
                          <button
                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => {
                              setShowSuccessfulRatingMessage(false)
                            }}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>

            <div
              aria-live="assertive"
              className="fixed inset-0 flex items-end px-4 py-6 mt-12 pointer-events-none sm:p-6 sm:items-start"
            >
              <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                  show={showRepeatedRatingMessage}
                  as={Fragment}
                  enter="transform ease-out duration-300 transition"
                  enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                  enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                          <p className="text-sm font-medium text-gray-900">Warning!</p>
                          <p className="mt-1 text-sm text-gray-500">You have already rated this project.</p>
                        </div>
                        <div className="ml-4 flex-shrink-0 flex">
                          <button
                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => {
                              setShowRepeatedRatingMessage(false)
                            }}
                          >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center w-3/4 min-h-screen py-6 bg-[#fafafa] rounded-lg shadow-md max-lg:w-full ">
          <div className="w-5/6">
            <header className="my-6 text-center">
              <h1 className="mb-6 text-4xl font-bold font-nunito text-[#bfa260]">
                {project.title}
              </h1>
            </header>
            <hr className="h-px my-8 bg-[#c4c4c4] border-0" />
            <div>
              <div className="relative w-full h-64 md:h-96">
                {/* Slider Images */}
                {slides.map((slide, index) => (
                  <img
                    key={slide.url}
                    src={slide.url}
                    alt={`Slide ${index}`}
                    className={`w-full h-full object-contain rounded-xl absolute transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                  />
                ))}

                {/* Slider Controls */}
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  onClick={goToPrevious}
                  className="absolute p-2 transform -translate-y-1/2 bg-[#c4c4c4] text-[#f7f7f7] hover:bg-[#5e5e5e] transition-all duration-200 cursor-pointer rounded-xl left-1 top-1/2 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                />

                <FontAwesomeIcon
                  icon={faAngleRight}
                  onClick={goToNext}
                  className="absolute p-2 transform -translate-y-1/2 bg-[#c4c4c4] text-[#f7f7f7] hover:bg-[#5e5e5e] transition-all duration-200 cursor-pointer rounded-xl right-1 top-1/2 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                />
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`inline-block cursor-pointer rounded-full p-2 ${index === currentIndex ? "bg-[#5f7fbf]" : "bg-[#c4c4c4]"
                      }`}
                  ></span>
                ))}
              </div>
            </div>
            <hr className="h-px my-8 bg-[#c4c4c4] border-0" />
            <div className="flex flex-col justify-center">
              <div className="py-6">
                <div className="grid items-stretch min-h-0 grid-cols-1 gap-6 md:grid-cols-3">
                  <CardWithImage
                    image="src/assets/Description.png"
                    title="Description"
                    description={project.description!}
                  />
                  <CardWithImage
                    image="src/assets/Motivation.png"
                    title="Motivation"
                    description={project.motivation!}
                  />
                  <CardWithImage
                    image="src/assets/Features.png"
                    title="Features"
                    description={project.featureDescription!}
                  />
                </div>
              </div>
            </div>
            <hr className="h-px my-8 bg-[#c4c4c4] border-0" />
            <div className="text-[#121212] font-bold flex flex-col">
              <div className="flex items-center justify-center">
                <AccordionItem
                  id={1}
                  header="Tools"
                  icon={
                    <FontAwesomeIcon
                      icon={faScrewdriverWrench}
                      className="text-[#121212] mr-2"
                    />
                  }
                >
                  {tools.map((t) => (
                    <li key={t.tool}>{t.tool}</li>
                  ))}
                </AccordionItem>
              </div>
              <div className="flex items-center justify-center">
                {/* <AccordionItem
                  id={1}
                  header="Resources"
                  icon={
                    <FontAwesomeIcon
                      icon={faBook}
                      className="text-[#121212] mr-2"
                    />
                  }
                >
                  <h1>{project.resources}</h1>
                </AccordionItem> */}
              </div>
              <div className="flex items-center justify-center">
                <AccordionItem
                  id={1}
                  header="Others"
                  icon={
                    <FontAwesomeIcon
                      icon={faTags}
                      className="text-[#121212] mr-2"
                    />
                  }
                  children={undefined}
                >
                  {/* <h1>{project.others}</h1> */}
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShowProject;
