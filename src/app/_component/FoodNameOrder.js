import { FoodIcon } from "../downicon/FoodIcon";
import { DateOrder } from "../_component/DateOrder";
import { LocationIconOrder } from "../downicon/LocationIconOrder";
export const FoodNameOrder = (props) => {
  const { foodName, address } = props;
  return (
    <div className="w-[439px] h-[138px] flex flex-col justify-center items-center gap-3">
      <div className="flex justify-between w-[439px]">
        <p className="w-[138px] h-6 text-4 font-bold m-2">Items</p>
        <div className="w-[68px] h-6 m-2 flex justify-center items-center text-[11px] text-black rounded-full border">
          Delivered
        </div>
      </div>
      <div className="flex justify-between w-[415px] h-4 ">
        <div className=" flex justify-center items-center gap-2">
          <FoodIcon />
          <p className="text-[12px] text-[#71717A]">{foodName}</p>
        </div>

        <div className=" flex justify-center items-center">
          <p className="text-[12px] text-[#71717A]">x1</p>
        </div>
      </div>
      <div className="flex justify-start w-[415px] h-4">
        <DateOrder />
      </div>
      <div className="flex justify-start w-[415px] h-4">
        <div className=" flex justify-center items-center gap-2">
          <LocationIconOrder />
          <p className="text-[12px] text-[#71717A]">{address}</p>
        </div>
      </div>
      <div className="w-[439px] border border-dashed border-[#09090B80] opacity-50 m-3"></div>
    </div>
  );
};
