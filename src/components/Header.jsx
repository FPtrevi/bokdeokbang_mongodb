import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const nav = [
    {
      title: "매물목록",
      link: "/list",
    },
    {
      title: "부동산",
      link: "/realEstate",
    },
    {
      title: "집찾기",
      link: "/searchHouse",
    },
    {
      title: "고객지원",
      link: "/support",
    },
    {
      title: "로그인",
      link: "/member/login",
    },
  ];

  return (
    <header
      className={`flex justify-center items-center relative gap-36 px-5 py-10 bg-white  ${
        location.pathname === "/member/login" ? "hidden" : ""
      }`}
    >
      <Link to="/" className="text-3xl font-bold text-center whitespace-pre">
        <span className="text-[#e1b45c]">복</span>
        <span className=" text-[#295086]">덕방</span>
      </Link>
      {nav.map((item, index) => (
        <div
          key={index}
          className={`text-2xl font-bold text-center cursor-pointer whitespace-pre hover:text-[#295086] ${
            location.pathname.includes(item.link)
              ? "text-[#295086]"
              : "text-[#eadbc8]"
          }`}
          onClick={() => navigate(`${item.link}`)}
        >
          {item.title}
        </div>
      ))}
    </header>
  );
}
