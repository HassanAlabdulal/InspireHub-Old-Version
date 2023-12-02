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
import { useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Combobox } from '@headlessui/react';

type Project = {
  id: number;
  title: string;
  date: string;
  rate: number;
  author: string;
  description: string;
  imageUrl: string;
};

const Sorts = [
  { id: 1, sortBy: 'Highest Rating' },
  { id: 2, sortBy: 'Highest Budget' },
  { id: 3, sortBy: 'Lowest Budget' },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

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

  const [query, setQuery] = useState('')
  const [selectedSort, setSelectedSort] = useState()

  const filteredSorts =
    query === ''
      ? Sorts
      : Sorts.filter((Sorts) => {
        return Sorts.sortBy.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <div className="bg-[#f7f7f7] pt-20 flex flex-col items-center min-h-screen font-roboto gap-12">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-center block text-xl font-bold font-nunito text-[#bfa260]">
            Search Projects
          </label>
          <div className="flex flex-row items-center gap-2">
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
        <div>
          <Combobox as="div" value={selectedSort} onChange={setSelectedSort}>
            <Combobox.Label className="block text-base font-normal text-[#bfa260]">Sort by:</Combobox.Label>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-[#3e60a3] focus:outline-none focus:ring-1 focus:ring-[#3e60a3] sm:text-sm"
                onChange={(event) => setQuery(event.target.value)}
                displayValue={(sort: { sortBy: string }) => sort.sortBy}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </Combobox.Button>
              {filteredSorts.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredSorts.map((sort) => (
                    <Combobox.Option
                      key={sort.id}
                      value={sort}
                      className={({ active }) =>
                        classNames(
                          'relative cursor-default select-none py-2 pl-8 pr-4',
                          active ? 'bg-[#3e60a3] text-[#f7f7f7]' : 'text-[#121212]'
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <span className={classNames('block truncate', selected && 'font-semibold')}>{sort.sortBy}</span>
                          {selected && (
                            <span
                              className={classNames(
                                'absolute inset-y-0 left-0 flex items-center pl-1.5',
                                active ? 'text-[#f7f7f7]' : 'text-[#3e60a3]'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        </div>
      </div>

      {/* Projects Section */}
      <ul role="list" className="grid grid-cols-1 gap-6 mx-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img className="w-full h-auto mx-auto rounded-lg" src={project.imageUrl} alt={project.title} />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{project.author}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{project.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-[#AA8A41] text-xs font-medium bg-amber-100 rounded-full">
                    {renderStars(project.rate)} {project.rate} of 5
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>

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