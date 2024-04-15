import mongoose, { Schema } from "mongoose";

export interface Others extends mongoose.Document {
  text: string;
  image: string;
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const OtherJokeSchema = new mongoose.Schema<Others>({
  text: { type: String, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: {type: String, default: new Date()},
  updatedAt: {type: String, default: new Date(), required: false},
});

export default mongoose.models.OtherJoke || mongoose.model<Others>("OtherJoke", OtherJokeSchema);