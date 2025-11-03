export const FoodAdd = (props) => {
  const { foodName, foodCount } = props;
  return (
    <div className="h-9 w-auto border border-gray rounded-full flex justify-center items-center gap-2">
      <p className="text-[14px] text-black">{foodName}</p>
      <div className="w-auto h-5 bg-black rounded-full">{foodCount}</div>
    </div>
  );
};
