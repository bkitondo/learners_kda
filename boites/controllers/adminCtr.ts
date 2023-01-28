import adminModel from '../models/adminModel'
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

type Data = {
  message: String
  data: any
}

export async function getAdmin(request: NextApiRequest, response: NextApiResponse<Data>) {
  const admin = await adminModel.find()
  try {
    if (admin) {
      response
        .status(200)
        .json({ message: 'the admin is succesfully found', data: admin })
    }
  } catch (err) {
    throw err
  }
}

export async function createOrFindAdmin(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
) {
  const admin = await adminModel.findOne({ email: request.body.email })
  try {
    if (!admin) {
      const hash = bcrypt.hashSync(request.body.password, 10)
      adminModel
        .create({
          email: request.body.email,
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
    } else {
      response
        .status(200)
        .json({ message: 'this admin is succesfully found', data: admin })
    }
  } catch (err) {
    throw err
  }
}

export async function UpdateAdmin(request : NextApiRequest, response: NextApiResponse<Data>) {

  const id = request.query.id;
  console.log(id)
      bcrypt.hash(request.body.password, 10, async function (err, hash) {
      try{
        await adminModel.findByIdAndUpdate(id, {
          email: request.body.email,
          password: hash,
         }).then(admin => { 
            if(!admin){
              response.status(500).json({message: "Interval Error Server", data: admin})
            }
            else{
              response.status(200).json({message: "Admin Updated", data: admin})
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