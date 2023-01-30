import { connexion } from '@/boites/connexionDb/connexion'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAllLearner, createOrFindLearner } from '@/boites/controllers/learnerCtr'

type Data = {
  message: String
  data: any
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await connexion()
  if (request.method === 'GET') return getAllLearner(request, response)
  else if (request.method === 'POST') return createOrFindLearner(request, response)
}
