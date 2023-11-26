import React, { useState } from 'react';

export default function EditProfile() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files?.[0]; 

    if (file) {
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <div className="w-full max-w-4xl m-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column for Profile Photo */}
        <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col items-center p-8">
          <div className="w-64 h-64 rounded-full mb-4 overflow-hidden"> 
            <img
              className="w-full h-full object-cover"
              src={imagePreviewUrl || 'src/assets/photo.png'} 
              alt="Profile"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="fileInput"
            onChange={handleImageChange}
          />
          <label
            htmlFor="fileInput"
            className="bg-[#5f7fbf] text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-[#3e60a3] transition-all duration-700"
          >
            Upload Photo
          </label>
        </div>
          {/* Right Column for Form */}
          <div className="md:w-2/3 p-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
  
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="inspirehub@example.com"
              />
            </div>
  
            <div className="w-full px-3 mb-6">
              <button
                className="bg-[#5f7fbf] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#3e60a3] transition-all duration-700"
              >
                Change Password
              </button>
            </div>
  
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2" htmlFor="grid-major">
                  Major
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-major"
                  type="text"
                  placeholder="Computer Science"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-[#bfa260] text-xs font-bold mb-2" htmlFor="grid-academic-level">
                  Academic Level
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-academic-level"
                  type="text"
                  placeholder="Undergraduate"
                />
              </div>
            </div>
  
            <div className="w-full px-3 mb-6">
              <button
                className="bg-[#5f7fbf] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#3e60a3] transition-all duration-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  