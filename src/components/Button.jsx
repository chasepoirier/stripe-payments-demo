import React from "react";
import Link from "next/link";

const Button = ({ label, href, className }) => {
  const Wrapper = React.useMemo(
    () =>
      href
        ? (props) => (
            <Link href={href}>
              <div {...props} />
            </Link>
          )
        : (props) => <div {...props} />,
    [href]
  );

  return (
    <Wrapper
      className={`${className} bg-blue px-6 py-2 flex justify-center items-center rounded text-white font-light cursor-pointer transition-transform active:translate-y-[2px]`}
    >
      {label || "Button"}
    </Wrapper>
  );
};

export default Button;
