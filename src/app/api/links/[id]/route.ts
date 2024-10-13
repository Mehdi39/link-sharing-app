import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ModelLink from "@/models/ModelLink";

// PATCH: Update a link
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const body = await req.json();
        const updatedLink = await ModelLink.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });
        if (!updatedLink) {
            return NextResponse.json({ error: "Link not found" }, { status: 404 });
        }
        return NextResponse.json(updatedLink);
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to update link because of ${error.message}` },
            { status: 500 }
        );
    }
}

// DELETE: Delete a link
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const deletedLink = await ModelLink.findByIdAndDelete(params.id);
        if (!deletedLink) {
            return NextResponse.json({ error: "Link not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Link deleted successfully" });
    } catch (error) {
        return NextResponse.json(
            { error: `Failed to delete link because of ${error.message}` },
            { status: 500 }
        );
    }
}
