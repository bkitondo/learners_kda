import bcrypt from 'bcrypt'
import learnerModel from '../models/learnerModel'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
  message: String
}

export async function createOrFindLearner(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const learner = await learnerModel.findOne({ email: request.body.email })
  try {
    if (learner) {
      response
        .status(200)
        .json({ message: 'this learner is already created', data: learner })
    } else {
      const { name, lastName, email } = request.body,
        hash = bcrypt.hashSync(request.body.password, 10)
      learnerModel
        .create({
          name,
          lastName,
          email,
          password: hash,
        })
        .then(learner => {
          response
            .status(200)
            .json({ message: ' learner is succesfully created', data: learner })
        })
        .catch(err => {
          throw err
        })
    }
  } catch (error) {
    throw error
  }
}

export async function getAllLearner(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await learnerModel
    .find()
    .then(learner => {
      response
        .status(200)
        .json({ message: 'learners is succesfully found', data: learner })
    })
    .catch(err => {
      throw err
    })
}
