const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
import Cards from './Cards'
app.use(bodyParser.json());
app.use(cors());

var fs = require('fs');
var path  = '\Cards';
var relpath =  '../../../Cards';
const cLink = fs.readdirSync(path);
const data = {
    relpath,
    cLink
}

app.get('/deck', (req,res) => {
    res.Cards
})

app.post('/arenabalance' , (req,res) => {
    
})
app.listen(3000);