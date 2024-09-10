import React from "react";

export default function Transaction({ form, handleChange, handleRadioChange }) {
  return (
    <>
      <div>
        <label className="block font-semibold mb-1">매물 번호</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="house_no"
          name="house_no"
          onChange={handleChange}
          value={form.house_no}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">매물 정보 제목 :</label>
        <input
          className="border p-2 w-full rounded"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={form.title}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">상세 설명 :</label>
        <input
          className="border p-2 w-full rounded"
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
          value={form.description}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">계약 유형:</label>
        {["매매", "전세", "월세", "단기임대"].map(type => (
          <label key={type}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="sales_type"
              value={type}
              onChange={() => handleRadioChange("sales_type", type)}
              checked={form.sales_type === type}
            />
            {type}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">보증금/전세금 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="deposit"
          name="deposit"
          onChange={handleChange}
          value={form.deposit}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">월세 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="monthly_cost"
          name="monthly_cost"
          onChange={handleChange}
          value={form.monthly_cost}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">관리비 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="manage_cost"
          name="manage_cost"
          onChange={handleChange}
          value={form.manage_cost}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">전세 대출 가능 여부:</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="loan"
              value={value}
              onChange={() => handleRadioChange("loan", value)}
              checked={form.loan === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">계약 가능 여부:</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="sales_status"
              value={value}
              onChange={() => handleRadioChange("sales_status", value)}
              checked={form.sales_status === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">단기임대 :</label>
        {["Y", "N"].map(value => (
          <label key={value}>
            <input
              className="ml-5 mb-2"
              type="radio"
              name="shortterm"
              value={value}
              onChange={() => handleRadioChange("shortterm", value)}
              checked={form.shortterm === value}
            />
            {value}
          </label>
        ))}
      </div>
      <div>
        <label className="block font-semibold mb-1">중개수수료 :</label>
        <input
          className="border p-2 w-full rounded"
          type="number"
          id="charge"
          name="charge"
          onChange={handleChange}
          value={form.charge}
        />
      </div>
    </>
  );
}
