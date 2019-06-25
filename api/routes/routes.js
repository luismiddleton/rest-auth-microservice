import { Router } from 'express'
import {
  loginUser
} from '../controller/Auth'

const router = Router()

// POST

router.post('/login', loginUser)

export default router
