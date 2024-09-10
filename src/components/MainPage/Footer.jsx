import React from "react";
import instargram from "../../assets/images/instargram.png";
import blog from "../../assets/images/blog.png";
import facebook from "../../assets/images/facebook.png";
import naver from "../../assets/images/naver.png";
import youtube from "../../assets/images/youtube.png";
import { ReactComponent as Search } from "../../assets/svg/Search.svg";
import { ReactComponent as Down } from "../../assets/svg/Down.svg";
import { ReactComponent as Up } from "../../assets/svg/Up.svg";
import { useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();

  return (
    <div
      className={`flex flex-col items-center w-full bg-[#373737] whitespace-pre ${
        location.pathname === "/member/login" ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col w-[1200px] px-2.5">
        <div className="flex h-[70px] border-b border-[#454545]">
          <div className="flex flex-col justify-center w-3/5">
            <div className="flex">
              <p className="text-xs text-left text-[#aaa] px-3">회사소개</p>
              <p className="text-xs text-left text-[#aaa] px-3 border-l border-[#666]">
                이용약관
              </p>
              <p className="text-xs text-left text-[#aaa] px-3 border-l border-[#666]">
                개인정보처리방침
              </p>
              <p className="text-xs text-left text-[#aaa] px-3 border-l border-[#666]">
                매물관리규정
              </p>
            </div>
          </div>
          <div className="flex items-center border-0 border-[#454545] w-2/5 justify-between">
            <div>
              <div className="flex items-center">
                <div className="flex flex-col pr-6">
                  <p className="text-xs text-left text-[#909090]">
                    일반 매물번호
                  </p>
                </div>
                <Down />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center w-[18px]">
                <Search />
              </div>
              <div className="flex flex-col justify-center items-center w-[70px] border-r border-[#454545]">
                <div className="flex flex-col pb-1">
                  <div className="flex flex-col justify-center items-center">
                    <Up />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-center text-[#d2d6da]">TOP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-8 pb-4">
          <div className="">
            <div className="flex flex-col">
              <p className="text-xs text-[#a0a0a0]">(주)스테이션3</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-[#a0a0a0]">대표 : 유형석</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-left text-[#a0a0a0]">
                사업자 번호: 220-88-59156 통신판매업신고번호 : 제2013-서울
                강남-02884호
              </p>
            </div>
            <div className="flex flex-col mb-6">
              <p className="text-xs text-left text-[#a0a0a0]">
                주소 : 서울시 서초구 서초대로 301 동익 성봉빌딩 10층
                (주)스테이션3
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-left text-[#a0a0a0]">
                고객센터 : 02-1899-6840 | 평일 10:00 ~ 18:30, 점심시간 : 12:00 ~
                13:00 (토·일요일, 공휴일 휴무)
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="text-xs text-left text-[#a0a0a0]">
                팩스 : 02-554-9774 프로모션/사업 제휴문의 : biz@station3.co.kr
              </p>
            </div>

            <div className="flex mb-8">
              <div className="flex justify-center items-center px-2 py-2 rounded-sm bg-[#515151]">
                <p className="text-xs text-neutral-200">자주묻는 질문</p>
              </div>
              <div className="flex flex-col pl-2">
                <div className="flex justify-center items-center p-2 rounded-sm bg-[#515151]">
                  <p className="text-xs text-neutral-200">1:1문의</p>
                </div>
              </div>
              <div className="flex flex-col pl-2">
                <div className="flex justify-center items-center p-2 rounded-sm bg-[#326cf9]">
                  <p className="text-xs font-bold text-center text-white">
                    광고문의
                  </p>
                  <div className="flex flex-col w-[18px] pl-1">
                    <div className="flex flex-col justify-center items-center h-3.5  overflow-hidden">
                      <svg
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 "
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M7.20996 14C11.076 14 14.21 10.866 14.21 7C14.21 3.13401 11.076 0 7.20996 0C3.34397 0 0.209961 3.13401 0.209961 7C0.209961 10.866 3.34397 14 7.20996 14Z"
                          fill="white"
                        />
                        <path
                          d="M4.55371 9.34372L9.1499 4.74753C9.34517 4.55226 9.66175 4.55226 9.85701 4.74753C10.0523 4.94279 10.0523 5.25937 9.85701 5.45463L5.26082 10.0509L4.55371 9.34372Z"
                          fill="#326CF9"
                        />
                        <path
                          d="M9.53857 4.67139H6.53857V5.67139H9.53857V4.67139Z"
                          fill="#326CF9"
                        />
                        <path
                          d="M8.95264 5.08545V8.08545H9.95264V5.08545H8.95264Z"
                          fill="#326CF9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[940px] left-0 top-[185px] pr-[767px]">
              <p className="text-[11.25px] text-left text-[#a0a0a0]">
                Station3, Inc. All rights reserved.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex justify-end ">
              <img
                src={instargram}
                className="w-10 rounded-[20px] object-none"
              />
              <div className="flex flex-col w-[50px]  pl-2.5">
                <img
                  src={facebook}
                  className="h-10 rounded-[20px] object-none"
                />
              </div>
              <div className="flex flex-col w-[50px]  pl-2.5">
                <img src={blog} className="h-10 rounded-[20px] object-none" />
              </div>
              <div className="flex flex-col w-[50px]  pl-2.5">
                <img src={naver} className="h-10 rounded-[20px] object-none" />
              </div>
              <div className="flex flex-col w-[50px]  pl-2.5">
                <img
                  src={youtube}
                  className="h-10 rounded-[20px] object-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
