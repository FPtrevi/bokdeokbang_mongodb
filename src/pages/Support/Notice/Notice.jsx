import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Notice() {
  const navigate = useNavigate();
  const { page } = useParams(); // 동적 페이지 번호 파라미터
  const itemsPerPage = 10;

  const { data: allData } = useQuery({
    queryKey: ["NoticeData"],
    queryFn: async () => {
      const response = await axios.get("/Mock/Notice.json");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  const currentPage = page ? parseInt(page) : 1; // 페이지 파라미터가 없을 때 기본 페이지를 1로 설정

  const filteredData = allData
    ? allData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const totalPages = Math.ceil((allData ? allData.length : 0) / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    const maxButtons = 5;

    // 페이지 버튼의 시작과 끝을 계산
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = startPage + maxButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => navigate(`/support/notice/${i}`)}
          className={`m-1 px-2 ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-[1200px] px-2.5">
        <div className="flex flex-col self-stretch border-t border-[#222]">
          <div className="flex self-stretch h-14 border-b border-[#ccc]">
            <div className="flex justify-center items-center self-stretch w-5/6">
              <p className="text-sm font-medium text-[#222] whitespace-pre">
                제목
              </p>
            </div>
            <div className="flex justify-center items-center self-stretch w-1/6">
              <p className="text-sm font-medium text-[#222] whitespace-pre">
                날짜
              </p>
            </div>
          </div>
          {filteredData &&
            filteredData.map((item) => (
              <div
                key={item.noticeNo}
                className="flex flex-col self-stretch border-b border-[#eee] cursor-pointer"
                onClick={() => {
                  navigate(`/support/notice/detail/${item.noticeNo}`);
                }}
              >
                <div className="flex items-center self-stretch h-14 pl-7">
                  <div className="flex flex-col w-5/6">
                    <p className="text-sm text-left text-black">{item.title}</p>
                  </div>
                  <div className="flex flex-col items-center w-1/6">
                    <p className="text-sm text-black">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}

          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                const newPage = currentPage - 1;
                if (newPage >= 1) {
                  navigate(`/support/notice/${newPage}`);
                }
              }}
              disabled={currentPage === 1}
              className="mx-1 p-2"
            >
              이전
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => {
                const newPage = currentPage + 1;
                if (newPage <= totalPages) {
                  navigate(`/support/notice/${newPage}`);
                }
              }}
              disabled={currentPage === totalPages}
              className="mx-1 p-2"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
