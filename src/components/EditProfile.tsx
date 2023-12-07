import React, { useState } from "react";

export default function EditProfile() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const [inputKey, setInputKey] = useState<number | string>(Date.now());

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files?.[0];

    if (file) {
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreviewUrl("");
    setInputKey(Date.now()); // Reset the key to a new value
  };

  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col w-full max-w-4xl m-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
        {/* Left Column for Profile Photo */}
        <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col items-center p-8">
          <div className="relative w-64 h-64 mb-4 overflow-hidden rounded-full">
            <img
              className="object-cover w-full h-full"
              src={imagePreviewUrl || "src/assets/photo.png"}
              alt="Profile"
            />
          </div>
          <input
            name="image"
            key={inputKey}
            type="file"
            accept="image/*"
            className="hidden"
            id="fileInput"
            onChange={handleImageChange}
          />

          {/* Upload Button */}
          {!imagePreviewUrl && (
            <label
              htmlFor="fileInput"
              className="bg-[#5f7fbf] text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-[#3e60a3] transition-all duration-700 min-w-[120px]"
            >
              Upload Photo
            </label>
          )}

          {/* Delete Button */}
          {imagePreviewUrl && (
            <button
              onClick={handleRemoveImage}
              className="bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-red-700 transition duration-300 min-w-[135px]"
            >
              Delete Photo
            </button>
          )}
        </div>

        {/* Right Column for Form */}
        <div className="p-8 md:w-2/3">
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                name="firstName"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                name="lastName"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              name="email"
              className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="inspirehub@example.com"
            />
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2"
                htmlFor="grid-major"
              >
                Major
              </label>
              <input
                name="major"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-major"
                type="text"
                placeholder="Computer Science"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2"
                htmlFor="grid-academic-level"
              >
                Academic Level
              </label>
              <input
                name="academicLevel"
                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-academic-level"
                type="text"
                placeholder="Undergraduate"
              />
            </div>
          </div>

          <div className="flex items-center justify-center w-full gap-4 mt-10 mb-6">
            <div className="px-2">
              <a className="bg-[#5f7fbf] text-white font-bold py-2 px-14 rounded hover:bg-[#3e60a3] transition-all duration-700">
                Submit
              </a>
            </div>

            <div className="px-2">
              <a
                href="NewPasswordPage"
                className="bg-[#5f7fbf] text-white font-bold py-2 px-4 rounded hover:bg-[#3e60a3] transition-all duration-700"
              >
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
