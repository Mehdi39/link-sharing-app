import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
    link: {
        type: String,
        required: [true, "Please add a link"],
    },
});

// Check if the model is already compiled to avoid OverwriteModelError
const Link = mongoose.models.Link || mongoose.model('Link', linkSchema);

export default Link;
