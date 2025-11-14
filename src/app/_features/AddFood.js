"use client";
import { AddIcon } from "../downicon/AddIcon";
import { AddFoodMore } from "../_component/AddFoodMore";
import { useState, useEffect } from "react";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { ImageIcon } from "../downicon/ImageIcon";
import { CheckIcon } from "../downicon/CheckIcon";
import { useRouter } from "next/navigation";
import Image from "next/image";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const AddFood = (props) => {
  const router = useRouter();
  const { foodAddMore, categories, foodCount } = props;
  const UPLOAD_PRESET = "food-web";

  const CLOUD_NAME = "dtcnhf3eg";
  const [logoUrl, setLogoUrl] = useState("");

  const [uploading, setUploading] = useState(false);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setUploading(true);

    try {
      const url = await uploadToCloudinary(file);
      setAddFood((prev) => ({ ...prev, foodImgSrc: url }));
      setLogoUrl(url);
    } catch (err) {
      console.log("Failed to upload logo: " + err.message);
    } finally {
      setUploading(false);
    }
  };

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
  const [addDishes, setAddDishes] = useState(false);
  const activeButtonaddDishes = () => {
    setAddDishes(!addDishes);
  };

  const [addfood, setAddFood] = useState({
    foodName: "",
    foodImgSrc: "",
    foodPrice: "",
    ingredients: "",
  });
  const handleAddFood = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const res = await fetch("http://localhost:8000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({
          foodName: addfood.foodName,
          image: logoUrl,
          price: addfood.foodPrice,
          ingredients: addfood.ingredients,
          category: categories,
        }),
      });
      setAddFood({
        foodName: "",
        foodImgSrc: "",
        foodPrice: "",
        ingredients: "",
      });

      await getData();
      setAddFoodNew(false);
    } catch (err) {
      console.log(err);
    }
  };
  const [categoriesFood, setCategoriesFood] = useState([]);
  const foodsCategory = async () => {
    const data = await fetch(`http://localhost:8000/foodsCategory`, options);
    const jsonData = await data.json();
    setCategoriesFood(jsonData);
  };

  useEffect(() => {
    foodsCategory();
  }, []);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[1171px] h-auto bg-white rounded-md flex flex-col justify-center  gap-4">
      <p className="text-[20px]  font-bold text-black  mt-3 ml-3">
        {foodAddMore} ({foodCount})
      </p>
      <div className="w-[1123px] h-fit grid grid-cols-4 gap-3 ml-3 mb-3">
        <div className="w-[270px] h-[241px] border border-dashed border-[#EF4444] rounded-md flex justify-center items-center shadow-stone-600">
          <div className="flex flex-col gap-5">
            <div className="w-[270px] flex flex-col items-center gap-2">
              <button
                className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center cursor-pointer"
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

        {foods
          .filter((food) => food && food.category._id === categories)
          .map((cur, index) => (
            <AddFoodMore
              key={`foods-${index}`}
              foodName={cur.foodName}
              foodImgSrc={cur.image}
              foodPrice={cur.price}
              ingredients={cur.ingredients}
              categories={categoriesFood}
              category={cur.category}
              foodId={cur._id}
            />
          ))}
      </div>
      {addFoodNew && (
        <div className="fixed  z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[460px] h-[592px] bg-white rounded-md  border  flex flex-col justify-center items-center gap-6">
            <div className="w-[412px] h-[52px] flex justify-between">
              <p className="text-[18px] text-black">
                Add new Dish to {foodAddMore}
              </p>
              <button
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
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
                  className="w-[194px] h-[38px] border rounded-md text-black"
                  value={addfood.foodName}
                  onChange={(e) =>
                    setAddFood({ ...addfood, foodName: e.target.value })
                  }
                />
              </div>
              <div className="w-[194px] h-[60px] flex flex-col">
                <p className="text-[14px] text-black">Food price</p>
                <input
                  placeholder="Enter price..."
                  className="w-[194px] h-[38px] border rounded-md text-black"
                  value={addfood.foodPrice}
                  onChange={(e) =>
                    setAddFood({ ...addfood, foodPrice: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="w-[412px] h-28 flex gap-2 flex-col">
              <p className="text-[14px] text-black ">Ingredients</p>
              <input
                placeholder="List ingredients..."
                className="w-[412px] h-[90px] border rounded-md text-black"
                value={addfood.ingredients}
                onChange={(e) =>
                  setAddFood({ ...addfood, ingredients: e.target.value })
                }
              />
            </div>
            <div className="w-[412px] h-40 flex gap-2 flex-col">
              <p className="text-[14px] text-black">Food image</p>
              <div className="bg-gray-100  w-[412px] h-[138px] border-2 border-dashed flex justify-center items-center rounded-md">
                <div className="w-[380px]  flex flex-col items-center">
                  {!logoUrl && (
                    <>
                      <button className="w-8 h-8 bg-white rounded-full flex justify-center items-center absolute mt-13">
                        <ImageIcon />
                      </button>
                      <input
                        type="file"
                        className="text-gray-100 cursor-pointer w-[412px] h-[138px]"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        name="file"
                      />
                      {uploading && (
                        <p className="text-black absolute z-10 mb-10">
                          Uploading...
                        </p>
                      )}
                    </>
                  )}
                  {logoUrl && (
                    <div className="relative  w-[412px] h-[138px]  ">
                      <Image
                        src={logoUrl}
                        alt="Uploaded logo"
                        fill
                        className="rounded-md mb-10"
                      />

                      <div className="flex justify-end m-2">
                        <button
                          className="bg-black absolute z-10 w-4 h-4 rounded-full flex justify-center items-center"
                          onClick={() => {
                            setLogoUrl(false);
                          }}
                        >
                          <img
                            src="./remove.png"
                            style={{
                              width: "8px",
                              height: "8px",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[412px] h-16 flex justify-end items-end">
              <button
                className="w-[94px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer"
                onClick={handleAddFood}
              >
                Add Dish
              </button>
            </div>
          </div>
        </div>
      )}

      {addDishes && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-10 ">
          <div className="w-[330px] h-12 bg-black rounded-md  flex justify-center items-center gap-2 ">
            <CheckIcon />
            <p className="text-4 text-white">
              New dish is being added to the menu
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
