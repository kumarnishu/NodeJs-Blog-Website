import mongoose from "mongoose";
import { Section } from "../types/Section";

const SectionSchema = new mongoose.Schema<Section, mongoose.Model<Section>>({
    type: { type: String, required: true },
    value: { type: String },
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

    }
})

const Section = mongoose.model<Section, mongoose.Model<Section>>('Section', SectionSchema)

export default Section