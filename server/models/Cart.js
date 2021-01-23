import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: { type: "ObjectId", ref: "User" },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  isbn: { type: Number, required: true },
  average_rating: { type: Number, required: true },
  ratings_count: { type: Number, required: true },
  price: { type: Number, required: true },
  language_code: { type: String, required: true },
});

export default mongoose.model("Cart", cartSchema);
