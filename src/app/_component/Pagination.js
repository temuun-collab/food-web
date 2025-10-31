import { PaginationBackIcon } from "../downicon/PaginationBackIcon";
import { PaginationNextIcon } from "../downicon/PaginationNextIcon";

export const Pagination = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="w-[1171px] h-16 flex justify-end">
        <div className="w-[352px] h-8 flex gap-6">
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white">
            <PaginationBackIcon />
          </button>

          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            1
          </button>
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            2
          </button>
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            3
          </button>
          {/* <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            4
          </button>
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            5
          </button> */}
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            ...
          </button>
          <button className="w-8 h-8 flex justify-center items-center  rounded-full cursor-pointer bg-white text-black">
            10
          </button>

          <button className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer bg-white">
            <PaginationNextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
