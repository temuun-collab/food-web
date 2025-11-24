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
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
export default function signUp() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!emailRegex.test(email)) {
    setError("Invalid email format");
    return;
  }
  try {
    const res = await fetch("http://localhost:8000/users",{
  method: "POST",
  headers: {
    accept: "application/json",
  },
  body: JSON.stringify({
          email,
          password,
        }),
});
    const json = await res.json();
    console.log(json);

    if (!res.ok) {
      setError(json.message || "Failed to sign up");
      return;
    }
  } catch (err) {
    console.error(err);
    setError("Something went wrong");
  }
};

  

  return (
    // <div className="flex justify-evenly items-center h-screen w-screen">
    <form
      
      className="flex justify-evenly items-center h-screen w-screen"
    >
      <Card className="w-full max-w-sm border-hidden">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Sign up to explore your favorite dishes.
          </CardDescription>
          <CardAction></CardAction>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
                className={`${error ? "border border-[#EF4444]" : "border"}`}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Link href="/password">
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
    </form>
    // </div>
  );
}
