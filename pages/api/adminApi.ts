import { connexion } from '@/boites/connexionDb/connexion'
import { getAdmin, createOrFindAdmin } from '@/boites/controllers/adminCtr'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  data: any
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await connexion()
  if (request.method === 'POST') {
    return createOrFindAdmin(request, response)
  } else if (request.method === 'GET') {
    return getAdmin(request, response)
  }
}