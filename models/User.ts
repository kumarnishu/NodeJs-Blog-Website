import mongoose from "mongoose"
import bcrypt from "bcryptjs";
import { User } from "../types/User";

const UserSchema = new mongoose.Schema<User, mongoose.Model<User>>({
    username: {
        type: String,
        required: true,
        trim: true,
        index: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
    },
    dp: { type: String },
    email_verified: {
        type: Boolean,
        default: false,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true,

    },
    last_login: {
        type: Date,
        default: new Date(Date.now()),
        required: true,

    },
    created_at: {
        type: Date,
        default: new Date(Date.now()),
        required: true,

    }
})

// hashing passwords
UserSchema.pre('save', async function (next) {
    if (!this.isModified("password")) next();
    if (this.password)
        this.password = await bcrypt.hash(this.password, 10)
});
const User = mongoose.model<User, mongoose.Model<User>>("User", UserSchema)

export default User