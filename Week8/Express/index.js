const express = require('express');
const utils = require('./utils')
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('layout', './layout');


app.get('/',(req,res)=>{
    utils.renderWithLayout(res, 'home', {results: {a: 1, b: 2}})
})
app.get('/about', (req,res) => {
    utils.renderWithLayout(res, 'about', {})
})
app.get('/login', (req,res) => {
    utils.renderWithLayout(res, 'login', {})
})
app.post('/login', (req,res) => {
    const {username,password} = req.body;
})

app.listen(8080, () => {
    console.log('Server is listening');
})