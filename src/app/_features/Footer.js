import { FoodMenuCategoryName } from "../_component/FoodMenuCategoryName";
import { Headericon } from "../downicon/headericon";
import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const Footer = (props) => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="w-[1440px] h-[755px] bg-[#18181B] flex flex-col items-center">
      <div className="w-[1440px] h-[92px] bg-[#EF4444] gap-[34px] top-30 flex mt-18">
        <p className="text-white text-[30px]">Fresh fast delivered</p>
        <p className="text-white text-[30px]">Fresh fast delivered</p>
        <p className="text-white text-[30px]">Fresh fast delivered</p>
        <p className="text-white text-[30px]">Fresh fast delivered</p>
        <p className="text-white text-[30px]">Fresh fast delivered</p>
      </div>
      <div className="w-[1264px] h-72 flex gap-4 mt-18 ml-4">
        <div className="flex w-[165px] h-11  gap-3 justify-center items-center">
          <div>
            <Headericon />
          </div>
          <div className="flex flex-col w-[81px] h-11 ">
            <div className="flex">
              <p className="text-white text-[18px] font-bold  h-7">Nom</p>
              <p className="text-red-500 text-[18px] font-bold  h-7">Nom</p>
            </div>

            <p className="text-[#71717A] text-[12px]  h-4">Swift delivery</p>
          </div>
        </div>
        <div className="w-[788px] h-[228px] flex gap-5">
          <div className="flex flex-col w-[122px] h-[148px] gap-4 ">
            <p className="text-[#71717A] text-[16px]">NOMNOM</p>
            <p className="text-white text-[16px]">Home</p>
            <p className="text-white text-[16px]">Contact us</p>
            <p className="text-white text-[16px]">Delivery zone</p>
          </div>
          <div className="flex flex-col w-[320px] h-[228px]  gap-4 ">
            <p className="text-[#71717A] text-[16px]">MENU</p>
            {categories.map((cur, index) => (
              <FoodMenuCategoryName
                key={`category-${index}`}
                foodName={cur.categoryName}
              />
            ))}
          </div>
          <div className="flex flex-col w-[320px] h-72 gap-4 ">
            <p className="text-[#71717A] text-[16px]">FOLLOW US</p>
            <div className="flex gap-4">
              <img src="./facebook.png" className="w-7 h-[27px]" />
              <img src="./instagram.png" className="w-7 h-[27px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1264px] h-21 flex flex-col gap-4">
        <hr className="w-[1264px] opacity-20" />
        <div className="flex gap-4">
          <div className="w-[219px] flex h-5">
            <p className="text-[#71717A] text-[14px]">Copy right 2024</p>
            <p className="text-[#71717A] text-[14px]">©</p>
            <p className="text-[#71717A] text-[14px]">Nomnom LLC</p>
          </div>
          <p className="text-[#71717A] text-[14px]">Privacy policy </p>
          <p className="text-[#71717A] text-[14px]">Terms and conditoin</p>
          <p className="text-[#71717A] text-[14px]">Cookie policy</p>
        </div>
      </div>
    </div>
  );
};
