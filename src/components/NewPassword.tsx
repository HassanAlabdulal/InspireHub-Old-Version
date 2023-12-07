import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface PasswordStrengthIndicatorProps {
  strength: number;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  strength,
}) => {
  const getColor = (strength: number): string => {
    if (strength < 2) return "bg-red-500";
    if (strength < 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getWidth = (strength: number): string => `${strength * 20}%`;

  return (
    <div className="w-full h-2 bg-gray-300 rounded-full">
      <div
        className={`${getColor(strength)} h-2 rounded-full`}
        style={{ width: getWidth(strength) }}
      ></div>
    </div>
  );
};

const ShowIcon = () => <FontAwesomeIcon icon={faEye} />;
const HideIcon = () => <FontAwesomeIcon icon={faEyeSlash} />;

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const checkPasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/(?=.*[0-9])/)) strength += 1;
    if (password.match(/(?=.*[!@#$%^&*])/)) strength += 1;
    if (password.match(/(?=.*[a-z])/)) strength += 1;
    if (password.match(/(?=.*[A-Z])/)) strength += 1;
    return strength;
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = event.target.value;
    setNewPassword(password);
    setPasswordStrength(checkPasswordStrength(password));
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-5 bg-[#f7f7f7] min-w-screen font-roboto">
      <div className="w-2/3 overflow-hidden text-gray-500 bg-gray-100 shadow-xl rounded-3xl">
        <div className="w-full md:flex">
          <div className="hidden w-1/2 bg-[#5f7fbf] md:block">
            <img src="src/assets/Reset password.png" alt="Reset Password" />
          </div>
          <div className="w-full px-5 py-36 md:w-1/2 md:px-10">
            <div className="mb-10 text-center">
              <h1 className="text-4xl mb-2 font-bold text-[#bfa260]">
                Set New Password
              </h1>
              <p>Please enter your new password</p>
            </div>
            <div className="flex flex-col -mx-3">
              <div className="w-full px-3 mt-5">
                <label className="px-1 text-xs font-semibold">
                  New Password
                </label>
                <div className="relative">
                  <input
                    name="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    className="w-full py-2 pl-3 pr-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                  <button
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm leading-5"
                    type="button"
                  >
                    {showNewPassword ? <HideIcon /> : <ShowIcon />}
                  </button>
                </div>
                <div className="w-1/2 mt-2">
                  <PasswordStrengthIndicator strength={passwordStrength} />
                  <p className="mt-1 text-xs text-gray-600">
                    Password strength indicator
                  </p>
                </div>
              </div>

              <div className="w-full px-3 mt-5 mb-5">
                <label className="px-1 text-xs font-semibold">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full py-2 pl-3 pr-10 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-sm leading-5"
                    type="button"
                  >
                    {showConfirmPassword ? <HideIcon /> : <ShowIcon />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col -mx-3">
              <div className="w-full px-3 mt-10">
                <a
                  href="SignInPage"
                  className="block w-full max-w-xs text-center mx-auto bg-[#5f7fbf] text-white font-roboto font-semibold text-lg rounded-lg px-3 py-3 uppercase shadow-md hover:shadow-xl transition-all duration-700 focus:outline-none hover:bg-[#3e60a3]"
                >
                  Set New Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
