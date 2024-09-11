import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";

export default function NoticeDescription() {
  const { noticeNo } = useParams(); // noticeNo는 _id에 해당
  const navigate = useNavigate();

  // 데이터 가져오기
  const { data } = useQuery({
    queryKey: ["NoticeData"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/api/getnotice");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (!data) {
    return <div>로딩 중...</div>;
  }

  // 현재 공지사항을 _id로 필터링
  const currentIndex = data.findIndex((item) => item._id === noticeNo);

  if (currentIndex === -1) {
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const currentNotice = data[currentIndex];
  const previousNotice = currentIndex > 0 ? data[currentIndex - 1] : null;
  const nextNotice =
    currentIndex < data.length - 1 ? data[currentIndex + 1] : null;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col w-[1200px] h-96 border border-black mt-16">
        <div className="h-10 border-b-2 border-dashed border-black text-2xl px-2 my-2 items-center">
          {currentNotice.title}
        </div>
        <div className="text-right mt-1 mr-8 text-lg items-center mb-4">
          {new Date(currentNotice.update_date).toLocaleDateString("en-CA")}
        </div>
        <div className="text-xl">{currentNotice.content}</div>
      </div>

      <div className="flex flex-col w-[1200px]">
        <div
          className="w-20 h-8 rounded-full border border-black flex items-center justify-center mt-8 cursor-pointer"
          onClick={() => navigate("/support/notice")}
        >
          목록
        </div>

        <div className="flex flex-row mt-4 w-[1200px] mb-20">
          <div className="w-[5%] ml-2 my-2 flex flex-col justify-between">
            <p
              className={`text-xl font-bold cursor-pointer whitespace-pre ${
                !previousNotice && "text-gray-400"
              }`}
              onClick={() => {
                previousNotice &&
                  navigate(`/support/notice/detail/${previousNotice._id}`);
              }}
            >
              이전
            </p>
            <p
              className={`text-xl font-bold cursor-pointer whitespace-pre ${
                !nextNotice && "text-gray-400"
              }`}
              onClick={() => {
                nextNotice &&
                  navigate(`/support/notice/detail/${nextNotice._id}`);
              }}
            >
              다음
            </p>
          </div>

          <div className="flex flex-col border-b border-slate-400 w-full h-28">
            {!previousNotice ? (
              <div className="h-1/3 flex items-center justify-between px-4">
                이전 글이 없습니다.
              </div>
            ) : (
              <div
                className="h-1/3 flex items-center justify-between px-4 cursor-pointer"
                onClick={() =>
                  navigate(`/support/notice/detail/${previousNotice._id}`)
                }
              >
                <p>{previousNotice.title}</p>
                <p>
                  {new Date(previousNotice.update_date).toLocaleDateString(
                    "en-CA"
                  )}
                </p>
              </div>
            )}
            <div className="h-1/3 flex items-center justify-between bg-slate-100 px-4 cursor-pointer">
              <p>{currentNotice.title}</p>
              <p>
                {new Date(currentNotice.update_date).toLocaleDateString(
                  "en-CA"
                )}
              </p>
            </div>
            {!nextNotice ? (
              <div className="h-1/3 flex items-center justify-between px-4">
                다음 글이 없습니다.
              </div>
            ) : (
              <div
                className="h-1/3 flex items-center justify-between px-4 cursor-pointer"
                onClick={() =>
                  navigate(`/support/notice/detail/${nextNotice._id}`)
                }
              >
                <p>{nextNotice.title}</p>
                <p>
                  {new Date(nextNotice.update_date).toLocaleDateString("en-CA")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
