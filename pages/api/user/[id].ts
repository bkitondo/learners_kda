import { connexion } from "@/boites/connexionDb/connexion";
import { DeleteUser, UpdateUser } from "@/boites/controllers/userCtr";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {

    await connexion()
    if(request.method === "PUT"){
        return UpdateUser(request, response)
    }
    if(request.method === "DELETE"){
        return DeleteUser(request, response)
    }
    
}