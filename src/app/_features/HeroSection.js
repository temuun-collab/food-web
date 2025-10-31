"use client";
import { Pagination } from "../_component/Pagination";
import { TableColumn } from "../_component/TableColumn";
import { TableHeader } from "../_component/TableHeader";
import { CardHeader } from "./CardHeader";
// import { useState, useEffect } from "react";

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
//   },
// };
export const HeroSection = () => {
  // const [upcomingMoviesData, setUpcomingMoviesData] = useState([]);
  // const getData = async () => {
  //   const data = await fetch(`http://localhost:8000/foodsCategory`, options);
  //   const jsonData = await data.json();
  //   setUpcomingMoviesData(jsonData);
  //   console.log(jsonData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="w-[1171px] h-[948px] bg-[#F4F4F5CC] flex mt-5 flex-col ">
      <div className="flex justify-end ">
        <img className="w-9 h-9" src="./awatarImage.png" />
      </div>
      <div className="w-[1171px] h-200">
        <CardHeader />
        <TableHeader />
        <TableColumn />
      </div>

      <Pagination />
    </div>
  );
};
