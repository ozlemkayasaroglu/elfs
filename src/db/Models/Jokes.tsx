import mongoose from "mongoose";

export interface Jokes extends mongoose.Document {
  text: string;
  image: string;
  xLink: string;
}

const JokeSchema = new mongoose.Schema<Jokes>({
  text: { type: String, required: true },
  image: { type: String, required: true },
  xLink: { type: String, required: true },
  
});

export default mongoose.models.Joke || mongoose.model<Jokes>("Joke", JokeSchema);