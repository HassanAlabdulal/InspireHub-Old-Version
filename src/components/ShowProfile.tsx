import React from 'react';

export default function ShowProfile() {
  // Mock data to represent user profile
  const userProfile = {
    firstName: "HAssan",
    lastName: "Alabdulah",
    email: "Hassan@example.com",
    major: "Software Engineering ",
    academicLevel: "Undergraduate",
    profilePictureUrl: "src/assets/ContactUs.png" 
  };

  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <div className="w-full max-w-4xl m-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column for Profile Photo */}
        <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col items-center p-8">
          <div className="w-64 h-64 rounded-full mb-4 overflow-hidden"> 
            <img
              className="w-full h-full object-contain"
              src={userProfile.profilePictureUrl} 
              alt="Profile"
            />
          </div>
        </div>

        {/* Right Column for Profile Info */}
        <div className="md:w-2/3 p-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                First Name
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">{userProfile.firstName}</div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Last Name
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">{userProfile.lastName}</div>
            </div>
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
              Email
            </label>
            <div className="mb-4 p-2 bg-[#f7f7f7] rounded">{userProfile.email}</div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Major
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">{userProfile.major}</div>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2">
                Academic Level
              </label>
              <div className="mb-4 p-2 bg-[#f7f7f7] rounded">{userProfile.academicLevel}</div>
            </div>
          </div>

                    
          <div className="w-full px-3 mb-6">
            <button
              className="bg-[#5f7fbf] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#3e60a3] transition-all duration-700"
            >
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
