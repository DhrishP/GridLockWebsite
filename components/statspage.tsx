"use client"
import React from "react";
import CountUp from "react-countup";

type dataschema = {
  ratio: number;
  highestscore: number;
  wins: number;
  username: string;
};

const StatsPage = ({ username, ratio, highestscore, wins }: dataschema) => {
  return (
    <div>
      <div className="h-screen flex flex-col relative">
        {/* Header */}
        <div className="bg-purple-500 p-8 text-white text-center">
          <h1 className="text-4xl font-bold mb-4"> Statistics Page</h1>
          <p className="text-lg">
            View and analyze the stats of your{" "}
            <span className="text-red-400">Grid</span>
            <span className="text-green-500">lock</span> games
          </p>
          <p className="text-slate-300 ">User:{JSON.parse(username)}</p>
        </div>

        {/* Background GIF */}
        <img
          src="/gaming.gif"
          className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-30"
          alt="gif"
        />

        {/* Content */}
        <div className="flex-1 flex flex-wrap">
          {/* Cards */}
          <div className="flex w-screen px-10 space-x-4 items-center justify-between">
            {/* Card 1 */}
            <div className="p-8 w-1/3 text-center bg-purple-700 bg-opacity-50 backdrop-filter backdrop-blur-xl">
              <h2 className="text-2xl  font-bold mb-2">Wins</h2>
              <CountUp
                className={`text-5xl font-semibold ${
                  wins > 0 ? "text-green-400" : "text-red-400"
                }`}
                start={-50}
                duration={2}
                end={wins}
              />
            </div>

            {/* Card 2 */}
            <div className="w-1/3 text-center p-7 bg-purple-700 bg-opacity-50 backdrop-filter backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-2">Highest score</h2>
              <CountUp
                className={`text-5xl font-semibold text-slate-300`}
                start={-50}
                duration={2}
                end={highestscore}
              />
            </div>

            {/* Card 3 */}
            <div className="w-1/3 text-center p-6 bg-purple-700 bg-opacity-50 backdrop-filter backdrop-blur-md">
              <h2 className="text-2xl font-bold mb-2">Win/lose ratio</h2>
              <CountUp
                decimals={2}
                className={`text-5xl font-semibold text-red-300`}
                start={-50}
                duration={2}
                end={ratio}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
