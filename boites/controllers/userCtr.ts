import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'
import userModel from '../models/userModel'
import jwt from "jsonwebtoken"
import { NextResponse } from 'next/server'

type Data = {
  data: any
  message: String
}

export async function createOrFindUser(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const user = await userModel.findOne({ email: request.body.email })
  try {
    if (user) {
      response.status(200).json({ message: 'this user is already created' })
    } else {
      const { name, lastName, email, password } = request.body
      if (name && password && lastName && email) {
        const hash = bcrypt.hashSync(password, 10)
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
      } else {
        response.status(500).json({ message: 'fill in the empty fields' })
      }
    }
  } catch (error) {
    throw error
  }
}

export async function getAllUser(request: NextApiRequest, response: NextApiResponse) {
  await userModel
    .find()
    .then(user => {
      if (user) {
        response.status(200).json({ message: 'users are succesfully found', data: user })
      } else {
        response.status(404).json({ message: 'no user found' })
      }
    })
    .catch(err => {
      throw err
    })
}

export async function UpdateUser(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const id = request.query.id
  const { name, lastName, email, password } = request.body
  if (!name && name.trim() === '') {
    response.status(500).json({ message: 'Name cannot be empty', data: name })
  } else if (!lastName && lastName.trim() === '') {
    response.status(500).json({ message: 'LastName cannot be empty', data: lastName })
  } else if (!email && email.trim() === '') {
    response.status(500).json({ message: 'Email cannot be empty', data: email })
  } else if (!password && password.trim() === '') {
    response.status(500).json({ message: 'Password cannot be empty', data: password })
  } else {
    bcrypt.hash(request.body.password, 10, async function (err, hash) {
      try {
        await userModel
          .findByIdAndUpdate(id, {
            name: request.body.name,
            lastName: request.body.lastName,
            email: request.body.email,
            password: hash,
          })
          .then(user => {
              if(!user) {
                response.status(500).json({message: "User you wanna update doesn't exist", data: user})
              }
              else{
                response.status(200).json({message: "User updated", data: null})
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

export async function DeleteUser(request: NextApiRequest, response: NextApiResponse) {
  const id = request.query.id
  try {
    await userModel
      .findByIdAndRemove(id)
      .then(user => {
        if (!user) {
          response.status(500).json({ message: "User you wanna delete doesn't exist" })
        } else {
          response.status(200).json({ message: 'User deleted' })
        }
      })
      .catch(err => {
        throw err
      })
  } catch (err) {
    throw err
  }
}

export async function LoginUser(request: NextApiRequest, response: NextApiResponse){
    const user = await userModel.findOne({email: request.body.email})

    if(!user) {
      response.status(400).json({message: "Email or password incorrect"})
    }
    else{
      const valid = await bcrypt.compare(request.body.password, user.password)
      try{
        if(valid){
            response.status(200).json({
              user,
              token: "Bearer " + jwt.sign(
                { userId: user._id },
                "RANDOM_TOKEN_SECRET",
                { expiresIn : "24h" }
                )
            })
        }
        else{
          response.status(400).json({message: "Email or password incorrect"})
        }
      }
      catch(err){
        throw err
      }
    }
}

/*
export async function LoginUser(request: NextApiRequest, response: NextApiResponse) {

  const user = await userModel.findOne({ email: request.body.email});
  if (user) {
    const checkPassword = await bcrypt.compare(request.body.password, user.password);
    if (checkPassword) {
        response.status(200).json({ 
          user,
            token: "Bearer "+ jwt.sign(
              { userId: user._id }, 
              "RANDOM_TOKEN_SECRET", 
              { expiresIn: "24h", }
            ),
            success: true,
            message: "User Find",
        });
    } else {
        response.status(400).json({message:"Email or Password incorrecte", data: null});   
    }
  } else {
    return response.status(400).send({message:"Email or Password incorrecte", data:null });
  }

}
*/