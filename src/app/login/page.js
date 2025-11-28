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
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
const backend_url = process.env.BACKEND_URL;
export default function login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${backend_url}/users/login`, {
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
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Link href="/signUp">
              <Button variant="link">Sign Up</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${error ? "border border-[#EF4444]" : "border"}`}
                />
                <div className="flex flex-col">
                  <p className="text-[14px] text-[#EF4444] ">{error}</p>

                  <a
                    href="/password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
      <img src="./headerPhoto.png" className="w-[856px] h-[904px] rounded-md" />
    </div>
  );
}
