const express = require('express');
const utils = require('./utils')
const app = express();

app.set('view engine', 'ejs');
app.set('layout', './layout')

app.get('/',(req,res)=>{
    utils.renderWithLayout(res, 'home', {results: {a: 1, b: 2}})
})
app.get('/about', (req,res) => {
    utils.renderWithLayout(res, 'about', {})
})

app.listen(8080, () => {
    console.log('Server is listening');
})