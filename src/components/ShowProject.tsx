import React from 'react';

const projectData = {
  title: "InspireHub",
  images: [
    "src/assets/ContactUs.png", 
  ],
  date: "2023-01-01",
  category: "Technology",
  budget: "5000",
  currency: "SAR",
  description: "It is a website that is a hub for inspiring and innovative project ideas...",
  motivation: "The primary motivation behind InspireHub is to address a significant challenge...",
  teamMembers: [
    { name: "Abdullah", linkedIn: "aamhaamm", twitter: "aamhaamm" },
  ],
  features: "Easy to use, Suitable for everyone ...",
  resources: "https://github.com/InspireHub",
  tools: "React, Astro ...",
  others: "This is the first version, we are working to update it as soon as depending on your suggestions...",
};


export default function ShowProject() {
    return (
      <div className="bg-[#f7f7f7] pt-[65px] flex flex-col items-center min-h-screen font-roboto">
        <div className="bg-[#f7f7f7] p-10 shadow-2xl rounded max-w-4xl w-full">
          {/* Title Section */}
          <h1 className="text-[#bfa260] font-bold text-3xl mb-6 text-center">
            {projectData.title}
          </h1>
  
          {/* Image Section */}
          {projectData.images.length > 0 && (
            <div className="mb-6">
              <img
                src={projectData.images[0]}
                alt="Project"
                className="w-full object-cover"
                style={{ maxHeight: '500px' }}
              />
            </div>
          )}
  
          {/* Project Details Section */}
          <h2 className="text-[#bfa260] font-bold text-2xl mb-4">
            Project Details
          </h2>
          <div className="text-black">
            <p className="mb-2"><strong className="text-[#bfa260]" >Date of project:</strong> <br /> {projectData.date}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Category:</strong> <br /> {projectData.category}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Budget:</strong> <br /> {`${projectData.budget} ${projectData.currency}`}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Description:</strong> <br /> {projectData.description}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Motivation:</strong> <br /> {projectData.motivation}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Team member:</strong> <br /> 
            {projectData.teamMembers.map((member, index) => (
              <div key={index} className="mb-2">
                <p><strong className="text-[#bfa260]">Name:</strong> {member.name}</p>
                <p>
                  <strong className="text-[#bfa260]">LinkedIn:</strong> <a href={`https://${member.linkedIn}`} className="text-[#5f7fbf] font-bold hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </p>
                <p>
                  <strong className="text-[#bfa260]">Twitter:</strong> <a href={`https://${member.twitter}`} className="text-[#5f7fbf] font-bold hover:underline" target="_blank" rel="noopener noreferrer">Twitter Profile</a>
                </p>
              </div>
          ))}
          </p>
            <p className="mb-2"><strong className="text-[#bfa260]">Features:</strong> <br /> {projectData.features}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Resources:</strong> <br /> <a href={projectData.resources} target="_blank" rel="noopener noreferrer">{projectData.resources}</a></p>
            <p className="mb-2"><strong className="text-[#bfa260]">Tools:</strong> <br /> {projectData.tools}</p>
            <p className="mb-2"><strong className="text-[#bfa260]">Others:</strong> <br /> {projectData.others}</p>
          </div>
  
        </div>
      </div>
    );
  }