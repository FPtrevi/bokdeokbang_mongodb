import React, { useState } from "react";
import FORM_DATA from "../constants/formdata";
import BuildingForm from "../components/registrationForSale/BuildingForm";
import RoomForm from "../components/registrationForSale/RoomForm";
import Transaction from "../components/registrationForSale/Transaction";
import AddressForm from "../components/registrationForSale/AddressForm";

export default function WriteForm() {
  const [form, setForm] = useState(FORM_DATA);
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      if (files.length > 0) {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: files[0],
        }));
      }
    } else if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (name === "size_m2") {
      setForm({
        ...form,
        size_m2: value,
        size_p: Math.round(value / 3.3),
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRadioChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = (e) => {
    const { files } = e.target;
    const newImages = Array.from(files);

    // 기존 이미지와 새로운 이미지 합치기
    setForm((prevForm) => ({
      ...prevForm,
      images: [...prevForm.images, ...newImages],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg"
    >
      <BuildingForm
        form={form}
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
      />
      <AddressForm form={form} setForm={setForm} handleChange={handleChange} />
      <RoomForm
        form={form}
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        handleImageUpload={handleImageUpload}
      />
      <Transaction
        form={form}
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
      />
      <button className="bg-one hover:bg-two py-2 px-4 m-6 rounded-full">
        Submit
      </button>
    </form>
  );
}
