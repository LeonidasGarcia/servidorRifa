import express from 'express';
import usuarioRoutes from './routes/usuario.routers.js';
import cors from "cors"

const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', usuarioRoutes);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
