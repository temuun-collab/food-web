import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function () {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) router.push("/login");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <p className="text-3xl">Main page</p>
    </div>
  );
}
