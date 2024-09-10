import React, { useState } from "react";
import { ReactComponent as Camera } from "../../assets/svg/Camera.svg";

export default function OneonOneAsk() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    title: "",
    content: "",
    images: [],
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const maxImageCount = 3;

    // 이미지 업로드 처리 로직
    const newImages = formData.images.slice(); // 기존 이미지 복사

    for (const file of files) {
      // 파일 크기 검사
      if (file.size > maxFileSize) {
        alert(`파일 '${file.name}'의 크기가 10MB를 초과합니다.`);
        continue;
      }

      // 이미지 갯수 검사
      if (newImages.length >= maxImageCount) {
        alert(`이미지는 최대 ${maxImageCount}개까지 업로드 가능합니다.`);
        break; // 이미 최대 갯수에 도달했으면 반복문 종료
      }

      // 파일 추가
      newImages.push(file);
    }

    setFormData({
      ...formData,
      images: newImages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이제 formData 객체를 사용하여 원하는 방식으로 데이터를 처리하실 수 있습니다.
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-[1200px] whitespace-pre">
        {/* Support Body */}
        <div className="flex flex-col self-stretch pt-24 pb-20 items-center">
          <p className="text-2xl text-[#666]">
            다방에 궁굼하신 점을 문의해주세요
          </p>

          <p className="text-2xl text-[#666]">
            <span>문의내용과 답변은 '</span>
            <span className="text-[#1564f9]">1:1 문의내역</span>
            <span>'에서 확인하실 수 있습니다.</span>
          </p>
        </div>
        {/* form */}
        <form
          className="w-[850px] border-t border-[#ccc]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row items-center py-4 border-b">
            <label className="font-medium text-gray-700 w-36 flex items-center justify-center">
              문의유형
            </label>
            <select
              className="w-full p-2 border rounded focus:ring focus:ring-blue-200 mr-2"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
            >
              <option value="">선택하세요</option>
              <option value="매물">매물</option>
              <option value="등록">등록</option>
              <option value="기타">기타</option>
            </select>
          </div>
          <div className="flex flex-row items-center py-4 border-b">
            <label className="font-medium text-gray-700 w-36 flex items-center justify-center">
              제목
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center py-4 border-b">
            <label className="font-medium text-gray-700 w-36 flex items-center justify-center">
              문의내용
            </label>
            <textarea
              className="w-full p-2 border rounded focus:ring focus:ring-blue-200 resize-none h-80"
              rows="4"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row items-center py-4 border-b">
            <label className="font-medium text-gray-700 w-36 flex items-center justify-center">
              사진 첨부
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <div className="flex flex-col">
              <div className="flex">
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex items-center justify-center w-16 h-16 border border-dashed rounded w-32 h-32"
                >
                  <div className="text-center flex flex-col justify-center items-center w-full h-full">
                    <Camera />
                    <span className="mt-2 text-sm text-gray-600">
                      사진 첨부
                    </span>
                  </div>
                </label>
                {formData.images.length > 0 && (
                  <div className="ml-4 flex justify-start">
                    {formData.images.map((image, index) => (
                      <div key={index} className="w-32 h-32 ml-4 border">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded Images ${index + 1}`}
                          className="w-32 h-32 object-cover rounded"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-[#ccc] text-sm mt-4">
                <p>- 사진 용량은 사진 한 장당 10MB 까지 등록이 가능합니다</p>
                <p>- 사진은 최대 3장까지 등록이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex justify-center items-center w-56 h-14 relative rounded-sm bg-[#a0846f] my-12"
            >
              <span className="text-white">문의하기</span>
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center h-[100px] w-[850px] gap-1 rounded-sm border border-[#e7e7e7]">
          <div className="flex flex-col justify-start items-center self-stretch relative">
            <p className="text-center">
              <span className="text-center text-[#222]">고객센터 : </span>
              <span className="text-center text-[#326cf9]">02-1899-6840</span>
            </p>
          </div>
          <div className="flex flex-col items-center self-stretch relative">
            <p className="text-sm text-center text-[#868686]">
              평일 10:00 ~ 18:30 (토, 일요일, 공휴일 휴무)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
