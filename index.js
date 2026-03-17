'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('wellcome');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;