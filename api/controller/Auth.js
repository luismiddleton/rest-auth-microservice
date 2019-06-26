import mongoose from "mongoose"
import { User } from "../model/schema"
import { JWT_SECRET } from '../../config'
import { HAS_ERROR, USER_UNDEFINED, IS_FORBIDDEN, NO_USERS, INVALID_CREDENTIALS } from '../messages/messages'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export function loginUser(req, res) {

  const run = async () => {
    let profile, comparePassword
    const { query: { username, password } } = req

    profile = await User.findOne({ username }).select('+password')
    comparePassword = await compare(password, profile.password)

    if (comparePassword) {
      const { username, email, deactivated } = profile

      const token = sign({ username, email, deactivated }, JWT_SECRET, { expiresIn: '1d' })
      return {
        token
      }
    } else {
      res.status(401).json(INVALID_CREDENTIALS)
    }
  }

  run().then(d => res.json(d)).catch(e => res.json(e))
}
