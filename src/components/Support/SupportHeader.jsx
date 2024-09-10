import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SupportHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const nav = [
    {
      title: "자주 묻는 질문",
      link: "",
    },
    {
      title: "1:1 문의",
      link: "/inquiry",
    },
    {
      title: "공지사항",
      link: "/notice",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="pt-11 pb-7 text-4xl font-bold text-black">문의하기</p>
      <div className="flex justify-center items-center w-full h-16 whitespace-pre cursor-pointer">
        {nav.map((item, index) => (
          <div
            key={index}
            className={`flex w-[400px] justify-center items-center self-stretch relative border border-[#ededed] ${
              `/support${item.link}` === location.pathname
                ? "bg-[#a0846f]"
                : location.pathname.includes(`/support${item.link}`) &&
                  item.link !== ""
                ? "bg-[#a0846f]"
                : ""
            }`}
            onClick={() => {
              navigate(`/support${item.link}`);
            }}
          >
            <p
              className={`text-base  ${
                `/support${item.link}` === location.pathname
                  ? "text-white"
                  : location.pathname.includes(`/support${item.link}`) &&
                    item.link !== ""
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
