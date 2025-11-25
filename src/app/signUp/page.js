"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formInput;

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="flex justify-evenly items-center h-screen w-screen"
      onSubmit={handleSubmit}
    >
      <Card className="w-full max-w-sm border-hidden">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Sign up to explore your favorite dishes.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formInput.email}
                onChange={handleChange}
              />

              <Label>Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={formInput.password}
                onChange={handleChange}
              />
              <Label>Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={formInput.confirmPassword}
                onChange={handleChange}
              />

              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-[345px] bg-gray-300 h-9">
            Let's Go
          </Button>

          <div className="flex justify-center items-center">
            <CardDescription>Already have an account?</CardDescription>
            <Link href="/login">
              <Button variant="link">Log in</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>

      <img src="./headerPhoto.png" className="w-[856px] h-[904px] rounded-md" />
    </form>
  );
}
