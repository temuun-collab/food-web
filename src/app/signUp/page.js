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

import { useState, useEffect } from "react";
import Link from "next/link";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};
export default function signUp() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const getData = async () => {
    const data = await fetch(`http://localhost:8000/users`, options);
    const jsonData = await data.json();
    setEmail(jsonData);
    console.log(jsonData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Invalid email. Use a format like example@email.com");
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    // <div className="flex justify-evenly items-center h-screen w-screen">
    <form
      onSubmit={handleSubmit}
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
          <Button
            type="submit"
            className="w-full bg-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          >
            Let's Go
          </Button>
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
