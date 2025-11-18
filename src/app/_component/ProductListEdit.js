import { BackIcon } from "../downicon/BackIcon";
import { DeleteIcon } from "../downicon/DeleteIcon";
import { NextIcon } from "../downicon/NextIcon";
export const ProductListEdit = (props) => {
  const { foodName, foodPrice, ingredients, foodImgSrc } = props;
  return (
    <div className="w-[439px] h-[120px] flex gap-6 justify-center items-center">
      <div className="w-[124px] h-[120px] rounded-md ">
        <img
          className=" w-[124px] h-[120px]rounded-md "
          src={foodImgSrc || null}
          alt="foodSrc"
          onError={(e) => (e.currentTarget.src = "/img")}
        ></img>
      </div>
      <div className=" w-[305px] flex flex-col justify-between">
        <div className="flex w-[305px]">
          <div className="w-[279px]  flex flex-col gap-3">
            <p className="  text-[#EF4444] text-4">{foodName}</p>
            <p className="  text-[#09090B] text-3">{ingredients}</p>
          </div>
          <button
            className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer"
            onClick={() => {
              setEditFood(false);
            }}
          >
            <DeleteIcon />
          </button>
        </div>

        <div className="w-[305px] h-9 flex items-center justify-between">
          <div className="w-[105px] h-9 gap-3 flex items-center justify-center">
            <button className="h-9 w-9 rounded-full flex items-center justify-center">
              <BackIcon />
            </button>
            <p className="text-[18px] text-black font-bold">1</p>
            <button className="h-9 w-9 rounded-full flex items-center justify-center">
              <NextIcon />
            </button>
          </div>
          <div className="flex flex-col h-7">
            <p className="text-[#09090B]  text-4 font-bold">{foodPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
