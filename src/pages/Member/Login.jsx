import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 처리 로직
    console.log("로그인 시도", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">
          복덕방
        </h2>
        <div className="mb-6">
          <button className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition">
            카카오로 3초 만에 바로시작
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              아이디
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="이메일 주소 입력"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="비밀번호 입력"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            로그인
          </button>
        </form>
        <div className="flex justify-center items-center mt-4 text-sm">
          <a
            href="/reset-password"
            className="text-gray-600 mx-2 hover:underline"
          >
            비밀번호 재설정
          </a>
          <a href="/signup" className="text-gray-600 mx-2 hover:underline">
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
