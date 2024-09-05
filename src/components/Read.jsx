import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Read() {
  // 데이터를 가져오기 위해 useQuery를 사용
  const { data, error, isLoading } = useQuery({
    queryKey: ["allData"], // 캐시에서 이 쿼리를 식별하는 데 사용되는 고유 키
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/api/data"); // API 요청
      return response.data; // API 응답 데이터를 반환
    },
    staleTime: 1000 * 60 * 5, // 데이터가 5분 동안 신선하게 유지됨
  });

  // 데이터 로딩 중일 때 표시할 UI
  if (isLoading) return <div>Loading...</div>;
  // 데이터 가져오기 중 오류가 발생했을 때 표시할 UI
  if (error) return <div>Error: {error.message}</div>;

  // 데이터를 성공적으로 가져왔을 때의 UI
  return (
    <div>
      <h1>User Information</h1>
      {data && data.length > 0 ? (
        data.map((user, index) => (
          <div key={user.id || index}>
            <div>name: {user.name}</div>
            <div>quantity: {user.quantity}</div>
            <div>price: {user.price}</div>
          </div>
        ))
      ) : (
        <div>No users found</div> // 데이터가 없을 때 표시할 메시지
      )}
    </div>
  );
}

export default Read;
