"use client";
import { ProductList } from "./ProductList";
import { useState, useEffect } from "react";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const backend_url = process.env.BACKEND_URL;
export const MenuContainer = (props) => {
  const { category, foodName } = props;
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`${backend_url}/foods`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  const foodsCategory = async () => {
    const data = await fetch(`${backend_url}/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };

  useEffect(() => {
    foodsCategory();
  }, []);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1264px] h-auto flex flex-col gap-10 mt-10 mb-10">
      <p className="text-white text-[30px] font-bold">{foodName}</p>
      <div className=" max-h-[720px]">
        <div className="w-[1264px] h-fit grid grid-cols-3 gap-6">
          {foods
            .filter((food) => food.category._id === category)
            .map((cur, index) => (
              <ProductList
                key={`foods-${index}`}
                foodName={cur.foodName}
                foodImgSrc={cur.image}
                foodPrice={cur.price}
                ingredients={cur.ingredients}
                foodId={cur._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
