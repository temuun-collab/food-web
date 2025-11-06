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
export const MenuContainer = (props) => {
  const [foods, setFoods] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foods`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);
  const { foodName } = props;
  return (
    <div className="w-[1264px] h-[810px] flex flex-col gap-10 mt-10">
      <p className="text-white text-[30px] font-bold">{foodName}</p>
      <div className="w-[1264px] max-h-[720px] grid grid-cols-3">
        {foods.map((cur, index) => (
          <ProductList
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
