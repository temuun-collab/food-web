export const FoodAdd = (props) => {
  const { foodName, foodCount } = props;
  return (
    <div className="h-9 w-auto border border-gray rounded-full flex justify-center items-center gap-2">
      <p className="text-[14px] w-auto text-black">{foodName}</p>
      <div className="min-w-[29px] h-5 bg-black rounded-full text-white flex justify-center items-center">
        {foodCount}
      </div>
    </div>
  );
};
