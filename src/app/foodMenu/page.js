import { Header } from "../_component/Header";

export default function foodMenu() {
  return (
    <div className=" bg-white h-[100vh] flex items-center justify-center">
      <div className="w-[1440px] h-[1024px] flex flex-row">
        <Header />
        <div className="w-[1235px] flex flex-col  h-[1024px] bg-[#F4F4F5CC]">
          <div className="flex justify-center items-center">
            <div className="w-[1171px] h-[948px] bg-[#F4F4F5CC] flex mt-5 flex-col ">
              <div className="flex justify-end ">
                <img className="w-9 h-9" src="./awatarImage.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
