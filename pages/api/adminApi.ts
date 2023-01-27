import type { NextApiRequest, NextApiResponse } from 'next'
import { connexion } from '@/boites/connexionDb/connexion'
import { getAdmin, createOrFindAdmin } from '@/boites/controllers/adminCtr'

type Data = {
  name: string
  data: any
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await connexion()
  if (request.method === 'GET') {
    return getAdmin(request, response)
  } else if (request.method === 'POST') {
    return createOrFindAdmin(request, response)
  }
}
