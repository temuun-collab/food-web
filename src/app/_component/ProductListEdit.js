import { BackIcon } from "../downicon/BackIcon";
import { NextIcon } from "../downicon/NextIcon";
export const ProductListEdit = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[305px] h-[120px] flex justify-end">
        <button
          className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
          onClick={() => {
            setEditFood(false);
          }}
        >
          <DeleteIcon />
        </button>
      </div>
      <div className=" h-[305px] flex flex-col justify-between">
        <div className="w-[279px]  flex flex-col gap-3">
          <p className="  text-[#EF4444] text-[30px]">{foodName}</p>
          <p className="  text-[#09090B] text-4">{ingredients}</p>
        </div>
        <div className="w-[377px] h-[124px] flex flex-col justify-between">
          <div className="w-[377px] h-14 flex items-center">
            <div className="w-[121px] h-11 gap-3 flex items-center justify-center">
              <button className="h-11 w-11 bg-white rounded-full border border-[#E4E4E7] flex items-center justify-center">
                <BackIcon />
              </button>
              <p className="text-[18px] text-black font-bold">1</p>
              <button className="h-11 w-11 bg-white rounded-full border border-[#E4E4E7] flex items-center justify-center">
                <NextIcon />
              </button>
            </div>
            <div className="flex flex-col w-[256px] h-14">
              <p className=" h-8 text-[#09090B]  text-12 font-bold">
                {foodPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
