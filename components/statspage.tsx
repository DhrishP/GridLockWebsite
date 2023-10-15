import React from "react";
type StatsSchema = {
  id: string;
  username: string;
  red_score: number;
  green_score: number;
  date: string;
}[]
const Stats = ({data}:{data:StatsSchema}) => {
  console.log(data)
  return (
   <div>
    {
      data.map((user)=>(
        <div key={user.id}>
          <div>{user.username}</div>
          <div>{user.red_score}</div>
          <div>{user.green_score}</div>
          <div>{user.date}</div>
        </div>
      ))
    }
   </div>
  );
};

export default Stats;
