export const FoodPriceInf = ({ total }) => {
  const shipping = 10000;
  const grandTotal = total + shipping;

  return (
    <div className="flex flex-col ml-3 gap-5">
      <div className="flex justify-between">
        <p className="text-[#71717A] w-[219px] h-7 text-3">Items </p>

        <p className="text-black font-bold h-7 text-4 mr-7">{total} MNT</p>
      </div>
      <div className="flex justify-between">
        <p className="text-[#71717A] w-[219px] h-7 text-3">Shipping </p>
        <div className="flex justify-end w-[219px]">
          <p className="text-black font-bold  h-7 text-4 mr-7">{shipping}MNT</p>
        </div>
      </div>
      <hr className="bg-[#71717A] w-[439px]"></hr>
      <div className="flex justify-between">
        <p className="text-[#71717A] w-[219px] h-7 text-3">Total</p>
        <div className="flex justify-end w-[219px] ">
          <p className="text-black font-bold h-7 text-4 mr-7">
            {grandTotal} MNT
          </p>
        </div>
      </div>
    </div>
  );
};
