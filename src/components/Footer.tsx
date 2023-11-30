export default function Footer() {
  return (
    <footer className=" bg-[#f7f7f7] rounded-lg shadow">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold text-[#5f7fbf] whitespace-nowrap">
              InspireHub
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="AboutUsPage" className="hover:underline me-4 md:me-6">
                About us
              </a>
            </li>
            <li>
              <a href="PolicyPage" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="ContactUsPage" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="/" className="hover:underline">
            InspireHub™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
