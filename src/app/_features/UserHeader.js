"use client";
import { useState } from "react";
import { AddLocationIcon } from "../downicon/AddLocationIcon";
import { Headericon } from "../downicon/headericon";
import { LocationIcon } from "../downicon/LocationIcon";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { ShoppingCart } from "../downicon/ShoppingCart";
import { User } from "../downicon/UserIcon";
export const UserHeader = () => {
  const [addLocation, setAddLocation] = useState(false);
  const activeButtonaddLocation = () => {
    setAddLocation(!addLocation);
  };
  const [user, setUser] = useState(false);
  const activeButtonUser = () => {
    setUser(!user);
  };
  return (
    <div className="w-[1440px] h-[172px] bg-[#18181B] flex justify-between items-center">
      <div className="flex w-[165px] h-11 m-22 gap-3 justify-center items-center">
        <div>
          <Headericon />
        </div>
        <div className="flex flex-col w-[81px] h-11 ">
          <div className="flex">
            <p className="text-white text-[18px] font-bold  h-7">Nom</p>
            <p className="text-red-500 text-[18px] font-bold  h-7">Nom</p>
          </div>

          <p className="text-[#71717A] text-[12px]  h-4">Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-3 mr-22">
        <div className="w-[251px] h-9 bg-white rounded-full flex gap-2 justify-center items-center">
          <LocationIcon />
          <p className="text-[11px] text-[#EF4444]">Delivery address:</p>
          <div
            className="w-[95px] h-9 flex gap-2 justify-center items-center cursor-pointer"
            onClick={activeButtonaddLocation}
          >
            <p className="text-[11px] text-[#71717A]">Add Location</p>
            <AddLocationIcon />
          </div>
        </div>
        <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center">
          <ShoppingCart />
        </div>
        <div
          className="w-9 h-9 bg-[#EF4444] rounded-full flex justify-center items-center"
          onClick={activeButtonUser}
        >
          <User />
        </div>
      </div>
      {user && (
        <div className="fixed z-10 top-0 left-0 w-screen h-screen flex justify-center mt-30 ml-160">
          <div className="min-w-[188px] h-[104px] bg-white rounded-md border-hidden flex flex-col items-center justify-center mr-22 gap-2">
            <p className="text-black text-[19px] ">test@gmail.com</p>
            <button className="bg-[#F4F4F5] w-20 h-9 text-[14px] flex justify-center items-center rounded-full cursor-pointer">
              Sign Out
            </button>
          </div>
        </div>
      )}
      {addLocation && (
        <div className="fixed  z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[502px] h-[287px] bg-white rounded-md gap-4 border  flex flex-col justify-center items-center">
            <div className="w-[454px] h-10 flex justify-between">
              <p className="text-[18px] text-black">
                Please write your delivery address!
              </p>
              <button
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                onClick={() => {
                  setAddLocation(false);
                }}
              >
                <DeleteIcon />
              </button>
            </div>

            <input
              placeholder="Please share your complete address"
              className="w-[454px] h-20 border rounded-md text-black "
            />

            <div className="w-[454px] h-16 flex justify-end items-end gap-2">
              <button
                className="w-[79px] h-10 bg-white border rounded-md flex justify-center items-center text-black text-[14px] cursor-pointer"
                onClick={() => {
                  setAddLocation(false);
                }}
              >
                Cancel
              </button>
              <button className="w-[115px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer">
                Add category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
