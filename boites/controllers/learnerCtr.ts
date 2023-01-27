import learnerModel from '../models/learnerModel'
import type { NextApiRequest, NextApiResponse } from 'next'
// import bcrypt from 'bcrypt'

type Data = {
  message: String
  data: any
}

export async function getAllLearner(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await learnerModel
    .find()
    .then(learner => {
      if (!learner) {
        response.status(404).json({ message: 'learner not found', data: learner })
      } else {
        response.status(200).json({ message: 'learner found', data: learner })
      }
    })
    .catch(err => {
      throw err
    })
}
