import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define the User document interface
interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  isModified(path: string): boolean;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },
  { timestamps: true }
);

// Note: Password hashing will be handled in the controller for now

export default mongoose.model<UserDocument>("User", userSchema);