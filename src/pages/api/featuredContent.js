import clientPromise from "@/lib/mongodb";

const handleGet = async () => {
    try 
    {
        const client = await clientPromise;
        const db = client.db("Daniel-Mauro-Music");

        const featuredContent = await db
        .collection("featured_content")
        .find({})
        .toArray();

        return featuredContent;
    }
    catch(e)
    {
        console.error(e);
    }
}

const handlePost = async () => {
    
}

export default async function handler(req, res) {
    switch(req.method) {
        case "GET":
            const response = await handleGet();
            response ? res.json(response) : res.end("400") 
            break;
        case "POST":
            ///EEE
            break;
        default:
            res.status(404);
    }
}
  