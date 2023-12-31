const mongoose = require('mongoose');
require('dotenv/config');

const MONGO_DB_URL = process.env.MONGO_URL;

const connectToDataBase = async (mongoDataBaseName = 'UaiTay') => {
  try {
    const mongoDataBaseURI = `${MONGO_DB_URL}`;
      mongoose.connect(mongoDataBaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: mongoDataBaseName,
      });
    console.log(`Conectado ao banco de dados: ${mongoDataBaseName}`);
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

module.exports = connectToDataBase;
