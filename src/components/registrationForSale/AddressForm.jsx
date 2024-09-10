import React, { useEffect } from "react";
const { kakao } = window;

export default function AddressForm({ form, setForm, handleChange }) {
  useEffect(() => {
    // 외부 스크립트 로딩
    const addressScript = document.createElement("script");
    addressScript.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    addressScript.async = true;
    document.head.appendChild(addressScript);

    return () => {
      // 컴포넌트 언마운트 시에 스크립트 제거
      document.head.removeChild(addressScript);
    };
  }, []);

  function initDaumPostcode() {
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 좌표 변환 요청
        kakao.maps.load(() => {
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(data.roadAddress, function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              // 변환된 좌표값 설정
              const { x, y } = result[0];
              setForm({
                ...form,
                ["zip_code"]: data.zonecode,
                ["address1"]: data.roadAddress,
                ["lat"]: x,
                ["lng"]: y,
              });
            } else {
              console.error("주소를 좌표로 변환할 수 없습니다.");
            }
          });
        });

        // 주소를 좌표로 변환
      },
    }).open();
  }
  return (
    <>
      <div>
        <label className="block font-semibold mb-1">주소 :</label>
        <div className="mb-2">
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            placeholder="우편번호"
            onChange={handleChange}
            value={form.zip_code}
          />
          <input
            type="button"
            onClick={initDaumPostcode}
            value="우편번호 찾기"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <input
            className="w-1/2"
            type="text"
            id="address1"
            name="address1"
            onChange={handleChange}
            value={form.address1}
            placeholder="도로명주소"
          />
          <input
            className="w-1/3"
            type="text"
            id="address2"
            name="address2"
            onChange={handleChange}
            value={form.address2}
            placeholder="상세주소"
          />
        </div>
      </div>
    </>
  );
}
