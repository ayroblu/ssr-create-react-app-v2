import 'ignore-styles'
import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import fs from 'fs'

// routes
import index from './routes/index'
import api from './routes/api'
import universalLoader from './universal'

const app = express()

// Support Gzip
app.use(compression())

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

export default app
