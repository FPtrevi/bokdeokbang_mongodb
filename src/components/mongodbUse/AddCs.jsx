import axios from "axios";
import React, { useState } from "react";

export default function AddCs() {
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버에 데이터 전송
      const response = await axios.post(
        "http://localhost:5000/api/cs",
        formData
      );
      console.log("CS 요청 성공:", response.data);
    } catch (error) {
      console.error("CS 요청 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type:</label>
        <div>
          <input
            type="radio"
            name="type"
            value="FQnA"
            checked={formData.type === "FQnA"}
            onChange={handleChange}
            id="FQnA"
            required
          />
          <label for="FQnA">자주 묻는 질문</label>
        </div>
        <div>
          <input
            type="radio"
            name="type"
            value="Notice"
            checked={formData.type === "Notice"}
            onChange={handleChange}
            id="Notice"
            required
          />
          <label for="Notice">공지사항</label>
        </div>
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
