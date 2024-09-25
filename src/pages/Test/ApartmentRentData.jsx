import React, { useEffect, useState } from "react";
import axios from "axios";

const ApartmentRentData = () => {
  const [rentData, setRentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apis.data.go.kr/1613000/RTMSDataSvcAptRent/getRTMSDataSvcAptRent",
          {
            params: {
              LAWD_CD: "11110", // 지역코드
              DEAL_YMD: "201801", // 연월
              serviceKey: process.env.REACT_APP_API_KEY,
            },
          }
        );

        console.log(response.data.response.body.items.item);

        setRentData(response.data.response.body.items.item);
      } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>아파트 전월세 실거래가</h1>
      <ul>
        {rentData.map((item, index) => (
          <li key={index}>{item.aptNm}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApartmentRentData;
