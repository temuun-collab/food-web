import { DateIcon } from "../downicon/DateIcon";
// import { TableIcon } from "../downicon/TableIcon";
// import { useState } from "react";
export const TableColumn = (props) => {
  const { email, foodsNumber, date, total, address, state, number } = props;
  // const [status, setStatus] = useState("All");
  // const handleChangeAllButton = () => {
  //   setStatus("Pending");
  // };
  // const handleChangeActiveButton = () => {
  //   setStatus("Cancelled");
  // };
  // const handleChangeCompletedButton = () => {
  //   setStatus("Delivered");
  // };
  return (
    <div className="w-[1171px] h-[52px] bg-[#F4F4F5CC] flex ">
      <div className="w-[48px] h-[52px] flex justify-center items-center">
        {/* <TableIcon /> */}
        <input type="checkbox" className="w-[16px] h-[16px]" />
      </div>
      <div className="w-[56px] h-[52px] flex justify-center items-center">
        <p className="text-[20px] text-black">{number}</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center ml-4">
        <p className="text-[14px] text-[#71717A]">{email}</p>
      </div>
      <div className="w-[160px] h-[52px] flex items-center ml-4">
        <p className="text-[14px] text-[#71717A]">{foodsNumber}</p>
      </div>
      <div className="w-[160px] h-[52px] flex gap-25 items-center ml-4">
        <p className="text-[14px] text-[#71717A]">{date}</p>
      </div>
      <div className="w-[160px] h-[52px] flex items-center ml-4">
        <p className="text-[14px] text-[#71717A]">{total}</p>
      </div>
      <div className="w-[213px] h-[52px] flex items-center ml-4">
        <p className="text-[14px] text-[#71717A]">{address}</p>
      </div>
      <div className="w-[160px] h-[52px] flex gap-5 items-center ml-4 ">
        <div className="w-auto h-[32px] rounded-full border-1 border-gray flex justify-center items-center">
          <p className="text-[14px] text-[#71717A]">{state}</p>
          <DateIcon />
        </div>
      </div>
    </div>
  );
};
