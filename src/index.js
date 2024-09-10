import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/MainPage/Home";
import List from "./pages/List/List";
import RealEstate from "./pages/RealEstate/RealEstate";
import SearchHouse from "./pages/SearchHouse/SearchHouse";
import FrequentlyAskedQuestions from "./pages/Support/FrequentlyAskedQuestions";
import WriteForm from "./pages/WriteForm";
import Register from "./pages/Member/Register";
import Login from "./pages/Member/Login";
import SupportMain from "./pages/Support/SupportMain";
import OneonOneAsk from "./pages/Support/OneonOneAsk";
import Notice from "./pages/Support/Notice/Notice";
import NoticeDescription from "./pages/Support/Notice/NoticeDescription";
import SaleDetails from "./pages/List/SaleDetails";
import AddCs from "./components/mongodbUse/AddCs";

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
      { path: "/registration/room", element: <WriteForm /> },
      { path: "/list", element: <List /> },
      { path: "/list/details/:id", element: <SaleDetails /> },
      { path: "/realEstate", element: <RealEstate /> },
      { path: "/searchHouse", element: <SearchHouse /> },
      { path: "/addcs", element: <AddCs /> },
      {
        path: "/support",
        element: <SupportMain />,
        children: [
          { index: true, element: <FrequentlyAskedQuestions /> },
          { path: "inquiry", element: <OneonOneAsk /> },
          { path: "notice", element: <Notice /> },
          { path: "notice/:page", element: <Notice /> },
          { path: "notice/detail/:noticeNo", element: <NoticeDescription /> },
        ],
      },
      { path: "/member/login", element: <Login /> },
      { path: "/member/register/:category", element: <Register /> },
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
