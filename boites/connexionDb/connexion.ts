import mongoose from 'mongoose'

export async function connexion() {
  const connect = await mongoose.connect(`${process.env.MONGOOSE_CONNECT}`)
  try {
    if (connect) {
      console.log('connecting in database')
    }
  } catch (err) {
    console.log(err)
  }
}
