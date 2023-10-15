"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import NotFoundPage from "@/components/errorpage";
import Stats from "@/components/statspage";

type dataschema = {
  id: string;
  username: string;
  red_score: number;
  green_score: number;
  date: string;
};
const StatsPage = () => {
  const username = localStorage.getItem("username");
  const secret = localStorage.getItem("secret");
  let wins: number;
  let lose: number;
  if (!username || !secret) window.location.href = "/";
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => axios.post("/api/scores", { username, secret }),
  });

  if (isLoading)
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="w-5 h-5 rounded-full border-4 animate-spin border-b-white border-slate-400 "></div>
      </div>
    );
  if (isError || data.data.length == 0 ) return <NotFoundPage/>;
  {
    data.data.length > 0 &&
      data.data.map((user: dataschema) => {
        if (user.green_score > user.red_score) {
          wins++;
        } else {
          lose++;
        }
      });
  }
  return (
    <div>
      {data.data.length > 0 ? (
       <Stats data ={data.data}/>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 bg-slate-400 rounded-full animate-spin border-b-white border border-slate-400"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StatsPage;
