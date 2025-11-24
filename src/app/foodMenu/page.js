"use client";

import { Header } from "../_component/Header";
import { DishesCategory } from "../_features/DishesCategory";
import { AddFood } from "../_features/AddFood";
import { useState, useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function foodMenu() {
  const [categories, setCategories] = useState([]);
  const foodsCategory = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };

  useEffect(() => {
    foodsCategory();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] h-[1024px] flex flex-row">
        <Header />
        <div className="w-[1235px] flex flex-col  h-fit bg-[#F4F4F5CC]">
          <div className="flex justify-center items-center">
            <div className="w-[1171px] h-fit bg-[#F4F4F5CC] flex mt-5 flex-col gap-4 mb-3">
              <div className="flex justify-end ">
                <img className="w-9 h-9" src="./awatarImage.png" />
              </div>

              <DishesCategory />
              {categories.map((cur, index) => (
                <AddFood
                  key={`categories-${index}`}
                  foodAddMore={cur.categoryName}
                  category={cur._id}
                  foodCount={cur.food}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
