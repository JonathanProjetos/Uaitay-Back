const express = require('express');
require('dotenv').config();
require('express-async-errors')
const cors = require('cors');
const RouteMenu = require('./routes/menu/RouteMenu');
const RouteUser = require('./routes/user/RouteUser');
const RouterOrder = require('./routes/order/RouteOrder');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', RouteMenu);
app.use('/', RouteUser);
app.use('/', RouterOrder);

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


