import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/mainPage/Home";
import NewPage from "./pages/page1/NewPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/pageadd", element: <NewPage /> },
      // /support의 주소 안에서의 새로운 주소 할당
      // {
      //   path: "/support",
      //   element: <SupportMain />,
      //   children: [
      //     { index: true, element: <FrequentlyAskedQuestions /> },
      //     { path: "inquiry", element: <OneonOneAsk /> },
      //     { path: "notice", element: <Notice /> },
      //     { path: "notice/:page", element: <Notice /> },
      //     { path: "notice/detail/:noticeNo", element: <NoticeDescription /> },
      //   ],
      // },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
