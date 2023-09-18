const express = require('express');
require('express-async-errors')
const cors = require('cors');
const RouteMenu = require('./routes/RouteMenu');
const RouteUser = require('./routes/RouteUser');

const app = express();

app.use(express.json());
app.use(cors());

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


