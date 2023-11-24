import { useState } from "react";

const SignUp = () => {
  const [formStep, setFormStep] = useState(0);
  const completeFormStep = () => {
    setFormStep((currentStep) => currentStep + 1);
  };

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 2) {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="w-full px-8 py-6 mt-6 text-white bg-green-600 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Create Account
        </button>
      );
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="w-full px-8 py-6 mt-6 text-white bg-green-600 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
      );
    }
  };
  return (
    <div className="relative flex flex-col items-start min-h-screen antialiased text-gray-900 bg-[#f7f7f7]">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute inset-x-0 top-0 bg-[#5f7fbf]"
      ></div>
      <div className="z-10 mx-auto mt-48 text-center">
        <h1 className="text-5xl font-semibold text-white">
          Welcome to{" "}
          <span className="text-[#bfa260] font-bold">InspireHub</span>
        </h1>
        <p className="mt-2 text-[#121212]">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="z-10 w-full max-w-xl mx-auto mt-24 mb-24 overflow-hidden bg-white rounded-lg shadow-2xl">
        <div className="px-16 py-10">
          <form>
            {formStep === 0 && (
              <section>
                <h2 className="mb-8 text-3xl font-semibold">
                  Personal Information
                </h2>
                <label htmlFor="username" className="mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input"
                />
              </section>
            )}

            {formStep === 1 && (
              <section>
                <h2 className="mb-8 text-3xl font-semibold">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                />
              </section>
            )}

            {formStep === 2 && (
              <section>
                <h2 className="mb-8 text-3xl font-semibold">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className="p-3 mr-3 text-green-600 border-2 border-gray-300 rounded cursor-pointer ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0"
                    type="checkbox"
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="p-3 mr-3 text-green-600 border-2 border-gray-300 rounded cursor-pointer ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0"
                    type="checkbox"
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
              </section>
            )}

            {formStep === 3 && (
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
