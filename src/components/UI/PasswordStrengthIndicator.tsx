import React from "react";

interface PasswordStrengthIndicatorProps {
  strength: number;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  strength,
}) => {
  // Determine color based on password strength
  const getColor = (strength: number): string => {
    if (strength < 2) return "bg-red-500";
    if (strength < 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  // Calculate width based on password strength
  const getWidth = (strength: number): string => `${strength * 25}%`;

  return (
    <div className="w-1/2 bg-gray-300 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${getColor(strength)}`}
        style={{ width: getWidth(strength) }}
      ></div>
    </div>
  );
};

export default PasswordStrengthIndicator;
