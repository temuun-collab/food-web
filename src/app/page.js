"use client";
import { useRouter } from "next/navigation";
import { UserHeader } from "./_features/UserHeader";
import { MenuContainer } from "./_component/MenuContainer";
import { useState, useEffect } from "react";
import { Footer } from "./_features/Footer";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
const backend_url = process.env.BACKEND_URL;
export default function () {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const data = await fetch(`${backend_url}/foodsCategory`, options);
    const jsonData = await data.json();
    setCategories(jsonData);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) router.push("/login");
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col">
        <UserHeader />
        <img src="./BG.png" className="w-[1440px] h-[570px] " />
        <div className="bg-[#404040] w-[1440px] h-auto flex flex-col items-center">
          {categories.map((cur, index) => (
            <MenuContainer
              key={`category-${index}`}
              foodName={cur.categoryName}
              category={cur._id}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
