import React from "react";
import Button from "./Button";
import { useRouter } from "next/router";

const LowerHeader = ({ hideBtn, children, label, stepNum, href }) => {
  const router = useRouter();

  const queryParams = React.useMemo(() => {
    const params = router.asPath.split("?");

    if (params.length > 1) return "?" + params[1];

    return "";
  }, [router]);

  return (
    <div className="mt-12">
      <h1 className="text-xl mb-2">Explore Payment Element</h1>
      <div className="flex justify-between items-start gap-7 flex-wrap">
        <div
          onClick={() => router.back()}
          className="flex items-center gap-2 cursor-pointer min-w-fit"
        >
          <img src="/arrow-left.svg" alt="arrow" />
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-xs text-gray-400 font-light mt-[2px]">
            {stepNum} of 3
          </div>
        </div>
        {children}
        {!hideBtn && <Button href={href + queryParams} label="Next" />}
      </div>
    </div>
  );
};

export default LowerHeader;
