import mongoose, { Types } from "mongoose";
import { Post } from "../types/Post";

const PostSchema = new mongoose.Schema<Post, mongoose.Model<Post>>({
    sections: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Section',
        }
    ],
    is_published: { type: Boolean, default: false },
    created_at: {
        type: Date,
        default: new Date(Date.now()),
        required: true,

    },
    updated_at: {
        type: Date,
        default: new Date(Date.now()),
        required: true,

    },
    author: {
        ref: 'User',
        type: Types.ObjectId,
        required: true
    }
})

const Post = mongoose.model<Post, mongoose.Model<Post>>('Post', PostSchema)

export default Post