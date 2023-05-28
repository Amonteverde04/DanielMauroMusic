import clientPromise from "@/lib/mongodb";
import fs from 'fs';
import { readFile } from "fs/promises";
import path from "path";
import { handleValidateUser } from "./admin";
import { mailingListSchema } from "@/lib/schemas/mailingListSchema";

function getHostUrl(host = "localhost:3000") {
    const protocol = host.includes("localhost") ? "http://" : "https://";
    return `${protocol}${host}`;
  }

const handleValidateMailingData = async (userMailingInfo) => {
    try 
    {
        // If valid, returns obj. 
        await mailingListSchema.validate({
          firstName: userMailingInfo.firstName,
          lastName: userMailingInfo.lastName,
          email: userMailingInfo.email,
        });
        
        return true;
    } 
    catch (e) 
    {
        // If invalid, breaks and goes to catch.
        return false;
    }
}

const handleExisitingMailingData = async (userMailingInfo) => {
    try 
    {
        const client = await clientPromise;
        const db = client.db("Daniel-Mauro-Music");
        const query = {
            email: userMailingInfo.email
        };

        const mailingListItem = await db
        .collection("mailing_list")
        .findOne(query);

        if(mailingListItem) {
            return true;
        }
        
        return false;
    } 
    catch (e) 
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

            const mailingList = await db
            .collection("mailing_list")
            .find({})
            .toArray();

            // Turn array to string formatted like a csv and encode it. 
            // Removes the id. Dan doesn't need it.
            const csvString = [
                [
                  "First Name",
                  "Last Name",
                  "Email Address"
                ],
                ...mailingList.map(item => [
                  item.firstName,
                  item.lastName,
                  item.email
                ].map(str => `"${str.replace(/"/g, '\"')}"`))
            ]
            .map(e => e.join(",")) 
            .join("\n");

            return csvString;
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

const handlePatch = async (body) => {
    const userMailingInfo = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
    };

    if(await handleValidateMailingData(userMailingInfo) === true)
    {
        try {
            if(await handleExisitingMailingData(userMailingInfo)) return `${userMailingInfo.email} is already in use.`;

            const client = await clientPromise;
            const db = client.db("Daniel-Mauro-Music");

            const mailingList = await db
            .collection("mailing_list")
            .insertOne(userMailingInfo);

            if(mailingList.insertedId) return true;
            
            return "Could not reach db provider";
        }
        catch(e)
        {
            console.error(e);
        }
    }
    else
    {
        return false;
    }
}

export default async function handler(req, res) {
    switch(req.method) {
        case "POST":
            const postBody = req.body;
            const postResponse = await handlePost(postBody);
            if(postResponse.length)
            {
                // create or overwrite file
                fs.writeFileSync(`/tmp/mailingList.txt`, postResponse);
                // Read file
                const readStream = fs.createReadStream("/tmp/mailingList.txt")
                // Serve file
                readStream.on('open', function () {
                    readStream.pipe(res)
                });

                readStream.on('error', function (e) {
                    res.end(e);
                });

                res.setHeader("Content-Type", "text/csv");
                return res.status(200).json({message: "Success"});
            } 
            res.status(400).send("Invalid credentials or could not reach db provider.");
            break;
        case "PATCH":
            const updateBody = req.body;
            const updateResponse = await handlePatch(updateBody);
            updateResponse === true ? 
                res.json("You have successfully signed up for the mailing list!") : res.status(400).send(JSON.stringify(updateResponse));
            break;
        default:
            res.status(404).send();
    }
}