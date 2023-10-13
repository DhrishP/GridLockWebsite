"use client";
import LoginForm from "@/components/loginform";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Perform localStorage action
    const verify = async () => {
      //@ts-ignore
      const username =await JSON.parse(localStorage.getItem("username"));
      //@ts-ignore
      const secret =await JSON.parse(localStorage.getItem("secret"));
      if (username && secret) {
       return null
      } else {
        localStorage.setItem("username", JSON.stringify(""));
        localStorage.setItem("secret", JSON.stringify(""));
      }
    };
    verify()
  }, []);
  return (
    <>
      <LoginForm />
    </>
  );
}
