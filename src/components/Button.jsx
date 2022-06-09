import React from "react";
import Link from "next/link";

const Button = ({ label, href, className, ...rest }) => {
  const Wrapper = React.useMemo(
    () =>
      href
        ? (props) => (
            <Link href={href}>
              <div {...props} />
            </Link>
          )
        : (props) => <button {...props} />,
    [href]
  );

  return (
    <Wrapper
      className={`${className} bg-blue px-6 py-2 flex justify-center items-center rounded text-white font-light cursor-pointer transition-transform active:translate-y-[2px]`}
      {...rest}
    >
      {label || "Button"}
    </Wrapper>
  );
};

export default Button;
