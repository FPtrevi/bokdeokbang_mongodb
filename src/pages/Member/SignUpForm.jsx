import React from "react";

const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">
          복덕방
        </h2>
        <h3 className="text-xl text-gray-700 mb-6 text-center">회원가입</h3>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4 text-gray-600 text-sm">
          <ol className="list-decimal list-inside">
            <li>
              공인중개업무 등록증에 등록된 대표 공인중개사만 회원가입이
              가능합니다.
            </li>
            <li>가입 신청 후, 관리자 승인을 통해 이용이 가능합니다.</li>
          </ol>
        </div>

        <form>
          {/* 이메일 입력 */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              이메일 주소
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="이메일 주소 입력"
              />
              <button className="bg-blue-500 text-white rounded-md px-4 ml-2">
                인증 요청
              </button>
            </div>
          </div>

          {/* 코드 입력 */}
          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-gray-700 font-medium mb-2"
            >
              코드 입력
            </label>
            <input
              type="text"
              id="code"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="코드 입력"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="8자리 이상 영문, 숫자 포함"
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-medium mb-2"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              id="confirm-password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="비밀번호 확인"
            />
          </div>

          {/* 중개소 사무소 정보 */}
          <div className="mb-4">
            <label
              htmlFor="office"
              className="block text-gray-700 font-medium mb-2"
            >
              중개사무소 정보
            </label>
            <button className="bg-gray-300 rounded-md px-4 py-2 w-full">
              중개사무소 찾기
            </button>
          </div>

          {/* 대표자 정보 */}
          <div className="mb-4">
            <label
              htmlFor="representative"
              className="block text-gray-700 font-medium mb-2"
            >
              대표자명
            </label>
            <input
              type="text"
              id="representative"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="대표자명"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="rep-phone"
              className="block text-gray-700 font-medium mb-2"
            >
              대표 전화
            </label>
            <input
              type="text"
              id="rep-phone"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="대표 전화"
            />
          </div>

          {/* 주소 */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              주소
            </label>
            <input
              type="text"
              id="address"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="주소"
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-gray-700">
              개인정보 수집 및 이용에 대한 동의
            </label>
          </div>

          {/* 회원가입 버튼 */}
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-full">
            회원가입
          </button>
        </form>

        <div className="text-center mt-4">
          <button className="text-blue-500">이미 회원이신가요? 로그인</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
