import React from "react";

export default function RoomForm({
  form,
  handleChange,
  handleRadioChange,
  handleImageUpload,
}) {
  return (
    <>
      <div>
        <label className="block font-semibold mb-1">대표 사진:</label>
        <input
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          type="file"
          id="thumnail"
          name="thumnail"
          onChange={handleChange}
        />
      </div>
      <div className="w-full h-64 border-2 border-black items-center flex mt-2 mb-2">
        {form.thumnail ? (
          <img
            src={URL.createObjectURL(form.thumnail)}
            alt="대표 사진 미리보기"
            className="max-w-xs h-auto ml-1 border-2 border-black items-center"
          />
        ) : null}
      </div>
      <div>
        <label className="block font-semibold mb-1">새로운 사진 업로드:</label>
        <input
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          type="file"
          id="images"
          name="images"
          onChange={handleImageUpload}
          multiple // 여러 개의 파일을 선택할 수 있도록 추가
        />
      </div>
      <div>
        <div className="flex flex-nowrap h-64 mt-2 mb-2 items-center border-2 border-black overflow-x-scroll">
          {form.images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`미리보기 이미지 ${index + 1}`}
              className="h-60 max-w-xs border-2 border-black m-1"
            />
          ))}
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-1">매물 층수 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="floor"
          name="floor"
          onChange={handleChange}
          value={form.floor}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">방 유형 :</label>
        <input
          className="border p-2 w-full rounded"
          type="text"
          id="room_type"
          name="room_type"
          onChange={handleChange}
          value={form.room_type}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">방 갯수 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="room_count"
          name="room_count"
          onChange={handleChange}
          value={form.room_count}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">방향 :</label>
        <input
          className="border p-2 w-full rounded"
          type="text"
          id="direction"
          name="direction"
          onChange={handleChange}
          value={form.direction}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">주차 가능 수 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="parking"
          name="parking"
          onChange={handleChange}
          value={form.parking}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">전용면적(평) :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="size_p"
          name="size_p"
          onChange={handleChange}
          value={form.size_p}
          disabled
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">전용면적(m2) :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="size_m2"
          name="size_m2"
          onChange={handleChange}
          value={form.size_m2}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">
          반려동물 동반 가능 여부:
        </label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="pet"
              value={value}
              onChange={() => handleRadioChange("pet", value)}
              checked={form.pet === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">입주 가능일 :</label>
        <input
          className="border p-2 w-full rounded"
          type="text"
          id="movein_date"
          name="movein_date"
          onChange={handleChange}
          value={form.movein_date}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">옵션 정보:</label>
        {[
          "베란다/테라스",
          "주차",
          "애완동물",
          "냉장고",
          "전자레인지",
          "세탁기",
          "건조기",
          "에어컨",
          "침대",
          "책상",
          "옷장",
          "신발장",
          "샤워부스",
          "싱크대",
          "인덕션",
          "붙박이장",
          "화재경보기",
          "CCTV",
          "비디오폰",
          "보안 경비원",
          "인터폰",
          "전자도어락",
        ].map(option => (
          <label key={option}>
            <input
              className="m-2"
              type="checkbox"
              name="option_info"
              value={option}
              onChange={handleChange}
              checked={form.option_info.includes(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">풀옵션 :</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="fulloption"
              value={value}
              onChange={() => handleRadioChange("fulloption", value)}
              checked={form.fulloption === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">베란다 유무 :</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="veranda"
              value={value}
              onChange={() => handleRadioChange("veranda", value)}
              checked={form.veranda === value}
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
}
