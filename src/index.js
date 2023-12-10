// eslint-disable-next-line import/extensions
import './helpers/dotenv.js'

import express from 'express'
import morgan from 'morgan'

const port = parseInt(process.env.PORT, 10) || 3000

const app = express()

app.use(morgan(process.env.MORGAN_LOG))

app.get('/', (req, res) => {
  const title = process.env.TITLE || 'Server'
  res.send({ msg: title })
})

app.listen(port)
