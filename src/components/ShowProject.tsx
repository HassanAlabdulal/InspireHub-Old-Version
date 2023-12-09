import React, { useState, useEffect } from "react";
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

const ShowProject: React.FC<Props> = ({ project, teamMembers, tools }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  return (
    <div className="min-h-screen p-6 mx-auto bg-[#f7f7f7] text-[#121212]">
      <div className="flex gap-8 mt-12 max-md:flex-col">
        <section className="w-1/4 min-h-screen pt-5 bg-gray-100 rounded-lg shadow-md max-md:w-full ">
          <header className="mb-5 text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#bfa260]">
              {project.title}
            </h1>
            <hr className="h-px my-8 bg-gray-300 border-0" />
          </header>

          <div className="flex flex-col items-center justify-center gap-2 mb-32 text-xl">
            <span className="flex items-center ml-2">
              {renderStars(project.average_rate!)}
            </span>
            <span className="ml-1 text-gray-600">
              {project.average_rate!} of 5
            </span>
          </div>

          <dl className="max-w-md mx-auto mt-10 text-gray-900 divide-y divide-gray-300">
            <div className="flex flex-col items-center pb-12">
              <dt className="mb-2 text-sm font-medium tracking-wider text-gray-500 uppercase">
                Category
              </dt>
              <dd className="text-lg font-semibold">{project.category}</dd>
            </div>
            <div className="flex flex-col items-center py-12">
              <dt className="mb-2 text-sm font-medium tracking-wider text-gray-500 uppercase">
                Budget
              </dt>
              <dd className="text-lg font-semibold">
                {/* {project.budget} <span>{project.currency}</span> */}
              </dd>
            </div>
            <div className="flex flex-col items-center pt-12">
              <dt className="mb-2 text-sm font-medium tracking-wider text-gray-500 uppercase">
                Date
              </dt>
              <dd className="text-lg font-semibold">{project.created_at}</dd>
            </div>
          </dl>

          <div className="flex flex-col items-center justify-center px-20 mt-36 ">
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
        </section>

        <section className="flex items-center justify-center w-3/4 min-h-screen pt-5 bg-gray-100 rounded-lg shadow-md max-md:w-full ">
          <div className="w-2/3 ">
            <div>
              <div className="relative w-full h-64 md:h-96">
                {/* Slider Images */}
                {slides.map((slide, index) => (
                  <img
                    key={slide.url}
                    src={slide.url}
                    alt={`Slide ${index}`}
                    className={`w-full h-full object-contain rounded-xl absolute transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Slider Controls */}
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  onClick={goToPrevious}
                  className="absolute p-2 transform -translate-y-1/2 bg-[#121212] text-[#f7f7f7] bg-opacity-50 hover:bg-opacity-100 transition-all duration-200 cursor-pointer rounded-xl left-1 top-1/2 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                />

                <FontAwesomeIcon
                  icon={faAngleRight}
                  onClick={goToNext}
                  className="absolute p-2 transform -translate-y-1/2 bg-[#121212] text-[#f7f7f7] hover:bg-opacity-100 transition-all duration-200 bg-opacity-50 cursor-pointer rounded-xl right-1 top-1/2 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                />
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`inline-block cursor-pointer rounded-full p-2 ${
                      index === currentIndex ? "bg-[#5f7fbf]" : "bg-white"
                    }`}
                  ></span>
                ))}
              </div>
              <hr className="h-px my-8 bg-gray-300 border-0" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="pb-12">
                <div className="grid items-stretch min-h-0 grid-cols-1 gap-10 md:grid-cols-3">
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

              <hr className="h-px my-8 bg-gray-300 border-0" />
            </div>
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
