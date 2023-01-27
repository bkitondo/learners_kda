import type { NextApiRequest, NextApiResponse } from 'next'
import { connexion } from '@/boites/connexionDb/connexion'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  connexion()
  res.status(200).json({ name: 'learner_kda' })
}
