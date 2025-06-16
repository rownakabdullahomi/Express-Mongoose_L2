import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "Please give the first name, it is mandatory."],
    trim: true,
    minlength: 3,
    maxlength: 12,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: [18, "Age must be at least 18, got {VALUE}"],
    max: 60,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: function (props){
        return `The email ${props.value} is not a valid email`
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    uppercase: true,
    enum: {
      values: ["USER", "ADMIN", "SUPERADMIN"],
      message: "{VALUE} is not a valid role. ",
    },
    default: "USER",
  },
});

export const User = model("User", userSchema);
