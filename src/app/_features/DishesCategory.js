import { FoodAdd } from "../_component/FoodAdd";
import { AddIcon } from "../downicon/AddIcon";
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
export const DishesCategory = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };

  const [addNewCategory, setAddNewCategory] = useState(false);
  const activeButtonaddNewCategory = () => {
    setAddNewCategory(!addNewCategory);
  };

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

        <button
          className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center"
          onClick={activeButtonaddNewCategory}
        >
          <AddIcon />
        </button>
      </div>
      {addNewCategory && (
        // <div className="fixed inset-0 hidden items-center justify-center bg-black bg-opacity-50 ">
        <div className="w-[460px] h-[272px] bg-white rounded-md absolute  z-10 ml-80 border mt-150 flex flex-col justify-center items-center">
          <div className="w-[412px] h-[52px] flex justify-between">
            <p className="text-[18px] text-black">Add new category</p>
            <button
              className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100"
              onClick={() => {
                setAddNewCategory(false);
              }}
            >
              <DeleteIcon />
            </button>
          </div>

          <div className="w-[412px] h-[60px] flex gap-2 flex-col">
            <p className="text-[14px] text-black">Category name</p>
            <input
              placeholder="List ingredients..."
              className="w-[412px] h-[38px] border rounded-md "
            />
          </div>

          <div className="w-[412px] h-16 flex justify-end items-end">
            <button className="w-[94px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px]">
              Add category
            </button>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};
