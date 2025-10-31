export const CardHeader = () => {
  return (
    <div className="bg-white w-full h-[76px] flex justify-center items-center rounded-t-md mt-5 border-gray border-1">
      <div className="flex gap-35">
        <div className="w-[485px] h-[44px] flex flex-col">
          <p className="text-black text-[20px] font-bold ">Orders</p>
          <p className="text-[#71717A] text-[12px]">items</p>
        </div>
        <div className="w-[491px] h-[36px] flex justify-between">
          <div className="flex  gap-2">
            <div className="w-[300px] h-[36px] bg-white border-gray-50 flex justify-center items-center">
              <div className="flex justify-center w-[300px] h-[36px] gap-2 rounded-full mt-5 border-gray border-1 items-center">
                <p className="text-[14px] text-black">
                  13 June 2023 - 14 July 2023
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2.5">
            <div className="w-[176px] h-[36px] bg-[#71717A] rounded-full flex justify-center items-center">
              <p className=" text-white text-[14px]">Change delivery state</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
