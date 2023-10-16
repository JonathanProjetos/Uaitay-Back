const mongoose = require('mongoose');
require('dotenv/config');

const MONGO_DB_URL = process.env.MONGO_URL;

const connectToDataBase = async (mongoDataBaseName = 'uai-tay') => {
  try {
    const mongoDataBaseURI = `${MONGO_DB_URL}/${mongoDataBaseName}`;
    await mongoose.connect(mongoDataBaseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Conectado ao banco de dados: ${mongoDataBaseName}`);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

module.exports = connectToDataBase;
