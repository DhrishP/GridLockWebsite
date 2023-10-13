import prisma from "@/prisma/client";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {username,secret} =await req.json()
        if(!username || !secret) return NextResponse.json("Invalid request")
        console.log(username,secret)
        const data = await prisma.scores.findMany({
          where: { username: JSON.parse(username), secret: JSON.parse(secret) },
          orderBy: { created: "desc" },
          select: {
            id: true,
            created: true,
            green_score: true,
            red_score: true,
            username:true
          },
        });
        console.log(data)
        if (!data) return NextResponse.json("No data found");
        const schemadata = data.map((item) => ({
          id: item.id,
          red_score: item.red_score,
          username:item.username,
          green_score: item.green_score,
          date: item.created?.toLocaleDateString(),
        }));
        console.log(schemadata)
        return NextResponse.json(schemadata);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
 
}
