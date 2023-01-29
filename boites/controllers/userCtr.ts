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

export async function UpdateUser(request: NextApiRequest, response: NextApiResponse) {
    const id = request.query.id
    const { name, lastName, email, password } = request.body
    if(
      !name && name.trim() === "") {
      response.status(500).json({message: "Name cannot be empty"})
    }
    else if( !lastName && lastName.trim() ===""){
        response.status(500).json({message: "LastName cannot be empty"})
    }
    else if(!email && email.trim() === ""){
        response.status(500).json({message: "Email cannot be empty"})
    }
    else if(!password && password.trim() === ""){
        response.status(500).json({message: "Password cannot be empty"})
    }
    else{
      bcrypt.hash(request.body.password, 10, async function (err, hash) {
        try{
          await userModel.findByIdAndUpdate(id,{
            name: request.body.name, 
            lastName: request.body.lastName,
            email: request.body.email, 
            password:hash
          })
          .then(user => {
              if(!user) {
                response.status(500).json({message: "User you wanna update doesn't exist"})
              }
              else{
                response.status(200).json({message: "User updated", data: user})
              }
          })
          .catch(err => {
            throw err
          })
        }
        catch(err) {
          throw err
        }
    });
    }
} 


export async function DeleteUser (request: NextApiRequest, response: NextApiResponse){
    const id = request.query.id
    try{
      await userModel.findByIdAndRemove(id)
      .then(user=> {
        if(!user){
          response.status(500).json({message: "User you wanna delete doesn't exist"})
        }
        else{
          response.status(200).json({message: "User deleted"})
        }
      })
      .catch(err => {
        throw err
      })
 
    }
    catch(err){
      throw err
    } 
}
