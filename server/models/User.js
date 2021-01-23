import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  // adds createdAt and updatedAt automatically
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
