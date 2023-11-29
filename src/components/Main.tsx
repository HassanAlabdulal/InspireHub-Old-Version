import { renderStars } from "../utils/renderStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="flex flex-col items-center">
        <h1 className="mx-6 text-2xl font-bold text-center font-nunito md:text-3xl xl:text-4xl tracking-loose">
          Search Projects
        </h1>

        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end w-full px-6">
        <a
          href="UploadProjectPage"
          className="rounded-lg bg-[#5f7fbf] px-5 py-2 text-base font-bold text-white
              transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl"
        >
          Add Project
        </a>
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
