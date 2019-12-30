const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
app.use(bodyParser.json());
app.use(cors());

var fs = require('fs');
var path  = 'E:\\Projects\\dcard\\src\\componets\\cardland\\card\\cards';
var relpath =  '../../../Cards';
const cLink = fs.readdirSync(path);
const data = {
    relpath,
    cLink
}

app.get('/deck', (req,res) => {
    res.json(data);
})

app.post('/arenabalance' , (req,res) => {
    
})
app.listen(3000);