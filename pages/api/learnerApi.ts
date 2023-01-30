import { connexion } from '@/boites/connexionDb/connexion'
import { getAllLearner } from '@/boites/controllers/learnerCtr'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: String
  data: any
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await connexion()

  if (request.method === 'GET') {
    return getAllLearner(request, response)
  }
}
