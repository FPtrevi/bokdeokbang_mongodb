import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Delete() {
  const [id, setId] = useState(""); // 삭제할 사용자의 ID를 저장하는 상태

  const queryClient = useQueryClient(); // 쿼리 클라이언트를 사용하여 데이터 캐시를 관리

  // 사용자를 삭제하기 위해 useMutation을 사용
  const mutation = useMutation({
    mutationFn: async (id) => {
      // 사용자의 ID를 사용하여 삭제 요청을 보냄
      const response = await axios.delete(
        `http://localhost:5000/api/user/delete/${id}`
      );
      return response.data; // 삭제된 데이터의 응답을 반환
    },
    onSuccess: () => {
      // 사용자를 성공적으로 삭제한 후 캐시된 데이터를 무효화하여 최신 상태로 유지
      queryClient.invalidateQueries(["allData"]);
    },
    onError: (err) => {
      // 오류가 발생했을 때 콘솔에 오류 메시지 출력
      console.error(err);
    },
  });

  // 사용자를 삭제하기 위한 함수
  const deleteUser = () => {
    // mutation.mutate를 호출하여 사용자 삭제 요청을 전송
    mutation.mutate(id);
  };

  return (
    <div>
      <h2>Delete</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)} // 입력된 ID를 상태로 업데이트
        placeholder="Enter user ID"
      />
      <button onClick={deleteUser}>Delete User</button>{" "}
      {/* 버튼 클릭 시 사용자 삭제 요청 */}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}{" "}
      {/* 오류가 발생하면 표시 */}
    </div>
  );
}
