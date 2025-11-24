import { DateIconOrder } from "../downicon/DateIconOrder";
export const DateOrder = (props) => {
  const { updateAt } = props;
  return (
    <div className=" flex justify-center items-center gap-2">
      <DateIconOrder />
      <p className="text-[12px] text-[#71717A]">{updateAt}</p>
    </div>
  );
};
