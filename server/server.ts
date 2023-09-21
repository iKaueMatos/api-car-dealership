// server.ts
import express from 'express';
import router from '../router/router';
import { categoriesRoutes } from '../router/categories.router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/categories', categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});