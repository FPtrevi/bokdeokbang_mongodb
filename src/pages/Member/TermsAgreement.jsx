import React, { useState } from "react";

const TermsAgreement = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [terms, setTerms] = useState({
    age: false,
    service: false,
    privacy: false,
    marketing: false,
  });

  const handleAllChecked = () => {
    const newCheckedStatus = !allChecked;
    setAllChecked(newCheckedStatus);
    setTerms({
      age: newCheckedStatus,
      service: newCheckedStatus,
      privacy: newCheckedStatus,
      marketing: newCheckedStatus,
    });
  };

  const handleTermChange = (e) => {
    const { name, checked } = e.target;
    setTerms((prevTerms) => ({
      ...prevTerms,
      [name]: checked,
    }));
    if (!checked) setAllChecked(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-600 mb-2">복덕방</h2>
        <h3 className="text-xl font-semibold mb-4">약관동의</h3>
        <p>환영합니다! 복덕방 서비스 이용약관에 동의해주세요.</p>
      </div>

      <div className="w-full max-w-md bg-white">
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={handleAllChecked}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
            <span className="ml-2 text-gray-800">네, 모두 동의합니다.</span>
          </label>
        </div>

        <div className="space-y-4 mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="age"
              checked={terms.age}
              onChange={handleTermChange}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
            <span className="ml-2 text-gray-800">
              [필수] 만 14세 이상입니다.
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="service"
              checked={terms.service}
              onChange={handleTermChange}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
            <span className="ml-2 text-gray-800">
              [필수] 다방 서비스 이용약관 동의
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="privacy"
              checked={terms.privacy}
              onChange={handleTermChange}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
            <span className="ml-2 text-gray-800">
              [필수] 개인정보 수집 및 이용 동의
            </span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              checked={terms.marketing}
              onChange={handleTermChange}
              className="form-checkbox h-5 w-5 text-yellow-500"
            />
            <span className="ml-2 text-gray-800">
              [선택] 마케팅 정보 수신에 대한 동의
            </span>
          </label>
        </div>

        <div className="text-xs text-gray-500 mb-6">
          만 14세 이상만 회원 가입이 가능합니다. <br />
          해당 내용은{" "}
          <a href="/terms" className="text-blue-500 underline">
            이용약관
          </a>{" "}
          및{" "}
          <a href="/privacy" className="text-blue-500 underline">
            개인정보 처리방침
          </a>
          에서 확인 가능합니다.
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          동의하고 진행하기
        </button>
      </div>
    </div>
  );
};

export default TermsAgreement;
