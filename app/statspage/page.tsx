"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NotFoundPage from "@/components/errorpage";
import Stats from "@/components/statspage";
import { useRouter } from "next/navigation";
type dataschema = {
  id: string;
  username: string;
  red_score: number;
  green_score: number;
  date: string;
};
const StatsPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user ? user : "");
    const sec = localStorage.getItem("secret");
    setSecret(sec ? sec : "");
  }, []);
  let wins: number = 0;
  let lose: number = 0;
  let ratio: number = 0;
  if (typeof window !== "undefined" && (!username || !secret)) {
    router.push("/statspage");
  }

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["stats"],
    queryFn: () => axios.post("/api/scores", { username, secret }),
    enabled: !!username && !!secret,
  });

  if (isLoading)
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="w-5 h-5 rounded-full border-4 animate-spin border-b-white border-slate-400 "></div>
      </div>
    );
  if (isError || data.data.length == 0) return <NotFoundPage />;
  if (isSuccess) {
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
    ratio = lose === 0 ? wins : wins / lose;
    const highestscore = Math.max(
      ...data.data.map((user: dataschema) => user.green_score)
    );
    return (
      <div>
        {data.data.length > 0 ? (
          <Stats
            username={username ? username : ""}
            highestscore={highestscore}
            ratio={ratio}
            wins={wins}
          />
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
  }
};

export default StatsPage;
