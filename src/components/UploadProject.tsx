import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCloudArrowUp,
  faPlus,
  faFileUpload,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

interface TeamMember {
  name: string;
  linkedIn: string;
  twitter: string;
}

export default function AddProject() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: "", linkedIn: "", twitter: "" },
  ]);
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const handleAddTeamMember = () => {
    setTeamMembers([...teamMembers, { name: "", linkedIn: "", twitter: "" }]);
  };

  const handleRemoveTeamMember = (index: number) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers.splice(index, 1);
    setTeamMembers(newTeamMembers);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImages) => {
          // Set selected index to new image
          const newImages = [...prevImages, reader.result as string];
          if (newImages.length === 1) {
            // If it's the first image, ensure that the selectedIndex is updated to show it
            setSelectedIndex(0);
          }
          return newImages;
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    if (selectedIndex >= images.length - 1) {
      setSelectedIndex(0);
    }

    const inputElement = document.getElementById(
      "image-upload"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  const handleFileDelete = () => {
    setFileName("");
    // Trigger a synthetic event to reset the file input
    const event = new Event("input", { bubbles: true });
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    fileInput.value = "";
    fileInput.dispatchEvent(event);
  };

  return (
    <div className="bg-[#f7f7f7] mt-16 px-4 sm:px-10 md:pl-10 md:pr-10 flex justify-center items-start h-auto min-h-screen">
      <div className="bg-[#f7f7f7] p-10 shadow-2xl rounded max-w-4xl w-full">
        <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6 text-center">
          Upload Project
        </h1>

        {/* Photo Upload Section */}
        <div className="mb-6">
          <div
            className="relative flex items-center justify-center p-4 mb-4 border border-gray-400 border-dashed rounded image-container"
            style={{ minHeight: "500px" }}
          >
            {images.length > 0 ? (
              <img
                src={images[selectedIndex]}
                alt="Uploaded"
                className="absolute top-0 left-0 object-contain w-full h-full"
              />
            ) : (
              <span>Click on a + card to upload and display an image</span>
            )}
            {/* Dot indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block h-4 w-4 mx-1 rounded-full cursor-pointer ${
                    selectedIndex === index ? "bg-blue-500" : "bg-white"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center p-1 border border-gray-400 rounded"
                style={{ width: "100px", height: "100px" }} // Fixed size container
              >
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="absolute object-cover w-full h-full" // Object-fit to cover the container
                  onClick={() => setSelectedIndex(index)}
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute inset-0 flex items-center justify-center m-auto text-red-700"
                >
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </button>
              </div>
            ))}
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center p-1 border border-gray-400 rounded cursor-pointer"
              style={{ width: "100px", height: "100px" }}
            >
              <div className="text-center text-[#3e60a3] hover:scale-110 transition-all duration-700 ">
                <FontAwesomeIcon icon={faCloudArrowUp} size="2x" />
              </div>
            </label>
            <input
              id="image-upload"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </div>
        </div>
        <form className="mt-6 space-y-6">
          <div>
            <label className="block text-[#bfa260] mb-2">Title:</label>
            <input
              type="text"
              placeholder="InspireHub"
              className="w-full px-4 py-2 transition-all duration-300 border rounded focus:px-5 focus:outline-0"
            />
          </div>

          <div className="flex justify-between">
            <div className="flex-1 mr-2">
              <label className="block text-[#bfa260] mb-2">
                Date of project:
              </label>
              <input type="date" className="w-full px-4 py-2 border rounded" />
            </div>

            <div className="flex-1 ml-2">
              <label className="block text-[#bfa260] mb-2">Category:</label>
              <select className="w-full px-4 py-2 border rounded h-[40px]">
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>

          <div className="flex-1 mr-2">
            <label className="block text-[#bfa260] mb-2">Budget:</label>
            <div className="flex">
              <input
                type="number"
                placeholder="5000"
                className="flex-1 px-4 py-2 transition-all duration-300 border rounded rounded-l focus:px-5 focus:outline-0"
              />
              <select className="px-4 py-2 border-t border-b border-r rounded-r outline-0">
                <option value="SAR">SAR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#bfa260] mb-2">Description:</label>
            <textarea
              placeholder="It is a website that is a hub for inspiring and innovative project ideas..."
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          <div>
            <label className="block text-[#bfa260] mb-2 ">Motivation:</label>
            <textarea
              placeholder="The primary motivation behind InspireHub is to address a significant challenge..."
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          <label className="block text-[#bfa260] mb-2">Team member:</label>

          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-wrap items-center mb-2 ">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 px-4 py-2 border rounded outline-0"
                value={member.name}
                onChange={(e) => {
                  const newTeamMembers = [...teamMembers];
                  newTeamMembers[index].name = e.target.value;
                  setTeamMembers(newTeamMembers);
                }}
              />
              <input
                type="text"
                placeholder="LinkedIn"
                className="flex-1 px-4 py-2 border rounded outline-0"
                value={member.linkedIn}
                onChange={(e) => {
                  const newTeamMembers = [...teamMembers];
                  newTeamMembers[index].linkedIn = e.target.value;
                  setTeamMembers(newTeamMembers);
                }}
              />
              <input
                type="text"
                placeholder="Twitter"
                className="flex-1 px-4 py-2 border rounded outline-0"
                value={member.twitter}
                onChange={(e) => {
                  const newTeamMembers = [...teamMembers];
                  newTeamMembers[index].twitter = e.target.value;
                  setTeamMembers(newTeamMembers);
                }}
              />
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveTeamMember(index)}
                  className="flex items-center justify-center w-8 h-8 p-2 m-2 text-red-700 rounded-full"
                >
                  <FontAwesomeIcon icon={faCircleXmark} size="2xl" />
                </button>
              )}
              {index === 0 && (
                <button
                  type="button"
                  onClick={handleAddTeamMember}
                  className="flex items-center justify-center w-8 h-8 p-2 m-2 text-white bg-[#5f7fbf] rounded-full"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              )}
            </div>
          ))}

          <div>
            <label className="block text-[#bfa260] mb-2">Features:</label>
            <textarea
              placeholder="Easy to use, Suitable for everyone ..."
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          <div>
            <label className="block text-[#bfa260] mb-2">Resources:</label>
            <textarea
              placeholder="https://github.com/InspireHub"
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          <div>
            <label className="block text-[#bfa260] mb-2">Tools:</label>
            <textarea
              placeholder="React, Astro ..."
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          {/* <div>
            <label className="block text-[#bfa260] mb-2">Document:</label>
            <input type="file" className="px-4 py-2 border rounded" />
          </div> */}

          <div>
            <label className="block text-[#bfa260] mb-2">Document:</label>
            <div className="flex items-center px-4 py-2 text-gray-700 bg-white border rounded cursor-pointer">
              <label
                htmlFor="file-upload"
                className="flex items-center cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={faFileUpload}
                  className="mr-2 text-[#3e60a3]"
                />
                <span className="text-sm">{fileName || "Choose File"}</span>
              </label>
              {fileName && (
                <button
                  type="button"
                  onClick={handleFileDelete}
                  className="ml-2 text-red-600"
                  title="Remove file"
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                id="file-upload"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#bfa260] mb-2">Others:</label>
            <textarea
              placeholder="This is the first version, we are working to update it as soon as depending on your suggestions..."
              className="w-full px-4 py-2 transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0"
            ></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#5f7fbf] text-white px-6 py-3 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
