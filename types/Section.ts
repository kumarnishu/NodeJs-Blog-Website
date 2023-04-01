import { Types } from "mongoose"
import { User } from "./User"
import { Post } from "./Post"

export type SectionType = "heading" | "title" | "paragraph" | "image" | "audio" | "video" | "embed" | "link" | "divider"

export type Section =
    {
        _id?: string,
        type: SectionType,
        value: string,
        is_published: Boolean,
        post:Post|Types.ObjectId,
        author: User | Types.ObjectId
        created_at?: Date,
        updated_at?: Date
    }
export type SectionBody = Request['body'] & Section
