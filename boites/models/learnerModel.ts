import mongoose from 'mongoose'

const learnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  option: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  promotion: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'sans emploi',
  },
})
export default mongoose.models.Learner || mongoose.model('Learner', learnerSchema)
