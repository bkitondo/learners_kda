import { connexion } from '@/boites/connexionDb/connexion'
import { createOrFindLearner, getAllLearner } from '@/boites/controllers/learnerCtr'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: String
  data: any
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await connexion()
  if (request.method === 'POST') {
    return createOrFindLearner(request, response)
  } else if (request.method === 'GET') {
    return getAllLearner(request, response)
  }
}
