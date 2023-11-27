import React from "react";

export default function ShowProfile() {
  // Mock data to represent user profile
  const userProfile = {
    firstName: "Hassan",
    lastName: "Alabdulal",
    email: "Hassan@example.com",
    major: "Software Engineering ",
    academicLevel: "Undergraduate",
    profilePictureUrl: "src/assets/ContactUs.png",
  };

  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <div className="flex flex-col w-full max-w-4xl m-auto overflow-hidden bg-white rounded-lg shadow-lg md:flex-row">
        {/* Left Column for Profile Photo */}
        <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col items-center p-8">
          <div className="w-64 h-64 mb-4 overflow-hidden rounded-full">
            <img
              className="object-contain w-full h-full"
              src={userProfile.profilePictureUrl}
              alt="Profile"
            />
          </div>
        </div>

        {/* Right Column for Profile Info */}
        <div className="p-8 md:w-2/3">
          <div className="flex flex-wrap mx-1 mb-6">
            <div className="mb-6 md:w-1/2 md:mb-0 md:pr-2">
              {" "}
              {/* Replace w-full with md:w-1/2 and add md:pr-2 for spacing */}
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                First Name
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">
                {userProfile.firstName}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-2">
              {" "}
              {/* Replace w-full with md:w-1/2 and add md:pl-2 for spacing */}
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Last Name
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">
                {userProfile.lastName}
              </div>
            </div>
          </div>

          <div className="w-full mb-6 ">
            <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
              Email
            </label>
            <div className="mb-4 p-2 bg-[#f7f7f7] rounded">
              {userProfile.email}
            </div>
          </div>

          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Major
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">
                {userProfile.major}
              </div>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Academic Level
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">
                {userProfile.academicLevel}
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full px-3 mb-6">
            <button className="bg-[#5f7fbf] text-white font-bold py-2 px-16 rounded hover:bg-[#3e60a3] transition-all duration-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
