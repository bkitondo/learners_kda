import learnerModel from '../models/learnerModel'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
      const {
        name,
        lastName,
        email,
        option,
        contact,
        description,
        status,
        promotion,
        password,
      } = request.body
      if (
        name &&
        lastName &&
        image &&
        email &&
        option &&
        description &&
        promotion &&
        password
      ) {
      if (name && lastName && image && email && option && description && promotion && password) {
      if (name && lastName && email && option && description && promotion && password) {
        const hash = bcrypt.hashSync(password, 10)
        learnerModel
          .create({
            name,
            lastName,
            image,
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
      } else {
        response.status(500).json({ message: 'please, fill in the empty fields' })

        response.status(500).json({ message: 'fill in the empty fields' })

      }
    }
  } catch (error) {
    throw error
  }
}

export async function DeleteLearner(request: NextApiRequest, response: NextApiResponse) {
  const id = request.query.id
  try {
    learnerModel
      .findByIdAndRemove(id)
      .then(learner => {
        if (!learner) {
          response.status(500).json({ message: "Learner you wanna delete doesn't exist" })
        } else {
          response.status(200).json({ message: 'Learner deleted' })
        }
      })
      .catch(err => {
        throw err
      })
  } catch (err) {
    throw err
  }
}

export async function UpdateLearner(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const id = request.query.id
  const {
    name,
    lastName,
    image,
    email,
    password,
    contact,
    option,
    description,
    promotion,
    status,
  } = request.body

  if (!name && name.trim() === '') {
    response.status(500).json({ message: 'Name cannot be empty', data: name })
  } else if (!lastName && lastName.trim() === '')
    response.status(500).json({ message: 'LastName cannot be empty', data: lastName })
  else if (!image && image.trim() === '')
    response.status(500).json({ message: 'Image cannot be empty', data: image })
  else if (!email && email.trim() === '')
    response.status(500).json({ message: 'Email cannot be empty', data: email })
  else if (!password && password.trim() === '')
    response.status(500).json({ message: 'Password cannot be empty', data: password })
  else if (!option && option.trim() === '')
    response.status(500).json({ message: 'Option cannot be empty', data: option })
  else if (!promotion && promotion.trim() === '')
    response.status(500).json({ message: 'Promotion cannot be empty', data: promotion })
  else {
    bcrypt.hash(request.body.password, 10, async function (err, hash) {
      try {
        await learnerModel
          .findByIdAndUpdate(id, {
            name,
            lastName,
            image,
            email,
            password: hash,
            contact,
            option,
            description,
            promotion,
            status,
          })
          .then(learner => {
            if (!learner) {
              response
                .status(500)
                .json({
                  message: "Learner you wanna update doesn't exits",
                  data: learner,
                })
            } else {
              response.status(200).json({ message: 'Learner updated', data: null })
            }
          })
          .catch(err => {
            throw err
          })
      } catch (err) {
        throw err
      }
    })
  }
}

export async function FoundOneLearner(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const id = request.query.id

  try {
    await learnerModel.findById(id).then(learner => {
      if (!learner) {
        response.status(400).json({ message: 'Learner Not Found', data: null })
      } else {
        response.status(200).json({ message: 'Learner Found succesfully', data: learner })
      }
    })
  } catch (err) {
    throw err
  }
}

export async function LoginLearner(request: NextApiRequest, response: NextApiResponse) {
  const user = await learnerModel.findOne({ email: request.body.email })

  try {
    if (!user) {
      response.status(400).json({ message: 'Email or Password incorrect' })
    } else {
      const valid = await bcrypt.compare(request.body.password, user.password)
      if (!valid) {
        response.status(400).json({ message: 'Email or Password incorrect' })
      } else {
        response.status(200).json({
          data: user,
          token:
            'Baerer ' +
            jwt.sign({ LearnerId: user._id }, 'RANDOM_TOKEN_SECRET', {
              expiresIn: '24h',
            }),
        })
      }
    }
  } catch (err) {
    throw err
  }
}
