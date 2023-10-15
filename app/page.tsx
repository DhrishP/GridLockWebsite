"use client";
import LoginForm from "@/components/loginform";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  
    const verify = async () => {
      const username = localStorage.getItem("username");

      const secret = localStorage.getItem("secret");

      if (!username || !secret) {
        localStorage.setItem("username", JSON.stringify(""));
        localStorage.setItem("secret", JSON.stringify(""));
      } else {
        return null;
      }
    };
    verify();
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
}
