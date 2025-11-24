"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useId, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
export default function login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const validateFormInput = (e) => {
    e.preventDefault();
    let inputError = {
      confirmPassword: "",
    };
    if (!formInput.password && !formInput.confirmPassword) {
      setError({
        ...inputError,
        confirmPassword: "Weak password. Use numbers and symbols",
      });
    }
  };

  const id = useId();
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const { token } = await res.json();

      localStorage.setItem("token", token);
      router.push("/");
    } catch (err) {
      setError("Incorrect password. Please try again");
    }
  };

  return (
    <div className="flex justify-evenly items-center h-screen w-screen">
      <Card className="w-full max-w-sm border-hidden">
        <CardHeader>
          <CardTitle>Create a strong password</CardTitle>
          <CardDescription>
            Create a strong password with letters, numbers.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={validateFormInput}>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <Input
                  id={id}
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  className={`${
                    error ? "border border-[#EF4444]" : "border pr-9"
                  }`}
                  defaultValue={formInput.confirmPassword}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  // onClick={() => setIsVisible(prevState => !prevState)}
                  className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
                >
                  {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className="sr-only">
                    {isVisible ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
              <div className="grid gap-2">
                {/* <Label htmlFor="password">Password</Label> */}
                <Input
                  id="confirm"
                  type="confirm"
                  placeholder="confirm"
                  required
                  onChange={{ target }}
                  className={`${error ? "border border-[#EF4444]" : "border"}`}
                  defaultValue={formInput.confirmPassword}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href="/login">
            <Button
              type="submit"
              className="w-full bg-gray-300 w-85 h-9"
              onclick={handleSubmit}
            >
              Let's Go
            </Button>
          </Link>

          <div className="flex justify-center items-center w-[416px] h-[25px]">
            <CardDescription>Already have an account?</CardDescription>
            <Link href="/login">
              <Button variant="link" className="text-4">
                Log in
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
      <img src="./headerPhoto.png" className="w-[856px] h-[904px] rounded-md" />
    </div>
  );
}
