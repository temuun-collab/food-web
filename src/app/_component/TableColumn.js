"use client";
import { useState } from "react";
import { DateIcon } from "../downicon/DateIcon";
import { FoodMore } from "../downicon/FoodMore";

export const TableColumn = (props) => {
  const {
    email,
    foodsNumber,
    date,
    total,
    address,
    number,
    foodSrc,
    foodName,
    foodsNumberMore,
  } = props;
  const [foodMore, setFoodMore] = useState(false);
  const activeButtonFoodMore = () => {
    setFoodMore(!foodMore);
  };
  const [status, setStatus] = useState(false);
  const activeButtonStatus = () => {
    setStatus(!status);
  };

  return (
    <div className="w-[1171px] h-[52px] bg-[#F4F4F5CC] flex ">
      <div className="w-12 h-[52px] flex justify-center items-center">
        {/* <TableIcon /> */}
        <input type="checkbox" className="w-4 h-4" />
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

        {foodMore && (
          <div className="w-[263px] h-[97px] bg-white rounded-md border border-gray flex justify-center items-center absolute top-75">
            <div className="flex flex-col">
              <div className="flex w-[230px] h-[30px] ">
                <img className="w-8 h-[30px]" src={foodSrc} />
                <p className="text-3 text-black">{foodName}</p>
                <p className="text-3 text-black">{foodsNumberMore}</p>
              </div>
            </div>
          </div>
        )}
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
          className="max-w-[115px] h-8 rounded-full border border-gray flex justify-center items-center gap-2 p-3"
          onClick={activeButtonStatus}
        >
          <p className="text-[14px] text-black">Cancelled</p>
          <DateIcon />
          {status && (
            <div className="w-36 h-[116px] bg-white rounded-md border border-gray flex justify-center items-center absolute mt-37 ml-15">
              <div className="flex flex-col">
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full">
                    Delivered
                  </div>
                </div>
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full">
                    Pending
                  </div>
                </div>
                <div className="w-[136px] h-9 items-center flex ml-2">
                  <div className="w-[75px] h-5 bg-[#F4F4F5] flex justify-center items-center text-[14px] text-black rounded-full">
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
