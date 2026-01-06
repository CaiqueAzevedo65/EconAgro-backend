require('dotenv').config();
const app = require('./app');

const { PORT = 3001, NODE_ENV } = process.env;

// Iniciar o servidor
const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🌍 Ambiente: ${NODE_ENV || 'development'}`);
  console.log(`📅 ${new Date().toLocaleString()}`);
});

// Tratamento de erros não capturados
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Encerrar o servidor em caso de erro não tratado
  server.close(() => process.exit(1));
});

module.exports = server;
