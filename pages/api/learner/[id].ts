
import { connexion } from '@/boites/connexionDb/connexion'
import { DeleteLearner, UpdateLearner } from '@/boites/controllers/learnerCtr'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: String
    data: any
  }

export default async function handler(request: NextApiRequest, response: NextApiResponse<Data>) {
    await connexion()
    if(request.method === "DELETE"){
        return DeleteLearner(request, response)
    }
    if(request.method === "PUT"){
        return UpdateLearner(request, response)
    }
}