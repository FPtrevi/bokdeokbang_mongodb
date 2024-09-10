import React, { useState, useRef } from "react";
import bannerImage from "../../assets/images/bannerImage.png";
import SpeechBubble from "../../assets/images/mainSpeechBubble.png";
import SearchBar from "../../components/MainPage/SearchBar";

export default function Home() {
  const categoryIndex = [
    {
      key: "apartment",
      title: "아파트",
      placeholder: "원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요",
    },
    {
      key: "villa",
      title: "빌라,투룸+",
      placeholder: "원하시는 지역명, 지하철역을 입력해주세요",
    },
    {
      key: "oneRoom",
      title: "원룸",
      placeholder: "원하시는 지역명, 지하철역을 입력해주세요",
    },
    {
      key: "officetel",
      title: "오피스텔",
      placeholder: "원하시는 지역명, 지하철역, 오피스텔명을 입력해주세요",
    },
    {
      key: "office",
      title: "창업/사무실",
      placeholder: "원하시는 지역명, 지하철역을 입력해주세요",
    },
  ];

  const [category, setCategory] = useState("apartment");
  const filterCategory = categoryIndex.find(item => item.key === category);

  const trackRef = useRef(null);

  const handleButtonClick = e => {
    // category 상태 변경
    setCategory(e.target.name);

    // 말풍선 이동
    const trackDiv = trackRef.current;
    const calTrack =
      e.target.getBoundingClientRect().left -
      document.querySelector(`button[name="apartment"]`).getBoundingClientRect()
        .left;
    trackDiv.style.transform = `translateX(${calTrack}px)`;
    console.log(calTrack);
  };

  return (
    <section className="flex">
      <div
        className={`flex flex-col justify-start items-center w-full h-[460px] relative bg-cover`}
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <p className="text-2xl font-bold text-center text-white mt-32 mb-16">
          어떤 집을 찾고 계세요?
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="flex flex-col h-16 pb-7">
              <div className="flex h-10 rounded-lg bg-[#03142d]/[0.85] relative">
                {categoryIndex.map(item => (
                  <button
                    key={item.key}
                    className={`justify-center items-center flex-grow w-28 h-10 px-2 whitespace-pre z-10 ${
                      filterCategory.key === item.key
                        ? "text-[#05372d] font-bold"
                        : "text-white text-lg"
                    }`}
                    onClick={handleButtonClick}
                    name={item.key}
                  >
                    {item.title}
                  </button>
                ))}
                <div
                  ref={trackRef}
                  style={{
                    backgroundImage: `url(${SpeechBubble})`,
                  }}
                  className="w-28 h-12 object-none absolute bg-cover transition-transform"
                ></div>
              </div>
            </div>
            <SearchBar placeholder={filterCategory.placeholder} />
          </div>
        </div>
      </div>
    </section>
  );
}
