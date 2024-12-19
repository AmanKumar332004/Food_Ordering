import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 h-[60px] w-full flex items-center justify-center shadow-lg">
      <div className="text-center">
        <span className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wide italic">
          "Food is the ingredient that binds us together."
        </span>
      </div>
    </nav>
  );
};

export default Navbar;