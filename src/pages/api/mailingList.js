import clientPromise from "@/lib/mongodb";
import { handleValidateUser } from "./admin";

const handleValidateMailingData = () => {
    return true;
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

            const mailingList = await db
            .collection("Mailing-List")
            .find({})
            .toArray();

            // return as csv.
            return mailingList;
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

const handleUpdate = async (body) => {
    const userMailingInfo = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
    }

    if(handleValidateMailingData(userMailingInfo) === true)
    {
        try {
            const client = await clientPromise;
            const db = client.db("Daniel-Mauro-Music");

            const mailingList = await db
            .collection("Mailing-List")
            .insertOne(userMailingInfo)

            if(mailingList.insertedId) {
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
        case "POST":
            const body = req.body;
            const postResponse = await handlePost(body);
            postResponse ? 
                res.json(postResponse) : res.status(400).send("Invalid Credentials or could not read db provider.");
            break;
        case "UPDATE":
            const updateResponse = await handleUpdate();
            updateResponse ? 
                res.json(updateResponse) : res.status(400).send("Invalid Credentials or could not read db provider");
            break;
        default:
            res.status(404).send();
    }
}