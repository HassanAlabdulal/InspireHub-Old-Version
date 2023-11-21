import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center text-[#bfa260] font-roboto font-semibold text-xl mb-2 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`mr-2 transform transition-transform duration-400 ${
            isOpen ? "rotate-33" : ""
          }`}
        >
          {isOpen ? "▼" : "►"}
        </span>
        {title}
      </button>
      {isOpen && (
        <div
          className={`p-4 mb-4 rounded-md bg-[#f7f7f7] transition-all duration-1000 ${
            isOpen ? "shadow-md hover:shadow-lg" : "shadow-sm"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const TableComponent = () => (
  <div className="w-full lg:w-1/3 bg-[#f7f7f7]">
    <div className="border border-gray-200 rounded-sm shadow-lg ">
      <header className="px-5 py-4 border-b">
        <h2 className="font-semibold text-[#bfa260] text-center">
          Developers Team
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <tbody className="text-sm divide-y divide-gray-100">
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ALI ALSHAIKH
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <img
                      title="Linkedin"
                      src="src/assets/Linked_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/" target="_blank">
                    <img
                      title="X"
                      src="src/assets/x_icon.jpg"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/" target="_blank">
                    <img
                      title="Github"
                      src="src/assets/Git_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ABDULLAH AL MATAWAH
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a
                    href="https://www.linkedin.com/in/abdullah-al-matawah-b6036a231/"
                    target="_blank"
                  >
                    <img
                      title="Linkedin"
                      src="src/assets/Linked_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/aamhaamm" target="_blank">
                    <img
                      title="X"
                      src="src/assets/x_icon.jpg"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/aamhaamm" target="_blank">
                    <img
                      title="Github"
                      src="src/assets/Git_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  HASSAN ALABDULAL
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <img
                      title="Linkedin"
                      src="src/assets/Linked_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/7assan_abdulaal" target="_blank">
                    <img
                      title="X"
                      src="src/assets/x_icon.jpg"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/HassanAlabdulal" target="_blank">
                    <img
                      title="Github"
                      src="src/assets/Git_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  ALI ALABDULAAL
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <img
                      title="Linkedin"
                      src="src/assets/Linked_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/l3b3al" target="_blank">
                    <img
                      title="X"
                      src="src/assets/x_icon.jpg"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/l3b3al" target="_blank">
                    <img
                      title="Github"
                      src="src/assets/Git_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  HUSSAIN ALZAYER
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <img
                      title="Linkedin"
                      src="src/assets/Linked_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://twitter.com/7ussainLz" target="_blank">
                    <img
                      title="X"
                      src="src/assets/x_icon.jpg"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
                <td className="p-2 text-center align-middle whitespace-nowrap">
                  <a href="https://github.com/7ussainLZ" target="_blank">
                    <img
                      title="Github"
                      src="src/assets/Git_icon.png"
                      className="inline-block w-6 h-6 transition-all duration-700 hover:scale-110"
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <div className="bg-[#f7f7f7] mt-[70px] pl-[60px] pr-[20px] flex justify-center items-start h-screen">
      <div className="flex flex-col flex-1 pr-8 space-y-6">
        <h1 className="text-[#bfa260] font-roboto font-bold text-3xl mb-4 text-center">
          About Us
        </h1>

        <AccordionSection title="Inspirehub: A Journey of Passion and Innovation">
          {/* <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Inspirehub: A Journey of Passion and Innovation</h2> */}
          <p className="font-normal text-black font-roboto">
            We are a team of dreamers, innovators, and educators united by a
            common passion: to empower and inspire the next generation of
            creative minds. Our journey began with a simple yet powerful idea –
            to create a space where creativity knows no bounds and every project
            tells a story.
          </p>
        </AccordionSection>

        <AccordionSection title="Our Inspiration">
          {/* <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Our Inspiration</h2> */}
          <p className="font-normal text-black font-roboto">
            Each member of our team has walked the path of discovery, facing
            challenges and embracing opportunities. We've experienced firsthand
            the power of collaboration and the impact of sharing knowledge.
            That's why we built Inspirehub – a platform not just for showcasing
            projects, but for building the innovators of tomorrow.
          </p>
        </AccordionSection>

        <AccordionSection title="Our Commitment">
          {/* <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Our Commitment</h2> */}
          <p className="font-normal text-black font-roboto">
            At Inspirehub, we are committed to fostering a nurturing
            environment. We believe in the power of feedback, the importance of
            community, and the potential of every idea. Our mission goes beyond
            providing a platform; it's about creating a movement of inspired and
            confident creators.
          </p>
        </AccordionSection>

        <AccordionSection title="Our Values">
          {/* <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Our Values</h2> */}
          <p className="font-normal text-black font-roboto">
            Empathy and Support: We understand the journey of innovation and
            strive to offer the support and guidance needed to navigate it.{" "}
            <br />
            Continuous Learning: We are always learning – from each other, from
            our users, and from the ever-evolving world of technology and
            creativity. <br />
            Inclusivity and Diversity: Our strength lies in our diversity. We
            celebrate and embrace diverse perspectives, believing they lead to
            richer experiences and more innovative solutions.
          </p>
        </AccordionSection>

        <AccordionSection title="Join Our Story">
          {/* <h2 className="text-[#bfa260] font-roboto font-semibold text-xl mb-2">Join Our Story</h2> */}
          <p className="font-normal text-black font-roboto">
            Every member of our community, every user who shares a project, and
            every feedback given adds a page to the Inspirehub story. We invite
            you to be a part of this journey. Share your projects, your ideas,
            and your vision with us, and let's inspire a world of creativity
            together.
          </p>
        </AccordionSection>

        <hr />

        <div className="flex items-center justify-center">
          <TableComponent />
        </div>
      </div>
    </div>
  );
}
