import express from 'express';
import './database'

const app = express();

const port = 3333

app.get('/', (req, res) => {
  return res.json({
    message: 'oi'
  })
})

app.post('/', (req, res) => {
  return res.json({
    message: 'Usuário salvo com sucesso'
  })
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));