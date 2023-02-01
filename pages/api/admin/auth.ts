import { connexion } from "@/boites/connexionDb/connexion";
import { LoginAdmin } from "@/boites/controllers/adminCtr";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: String
    data: any
  }
  
  export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<Data>,
  ) {
    await connexion()
    if(request.method === "POST"){
      return LoginAdmin(request, response)
    }
   
  }