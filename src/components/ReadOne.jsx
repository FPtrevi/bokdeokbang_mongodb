import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function ReadOne() {
  const [quantity, setQuantity] = useState(""); // 사용자가 입력한 수량을 저장하는 상태

  // 특정 수량에 해당하는 사용자 데이터를 가져오기 위해 useQuery를 사용
  const {
    data: user, // 가져온 사용자 데이터를 저장
    error, // 오류를 저장
    isLoading, // 로딩 상태를 저장
    refetch, // 수동으로 데이터를 가져오기 위한 함수
  } = useQuery({
    queryKey: ["user", quantity], // 쿼리 키에 수량을 포함하여 고유하게 만듦
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/api/user/${quantity}`
      );
      return response.data.readOne; // 해당 수량에 해당하는 사용자 데이터 반환
    },
    enabled: false, // 초기에는 쿼리를 비활성화하고, 필요할 때 refetch를 통해 수동으로 데이터를 가져옴
    staleTime: 1000 * 60 * 5, // 데이터가 5분 동안 신선하게 유지됨
  });

  // 버튼 클릭 시 데이터를 가져오는 함수
  const fetchUser = () => {
    refetch(); // 사용자가 입력한 수량에 해당하는 데이터를 가져옴
  };

  return (
    <div>
      <h2>Read One</h2>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)} // 입력된 수량을 업데이트
        placeholder="Enter quantity"
      />
      <button onClick={fetchUser}>Fetch User</button>{" "}
      {/* 버튼 클릭 시 데이터 가져오기 */}
      {isLoading ? (
        <div>Loading...</div> // 데이터가 로딩 중일 때 표시할 UI
      ) : error ? (
        <div>Error: {error.message}</div> // 오류가 발생했을 때 표시할 UI
      ) : user ? (
        <div>
          <h3>User Details:</h3>
          <p>Name: {user.name}</p>
          <p>Quantity: {user.quantity}</p>
          <p>Price: {user.price}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ReadOne;
