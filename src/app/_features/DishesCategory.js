import { FoodAdd } from "../_component/FoodAdd";
import { AddIcon } from "../downicon/AddIcon";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { CheckIcon } from "../downicon/CheckIcon";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const DishesCategory = (props) => {
  const { foodCount } = props;
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };
  const [foods, setfoods] = useState([]);
  const allFood = async () => {
    const data = await fetch(`http://localhost:8000/foods`, options);
    const jsonData = await data.json();
    setfoods(jsonData);
  };
  const [addCategory, setAddCategory] = useState(false);
  const activeButtonaddCategory = () => {
    setAddCategory(!addCategory);
  };
  const [addNewCategory, setAddNewCategory] = useState(false);
  const activeButtonaddNewCategory = () => {
    setAddNewCategory(!addNewCategory);
  };

  const [addfood, setAddFood] = useState({
    foodName: "",
  });

  useEffect(() => {
    allFood();
  }, []);
  useEffect(() => {
    getData();
  }, []);

  const handleAddFood = async () => {
    if (!addfood.foodName.trim()) {
      alert("hoolnii neriig oruulna uu!");
      return;
    }
    try {
      const res = await fetch("http://localhost:8000/foodsCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          categoryName: addfood.foodName,
        }),
      });
      await getData();
      setAddNewCategory();
      setAddFood({ categoryName: "" });
      setAddCategory(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[1171px] h-fit bg-white rounded-md flex flex-col justify-center gap-4">
      <p className="text-[20px] font-bold text-black ml-3 mt-3">
        Dishes category
      </p>

      <div className="w-[1123px] h-fit grid grid-cols-5 gap-3 ml-3 mb-3">
        <div className="h-9 min-w-[145px] border border-red-500 rounded-full flex justify-center items-center gap-2">
          <p className="text-[14px] text-black">All Dishes</p>
          <div className="min-w-[29px] h-5 bg-black rounded-full text-white flex justify-center items-center">
            {foods.length}
          </div>
        </div>
        {categories.map((cur, index) => (
          <FoodAdd
            key={`category-${index}`}
            foodName={cur.categoryName}
            foodCount={cur.food}
          />
        ))}

        <button
          className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center cursor-pointer"
          onClick={activeButtonaddNewCategory}
        >
          <AddIcon />
        </button>
      </div>
      {addNewCategory && (
        <div className="fixed  z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[460px] h-[272px] bg-white rounded-md  border  flex flex-col justify-center items-center">
            <div className="w-[412px] h-[52px] flex justify-between">
              <p className="text-[18px] text-black">Add new category</p>
              <button
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
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
                className="w-[412px] h-[38px] border rounded-md text-black"
                onChange={(e) =>
                  setAddFood({ ...addfood, foodName: e.target.value })
                }
              />
            </div>

            <div className="w-[412px] h-16 flex justify-end items-end ">
              <button
                className="w-[94px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer"
                onClick={handleAddFood}
              >
                Add category
              </button>
            </div>
          </div>
        </div>
      )}
      {addCategory && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[330px] h-12 bg-black rounded-md  flex justify-center items-center gap-2 ">
            <CheckIcon />
            <p className="text-[15px] text-white">
              New category is being added to the menu
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
