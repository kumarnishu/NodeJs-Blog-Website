import { Types } from "mongoose"
import { User } from "./User"

export type SectionType = "heading" | "title" | "paragraph" | "image" | "audio" | "video" | "embed" | "link" | "divider"

export type Section =
    {
        _id?: string,
        type?: SectionType,
        value?: string,
        created_at?: Date,
        updated_at?: Date,
        is_published?: Boolean,
        author: User | Types.ObjectId
    }
export type SectionBody = Request['body'] & Section
