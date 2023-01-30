import learnerModel from '../models/learnerModel'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

type Data = {
  message: String
  data: any
}

export async function getAllLearner(request: NextApiRequest, response: NextApiResponse) {
  await learnerModel
    .find()
    .then(learner => {
      if (!learner) {
        response.status(404).json({ message: 'no learner found' })
      } else {
        response.status(200).json({ message: 'learners found', data: learner })
      }
    })
    .catch(err => {
      throw err
    })
}

export async function createOrFindLearner(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const learner = await learnerModel.findOne({ email: request.body.email })
  try {
    if (learner) {
      response.status(200).json({ message: 'this learner is already created' })
    } else {
      const hash = bcrypt.hashSync(request.body.password, 10),
        { name, lastName, email, option, contact, description, status, promotion } =
          request.body
      learnerModel
        .create({
          name,
          lastName,
          email,
          option,
          contact,
          description,
          status,
          promotion,
          password: hash,
        })
        .then(learner => {
          response
            .status(200)
            .json({ message: 'learner succesfully created', data: learner })
        })
        .catch(err => {
          throw err
        })
    }
  } catch (error) {
    throw error
  }
}
