import { connexion } from '@/boites/connexionDb/connexion'
import { getAllUser, createOrFindUser } from '@/boites/controllers/userCtr'
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
    return createOrFindUser(request, response)
  } else if (request.method === 'GET') {
    return getAllUser(request, response)
  }
}
