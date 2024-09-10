import React, { useState } from "react";

export default function FrequentlyAskedQuestionItems({ title, description }) {
  const [showDescription, setshowDescription] = useState(false);

  const toggleDesciption = () => {
    setshowDescription(!showDescription);
  };

  return (
    <div className="flex flex-col self-stretch border-b border-[#eee] cursor-pointer">
      <div
        className="flex items-center self-stretch relative p-4 pl-16"
        onClick={toggleDesciption}
      >
        <p className="h-9 text-2xl text-[#222]">Q.</p>
        <p className="pl-3 text-lg text-[#222]">{title}</p>
      </div>
      {showDescription && (
        <div
          className="pt-8 pb-12 pl-24 pr-20 text-lg text-[#666] flex items-center justify-start"
          onClick={toggleDesciption}
        >
          <p className="break-all whitespace-pre-line">{description}</p>
        </div>
      )}
    </div>
  );
}
