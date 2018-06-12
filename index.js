const express = require('express');
require('dotenv').config()

const app = express();
app.use(express.static(`${__dirname}/src/build`))
  app.get('*', (req, res) => res.sendFile(`${__dirname}/src/build/index.html`))
  app.listen(process.env.PORT, () =>
    console.log('__SERVER_RUNNING__', process.env.PORT));