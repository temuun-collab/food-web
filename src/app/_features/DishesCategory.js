import { FoodAdd } from "../_component/FoodAdd";
import { AddIcon } from "../downicon/AddIcon";
import { useState, useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const DishesCategory = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };

  //   console.log("categories", categories);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1171px] h-44 bg-white rounded-md flex flex-col justify-center gap-4">
      <p className="text-[20px]  font-bold text-black ml-3">Dishes category</p>

      <div className="w-[1123px] h-[84px] grid grid-cols-5 gap-3 ml-3">
        {categories.map((cur, index) => (
          <FoodAdd key={`category-${index}`} foodName={cur.categoryName} />
        ))}

        <button className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center">
          <AddIcon />
        </button>
      </div>
    </div>
  );
};
