import { AddIcon } from "../downicon/AddIcon";
import { AddFoodMore } from "../_component/AddFoodMore";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../downicon/DeleteIcon";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const AddFood = (props) => {
  const { foodAddMore, foodCount } = props;
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foods`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  const [addFoodNew, setAddFoodNew] = useState(false);
  const activeButtonaddFoodNew = () => {
    setAddFoodNew(!addFoodNew);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1171px] h-auto bg-white rounded-md flex flex-col justify-center  gap-4">
      <p className="text-[20px]  font-bold text-black  mt-3 ml-3">
        {foodAddMore} {foodCount}
      </p>
      <div className="w-[1123px] h-[582px] grid grid-cols-4 gap-3 ml-3">
        <div className="w-[270px] h-[241px] border border-dashed border-[#EF4444] rounded-md flex justify-center items-center shadow-stone-600">
          <div className="flex flex-col gap-5">
            <div className="w-[270px] flex flex-col items-center gap-2">
              <button
                className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center"
                onClick={activeButtonaddFoodNew}
              >
                <AddIcon />
              </button>

              <p className="text-[14px] text-black">
                Add new Dish to {foodAddMore}
              </p>
            </div>
          </div>
        </div>

        {foods.map((cur, index) => (
          <AddFoodMore
            key={`foods-${index}`}
            foodName={cur.foodName}
            foodImgSrc={cur.image}
            foodPrice={cur.price}
            ingredients={cur.ingredients}
          />
        ))}
      </div>
      {addFoodNew && (
        // <div className="fixed inset-0 hidden items-center justify-center bg-black bg-opacity-50 ">
        <div className="w-[460px] h-[592px] bg-white rounded-md absolute  z-10 ml-80 border mb-50 flex flex-col justify-center items-center">
          <div className="w-[412px] h-[52px] flex justify-between">
            <p className="text-[18px] text-black">
              Add new Dish to {foodAddMore}
            </p>
            <button
              className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100"
              onClick={() => {
                setAddFoodNew(false);
              }}
            >
              <DeleteIcon />
            </button>
          </div>
          <div className="w-[412px] h-[60px] flex gap-6">
            <div className="w-[194px] h-[60px] flex flex-col">
              <p className="text-[14px] text-black">Food name</p>
              <input
                placeholder="Type food name"
                className="w-[194px] h-[38px] border rounded-md "
              />
            </div>
            <div className="w-[194px] h-[60px] flex flex-col">
              <p className="text-[14px] text-black">Food name</p>
              <input
                placeholder="Enter price..."
                className="w-[194px] h-[38px] border rounded-md"
              />
            </div>
          </div>
          <div className="w-[412px] h-[60px] flex gap-2 flex-col">
            <p className="text-[14px] text-black">Ingredients</p>
            <input
              placeholder="List ingredients..."
              className="w-[412px] h-[90px] border rounded-md"
            />
          </div>
          <div className="w-[412px] h-[60px] flex gap-2 flex-col">
            <p className="text-[14px] text-black">Food image</p>
            <div className="bg-[#2563EB33] opacity-20 w-[412px] h-[138px] border border-dashed "></div>
          </div>
          <div className="w-[412px] h-16 flex justify-end items-end">
            <button className="w-[94px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px]">
              Add Dish
            </button>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};
