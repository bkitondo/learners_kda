import adminModel from '../models/adminModel'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

type Data = {
  message: String
  data: any,
}

export async function getAllAdmin(request: NextApiRequest, response: NextApiResponse) {
  const admin = await adminModel.find()
  try {
    if (admin) {
      response
        .status(200)
        .json({ message: 'the admins are succesfully found', data: admin })
    } else {
      response.status(404).json({ message: 'no admin found' })
    }
  } catch (err) {
    throw err
  }
}

export async function createOrFindAdmin(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const admin = await adminModel.findOne({ email: request.body.email })
  try {
    if (!admin) {
      const { email, password } = request.body
      if (!email) {
        response.status(500).json({ message: 'email required' })
      } else if (!password) {
        response.status(500).json({ message: 'password required' })
      } else {
        const hash = bcrypt.hashSync(request.body.password, 10)
        adminModel
          .create({
            email,
            password: hash,
          })
          .then(admin => {
            response
              .status(200)
              .json({ message: 'this admin is succesfuly created ', data: admin })
          })
          .catch(error => {
            throw error
          })
      }
    } else {
      response.status(200).json({ message: 'this admin is already created' })
    }
  } catch (err) {
    throw err
  }
}

export async function UpdateAdmin(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const id = request.query.id
  const { email, password } = request.body

          if(!email && email.trim() === "") {
              response.status(500).json({message: "Email cannot be empty", data: email})
          }
          if(!password && password.trim() === "") {
            response.status(500).json({message: "Password cannot be empty", data: password})
          }
          else{
            bcrypt.hash(request.body.password, 10, async function (err, hash) {
              try{
                await adminModel.findByIdAndUpdate(id, {
                  email: request.body.email,
                  password: hash,
                }).then(admin => { 
                    if(!admin){
                      response.status(500).json({message: "Admin you wanna update doesn't exist", data: admin})
                    }
                    else{
                      response.status(200).json({message: "Admin Updated", data: null})
                    }
                }).catch(err => {
                    throw err
                })
              }
              catch (err) {
                throw err
              }
          });
      }
}

export async function DeleteAdmin(request: NextApiRequest, response: NextApiResponse) {
  const id = request.query.id
  try {
    await adminModel
      .findByIdAndRemove(id)
      .then(admin => {
        if (!admin) {
          response.status(500).json({ message: "Admin you wanna delete doesn't exist" })
        } else {
          response.status(200).json({ message: 'Admin deleted' })
        }
      })
      .catch(err => {
        throw err
      })
  } catch (err) {
    throw err
  }
}

export async function FoundOnAdmin(request: NextApiRequest, response: NextApiResponse<Data>){
    const id = request.query.id

    try{
      await adminModel.findById(id)
      .then(admin => {
          if(!admin){
              response.status(400).json({ message: "Admin Not Found", data: null })
          }
          else{
            response.status(400).json({ message: "Admin Found succesfully", data: admin })
          }
      })
    }
    catch(err){
      throw err
    }
}

export async function LoginAdmin(request: NextApiRequest, response: NextApiResponse) {

  const admin = await adminModel.findOne({ email: request.body.email});
  if (admin) {
    const checkPassword = await bcrypt.compare(request.body.password, admin.password);
    if (checkPassword) {
        response.status(200).json({ 
          data: admin,
            token: "Bearer "+ jwt.sign(
              { adminId: admin._id }, 
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