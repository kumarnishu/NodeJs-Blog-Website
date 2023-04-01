import { Types } from "mongoose";
import { Section } from "./Section";
import { User } from "./User";

export type Post = {
    _id?: string,
    sections: Section[],
    author: User | Types.ObjectId,
    is_published: Boolean
    created_at?: Date,
    updated_at?: Date
}
export type PostBody = Request['body'] & Post
