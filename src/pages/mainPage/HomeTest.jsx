import React from "react";
import Read from "../../components/Read";
import Create from "../../components/Create";
import ReadOne from "../../components/ReadOne";
import Update from "../../components/Update";
import Delete from "../../components/Delete";

export default function Home() {
  return (
    <>
      <Read />
      <Create />
      <ReadOne />
      <Update />
      <Delete />
    </>
  );
}
