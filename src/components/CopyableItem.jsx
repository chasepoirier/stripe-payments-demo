import React from "react";

const CopyableItem = ({ Icon, RightComponent, title, color, value }) => {
  const [copied, setCopied] = React.useState(false);
  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="group p-2 rounded bg-white flex justify-between items-center cursor-pointer mb-2 relative"
      onClick={onCopy}
    >
      <div className="bg-gray-800 opacity-0 group-hover:opacity-80 border-[1px] border-white absolute w-full h-full rounded left-0 top-0 transition-opacity" />
      <div className="absolute w-full h-full text-white flex justify-center items-center z-10 top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100 text-sm font-light">
        {copied ? "Copied" : "Copy"}
      </div>
      <div className="flex gap-1 items-center">
        <Icon className={`h-4 w-4 ${color}`} />
        <div className={`text-sm ${color}`}>{title}</div>
      </div>
      {RightComponent}
    </div>
  );
};

export default CopyableItem;
