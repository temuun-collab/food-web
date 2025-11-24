"use client";

import { AddLocationIcon } from "../downicon/AddLocationIcon";
import { Headericon } from "../downicon/headericon";
import { LocationIcon } from "../downicon/LocationIcon";
import { useState, useEffect } from "react";
import { ShoppingCart } from "../downicon/ShoppingCart";
import { User } from "../downicon/UserIcon";
import { ShoppingCartIcon } from "../downicon/ShoppingCartIcon";
import { RemoveId } from "../downicon/RemoveId";
import { ProductListEdit } from "../_component/ProductListEdit";
import { DeleteIcon } from "../downicon/DeleteIcon";
import Link from "next/link";
import { CartFoodIcon } from "../downicon/CartFoodIcon";

import { LocationIconOrder } from "../downicon/LocationIconOrder";
import { FoodNameOrder } from "../_component/FoodNameOrder";
import { DateOrder } from "../_component/DateOrder";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export const UserHeader = (props) => {
  const { foodPrice, foodName, address } = props;
  const [addLocation, setAddLocation] = useState(false);
  const activeButtonaddLocation = () => {
    setAddLocation(!addLocation);
  };
  const [user, setUser] = useState(false);
  const activeButtonUser = () => {
    setUser(!user);
  };
  const [shoppingCart, setShoppingCart] = useState(false);
  const activeButtonShoppingCart = () => {
    setShoppingCart(!shoppingCart);
  };
  const [checkoutButton, setCheckoutButton] = useState(false);
  const activeButtonCheckoutButton = () => {
    setCheckoutButton(!checkoutButton);
  };
  const [order, setOrder] = useState(false);
  const activeButtonOrder = () => {
    setOrder(!order);
    setCart(false);
  };
  const [cart, setCart] = useState(false);
  const activeButtonCart = () => {
    setCart(!cart);
    setOrder(false);
  };
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  // const [foodsOrder, setFoodsOrder] = useState([]);
  // const foodOrders = async () => {
  //   const data = await fetch(`http://localhost:8000/foodsOrder`, options);
  //   const jsonData = await data.json();
  //   setFoodsOrder(jsonData);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("foodsCount");
      if (saved) setFoods(JSON.parse(saved));
      setShoppingCart();
    }
  }, []);
  const foodData = async () => {
    const data = await fetch(`http://localhost:8000/foods`, options);
    const jsonData = await data.json();
    setFoods(jsonData);
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          address: address,
        }),
      });

      const { token } = await res.json();
      localStorage.setItem("token", token);
    } catch (err) {
      setError("add address");
    }
  };
  useEffect(() => {
    setCart(true);
    activeButtonCart(true);
  }, []);
  useEffect(() => {
    foodData();
  }, []);
  // useEffect(() => {
  //   foodOrders();
  // }, []);
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
            <p className="text-[11px] text-[#71717A] cursor-pointer">
              Add Location
            </p>
            <AddLocationIcon />
          </div>
        </div>
        <div
          className="w-9 h-9 bg-white rounded-full flex justify-center items-center"
          onClick={activeButtonShoppingCart}
        >
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
              className={`w-[454px] h-20 rounded-md text-black ${
                error ? "border border-[#EF4444] " : "border"
              }`}
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
              <button
                className="w-[115px] h-10 bg-black rounded-md flex justify-center items-center text-white text-[14px] cursor-pointer"
                onClick={handleSubmit}
              >
                Add category
              </button>
            </div>
          </div>
        </div>
      )}
      {shoppingCart && (
        <div className="fixed  z-50 top-0 left-0 w-[1440px] h-screen flex justify-end items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[535px] h-[1024px] bg-[#404040] rounded-md gap-6 flex flex-col justify-center items-center">
            <div className="w-[471px] h-9 flex justify-center items-center">
              <ShoppingCartIcon />
              <p className="text-[21px] font-bold  text-white w-[387px] h-7 ml-2">
                Order detail
              </p>
              <button
                className="w-9 h-9 border rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setShoppingCart(false);
                }}
              >
                <RemoveId />
              </button>
            </div>
            <div className="w-[471px] h-11 bg-white rounded-full flex justify-center items-center">
              <button
                className={`w-[227px] h-9  rounded-full text-[18px] ${
                  cart ? "bg-[#EF4444] text-white" : "bg-white text-black"
                }`}
                onClick={activeButtonCart}
              >
                Cart
              </button>
              <button
                className={`w-[227px] h-9  rounded-full text-[18px] ${
                  order ? "bg-[#EF4444] text-white" : "bg-white text-black"
                }`}
                onClick={activeButtonOrder}
              >
                Order
              </button>
            </div>
            {cart && (
              <>
                <div
                  className="w-[471px] h-[532px] bg-white rounded-2xl "
                  onClick={() => {
                    setOrder(false);
                  }}
                >
                  <p className="text-[#71717A] text-[21px] m-2">My cart</p>
                  {foods.length <= 0 ? (
                    <div
                      className="w-[439px] h-[182px] bg-[#F4F4F5] rounded-2xl flex flex-col justify-center ml-3 items-center"
                      onClick={() => {
                        setFoods(false);
                      }}
                    >
                      <CartFoodIcon />
                      <p className="text-4 text-black font-bold">
                        {" "}
                        Your cart is empthy{" "}
                      </p>
                      <p className="text-3 text-[#71717A]">
                        {" "}
                        Hungry? 🍔 Add some delicious dishes to your{" "}
                      </p>
                      <p className="text-3 text-[#71717A]">
                        {" "}
                        cart and satisfy your cravings!{" "}
                      </p>
                    </div>
                  ) : (
                    <div className="m-3 h-[322px] overflow-y-scroll">
                      {foods.map((cur, index) => (
                        <ProductListEdit
                          key={`foods-${index}`}
                          foodName={cur.foodName}
                          foodImgSrc={cur.foodImgSrc}
                          foodPrice={cur.price}
                          ingredients={cur.ingredients}
                          addFoodCount={cur.addFoodCount}
                          foodId={cur.foodId}
                        />
                      ))}
                    </div>
                  )}
                  <p className="text-[#71717A] text-[21px] ml-2 mt-2">
                    Delivery location
                  </p>
                  <input
                    placeholder="Please share your complete address"
                    className="w-[439px] h-20 border rounded-md text-black m-3"
                  />
                </div>
                <div className="w-[471px] h-[276px] bg-white rounded-2xl ">
                  <p className="text-[#71717A] text-[21px] m-2">Payment info</p>
                  {foods.length <= 0 ? (
                    <div className="flex flex-col ml-3 gap-5">
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Items{" "}
                        </p>

                        <p className="text-black font-bold w-[219px] h-7 text-4 ml-86">
                          -
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Shipping{" "}
                        </p>
                        <div className="flex justify-end w-[219px]">
                          <p className="text-black font-bold w-[219px] h-7 text-4 ml-41">
                            -
                          </p>
                        </div>
                      </div>
                      <hr className="bg-[#71717A] w-[439px]"></hr>
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Shipping{" "}
                        </p>
                        <div className="flex justify-end w-[219px]">
                          <p className="text-black font-bold w-[219px] h-7 text-4 ml-41">
                            -
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col ml-3 gap-5">
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Items{" "}
                        </p>

                        <p className="text-black font-bold w-[219px] h-7 text-4 ml-86">
                          {foodPrice}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Shipping{" "}
                        </p>
                        <div className="flex justify-end w-[219px]">
                          <p className="text-black font-bold w-[219px] h-7 text-4 ml-41">
                            items
                          </p>
                        </div>
                      </div>
                      <hr className="bg-[#71717A] w-[439px]"></hr>
                      <div className="flex justify-between">
                        <p className="text-[#71717A] w-[219px] h-7 text-4">
                          Shipping{" "}
                        </p>
                        <div className="flex justify-end w-[219px]">
                          <p className="text-black font-bold w-[219px] h-7 text-4 ml-41">
                            items
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {foods.length <= 0 ? (
                    <button
                      className="w-[439px] h-11 flex justify-center items-center bg-[#EF4444] opacity-45 rounded-full mt-5 ml-3 text-white cursor-pointer"
                      // onClick={activeButtonCheckoutButton}
                    >
                      Checkout
                    </button>
                  ) : (
                    <button
                      className="w-[439px] h-11 flex justify-center items-center bg-[#EF4444] rounded-full mt-5 ml-3 text-white cursor-pointer"
                      onClick={activeButtonCheckoutButton}
                    >
                      Checkout
                    </button>
                  )}
                </div>
              </>
            )}
            {order && (
              <div
                className="w-[471px] h-[832px] bg-white rounded-2xl flex items-center flex-col"
                onClick={() => {
                  setCart(false);
                }}
              >
                <p className="text-black text-[21px] w-[439px] h-[29px] mt-2">
                  Orders History
                </p>
                <div className="w-[439px] h-[138px] flex flex-col justify-center items-center gap-3">
                  <div className="flex justify-between w-[439px]">
                    <p className="w-[138px] h-6 text-4 font-bold m-2">Items</p>
                    <div className="w-[68px] h-6 m-2 flex justify-center items-center text-[11px] text-black rounded-full border">
                      Delivered
                    </div>
                  </div>

                  {/* {foods.map((cur, index) => (
                    <div className="flex justify-between w-[415px] h-4">
                      <FoodNameOrder
                        key={`foods-${index}`}
                        foodName={cur.foodName}
                      />
                      <div className=" flex justify-center items-center">
                        <p className="text-[12px] text-[#71717A]">x1</p>
                      </div>
                    </div>
                  ))} */}

                  <div className="flex justify-start w-[415px] h-4">
                    <DateOrder />
                  </div>
                  <div className="flex justify-start w-[415px] h-4">
                    <div className=" flex justify-center items-center gap-2">
                      <LocationIconOrder />
                      <p className="text-[12px] text-[#71717A]">{address}</p>
                    </div>
                  </div>
                </div>
                <div className="w-[439px] border border-dashed border-[#09090B80] opacity-50 m-3"></div>
              </div>
            )}
          </div>
        </div>
      )}
      {checkoutButton && (
        <div className="fixed  z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,_0,_0,_0.5)]">
          <div className="w-[429px] h-[184px] bg-white rounded-md gap-5 flex flex-col justify-center items-center">
            <div className="w-[381px] h-10 flex justify-center items-center gap-7">
              <p className="text-[25px] text-black font-bold">
                You need to log in first{" "}
              </p>
              <button
                className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
                onClick={() => {
                  setCheckoutButton(false);
                }}
              >
                <DeleteIcon />
              </button>
            </div>

            <div className="w-[381px] h-[60px] flex gap-4 ">
              <Link href="/login">
                <button className="rounded-md bg-black w-[182px] h-10 text-[14px] flex justify-center items-center text-white cursor-pointer">
                  Log in
                </button>
              </Link>
              <Link href="/signUp">
                <button className="rounded-md bg-white border w-[182px] h-10 text-[14px] flex justify-center items-center cursor-pointer">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
