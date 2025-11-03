"use client";
import { usePathname } from "next/navigation";
import { Headericon } from "../downicon/headericon";
import { HeaderNextIcon } from "../downicon/HeaderNextIcon";
import { HeaderNextIconDark } from "../downicon/HeaderNextIconDark";
import { OrdersIcon } from "../downicon/OrdersIcon";
import { OrderIconDark } from "../downicon/OrderIconDark";
import Link from "next/link";

export const Header = () => {
  const url = usePathname();
  const isOrder = url.includes("orders");
  const isFoodMenu = url.includes("foodMenu");

  console.log(url);
  return (
    <div className="w-[205px]  h-[1024px]  bg-white flex flex-col">
      <div className="flex w-[165px] h-11 m-4 gap-3 justify-center items-center">
        <div>
          <Headericon />
        </div>
        <div className="flex flex-col w-[81px] h-11">
          <p className="text-black text-[18px] font-bold  h-7">NomNom</p>
          <p className="text-[#71717A] text-[12px]  h-4">Swift delivery</p>
        </div>
      </div>
      <Link href="/foodMenu">
        <div
          className={`flex w-[165px] h-10 m-4 gap-3 justify-center items-center ${
            isFoodMenu ? "bg-black text-white rounded-full" : "text-black "
          }`}
        >
          <div>{isFoodMenu ? <HeaderNextIconDark /> : <HeaderNextIcon />}</div>

          <p className="text-[14px]">Food menu</p>
        </div>
      </Link>

      <Link href="/orders">
        <div
          className={`flex w-[165px] h-10 m-4 gap-3 justify-center items-center ${
            isOrder ? "bg-black text-white rounded-full" : "text-black "
          }`}
        >
          <div>{isOrder ? <OrdersIcon /> : <OrderIconDark />}</div>
          <p className="text-[14px]">Orders</p>
        </div>
      </Link>
    </div>
  );
};
