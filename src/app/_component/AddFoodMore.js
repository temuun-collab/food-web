// import { FoodEditIcon } from "../downicon/foodEditIcon";
export const AddFoodMore = (props) => {
  const { foodImgSrc, foodName, foodPrice, ingredients } = props;
  return (
    <div className="w-[270px] h-[241px] border border-gray rounded-md flex justify-center items-center shadow-stone-600">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <img
            className="w-[238px] h-[129px] rounded-md mt-2 "
            src={foodImgSrc}
          />
          {/* <button className="w-11 h-11 bg-black rounded-full flex justify-center items-center ">
            <FoodEditIcon />
          </button> */}
        </div>

        <div className="flex flex-col w-[238px] h-[70px]">
          <div className="flex justify-between w-[238px] h-5">
            <p className="text-[#EF4444] text-[14px]">{foodName}</p>
            <p className="text-[#09090B] text-3">{foodPrice}</p>
          </div>
          <p className="text-[#09090B] text-[13px]">{ingredients}</p>
        </div>
      </div>
    </div>
  );
};
