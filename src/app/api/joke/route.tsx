import dbConnect from "@/db/MongoClient";
import Jokes from "@/db/Models/Jokes"

export async function GET(){
await dbConnect();
const jokes = await Jokes.find({});
    return new Response(JSON.stringify({data: jokes}))
}



export async function POST(){

}