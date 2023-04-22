import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  url: String,
});
export default mongoose.model("Companies", companiesSchema);
