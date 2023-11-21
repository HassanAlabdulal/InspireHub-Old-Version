export default function ContactUs() {
  return (
    <div className="bg-[#f7f7f7] mt-16 pl-[60px] pr-[20px] flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl px-6 py-8 bg-[#f7f7f7] shadow-lg rounded">
        <h2 className="text-[#bfa260] font-roboto font-bold text-3xl mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-center font-roboto">
          For further questions, including partnership opportunities, please
          email us at <br />
          <a
            href="mailto:support@inspirehub.com"
            className="text-[#5f7fbf] font-bold hover:underline"
          >
            {" "}
            support@inspirehub.com{" "}
          </a>
          or contact us using our contact form.
        </p>

        <div className="flex flex-wrap mt-3 mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 leading-tight border rounded form-input focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 leading-tight border rounded form-input focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-6">
          <textarea
            placeholder="We are here for you! How can we help?"
            className="w-full px-4 py-3 leading-tight border rounded form-textarea focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <label className="flex items-center w-full mb-4 md:w-auto md:mb-0">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-sm text-gray-700">
              You agree to our{" "}
              <a href="PolicyPage" className="text-[#bfa260] hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <a
            className="flex select-none items-center justify-center rounded-lg bg-[#5f7fbf] border-2 border-[#5f7fbf] px-3 py-2.5 text-base font-bold text-white align-middle transition-all duration-500 shadow-md hover:shadow-lg hover:bg-indigo-500/100 active:bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
}
