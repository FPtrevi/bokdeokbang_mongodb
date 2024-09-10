import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Create() {
  // 새로운 사용자 정보를 관리하는 상태
  const [newUser, setNewUser] = useState({
    type: "",
    title: "",
    content: "",
  });

  const queryClient = useQueryClient(); // 쿼리 클라이언트를 사용해 캐시된 데이터 관리

  // 데이터를 추가하기 위해 useMutation을 사용
  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const response = await axios.post(
        "http://localhost:5000/api/postData",
        newUser
      );
      return response.data; // 새로 추가된 데이터를 반환
    },
    onSuccess: (data) => {
      // 데이터를 성공적으로 추가한 후 캐시된 데이터를 무효화하여 최신 상태로 유지
      queryClient.invalidateQueries(["allData"]);
      // 입력 필드를 초기화
      setNewUser({
        name: "",
        quantity: "",
        price: "",
      });
    },
    onError: (err) => {
      console.error(err); // 오류가 발생했을 때 콘솔에 오류 메시지 출력
    },
  });

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // 폼이 제출될 때 호출되는 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지
    mutation.mutate(newUser); // 새로운 사용자 데이터를 추가
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={newUser.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newUser.price}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}{" "}
      {/* 오류가 발생하면 표시 */}
    </div>
  );
}
