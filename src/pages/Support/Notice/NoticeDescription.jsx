import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";

export default function NoticeDescription() {
  const { noticeNo } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["NoticeData"],
    queryFn: async () => {
      const response = await axios.get("/Mock/Notice.json");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (!data) {
    // 데이터가 없을 경우 로딩 또는 에러 처리
    return <div>로딩 중...</div>;
  }

  // 공지사항의 noticeNo에 해당하는 데이터 필터링
  const noticeIndex = data.findIndex((item) => item.noticeNo === noticeNo);

  if (noticeIndex === -1) {
    // noticeNo에 해당하는 데이터가 없을 경우 처리 (예: 에러 처리 또는 리디렉션)
    return <div>공지사항을 찾을 수 없습니다.</div>;
  }

  const notice = data[noticeIndex];

  const previousNotice = noticeIndex > 0 ? data[noticeIndex - 1] : null;
  const nextNotice =
    noticeIndex < data.length - 1 ? data[noticeIndex + 1] : null;
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-col w-[1200px] h-96 border border-black mt-16">
        <div className="h-10 border-b-2 border-dashed border-black text-2xl px-2 my-2 items-center">
          {notice.title}
        </div>
        <div className="text-right mt-1 mr-8 text-lg items-center mb-4">
          {notice.date}
        </div>
        <div className="text-xl">{notice.description}</div>
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
              className="text-xl font-bold cursor-pointer whitespace-pre"
              onClick={() => {
                previousNotice &&
                  navigate(`/support/notice/detail/${previousNotice.noticeNo}`);
              }}
            >
              이전
            </p>
            <p
              className="text-xl font-bold cursor-pointer whitespace-pre"
              onClick={() => {
                nextNotice &&
                  navigate(`/support/notice/detail/${nextNotice.noticeNo}`);
              }}
            >
              다음
            </p>
          </div>
          <div className="flex flex-col border-b border-slate-400 w-full h-28">
            {!previousNotice && (
              <div className="h-1/3 flex items-center justify-between px-4 cursor-pointer">
                이전 글이 없습니다.
              </div>
            )}
            {previousNotice && (
              <div
                className="h-1/3 flex items-center justify-between px-4 cursor-pointer"
                onClick={() => {
                  previousNotice &&
                    navigate(
                      `/support/notice/detail/${previousNotice.noticeNo}`
                    );
                }}
              >
                <p>{previousNotice.title}</p>
                <p>{previousNotice.date}</p>
              </div>
            )}
            {notice && (
              <div className="h-1/3 flex items-center justify-between bg-slate-100 px-4 cursor-pointer">
                <p>{notice.title}</p>
                <p>{notice.date}</p>
              </div>
            )}
            {nextNotice && (
              <div
                className="h-1/3 flex items-center justify-between px-4 cursor-pointer"
                onClick={() => {
                  nextNotice &&
                    navigate(`/support/notice/detail/${nextNotice.noticeNo}`);
                }}
              >
                <p>{nextNotice.title}</p>
                <p>{nextNotice.date}</p>
              </div>
            )}
            {!nextNotice && (
              <div className="h-1/3 flex items-center justify-between px-4 cursor-pointer">
                다음 글이 없습니다.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
