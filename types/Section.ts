import { Asset } from "./Asset"

export type SectionType = "heading" | "title" | "paragraph" | "image" | "audio" | "video" | "embed" | "link" | "divider"

export type Section =
    {
        _id?: string,
        type: SectionType,
        value: string | Asset,
        is_published: Boolean,
        created_at?: Date,
        updated_at?: Date
    }
export type SectionBody = Request['body'] & Section
