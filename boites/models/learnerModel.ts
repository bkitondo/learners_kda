import mongoose from 'mongoose'

const learnerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
  },
  option: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  promotion: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
})
export default mongoose.models.Learner || mongoose.model('Learner', learnerSchema)
