import React from "react";

const Box = ({ box }) => {
  return (
    <div className="py-5 last:border-b-0 border-b-2 cursor-pointer border-text-nav box">
      <h1 className="font-bold text-[18px]">{box.title}</h1>
      <p className="text-[14px] font-medium text-text-nav mt-2">{box.description}</p>
    </div>
  );
};

export default Box;
