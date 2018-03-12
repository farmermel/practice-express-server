const express = require('express');
const app = express();
var path = require('path');

const urlLogger = (request, response, next) => {
  console.log('RequestURL: ', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json({'name': 'Mel'})
})

app.get('/plant', (request, response) => {
  response.sendFile(path.join(__dirname+'/public/rose.html'));
  // response.status(200).json({'plant': 'rose'});
})

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});