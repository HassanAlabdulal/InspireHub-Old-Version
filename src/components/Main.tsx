import { renderStars } from "../utils/renderStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSliders } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Database } from "../../types/supabase";

type Project = Database["public"]["Views"]["projectdetails"]["Row"];

const Sorts = [
  { id: 1, sortBy: "None" },
  { id: 2, sortBy: "Project Rating" },
  { id: 3, sortBy: "Releasing Date" },
];

const Categories = [
  { id: 1, category: "None" },
  { id: 2, category: "Tech" },
  { id: 3, category: "Business" },
  { id: 4, category: "Engineering" },
  { id: 5, category: "Design" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = { projects: Project[] };
export default function Main({ projects }: Props) {
  const navigateToProjectDetails = (projectId: string) => {
    // console.log(`Navigate to details of project with id: ${projectId}`);
    window.location.href = "/project/" + projectId;
  };

  const [query, setQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [open, setOpen] = useState(false);

  const filteredSorts =
    query === ""
      ? Sorts
      : Sorts.filter((Sorts) => {
          return Sorts.sortBy.toLowerCase().includes(query.toLowerCase());
        });

  const filteredCategories =
    query === ""
      ? Categories
      : Categories.filter((Categories) => {
          return Categories.category
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  return (
    <div className="bg-[#f7f7f7] pt-20 flex flex-col items-center min-h-screen font-roboto gap-12">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="projectSearch"
            className="text-center block text-xl font-bold font-nunito text-[#bfa260]"
          >
            Search Projects
          </label>
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-full">
              <input
                type="text"
                name="projectSearch"
                id="projectSearch"
                className="shadow-sm duration-300 focus:px-5 focus:ring-[#3e60a3] block w-60 sm:w-80 md:w-96 h-12 text-base border-gray-300 pl-4 pr-14 rounded-full"
                placeholder="Project"
              />
              <a
                className="bg-[#5f7fbf] pt-2 pl-[10px] w-10 h-10 rounded-full absolute right-0 mr-1 -mt-11
              transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="text-[#f7f7f7]"
                />
              </a>
            </div>
            <div>
              <a
                className="w-10 h-10 px-2 py-2 rounded-full border-2 border-[#5f7fbf] transition-all duration-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 cursor-pointer shadow-md hover:shadow-xl"
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon
                  icon={faSliders}
                  size="lg"
                  className="text-[#5f7fbf]"
                />
              </a>
            </div>
          </div>
          <a
            href="UploadProjectPage"
            className="flex select-none items-center cursor-pointer justify-center rounded-lg  bg-[#5f7fbf] border-2 border-[#5f7fbf] px-4 py-2 mt-3
                                    text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] hover:border-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:mt-0 sm:w-auto"
            type="button"
            data-ripple-dark="true"
            onClick={() => setOpen(false)}
          >
            Add Project
          </a>
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
                        <FontAwesomeIcon
                          icon={faSliders}
                          className="w-6 h-6 text-[#3e60a3]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Apply Filters
                        </Dialog.Title>
                        <div className="my-12 space-y-8">
                          <Combobox
                            as="div"
                            value={selectedSort}
                            onChange={setSelectedSort}
                          >
                            <Combobox.Label className="block text-base font-normal text-[#121212]">
                              Sort by:
                            </Combobox.Label>
                            <div className="relative mt-1">
                              <Combobox.Input
                                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-[#3e60a3] focus:outline-none focus:ring-1 focus:ring-[#3e60a3] sm:text-sm"
                                onChange={(event) =>
                                  setQuery(event.target.value)
                                }
                                displayValue={(sort: { sortBy: string }) =>
                                  sort.sortBy
                                }
                              />
                              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
                                <ChevronDownIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </Combobox.Button>
                              {filteredSorts.length > 0 && (
                                <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-28 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {filteredSorts.map((sort) => (
                                    <Combobox.Option
                                      key={sort.id}
                                      value={sort}
                                      className={({ active }) =>
                                        classNames(
                                          "relative cursor-default select-none py-2 pl-8 pr-4",
                                          active
                                            ? "bg-[#3e60a3] text-[#f7f7f7]"
                                            : "text-[#121212]"
                                        )
                                      }
                                    >
                                      {({ active, selected }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              "block truncate",
                                              selected && "font-semibold"
                                            )}
                                          >
                                            {sort.sortBy}
                                          </span>
                                          {selected && (
                                            <span
                                              className={classNames(
                                                "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                                active
                                                  ? "text-[#f7f7f7]"
                                                  : "text-[#3e60a3]"
                                              )}
                                            >
                                              <CheckIcon
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                              />
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
                          <Combobox
                            as="div"
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                          >
                            <Combobox.Label className="block text-base font-normal text-[#121212]">
                              Select Category:
                            </Combobox.Label>
                            <div className="relative mt-1">
                              <Combobox.Input
                                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-[#3e60a3] focus:outline-none focus:ring-1 focus:ring-[#3e60a3] sm:text-sm"
                                onChange={(event) =>
                                  setQuery(event.target.value)
                                }
                                displayValue={(category: {
                                  category: string;
                                }) => category.category}
                              />
                              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
                                <ChevronDownIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </Combobox.Button>
                              {filteredCategories.length > 0 && (
                                <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-28 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {filteredCategories.map((category) => (
                                    <Combobox.Option
                                      key={category.id}
                                      value={category}
                                      className={({ active }) =>
                                        classNames(
                                          "relative cursor-default select-none py-2 pl-8 pr-4",
                                          active
                                            ? "bg-[#3e60a3] text-[#f7f7f7]"
                                            : "text-[#121212]"
                                        )
                                      }
                                    >
                                      {({ active, selected }) => (
                                        <>
                                          <span
                                            className={classNames(
                                              "block truncate",
                                              selected && "font-semibold"
                                            )}
                                          >
                                            {category.category}
                                          </span>
                                          {selected && (
                                            <span
                                              className={classNames(
                                                "absolute inset-y-0 left-0 flex items-center pl-1.5",
                                                active
                                                  ? "text-[#f7f7f7]"
                                                  : "text-[#3e60a3]"
                                              )}
                                            >
                                              <CheckIcon
                                                className="w-5 h-5"
                                                aria-hidden="true"
                                              />
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
                    </div>
                    <div className="mt-5 gap-3 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <a
                        className="flex select-none items-center cursor-pointer justify-center rounded-lg  bg-[#5f7fbf] border-2 border-[#5f7fbf] px-4 py-2 mt-3
                                    text-base font-bold text-white align-middle transition-all duration-700 hover:bg-[#3e60a3] hover:border-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:mt-0 sm:w-auto"
                        type="button"
                        data-ripple-dark="true"
                        onClick={() => setOpen(false)}
                      >
                        Show Projects
                      </a>
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
      </div>

      {/* Projects Section */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-8 mx-8 sm:gap-12 sm:mx-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => navigateToProjectDetails(project.id!)}
            className="flex flex-col col-span-1 text-center transition duration-500 transform bg-white divide-y divide-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            <div className="flex flex-col flex-1 p-8">
              <img
                className="w-3/4 h-auto mx-auto rounded-lg"
                src={project.image_url!}
                alt={project.title!}
              />
              <h3 className="mt-6 text-[#bfa260] text-base font-nunito font-bold">
                {project.title}
              </h3>
              <dl className="flex flex-col justify-between flex-grow gap-3 mt-1">
                <dt className="sr-only">Creator</dt>
                <dd className="text-sm text-gray-500">
                  by <em className="text-gray-600">{project.creator_name}</em>{" "}
                  on {project.created_at}
                </dd>
                <dt className="sr-only">Description</dt>
                <dd className="text-[#121212] text-sm line-clamp-2">
                  {project.description}
                </dd>
                <dt className="sr-only">Category</dt>
                <dd className="mt-1">
                  <span className="px-2 py-1 text-[#3e60a3] text-xs font-medium bg-blue-100 rounded-full border-[1px] border-[#3e60a3]">
                    {project.category}
                  </span>
                </dd>
                <dt className="sr-only">Rating</dt>
                <dd className="mt-1">
                  <span className="px-2 py-1 text-[#AA8A41] text-xs font-medium bg-amber-100 rounded-full border-[1px] border-[#AA8A41]">
                    {renderStars(project.average_rate!)} {project.average_rate}{" "}
                    / 5
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>

      <div className="bg-[#f7f7f7] w-full px-4 py-3 flex items-center justify-between border-b border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">97</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              <a
                href="#"
                aria-current="page"
                className="z-10 bg-blue-100 border-[#3E60A3] text-[#3E60A3] relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
