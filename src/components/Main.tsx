import { renderStars } from "../utils/renderStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
  faArrowRight,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import React from "react";

type Project = {
  id: number;
  title: string;
  date: string;
  rate: number;
  author: string;
  description: string;
  imageUrl: string;
};

export default function Main() {
  const projects: Project[] = [
    {
      id: 1,
      title: "InspireHub",
      date: "2023-12-15",
      rate: 5,
      author: "Hassan Alabdulal",
      description: "It is a website that is a hub... ",
      imageUrl: "src/assets/ContactUs.png",
    },
    {
      id: 2,
      title: "Second Project",
      date: "2023-11-23",
      rate: 1.5,
      author: "Omar Hammad",
      description: "This is the my project description...",
      imageUrl: "src/assets/Git_icon.png",
    },
  ];

  const navigateToProjectDetails = (projectId: number) => {
    console.log(`Navigate to details of project with id: ${projectId}`);
  };
  return (
    <div className="bg-[#f7f7f7] pt-20 flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-center block text-xl font-bold font-nunito text-[#bfa260]">
            Search Projects
          </label>
          <div className="flex flex-row mt-3 items-center gap-2">
            <div className="w-full relative">
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm focus:ring-[#3e60a3] focus:border-[#3e60a3] block w-60 h-12 text-base border-gray-300 pl-4 pr-14 rounded-full"
                placeholder="Project"
              />
              <a className="bg-[#5f7fbf] pt-2 pl-[10px] w-10 h-10 rounded-full absolute right-0 mr-1 -mt-11
              transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faArrowRight} size="lg" className="text-[#f7f7f7]" />
              </a>
            </div>
            <div>
              <a
                className="w-10 h-10 px-2 py-2 rounded-full border-2 border-[#5f7fbf] transition-all duration-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                <FontAwesomeIcon icon={faSliders} size="lg" className="text-[#5f7fbf]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex items-center justify-center my-6">
        <div className="p-3 mx-2 border rounded">
          <label htmlFor="category" className="mx-2">
            Category:
          </label>
          <select
            id="category"
            className="px-2 py-1 border rounded cursor-pointer"
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Business">Business</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="p-3 mx-2 border rounded">
          <label htmlFor="sort" className="mx-2">
            Sort:
          </label>
          <select id="sort" className="px-2 py-1 border rounded cursor-pointer">
            <option value="">Select Sort</option>
            <option value="most_rate">Most Rate</option>
            <option value="last_added">Last Added</option>
          </select>
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-wrap justify-center w-full px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 m-2 rounded-lg w-[calc(25%-1rem)] relative"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-bold text-[#bfa260]">
              {project.title}
            </h3>
            <p>Date: {project.date}</p>
            <div className="flex items-center">
              Rate: {renderStars(project.rate)}
              <span className="ml-1">{project.rate} of 5</span>
            </div>
            <p>Author: {project.author}</p>
            <p>Description: {project.description}</p>
            <button
              onClick={() => navigateToProjectDetails(project.id)}
              className="absolute bottom-2 right-2"
            >
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-700" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}