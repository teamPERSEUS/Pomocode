const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 7337;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
