import 'reflect-metadata'
import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import { createConnection } from 'typeorm'
import { notFoundHandler, errorHandler } from './middleware'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.use(notFoundHandler)
app.use(errorHandler)

createConnection()
  .then(connection => {
    http.createServer(app).listen(port, () => {
      console.log(`server is running on port ${port}`)
    })
  })
  .catch(error => {
    console.error(error)
  })
