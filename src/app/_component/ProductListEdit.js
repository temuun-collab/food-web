import { BackIcon } from "../downicon/BackIcon";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { NextIcon } from "../downicon/NextIcon";
import { useState } from "react";
export const ProductListEdit = (props) => {
  const { foodName, foodPrice, ingredients, foodImgSrc, addFoodCount, foodId } =
    props;
  const [addFoodsCount, setAddFoodsCount] = useState(addFoodCount);
  const [nextClick, setNextClick] = useState(false);
  const [backClick, setBackClick] = useState(false);
  const handleAddFoodsCount = () => {
    setAddFoodsCount(addFoodsCount + 1);
    setNextClick(true);
    setBackClick(false);
  };
  const handleBeforeFoodCount = () => {
    if (addFoodsCount === 1) {
      return;
    } else {
      setAddFoodsCount(addFoodsCount - 1);
      setNextClick(false);
      setBackClick(true);
    }
  };
  const removeFoodCart = () => {
    const addCarts = JSON.parse(localStorage.getItem("foodsCount") || "[]");
    const remove = addCarts.filter((item) => {
      return item.foodId !== foodId;
    });
    localStorage.setItem("foodsCount", JSON.stringify(remove));
  };
  return (
    <div className="w-[439px] h-[120px] flex gap-6 justify-center items-center">
      <div className="w-[124px] h-[120px] rounded-md ">
        <img
          className=" w-[124px] h-[120px]rounded-md "
          src={foodImgSrc || null}
          alt="foodSrc"
          onError={(e) => (e.currentTarget.src = "/img")}
        ></img>
      </div>
      <div className=" w-[305px] flex flex-col justify-between">
        <div className="flex w-[305px]">
          <div className="w-[279px] h-auto flex flex-col gap-1 overflow-y-scroll">
            <p className="  text-[#EF4444] text-4 h-auto">{foodName}</p>
            <p className="  text-[#09090B] text-3 h-auto">{ingredients}</p>
          </div>
          <button
            className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
            onClick={removeFoodCart}
          >
            <DeleteIcon />
          </button>
        </div>

        <div className="w-[305px] h-9 flex items-center justify-between">
          <div className="w-[105px] h-9 gap-3 flex items-center justify-center">
            <button
              className={`h-9 w-9 rounded-full flex items-center justify-center cursor-pointer${
                backClick ? "bg-black" : "bg-white"
              }`}
              onClick={handleBeforeFoodCount}
            >
              <BackIcon />
            </button>
            <p className="text-[18px] text-black font-bold">{addFoodsCount}</p>
            <button
              className={`h-9 w-9 rounded-full flex items-center justify-center cursor-pointer${
                nextClick ? "bg-black" : "bg-white"
              }`}
              onClick={handleAddFoodsCount}
            >
              <NextIcon />
            </button>
          </div>
          <div className="w-[200px] h-9 flex justify-end items-center">
            <p className="text-[#09090B]  text-4 font-bold">{foodPrice} MNT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
