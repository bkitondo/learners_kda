import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'
import userModel from '../models/userModel'

type Data = {
  data: any
  message: String
}

export async function createOrFindUser(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const user = await userModel.findOne({ email: request.body.email })
  try {
    if (user) {
      response
        .status(200)
        .json({ message: 'this user is already created', data: user })
    } else {
      const { name, lastName, email } = request.body,
        hash = bcrypt.hashSync(request.body.password, 10)
        userModel
        .create({
          name,
          lastName,
          email,
          password: hash,
        })
        .then(user => {
          response
            .status(200)
            .json({ message: ' user is succesfully created', data: user })
        })
        .catch(err => {
          throw err
        })
    }
  } catch (error) {
    throw error
  }
}

export async function getAllUser(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  await userModel
    .find()
    .then(user => {
      response
        .status(200)
        .json({ message: 'users is succesfully found', data: user })
    })
    .catch(err => {
      throw err
    })
}
