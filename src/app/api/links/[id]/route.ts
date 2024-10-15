import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ModelLink from "@/models/ModelLink";
import mongoose from "mongoose";

// PATCH: Update a link by custom `id` (Number)
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDB();

        console.log("Valid ID: ",mongoose.Types.ObjectId.isValid(params.id))
        // Check if the ID is valid
        if (!mongoose.Types.ObjectId.isValid(params.id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

        const body = await req.json();

        console.log("Body: ",body)
        const link = await ModelLink.findById({ _id: params.id })
        console.log("findById: ", link)

        // Find and update the link by `_id`
        const updatedLink = await ModelLink.findByIdAndUpdate(
            { _id: params.id }, // Correctly query using the `_id`
            body,
            {
                new: true, // Return the updated document
                runValidators: true, // Ensure validation rules are applied
            }
        );

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

        // Convert the id from string to ObjectId
        if (!mongoose.Types.ObjectId.isValid(params.id)) {
            return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
        }

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
