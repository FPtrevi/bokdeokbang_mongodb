import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import FrequentlyAskedQuestionItems from "../../components/Support/FrequentlyAskedQuestionItems";

export default function FrequentlyAskedQuestions() {
  const { data: askList } = useQuery({
    queryKey: ["FrequentlyAskedQuestions"],
    queryFn: async () => {
      return axios
        .get("/Mock/FrequentlyAskedQuestions.json")
        .then((res) => res.data.list);
    },
  });

  return (
    // Support Header
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-[1200px] whitespace-pre">
        {/* Support Body */}

        <div className="flex flex-col self-stretch pt-24 pb-20 border-b border-[#ccc] items-center">
          <p className="text-2xl">
            <span className="text-[#666]">다방 사용자의 편의를 위해 </span>
            <span className="text-[#1564f9]">자주 묻는 질문과 답변</span>
            <span className="text-[#666]">을 모아놓았습니다.</span>
          </p>

          <p className="w-[289px] text-2xl text-[#666]">
            원하시는 질문을 찾아보세요!
          </p>
        </div>
        {/* use ReactQuery */}
        <div className="flex flex-col self-stretch pb-[150px]">
          {askList &&
            askList.map((list, index) => (
              <FrequentlyAskedQuestionItems
                key={index}
                title={list.title}
                description={list.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
