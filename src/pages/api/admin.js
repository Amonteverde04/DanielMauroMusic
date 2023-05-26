import clientPromise from "@/lib/mongodb";

const handlePost = async (body) => {
    try 
    {
        const client = await clientPromise;
        const db = client.db("Daniel-Mauro-Music");
        const query = {
            User: body.email,
            Password: body.password
        }

        const featuredContent = await db
        .collection("Admin")
        .find(query)
        .toArray();

        if(featuredContent.length) {
            return true;
        }
        
        return null;
    }
    catch(e)
    {
        console.error(e);
    }
}

export default async function handler(req, res) {
    switch(req.method) {
        case "POST":
            const body = req.body;
            const response = await handlePost(body);
            response === true ? res.json(response) : res.status(400).send("Invalid Credentials");
            break;
        default:
            res.status(404);
    }
}