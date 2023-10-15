"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginForm = () => {
  const usernameref = React.useRef<HTMLInputElement>(null);
  const secretref = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const username = usernameref.current?.value;
    const secret = secretref.current?.value;
    if (!username || !secret) return console.log("error");
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("secret", JSON.stringify(secret));
    window.location.href = "/statspage";
  };

  return (
    <>
      <div className="w-screen h-[93vh] bg-purple-600 flex items-center flex-col justify-center space-y-8">
        <div className="text-white text-4xl font-bold font-['Nunito Sans']">
          Login to your Account
        </div>
        <div className="text-green-500 text-base font-normal font-['Nunito Sans']">
          See your statistics
        </div>
        <form
          onSubmit={HandleSubmit}
          className="space-y-4 w-1/3  flex items-center flex-col justify-center"
        >
          <div className="text-white  text-sm font-semibold self-start font-['Nunito Sans']">
            Username
          </div>
          <input
            ref={usernameref}
            placeholder=" FrenzyCLown132..."
            className="w-full bg-red-600 border border-red-500 placeholder:text-slate-300 py-3 rounded-md"
          />
          <div className="text-white text-sm font-semibold  self-start font-['Nunito Sans']">
            Secret
          </div>
          <input
            ref={secretref}
            placeholder=" Your secret.."
            className="w-full bg-green-500 placeholder:text-slate-300 m border border-green-500 py-3 rounded-md"
          />
          <button
            type="submit"
            className="text-white  border border-black py-2 px-40 rounded-lg  text-lg  hover:bg-purple-500 cursor-pointer bg-purple-600 bg-cover bg-center font-extrabold font-['Nunito Sans']"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
