import { AddIcon } from "../downicon/AddIcon";
import { AddFoodMore } from "../_component/AddFoodMore";
import { useState, useEffect } from "react";
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
              <button className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center">
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
    </div>
  );
};
