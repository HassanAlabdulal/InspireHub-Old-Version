import React, { useState } from "react";

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
        className={getColor(strength) + " h-2 rounded-full"}
        style={{ width: getWidth(strength) }}
      ></div>
    </div>
  );
};

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const checkPasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length > 5) strength += 1;
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
          <div className="w-full px-5 py-10 md:w-1/2 md:px-10">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold text-[#bfa260] whitespace-nowrap">
                Set New Password
              </h1>
              <p>Please enter your new password</p>
            </div>
            <div className="flex flex-col -mx-3">
              <div className="w-full px-3 mb-5">
                <label className="px-1 text-xs font-semibold">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full py-2 pl-3 pr-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <div className="mt-2">
                  <PasswordStrengthIndicator strength={passwordStrength} />
                  <p className="mt-1 text-xs text-gray-600">
                    Password strength indicator
                  </p>
                </div>
              </div>

              <div className="w-full px-3 mb-5">
                <label className="px-1 text-xs font-semibold">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full py-2 pl-3 pr-3 border-2 border-gray-200 rounded-lg outline-none focus:border-[#5f7fbf]"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>

            <div className="flex flex-col -mx-3">
              <div className="w-full px-3 mb-5">
                <button className="block w-full max-w-xs mx-auto bg-[#5f7fbf] text-white font-roboto font-semibold text-lg rounded-lg px-3 py-3 uppercase shadow-md hover:shadow-xl transition-all duration-700 focus:outline-none hover:bg-[#3e60a3]">
                  Set New Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
