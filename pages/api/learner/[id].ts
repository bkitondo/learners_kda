
import { connexion } from '@/boites/connexionDb/connexion'
import { DeleteLearner } from '@/boites/controllers/learnerCtr'
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
}