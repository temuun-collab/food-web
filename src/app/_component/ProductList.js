"use client";
import { AddFoodIcon } from "../downicon/AddFoodIcon";
import { CheckFood } from "../downicon/CheckFood";
import { CheckIcon } from "../downicon/CheckIcon";
import { useState } from "react";
export const ProductList = (props) => {
  const { foodImgSrc, foodName, foodPrice, ingredients } = props;
  const [checkFood, setCheckFood] = useState(false);
  const activeButtonCheckFood = () => {
    setCheckFood(!checkFood);
  };
  return (
    <div className="w-[397px] h-[342px] bg-white rounded-md">
      <div className="flex flex-col gap-3 items-center">
        <div className="relative">
          <img
            className="w-[365px] h-[210px] rounded-md mt-2"
            src={foodImgSrc}
          />
          <button
            className="w-11 h-11 bg-white rounded-full flex justify-center items-center absolute z-10 bottom-0 right-0 m-2 cursor-pointer"
            onClick={activeButtonCheckFood}
          >
            <AddFoodIcon />
          </button>
          {checkFood && (
            <button
              className="w-11 h-11 bg-[#18181B] rounded-full flex justify-center items-center absolute z-10 bottom-0 right-0 m-2"
              onClick={activeButtonCheckFood}
            >
              <CheckFood />
            </button>
          )}
        </div>

        <div className="flex flex-col w-[365px] h-20 gap-2">
          <div className="flex justify-between w-[365px] h-8">
            <p className="text-[#EF4444] text-[25px]">{foodName}</p>
            <p className="text-[#09090B] text-[20px]">{foodPrice}</p>
          </div>
          <p className="text-[#09090B] text-[14px]">{ingredients}</p>
        </div>
      </div>
      {checkFood && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[375px] h-12 bg-black rounded-md  flex justify-center items-center gap-3 border border-white">
            <CheckIcon />
            <p className="text-4 text-white">
              Food is being added to the cart!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
