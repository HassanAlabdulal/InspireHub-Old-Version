import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Main() {
  const projects = [
    {
      id: 1,
      title: "InspreHub",
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

  const renderStars = (rate) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        // Full star
        stars.push(
          <FontAwesomeIcon
            key={`full_${i}`}
            icon={solidStar}
            className="text-yellow-500"
          />
        );
      } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
        // Half star
        stars.push(
          <FontAwesomeIcon
            key={`half_${i}`}
            icon={faStarHalfAlt}
            className="text-yellow-500"
          />
        );
      } else {
        // Empty star
        stars.push(
          <FontAwesomeIcon
            key={`empty_${i}`}
            icon={regularStar}
            className="text-yellow-500"
          />
        );
      }
    }
    return stars;
  };

  const navigateToProjectDetails = (projectId) => {
    // Insert navigation logic here, e.g., using react-router's useHistory
    console.log(`Navigate to details of project with id: ${projectId}`);
  };

  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6">
        Main Page
      </h1>
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
