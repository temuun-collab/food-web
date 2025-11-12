import { DateIcon } from "../downicon/DateIcon";
// import { TableIcon } from "../downicon/TableIcon";

export const TableHeader = () => {
  return (
    <div className="w-[1171px] h-[52px] bg-[#F4F4F5CC] flex ">
      <div className="w-12 h-[52px] flex justify-center items-center">
        {/* <TableIcon /> */}
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
      </div>
      <div className="w-14 h-[52px] flex justify-center items-center">
        <p className="text-[14px] text-[#09090B]">№</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center ">
        <p className="text-[14px] text-[#71717A]">Customer</p>
      </div>
      <div className="w-40 h-[52px] flex items-center ">
        <p className="text-[14px] text-[#71717A]">Food</p>
      </div>
      <div className="w-40 h-[52px] flex gap-25 items-center cursor-pointer">
        <p className="text-[14px] text-[#71717A]">Date</p>
        <DateIcon />
      </div>
      <div className="w-40 h-[52px] flex items-center ">
        <p className="text-[14px] text-[#71717A]">Total</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center ">
        <p className="text-[14px] text-[#71717A]">Delivery Address</p>
      </div>
      <div className="w-40 h-[52px] flex gap-5 items-center ">
        <p className="text-[14px] text-[#71717A]">Delivery state</p>
        <DateIcon />
      </div>
    </div>
  );
};
