const express = require('express');
const swaggerDocs = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});
