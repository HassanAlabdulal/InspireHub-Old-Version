import React from 'react';

interface UserProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  major: string;
  academicLevel: string;
  profileImageUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  firstName,
  lastName,
  email,
  major,
  academicLevel,
  profileImageUrl,
}) => {
  return (
    <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
      <div className="w-full max-w-4xl m-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column for Profile Photo */}
        <div className="md:w-1/2 bg-[#f7f7f7] flex flex-col items-center p-8">
          <div className="w-64 h-64 rounded-full mb-4 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={profileImageUrl}
              alt={`${firstName} ${lastName}`}
            />
          </div>
        </div>
        
        {/* Right Column for Profile Info */}
        <div className="md:w-2/3 p-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-[#5f7fbf]">{`${firstName} ${lastName}`}</h1>
          </div>
          <div className="mb-4">
            <h2 className="text-xl text-gray-700">{email}</h2>
          </div>
          <div className="mb-4">
            <h3 className="text-lg text-gray-700">{major}</h3>
          </div>
          <div className="mb-4">
            <h3 className="text-lg text-gray-700">{academicLevel}</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
