import express from 'express'
import {create} from '../controllers/user.controller.js'
const userRouter = express.Router()

userRouter
    .route('/user')
    .post(create)

export default userRouter