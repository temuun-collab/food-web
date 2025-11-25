export const FoodMoreOrder = (props) => {
  const { foodSrc, foodName, foodsNumberMore } = props;
  return (
    <div className="w-[263px] h-[97px] bg-white rounded-md border border-gray flex justify-center items-center absolute top-75">
      <div className="flex flex-col">
        <div className="flex w-[230px] h-[30px] ">
          <img className="w-8 h-[30px]" src={foodSrc} />
          <p className="text-3 text-black">{foodName}</p>
          <p className="text-3 text-black">{foodsNumberMore}</p>
        </div>
      </div>
    </div>
  );
};
