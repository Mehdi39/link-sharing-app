// models/Post.ts
import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = models.Post || model("Post", postSchema); // Check if model exists, otherwise create one

export default Post;
