import { Pagination } from "../_component/Pagination";
import { TableColumn } from "../_component/TableColumn";
import { TableHeader } from "../_component/TableHeader";
import { CardHeader } from "./CardHeader";

export const HeroSection = () => {
  return (
    <div className="w-[1171px] h-[948px] bg-[#F4F4F5CC] flex mt-5 flex-col ">
      <div className="flex justify-end ">
        <img className="w-9 h-9" src="./awatarImage.png" />
      </div>
      <div className="w-[1171px] h-200">
        <CardHeader />
        <TableHeader />
        <TableColumn />
      </div>

      <Pagination />
    </div>
  );
};
