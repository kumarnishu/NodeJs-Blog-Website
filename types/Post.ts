import { Types } from "mongoose";
import { Section } from "./Section";
import { User } from "./User";

export type Post = {
    _id?: string,
    sections?: Section[],
    created_at?: Date,
    updated_at?: Date,
    author?: User | Types.ObjectId,
    is_published?: Boolean
}
export type PostBody = Request['body'] & Post
