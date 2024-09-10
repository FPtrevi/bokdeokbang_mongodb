import React from "react";
import { Outlet } from "react-router-dom";
import SupportHeader from "../../components/Support/SupportHeader";

export default function SupportMain() {
  return (
    <>
      <SupportHeader />
      <Outlet />
    </>
  );
}
