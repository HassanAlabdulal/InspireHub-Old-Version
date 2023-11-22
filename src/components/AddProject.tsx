import React, { useState, useEffect } from 'react';

export default function AddProject() {
    const [teamMembers, setTeamMembers] = useState([{ name: '', linkedIn: '', twitter: '' }]);
    const [images, setImages] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    const handleAddTeamMember = () => {
        setTeamMembers([...teamMembers, { name: '', linkedIn: '', twitter: '' }]);
    };

    const handleRemoveTeamMember = (index) => {
        const newTeamMembers = [...teamMembers];
        newTeamMembers.splice(index, 1);
        setTeamMembers(newTeamMembers);
    };

    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
        setImages([...images, reader.result]);
        // Reset the input field
        event.target.value = null;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};


 const removeImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
    if (selectedIndex >= filteredImages.length) {
        setSelectedIndex(0);
    }
    // Reset the file input, if necessary
    document.getElementById('image-upload').value = null;
};


    return (
        <div className="bg-[#f7f7f7] mt-16 pl-10 pr-10 flex justify-center items-start h-auto min-h-screen">
            <div className="bg-[#f7f7f7] p-10 shadow-2xl rounded max-w-4xl w-full">
                <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6 text-center">
                    Upload Project
                </h1>
                
                {/* Photo Upload Section */}
                <div className="mb-6">
                    <div className="border border-dashed border-gray-400 rounded p-4 flex justify-center items-center mb-4 relative" style={{ minHeight: '200px' }}>
                        {images.length > 0 ? (
                            <img src={images[selectedIndex]} alt="Uploaded" className="max-w-full max-h-full" />
                        ) : (
                            <span>Click on a + card to upload and display an image</span>
                        )}
                        {/* Dot indicators */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`inline-block h-3 w-3 mx-1 rounded-full cursor-pointer ${selectedIndex === index ? 'bg-blue-500' : 'bg-white'}`}
                                onClick={() => setSelectedIndex(index)}
                            ></span>
                        ))}
                    </div>
                   </div>
                    <div className="flex justify-start items-center flex-wrap gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative border border-gray-400 rounded p-1" style={{ width: '100px', height: '100px' }}>
                                <img src={image} alt={`Uploaded ${index}`} className="w-full h-full object-cover" onClick={() => setSelectedIndex(index)} />
                                <button onClick={() => removeImage(index)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs">X</button>
                            </div>
                        ))}
                        <label htmlFor="image-upload" className="border border-gray-400 rounded p-1 flex justify-center items-center cursor-pointer" style={{ width: '100px', height: '100px' }}>
                            <div className="text-center">+</div>
                        </label>
                        <input id="image-upload" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                    </div>
                </div>
              <form className="space-y-6 mt-6">
                  <div>
                      <label className="block text-[#bfa260] mb-2">Title:</label>
                      <input type="text" className="w-full px-4 py-2 border rounded" />
                  </div>

                <div className="flex justify-between">
                  <div className="flex-1 mr-2">
                    <label className="block text-[#bfa260]">Date of project:</label>
                    <input type="date" className="px-3 py-2 border rounded" />
                  </div>

                 <div className="flex-1 ml-[240px]">
                    <label className="block text-[#bfa260]">Budget:</label>
                    <input type="number" className="px-3 py-2 border rounded" />
                    <select className="px-3 py-2 border rounded h-[40px]">
                      <option value="option1">SAR</option>
                      <option value="option2">USD</option>
                    </select>
                  </div>
                </div>

                  <div>
                      <label className="block text-[#bfa260] mb-2">Motivation:</label>
                      <textarea className="w-full px-4 py-2 border rounded resize-none"></textarea>
                  </div>
               

                <label className="block text-[#bfa260] mb-2">Team member:</label>

                <div>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="mb-2 flex items-center">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="px-4 py-2 border rounded flex-1" 
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
                                className="px-4 py-2 border rounded flex-1" 
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
                                className="px-4 py-2 border rounded flex-1" 
                                value={member.twitter}
                                onChange={(e) => {
                                    const newTeamMembers = [...teamMembers];
                                    newTeamMembers[index].twitter = e.target.value;
                                    setTeamMembers(newTeamMembers);
                                }}
                            />
                            <button type="button" onClick={() => handleRemoveTeamMember(index)} className="bg-red-500 text-white rounded-full p-2 flex justify-center items-center h-8 w-8 ml-2">
                                X
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-center mt-2">
                        <button type="button" onClick={handleAddTeamMember} className="rounded-full bg-[#5f7fbf] p-3 text-white flex justify-center items-center h-10 w-10">
                            +
                        </button>
                    </div>
                </div>

                  <div>
                      <label className="block text-[#bfa260] mb-2">Features:</label>
                      <textarea className="w-full px-4 py-2 border rounded resize-none"></textarea>
                  </div>

                  <div>
                      <label className="block text-[#bfa260] mb-2">Resources:</label>
                      <textarea className="w-full px-4 py-2 border rounded resize-none"></textarea>
                  </div>

                  <div>
                      <label className="block text-[#bfa260] mb-2">Tools:</label>
                      <textarea className="w-full px-4 py-2 border rounded resize-none"></textarea>
                  </div>

                  <div className="flex justify-center mt-6">
                      <button type="submit" className="bg-[#5f7fbf] text-white px-6 py-3 rounded-full">
                          Submit
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
}
