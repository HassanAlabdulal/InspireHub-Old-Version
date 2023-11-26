import { useState } from "react";
import { Radio } from "@material-tailwind/react";
import Policy from "../components/Policy.tsx";

const MAX_STEPS = 4;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faBook,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [formStep, setFormStep] = useState(0);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showReturnButton, setShowReturnButton] = useState(false);

  const handlePolicyClick = () => {
    setShowPolicy(true);
    setShowReturnButton(true); // show the return button when policy is clicked
  };

  const closePolicy = () => {
    setShowPolicy(false);
    setShowReturnButton(false); // hide the return button when policy is closed
  };
  const completeFormStep = () => {
    setFormStep((currentStep) => currentStep + 1);
  };

  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 3) {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="w-full px-8 py-6 mt-6 text-white  disabled:bg-gray-400 disabled:cursor-not-allowed flex select-none items-center
           cursor-pointer justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] text-base font-bold align-middle transition-all
            duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Create Account
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="w-full px-8 py-6 mt-6 text-white  disabled:bg-gray-400 disabled:cursor-not-allowed flex select-none items-center
          cursor-pointer justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] text-base font-bold align-middle transition-all
           duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
           disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Next Step
        </button>
      );
    }
  };

  const goToPreviousStep = () => {
    setFormStep((currentStep) => currentStep - 1);
  };
  return (
    <div className="relative flex flex-col items-start min-h-screen antialiased text-[#121212] bg-[#f7f7f7]">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute inset-x-0 top-0 bg-[#5f7fbf]"
      ></div>
      <div className="z-10 mx-auto mt-48 text-center">
        <h1 className="text-5xl font-semibold text-white">
          Welcome to <span className="font-bold ">InspireHub</span>
        </h1>
        <p className="mt-3 text-[#121212]">
          Become a new member in 4 easy steps
        </p>
      </div>
      <div
        className={`z-10 w-full max-w-xl mx-auto mt-24 mb-24 overflow-hidden bg-[#f3f4f6] rounded-lg shadow-2xl ${
          showPolicy ? "opacity-100" : "opacity-100"
        }`}
      >
        <div className="px-16 py-10">
          <form>
            {formStep < MAX_STEPS && (
              <div className="flex items-center mb-2">
                {formStep > 0 && (
                  <button
                    onClick={goToPreviousStep}
                    type="button"
                    className="w-6 text-gray-400 transition-all duration-200 hover:text-gray-600"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                )}
                <p className="mr-2 text-sm text-gray-700 ">
                  Step {formStep + 1} of {MAX_STEPS}
                </p>
              </div>
            )}
            {formStep === 0 && (
              <section className="flex flex-col">
                <h2 className="mb-8 text-3xl font-semibold ">
                  Personal Information
                </h2>
                <label className="px-1 mb-2 text-xs font-semibold">
                  First name
                </label>
                <div className="flex mb-3">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="Hassan"
                  />
                </div>
                <label className="px-1 mb-2 text-xs font-semibold">
                  Last name
                </label>
                <div className="flex">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="Alabdulal"
                  />
                </div>
              </section>
            )}

            {formStep === 1 && (
              <section className="flex flex-col">
                <h2 className="mb-8 text-3xl font-semibold ">
                  Personal Information
                </h2>
                <label className="px-1 mb-2 text-xs font-semibold">Email</label>
                <div className="flex mb-3">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                  </div>
                  <input
                    type="email"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="inspirehub@example.com"
                  />
                </div>
                <label className="px-1 mb-2 text-xs font-semibold">
                  Password
                </label>
                <div className="flex mb-3">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faLock} />
                    </i>
                  </div>
                  <input
                    type="password"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="********"
                  />
                </div>
                <label className="px-1 mb-2 text-xs font-semibold">
                  Confirm Password
                </label>
                <div className="flex">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faLock} />
                    </i>
                  </div>
                  <input
                    type="password"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="********"
                  />
                </div>
              </section>
            )}

            {formStep === 2 && (
              <section className="flex flex-col">
                <h2 className="mb-8 text-3xl font-semibold ">
                  Academic Information
                </h2>
                <label className="px-1 mb-2 text-xs font-semibold">Major</label>
                <div className="flex mb-4">
                  <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                    <i className="text-lg text-gray-400 mdi mdi-email-outline">
                      <FontAwesomeIcon icon={faBook} />
                    </i>
                  </div>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="Software Engineering"
                  />
                </div>
                <label className="px-1 mb-2 text-xs font-semibold">
                  Academic Level
                </label>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex items-center">
                    <Radio name="type" ripple={true} crossOrigin={undefined} />

                    <span className="ml-2">Undergraduate</span>
                  </div>

                  <div className="flex items-center">
                    <Radio name="type" ripple={true} crossOrigin={undefined} />

                    <span className="ml-2">Graduate</span>
                  </div>

                  <div className="flex items-center">
                    <Radio name="type" ripple={true} crossOrigin={undefined} />

                    <span className="ml-2">Employer</span>
                  </div>
                </div>
              </section>
            )}

            {formStep === 3 && (
              <section>
                <h2 className="mb-8 text-3xl font-semibold ">
                  Legal Information
                </h2>
                <div className="flex items-center">
                  <Radio name="type" ripple={true} crossOrigin={undefined} />

                  <span className="ml-2">
                    I agree with{" "}
                    <span>
                      <a
                        onClick={handlePolicyClick}
                        className="text-[#809bd0] underline cursor-pointer"
                      >
                        privacy and policy
                      </a>
                    </span>{" "}
                  </span>
                </div>
              </section>
            )}

            {/* Render Policy component conditionally */}
            {showPolicy && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                {/* This div now has an onClick event to close the policy */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-50"
                  onClick={closePolicy}
                >
                  {/* <button onClick={closePolicy}>Return</button> */}
                </div>

                {/* The Policy component should be at full opacity when shown */}
                <div className="z-50 p-4 bg-white rounded-lg shadow-lg opacity-100">
                  <Policy
                    onClose={closePolicy}
                    showReturnButton={showReturnButton}
                  />
                </div>
              </div>
            )}

            {formStep === 4 && (
              <section>
                <h2 className="mb-8 text-3xl font-semibold">
                  Your account has been successfully created!
                </h2>
              </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
