const express = require('express')
const dotenv = require('dotenv')

// LOAD ENV VARIABLES

dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Le server a démarer sur le port ${process.env.PORT} en mode ${process.env.NODE_ENV}`,
  ),
)
