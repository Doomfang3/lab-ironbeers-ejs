const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/beers', (request, response, next) => response.sendFile(__dirname + '/views/beers.ejs'));
app.get('/random-beer', (request, response, next) => response.sendFile(__dirname + '/views/random-beer.html'));

app.listen(3000, () => console.log('🏃‍ on port 3000'));
