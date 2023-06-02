import Cors from 'cors';
import clientPromise from "@/lib/mongodb";
import { APPURL } from "@/lib/globals";

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export const handleValidateUser = async (credentials) => {
    const request = await fetch(`${APPURL}/api/admin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    });

    return await request.json();
}

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
    // Run the middleware
    await runMiddleware(req, res, cors);

    switch(req.method) {
        case "POST":
            const body = req.body;
            const response = await handlePost(body);
            response === true ? res.json(response) : res.status(400).send("Invalid credentials");
            break;
        default:
            res.status(404).send();
    }
}