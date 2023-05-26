import clientPromise from "@/lib/mongodb";
import { handleValidateUser } from "./admin";

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

const handlePost = async (body) => {
    const credentials = {
        email: body.email,
        password: body.password
    };

    if(await handleValidateUser(credentials) === true)
    {
        try {
            const client = await clientPromise;
            const db = client.db("Daniel-Mauro-Music");
            const query = {
                name: body.featuredName,
                link: body.featuredLink,
                action: body.featuredAction
            }

            const featuredContent = await db
            .collection("featured_content").replaceOne({},query);

            if(featuredContent.modifiedCount === 1) {
                return true;
            }

            return null;
        }
        catch(e)
        {
            console.error(e);
        }
    }
    else 
    {
        return null;
    }
}

export default async function handler(req, res) {
    switch(req.method) {
        case "GET":
            const getResponse = await handleGet();
            getResponse ? 
                res.json(getResponse) : res.status(400).send("Could not get data"); 
            break;
        case "POST":
            const body = req.body;
            const postResponse = await handlePost(body);
            postResponse === true ? 
                res.json(postResponse) : res.status(400).send("Invalid Credentials or could not read db provider.");
            break;
        default:
            res.status(404).send();
    }
}