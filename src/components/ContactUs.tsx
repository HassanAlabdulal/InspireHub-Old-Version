export default function ContactUs() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col font-roboto">
      <div className="flex items-center justify-center flex-grow p-4">
        <div className="w-full max-w-6xl m-auto overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="p-8 md:pb-5 md:w-1/2">
              <h2 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6 text-center">
                Get In Touch
              </h2>
              <p className="text-center font-roboto">
                For further questions, including partnership opportunities,
                please email us at{" "}
                <a
                  href="mailto:support@inspirehub.com"
                  className="text-[#5f7fbf] font-bold hover:underline"
                >
                  support@inspirehub.com
                </a>{" "}
                or contact us using our contact form.
              </p>
              {/* Form fields */}
              <div className="mt-3 mb-6 -mx-3">
                <div className="mb-6">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 leading-tight transition-all duration-300 border rounded focus:px-5 focus:outline-0"
                  />
                </div>
                <div className="mb-6">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 leading-tight transition-all duration-300 border rounded focus:px-5 focus:outline-0"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="We are here for you! How can we help?"
                    className="w-full px-4 py-3 leading-tight transition-all duration-300 border rounded resize-none focus:px-5 focus:outline-0 focus:"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-700">
                      You agree to our{" "}
                      <a
                        href="PolicyPage"
                        className="text-[#bfa260] hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
                {/* Submit button */}
                <div className="flex justify-center mt-6">
                  <button
                    className="rounded-lg bg-[#5f7fbf] px-5 py-2.5 text-base font-bold text-white
                     transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 md:w-1/2">
              <img
                className="max-w-full max-h-full"
                src="src/assets/ContactUs.png"
                alt="Contact us"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">{/* Footer content here */}</div>
    </div>
  );
}
