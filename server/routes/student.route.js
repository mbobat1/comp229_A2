import express from 'express'
import {getStudentResponse} from '../controllers/student.controller.js'
const studentRouter = express.Router()

studentRouter
    .route('/student')
    .get(getStudentResponse)

export default studentRouter