import React from "react";

const Header = ({ children, floating }) => {
  if (floating)
    return (
      <div className="fixed w-full flex justify-center">
        <div className="max-w-7xl w-[95%] mx-auto pb-8">{children}</div>
      </div>
    );
  return <div className="max-w-7xl w-[95%] mx-auto pb-8">{children}</div>;
};

export default Header;
