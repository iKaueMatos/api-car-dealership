import express from 'express';
import routes from '../src/router/router';
import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from "./swagger.json";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/', routes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
