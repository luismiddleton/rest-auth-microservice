import mongoose, { Schema } from "mongoose"
import { User } from "../model/schema"
import { isEmpty, omit } from 'lodash'
import { JWT_SECRET, COLLECTION } from '../../config'
import { HAS_ERROR, USER_UNDEFINED, IS_FORBIDDEN, NO_USERS } from '../messages/messages'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export function loginUser(req, res) {
  async function run() {
    const { query: { username, password } } = req

    const profile = await User.findOne({ username }).select('+password')
    const comparePassword = await bcrypt.compare(password, profile.password)

    if (comparePassword) {
      const { username, email, deactivated } = profile
      const meta = Object.assign({ username, email, deactivated })

      const token = jwt.sign({ ...meta }, JWT_SECRET, { expiresIn: '1d' })
      return {
        token
      }
    } else {
      res.status(403).json({
        ...IS_FORBIDDEN
      })
    }
  }

  run().then(d => res.json(d)).catch(e => res.json(e))
}
