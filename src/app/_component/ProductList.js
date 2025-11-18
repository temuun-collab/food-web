"use client";
import { AddFoodIcon } from "../downicon/AddFoodIcon";
import { CheckFood } from "../downicon/CheckFood";
import { CheckIcon } from "../downicon/CheckIcon";
import { useState } from "react";
import { BackIcon } from "../downicon/BackIcon";
import { NextIcon } from "../downicon/NextIcon";
import { DeleteIcon } from "../downicon/DeleteIcon";
export const ProductList = (props) => {
  const { foodImgSrc, foodName, foodPrice, ingredients } = props;
  const [checkFood, setCheckFood] = useState(false);
  const [falsecheckFood, setFalseCheckFood] = useState(false);
  const activeButtonCheckFood = () => {
    setCheckFood(!checkFood);
  };
  const activeButtonFalseCheckFood = () => {
    setFalseCheckFood(!falsecheckFood);
  };
  const [editFood, setEditFood] = useState(false);

  const activeButtonEditFood = () => {
    setEditFood(!editFood);
  };
  return (
    <div className="w-[397px] h-[342px] bg-white rounded-md">
      <div className="flex flex-col gap-3 items-center">
        <div className="relative">
          <img
            className="w-[365px] h-[210px] rounded-md mt-2"
            src={foodImgSrc || null}
          />
          {/* {falsecheckFood && ( */}
          <button
            className="w-11 h-11 bg-white rounded-full flex justify-center items-center absolute z-10 bottom-0 right-0 m-2 cursor-pointer"
            // onClick={activeButtonCheckFood}
            onClick={activeButtonEditFood}
          >
            <AddFoodIcon />
          </button>
          {/* )} */}

          {/* {checkFood && (
            <button
              className="w-11 h-11 bg-[#18181B] rounded-full flex justify-center items-center absolute z-10 bottom-0 right-0 m-2"
              onClick={activeButtonFalseCheckFood}
            >
              <CheckFood />
            </button>
          )} */}
        </div>

        <div className="flex flex-col w-[365px] h-20 gap-2">
          <div className="flex justify-between w-[365px] h-8">
            <p className="text-[#EF4444] text-[25px]">{foodName}</p>
            <p className="text-[#09090B] text-[20px]">{foodPrice}</p>
          </div>
          <p className="text-[#09090B] text-[14px]">{ingredients}</p>
        </div>
      </div>
      {/* {checkFood && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[375px] h-12 bg-black rounded-md  flex justify-center items-center gap-3 border border-white">
            <CheckIcon />
            <p className="text-4 text-white">
              Food is being added to the cart!
            </p>
          </div>
        </div>
      )} */}
      {editFood && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[826px] h-[412px] bg-white rounded-md border flex gap-6 justify-center items-center">
            <div className="w-[377px] h-[364px] rounded-md ">
              <img
                className=" w-[377px] h-[364px] rounded-md "
                src={foodImgSrc || null}
                alt="foodSrc"
                onError={(e) => (e.currentTarget.src = "/img")}
              ></img>
            </div>
            <div className="flex flex-col">
              <div className="w-[377px] h-9 flex justify-end">
                <button
                  className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setEditFood(false);
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
              <div className=" h-[328px] flex flex-col justify-between">
                <div className="w-[377px]  flex flex-col gap-3">
                  <p className="  text-[#EF4444] text-[30px]">{foodName}</p>
                  <p className="  text-[#09090B] text-4">{ingredients}</p>
                </div>
                <div className="w-[377px] h-[124px] flex flex-col justify-between">
                  <div className="w-[377px] h-14 flex items-center">
                    <div className="flex flex-col w-[256px] h-14">
                      <p className=" h-6 text-[#09090B] text-4">Total price</p>
                      <p className=" h-8 text-[#09090B]  text-12 font-bold">
                        {foodPrice}
                      </p>
                    </div>
                    <div className="w-[121px] h-11 gap-3 flex items-center justify-center">
                      <button className="h-11 w-11 bg-white rounded-full border border-[#E4E4E7] flex items-center justify-center">
                        <BackIcon />
                      </button>
                      <p className="text-[18px] text-black font-bold">1</p>
                      <button className="h-11 w-11 bg-white rounded-full border border-[#E4E4E7] flex items-center justify-center">
                        <NextIcon />
                      </button>
                    </div>
                  </div>
                  <button className="w-[377px] h-11 bg-black rounded-full flex justify-center items-center text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
