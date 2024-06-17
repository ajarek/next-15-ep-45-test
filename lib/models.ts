import mongoose from 'mongoose'

export type User = {
  _id: string|number
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type UserWithoutId = Omit<User, '_id'>

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)
const reservationSchema = new mongoose.Schema(
  {
    vehicle:{ type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    withDriver: { type: Boolean, default: false },
    email: { type: String, required: true },
  },
  { timestamps: true }
)
export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Reservation = mongoose.models?.Reservation || mongoose.model('Reservation', reservationSchema)