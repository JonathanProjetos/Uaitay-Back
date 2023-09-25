const express = require('express');
require('dotenv').config();
require('express-async-errors')
const cors = require('cors');
const RouteMenu = require('./routes/RouteMenu');
const RouteUser = require('./routes/RouteUser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: 'https://uai-tay-front.vercel.app',
  credentials: true,
}));

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://uai-tay-front.vercel.app');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', RouteMenu);
app.use('/', RouteUser);

app.use((err, _req, res, _next) => {
  if (err.message.split('').includes('|')) {
    const [status, message] = err.message.split('|');
    res.status(Number(status)).json({ error: message });
  } else {
    console.error('Erro não Mapeado:', err);
    console.error('Erro não Mapeado:', err.message);
    res.status(500).json({ error: err.message });
  }
  
});

module.exports = app;


