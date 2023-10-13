"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

type dataschema = {
  id: string;
  username: string;
  red_score: number;
  green_score: number;
  date: string;
};
const StatsPage = () => {
  const [data, setdata] = useState([] as dataschema[]);
  useEffect(() => {
    const getdata = async () => {
      const username = localStorage.getItem("username");
      const secret = localStorage.getItem("secret");
      if (!username || !secret) window.location.href = "/";
      const data = await axios.post("/api/scores", { username, secret });
      if (!data) return (window.location.href = "/");
      console.log(data);
      setdata(data.data);
    };
    getdata();
  }, []);
  let wins: number;
  let lose: number;
  {
    data.length > 0 &&
      data.map((user) => {
        if (user.green_score > user.red_score) {
          wins++;
        } else {
          lose++;
        }
      });
  }

  return (
    <div>
      {data.length > 0 ? (
        data.map((user) => (
          <div key={user.id}>
            {user.username}
            {user.red_score}
            {user.green_score}
          </div>
        ))
      ) : (
        <>
          <p>
            Enter correct username/secret or create one by playing the{" "}
            <a href="">game</a>
          </p>
        </>
      )}
    </div>
  );
};

export default StatsPage;
