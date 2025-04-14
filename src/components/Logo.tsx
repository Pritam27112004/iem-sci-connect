
import React from "react";

const Logo = ({ className = "", size = "medium" }: { className?: string; size?: "small" | "medium" | "large" }) => {
  const dimensions = {
    small: "h-8 w-auto",
    medium: "h-12 w-auto",
    large: "h-16 w-auto"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://www.collegedekho.com/media/uploads/2020/02/21/1534931891iemkolkata1_2.jpg" 
        alt="IEM Kolkata Logo" 
        className={`${dimensions[size]} rounded-md object-contain`}
      />
    </div>
  );
};

export default Logo;
