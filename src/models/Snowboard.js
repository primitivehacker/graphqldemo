import mongoose from "mongoose";

export const Snowboard = mongoose.model("Snowboard", {
  brand: String,
  size: String
});
