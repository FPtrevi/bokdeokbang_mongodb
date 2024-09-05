import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Update() {
  const [id, setId] = useState(""); // 수정할 사용자의 ID를 저장하는 상태
  const [newName, setNewName] = useState(""); // 수정할 사용자의 새로운 이름을 저장하는 상태

  const queryClient = useQueryClient(); // 쿼리 클라이언트를 사용해 캐시된 데이터 관리

  // 사용자를 업데이트하기 위해 useMutation을 사용
  const mutation = useMutation({
    mutationFn: async ({ id, newName }) => {
      const response = await axios.put(
        "http://localhost:5000/api/user/update",
        { id, newName } // 서버로 업데이트 요청을 보냄
      );
      return response.data; // 업데이트된 데이터를 반환
    },
    onSuccess: () => {
      // 업데이트가 성공적으로 완료되면, 캐시된 데이터를 무효화하여 최신 상태로 유지
      queryClient.invalidateQueries(["allData"]);
    },
    onError: (err) => {
      console.error(err); // 오류가 발생했을 때 콘솔에 오류 메시지 출력
    },
  });

  // 사용자를 업데이트하기 위한 함수
  const updateUser = () => {
    mutation.mutate({ id, newName }); // mutation.mutate를 호출하여 사용자를 업데이트
  };

  return (
    <div>
      <h2>Update</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)} // 입력된 ID를 업데이트
        placeholder="Enter user ID"
      />
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)} // 입력된 새로운 이름을 업데이트
        placeholder="Enter new name"
      />
      <button onClick={updateUser}>Update User</button>{" "}
      {/* 버튼 클릭 시 사용자 업데이트 */}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}{" "}
      {/* 오류가 발생하면 표시 */}
    </div>
  );
}

export default Update;
