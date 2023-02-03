import { connexion } from "@/boites/connexionDb/connexion";
import { LoginUser } from "@/boites/controllers/userCtr";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: String,
    data: any
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
    await connexion()
    if(request.method === "POST"){
        return LoginUser(request, response)
    }
}