const express = require('express');
const cors = require('cors');
const RouteMenu = require('./routes/RouteMenu');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', RouteMenu);


module.exports = app;


