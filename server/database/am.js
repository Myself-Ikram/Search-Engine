import mongoose from "mongoose";

const adsSchema = new mongoose.Schema({
  companyId: Number,
  primaryText: String,
  headline: String,
  desc: String,
  cta: String,
});

export default mongoose.model("Ads", adsSchema);
