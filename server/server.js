require('dotenv').config();

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.static('../client/dist'));

/* Routes */
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
