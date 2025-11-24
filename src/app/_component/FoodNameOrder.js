import { FoodIcon } from "../downicon/FoodIcon";
export const FoodNameOrder = (props) => {
  const { foodName } = props;
  return (
    <div className=" flex justify-center items-center gap-2">
      <FoodIcon />
      <p className="text-[12px] text-[#71717A]">{foodName}</p>
    </div>
  );
};
