import { Headericon } from "../downicon/headericon";
import { HeaderNextIcon } from "../downicon/HeaderNextIcon";
import { OrdersIcon } from "../downicon/OrdersIcon";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="w-[205px]  h-[1024px]  bg-white flex flex-col">
      <div className="flex w-[165px] h-[44px] m-4 gap-3 justify-center items-center">
        <div>
          <Headericon />
        </div>
        <div className="flex flex-col w-[81px] h-[44px]">
          <p className="text-black text-[18px] font-bold  h-[28px]">NomNom</p>
          <p className="text-[#71717A] text-[12px]  h-[16px]">Swift delivery</p>
        </div>
      </div>
      <div className="flex w-[165px] h-[40px] m-4 gap-3 justify-center items-center">
        <div>
          <HeaderNextIcon />
        </div>
        <Link href="/foodMenu">
          <p className="text-black text-[14px]">Food menu</p>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[165px] h-[40px] gap-3 justify-center items-center bg-black rounded-full">
          <OrdersIcon />
          <p className="text-white text-[14px]">Orders</p>
        </div>
      </div>
    </div>
  );
};
