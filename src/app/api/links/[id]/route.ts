import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ModelLink from "@/models/ModelLink";
import mongoose from "mongoose";

// PATCH: Update a link by custom `id` (Number)
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();
        const body = await req.json();

        // Ensure the `id` is a valid number (since your `id` is defined as a Number in the schema)
        const idAsNumber = parseInt(params.id, 10);
        if (isNaN(idAsNumber)) {
            return NextResponse.json({ error: "Invalid ID format (expected a number)" }, { status: 400 });
        }

        const updatedLink = await ModelLink.findOneAndUpdate({ id: idAsNumber }, body, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are applied
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
