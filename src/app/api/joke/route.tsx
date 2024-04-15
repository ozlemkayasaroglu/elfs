import dbConnect from "@/db/MongoClient";
import Jokes from "@/db/Models/Jokes";
import OtherJoke, { Others } from "@/db/Models/OtherJoke";

export async function GET() {
  await dbConnect();
  const jokes = await Jokes.find({});
  return new Response(JSON.stringify({ data: jokes }));
}

export async function POST(request: Request) {
  await dbConnect();
  const body: Others = await request.json();
  const joke = await OtherJoke.create({
    author: body.author,
    text: body.text,
    image: body.image,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return new Response(JSON.stringify({ success:true, data: joke }));
}
