const express = require('express');
const app = express();
const path = require('path');
const gameRoutes = require('./routes/game.js')
app.use(express.static('public'));

app.listen(3000, () => console.log('listening on port 3000'));

app.use(express.static(
  path.join(__dirname, 'public'))
);

gameRoutes(app);


