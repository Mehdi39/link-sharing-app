import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ModelLink from "@/models/ModelLink";

export async function GET() {
    try {
        await connectDB();
        const links = await ModelLink.find({});
        console.log("Links from API: ",NextResponse.json(links))
        return NextResponse.json(links);
    } catch (error) {
        return NextResponse.json({
            error: "Failed to fetch links",
            message: `Failed to get Links becasue of ${error.message}`,
        })
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        console.log(body)

        const newLink = new ModelLink(body);

        const savedPost = await newLink.save();
        return NextResponse.json(savedPost, {status: 201});
    } catch (error) {
        return NextResponse.json({ error: `Failed to create Link becasue of ${error.message}` }, { status: 500 }
        );
    }
}
