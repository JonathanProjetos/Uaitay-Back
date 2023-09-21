const express = require('express');
require('dotenv').config();
require('express-async-errors')
const cors = require('cors');
const RouteMenu = require('./routes/RouteMenu');
const RouteUser = require('./routes/RouteUser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());

// const front = process.env.FRONT_URL || 'http://localhost:3000';

app.use(cors({
  // origin: front,
  credentials: true,
}));

app.use(cookieParser());


app.use('/', RouteMenu);
app.use('/', RouteUser);

app.use((err, _req, res, _next) => {
  if (err.message.split('').includes('|')) {
    const [status, message] = err.message.split('|');
    res.status(Number(status)).json({ error: message });
  } else {
    console.error('Erro não Mapeado:', err.message);
    res.status(500).json({ error: err.message });
  }
  
});

module.exports = app;


