import express from 'express';
import routes from '../src/router/router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
