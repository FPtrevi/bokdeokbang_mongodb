import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ReactComponent as Left } from "../../assets/svg/Left.svg";
import { ReactComponent as Right } from "../../assets/svg/Right.svg";
import { ReactComponent as Ruler } from "../../assets/svg/Ruler.svg";
import { ReactComponent as Home } from "../../assets/svg/Home.svg";
import { ReactComponent as Elevator } from "../../assets/svg/Elevator.svg";
import { ReactComponent as Bill } from "../../assets/svg/Bill.svg";

export default function SaleDetails() {
  const { id } = useParams();

  const { isLoading, data } = useQuery(
    ["buildingList"],
    async () => {
      const response = await axios.get("/Mock/ListofSale.json");
      return response.data;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) {
    // 데이터가 없을 경우 로딩 또는 에러 처리
    return <div>로딩 중...</div>;
  }

  const noticeIndex = data.findIndex((item) => item.house_no === id);
  const filterData = data[noticeIndex];

  console.log(filterData);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-[1100px]">
        <div className="flex w-full justify-center">
          <div className="w-3/5 h-[350px] overflow-hidden relative">
            <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 p-2">
              <div className="bg-slate-300 rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer">
                <Left />
              </div>
              <div className="bg-slate-300 rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer">
                <Right />
              </div>
            </div>
            <div className="flex">
              {filterData.images.map((item, index) => (
                <img key={index} src={item.src} alt="pic1" className="w-full" />
              ))}
            </div>
          </div>
          <div className="w-2/5 mx-4">
            <div>
              <div className="bg-[#f8f0e5] border border-[#dac0a3] rounded-xl flex justify-center w-56">
                매물번호 {id}
              </div>
              <div></div>
            </div>
            <div>
              <p className="text-xl my-4">사무소</p>
              <p className="text-2xl font-semibold pb-4">{`${filterData.sales_type} ${filterData.monthly_cost}`}</p>
              <p className="pb-4">{filterData.address1}</p>
            </div>
            <div className="flex flex-wrap whitespace-pre">
              <div className="flex items-center mr-16 mb-6">
                <Home className="w-10 h-10" />
                <span className="text-lg font-semibold mx-2">
                  {filterData.room_type}
                </span>
              </div>
              <div className="flex items-center mr-16 mb-6">
                <Ruler className="w-10 h-10" />
                <span className="text-lg font-semibold mx-2">
                  {filterData.size_m2}㎡
                </span>
              </div>
              <div className="flex items-center mr-16 mb-6">
                <Elevator className="w-10 h-10" />
                <span className="text-lg font-semibold mx-2">
                  {filterData.floor}층
                </span>
              </div>
              <div className="flex items-center mr-16 mb-6">
                <Bill className="w-10 h-10" />
                <span className="text-lg font-semibold mx-2">
                  월 {filterData.monthly_cost / 10000}만원
                </span>
              </div>
            </div>
            <div className="bg-[#295086] w-52 h-14 text-white flex justify-center items-center cursor-pointer">
              연락처보기
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full my-4">
            <div className="text-slate text-slate-500 mx-8">가격정보</div>
            <div className="text-slate text-slate-500 mx-8">상세정보</div>
            <div className="text-slate text-slate-500 mx-8">옵션</div>
            <div className="text-slate text-slate-500 mx-8">보안/안전시설</div>
            <div className="text-slate text-slate-500 mx-8">위치 및 주변</div>
            <div className="text-slate text-slate-500 mx-8">상세 설명</div>
            <div className="text-slate text-slate-500 mx-8">실거주리뷰</div>
            <div className="text-slate text-slate-500 mx-8">실거래가</div>
          </div>
          <div>리스트별 ui</div>
        </div>
      </div>
    </div>
  );
}
