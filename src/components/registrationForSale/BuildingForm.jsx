import React from "react";

export default function BuildingForm({
  form,
  handleChange,
  handleRadioChange,
}) {
  return (
    <>
      <div>
        <label className="block font-semibold mb-1">건물 유형:</label>
        {["아파트", "주택", "상가", "오피스텔", "공동주택", "원룸"].map(
          type => (
            <label key={type}>
              <input
                className="ml-5 mb-2"
                type="radio"
                name="building_type"
                value={type}
                onChange={() => handleRadioChange("building_type", type)}
                checked={form.building_type === type}
              />
              {type}
            </label>
          )
        )}
      </div>
      <div>
        <label className="block font-semibold mb-1">건물 층수 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="building_floor"
          name="building_floor"
          onChange={handleChange}
          value={form.building_floor}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">사용승인일 :</label>
        <input
          className="border p-2 w-full rounded"
          type="date"
          id="approve_date"
          name="approve_date"
          onChange={handleChange}
          value={form.approve_date}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">엘레베이터 유무 :</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="elevator"
              value={value}
              onChange={() => handleRadioChange("elevator", value)}
              checked={form.elevator === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">보안시설 유무 :</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="security"
              value={value}
              onChange={() => handleRadioChange("security", value)}
              checked={form.security === value}
            />
            {value}
          </label>
        ))}
      </div>
    </>
  );
}
