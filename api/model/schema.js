import mongoose, { Schema } from "mongoose"
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String },
    deactivated: { type: Boolean },
    password: { type: String, required: true }
})

export const User = mongoose.model("User", UserSchema)