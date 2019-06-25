import mongoose, { Schema } from "mongoose"
const UserSchema = new Schema({
    username: String, email: String, password: String,
})

export const User = mongoose.model("User", UserSchema)