"use client";
import { EditFood } from "../downicon/EditFood";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { TrashIcon } from "../downicon/TrashIcon";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const AddFoodMore = (props) => {
  const {
    foodImgSrc,
    foodName,
    foodPrice,
    ingredients,
    category,
    categories,
    categoryId,
  } = props;
  const [editFood, setEditFood] = useState(false);

  const activeButtonEditFood = () => {
    setEditFood(!editFood);
  };

  const [saveChanges, setSaveChanges] = useState(false);
  const activeButtonSaveChanges = () => {
    setSaveChanges(!saveChanges);
  };

  const [deleteDishes, setDeleteDishes] = useState(false);
  const activeButtonDeleteDishes = () => {
    setDeleteDishes(!deleteDishes);
  };
  const [logoUrl, setLogoUrl] = useState("");
  const [foods, setFoods] = useState([]);

  const getData = async () => {
    const data = await fetch(`http://localhost:8000/foods`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  const [addfood, setAddFood] = useState({
    foodName: foodName || "",
    foodImgSrc: logoUrl || "",
    foodPrice: foodPrice || "",
    ingredients: ingredients || "",
    categoryId: categoryId || "",
  });
  const handleEtidFood = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const res = await fetch("http://localhost:8000/foods", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: ` ${token}`,
        },
        body: JSON.stringify({
          foodName: addfood.foodName,
          image: addfood.foodImgSrc,
          price: addfood.foodPrice,
          ingredients: addfood.ingredients,
          id: categoryId,
        }),
      });
      await getData();
      setEditFood(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDeleteFood = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const res = await fetch("http://localhost:8000/foods", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify({
          id: categoryId,
        }),
      });
      const data = await res.json();
      if (data.token) localStorage.setItem("token", data.token);
      setEditFood(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const url = await uploadToCloudinary(file);

      setLogoUrl(url);
      setAddFood({ ...foodImgSrc, foodImgSrc: url });
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    }
  };
  return (
    <>
      <div className="w-[270px] h-[241px] border border-gray rounded-md flex justify-center items-center shadow-stone-600">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <img
              className="w-[238px] h-[129px] rounded-md mt-2"
              src={foodImgSrc || null}
            />
            <button
              className="w-11 h-11 bg-white rounded-full flex justify-center items-center absolute z-1 bottom-0 right-0 m-2 cursor-pointer"
              onClick={activeButtonEditFood}
            >
              <EditFood />
            </button>
          </div>

          <div className="flex flex-col w-[238px] h-[70px] ">
            <div className="flex justify-between w-[238px] h-5">
              <p className="text-[#EF4444] text-[14px]">{foodName}</p>
              <p className="text-[#09090B] text-3">{foodPrice}</p>
            </div>
            <p className="text-[#09090B] text-[13px]">{ingredients}</p>
          </div>
        </div>
      </div>
      {editFood && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[472px] h-[596px] bg-white rounded-md border flex flex-col justify-center items-center">
            <div className="w-[424px] h-9 flex justify-between">
              <p className="text-[18px] text-black">Dishes info</p>
              <button
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                onClick={() => {
                  setEditFood(false);
                }}
              >
                <DeleteIcon />
              </button>
            </div>
            <div className="w-[424px] h-[60px] flex items-center justify-between">
              <p className="w-30 h-4 text-[#71717A] text-[11px]">Dishes name</p>
              <input
                className="w-[288px] h-9 border rounded-md text-black"
                defaultValue={foodName}
                onChange={(e) =>
                  setAddFood({ ...addfood, foodName: e.target.value })
                }
              />
            </div>
            <div className="w-[424px] h-[60px] flex items-center justify-between">
              <p className="w-30 h-4 text-[#71717A] text-[11px]">
                Dishes category
              </p>

              <select
                name="foodsName"
                defaultValue={category.categoryName}
                className="w-[288px] h-9 border rounded-md text-black"
              >
                {categories.map((cur, index) => (
                  <option key={`category-${index}`} value={cur.categoryName}>
                    {cur.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[424px] h-[104px] flex items-center justify-between">
              <p className="w-30 h-4 text-[#71717A] text-[11px]">Ingredients</p>
              <input
                className="w-[288px] h-20 border rounded-md text-black "
                defaultValue={ingredients}
                onChange={(e) =>
                  setAddFood({ ...addfood, ingredients: e.target.value })
                }
              />
            </div>
            <div className="w-[424px] h-[60px] flex items-center justify-between">
              <p className="w-30 h-4 text-[#71717A] text-[11px]">Price</p>
              <input
                className="w-[288px] h-9 border rounded-md text-black"
                defaultValue={foodPrice}
                onChange={(e) =>
                  setAddFood({ ...addfood, foodPrice: e.target.value })
                }
              />
            </div>
            <div className="w-[424px] h-[140px] flex items-center justify-between">
              <p className="w-30 h-4 text-[#71717A] text-[11px]">Image</p>
              <img
                className=" w-[288px] h-[116px] border-2 "
                src={foodImgSrc || null}
                alt="foodSrc"
                onError={(e) => (e.currentTarget.src = logoUrl)}
                onChange={handleLogoUpload}
              ></img>
            </div>
            <div className="w-[424px] h-16 flex justify-between items-end">
              <button
                className="w-12 h-10 border border-[#EF4444] rounded-md flex justify-center items-center cursor-pointer"
                onClick={handleDeleteFood}
                // onClick={activeButtonDeleteDishes}
              >
                <TrashIcon />
              </button>
              <button
                className="w-[126px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer"
                onClick={handleEtidFood}
                // onClick={activeButtonSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteDishes && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[388px] h-[92px] bg-white rounded-md flex border justify-center items-center gap-2 ">
            <div className="w-[332px] h-11">
              <p className="text-[14px] text-black font-bold">
                Dish successfully deleted.
              </p>
              <p className="text-[14px] text-black">
                Would you like to undo this action?
              </p>
            </div>
          </div>
        </div>
      )}
      {saveChanges && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[388px] h-[92px] bg-white rounded-md flex border justify-center items-center gap-2 ">
            <div className="w-[332px] h-11">
              <p className="text-[14px] text-black font-bold">
                Dish successfully save.
              </p>
              <p className="text-[14px] text-black">
                Would you like to undo this action?
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
