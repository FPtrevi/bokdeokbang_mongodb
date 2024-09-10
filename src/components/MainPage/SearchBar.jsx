import React from "react";
import SearchMagnifier from "../../assets/images/mainSearchMagnifier.png";

export default function SearchBar({ placeholder }) {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="h-14 w-[calc(100%-65px)] pl-8 py-4 rounded-l-lg"
        placeholder={placeholder}
      />
      <button className="bg-[#ff681b] w-[65px] h-14 rounded-r-lg flex items-center justify-center">
        <img src={SearchMagnifier} className="flex-shrink-0 h-8 " />
      </button>
    </form>
  );
}
