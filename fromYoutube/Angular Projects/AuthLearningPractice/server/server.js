const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api');
const app = express();
app.use(cors());

app.use(bodyParser.json());

//when make request : localhost:3000/api
// it tell server to use api route,
// the api route locate at folder: './routes/api'
app.use('/api', api);

app.get('/', function (req, res) {
  res.send('hello from server');
});

app.listen(PORT, function () {
  console.log('server running on localhost: ' + PORT);
});

// !you can kill process on port by: sudo kill sudo lsof -t -i:3000
