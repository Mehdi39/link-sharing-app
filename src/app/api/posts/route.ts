// src/app/api/posts/route.ts (App Router example)
import { NextResponse } from "next/server";
import connectMongo from "../../../lib/db";
import Post from "@/models/ModelPost";

export async function GET() {
	try {
		// Connect to MongoDB
		await connectMongo();

		// Fetch posts
		const posts = await Post.find({});

		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch posts", message: error.message });
	}
}
