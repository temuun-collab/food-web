"use client";
import { useState, useEffect } from "react";
import { DateIcon } from "../downicon/DateIcon";
import { FoodMore } from "../downicon/FoodMore";
import { FoodMoreOrder } from "./FoodMoreOrder";

export const TableColumn = (props) => {
  const { email, foodsNumber, date, total, address, number } = props;
  const [foodMore, setFoodMore] = useState(false);
  const activeButtonFoodMore = () => {
    setFoodMore(!foodMore);
  };
  const [status, setStatus] = useState(false);
  const activeButtonStatus = () => {
    setStatus(!status);
  };
  // const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("foodsCount");
      if (saved) setFoodMore(JSON.parse(saved));
    }
  }, []);
  return (
    <div className="w-[1171px] h-[52px] bg-[#F4F4F5CC] flex ">
      <div className="w-12 h-[52px] flex justify-center items-center">
        {/* <TableIcon /> */}
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
      </div>
      <div className="w-14 h-[52px] flex justify-center items-center">
        <p className="text-[20px] text-black">{number}</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center">
        <p className="text-[14px] text-[#71717A]">{email}</p>
      </div>
      <div
        className="w-40 h-[52px] flex items-center  gap-21 "
        onClick={activeButtonFoodMore}
      >
        <p className="text-[14px] text-[#71717A]">{foodsNumber} foods</p>

        <FoodMore />

        {foodMore.map((cur, index) => (
          <FoodMoreOrder />
        ))}
      </div>
      <div className="w-40 h-[52px] flex gap-25 items-center">
        <p className="text-[14px] text-[#71717A]">{date}</p>
      </div>
      <div className="w-40 h-[52px] flex items-center">
        <p className="text-[14px] text-[#71717A]">{total}</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center">
        <p className="text-[14px] text-[#71717A]">{address}</p>
      </div>
      <div className="w-40] h-[52px] flex gap-5 items-center ">
        <div
          className="max-w-[115px] h-8 rounded-full border border-gray flex justify-center items-center gap-2 p-3 cursor-pointer"
          onClick={activeButtonStatus}
        >
          <p className="text-[14px] text-black">Cancelled</p>
          <DateIcon />
          {status && (
            <div className="w-36 h-[116px] bg-white rounded-md border border-gray flex justify-center items-center absolute mt-37 ml-15">
              <div className="flex flex-col">
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full cursor-pointer">
                    Delivered
                  </div>
                </div>
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full cursor-pointer">
                    Pending
                  </div>
                </div>
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full cursor-pointer">
                    Cancelled
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
