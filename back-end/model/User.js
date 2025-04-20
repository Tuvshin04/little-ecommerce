import mongoose, { model } from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});
export const User = model("User", UserSchema);
