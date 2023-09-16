const mongoose = require('mongoose');

require = ('dotenv/config');

const MONGO_DB_URL = process.env.MONGO_URL;
/*
12 1.152 (node:20) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
12 1.152 (Use `node --trace-deprecation ...` to show where the warning was created)
*/
mongoose.set('strictQuery', false);

const connectToDataBase = (
  mongoDataBaseURI = MONGO_DB_URL,
) => mongoose.connect(mongoDataBaseURI);

module.exports = connectToDataBase;