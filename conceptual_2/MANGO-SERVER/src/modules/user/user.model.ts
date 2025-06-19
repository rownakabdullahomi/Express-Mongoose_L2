import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true, min: 3, max: 50 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    unique: true,
    immutable: true,
  },
  phone: {
    type: String,
    required: [true, "A valid phone number is required"],
    unique: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: {
      values: ["Admin", "Customer"],
      message: "{VALUE} is not a valid role",
    },
    required: true,
  },
});

const User = model<IUser>("User", userSchema);
export default User;
