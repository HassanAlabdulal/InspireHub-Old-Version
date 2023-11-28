import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-[#f7f7f7] min-w-screen font-roboto">
      <div className="w-2/3 overflow-hidden text-gray-500 bg-gray-100 shadow-xl rounded-3xl">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 px-10 py-10 bg-[#5f7fbf] md:block">
            <img src="src/assets/Forgot password.png" alt="Forgot Password" />
          </div>

          <div className="w-full px-5 py-36 md:w-1/2 md:px-10">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-[#bfa260] mb-2">
                Forgot Password
              </h1>
              <p>Enter your email to reset your password</p>
            </div>
            <div>
              <div className="flex mt-20 -mx-3">
                <div className="w-full px-3 mb-5">
                  <label className="px-1 text-xs font-semibold">Email</label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <input
                      type="email"
                      className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                      placeholder="inspirehub@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col -mx-3">
                <div className="w-full px-3 mt-10">
                  <a
                    href="NewPasswordPage"
                    className="block w-full max-w-xs px-3 py-3 mx-auto text-center font-semibold text-lg text-white rounded-lg uppercase
                     bg-[#5f7fbf] border-2 border-[#5f7fbf] font-roboto transition-all duration-700 hover:bg-[#3e60a3] focus:outline-none shadow-md hover:shadow-xl
                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
                  >
                    Reset Password
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
