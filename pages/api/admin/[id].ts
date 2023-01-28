import { connexion } from "@/boites/connexionDb/connexion"
import { UpdateAdmin } from "@/boites/controllers/adminCtr"
import { NextApiRequest, NextApiResponse } from "next"


type Data = {
    message: String,
    data: any
}

export default async function handler(request : NextApiRequest, response: NextApiResponse<Data>) {

    await connexion()
    if (request.method === 'PUT') {
        return UpdateAdmin(request, response)
      }
}