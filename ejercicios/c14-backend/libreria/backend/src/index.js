import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/', (_req, res) => {
  res.json({ message: 'API Librería funcionando', status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
