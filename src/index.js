import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// eslint-disable-next-line no-unused-vars
import * as _ from './config'

const app = express()

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8005
const host = '0.0.0.0'

app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

app.use('/api/ping', (_, res) => {
  res.json({ message: 'Pong' })
})

app.listen(port, host, () => console.info(`App Listening on port: ${port}`))

app.use((_, res) => {
  res.status(404).json({ message: Sorry can't find that!" })
})
