import { Header } from "../_component/Header";
import { HeroSection } from "../_features/HeroSection";
export default function orders() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1440px] h-[1024px] flex flex-row">
        <Header />
        <div className="w-[1235px] flex flex-col  h-[1024px] bg-[#F4F4F5CC]">
          <div className="flex justify-center items-center">
            <HeroSection />
          </div>
        </div>
      </div>
    </div>
  );
}
