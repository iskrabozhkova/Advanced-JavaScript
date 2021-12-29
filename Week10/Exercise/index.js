const express = require('express');
const app = express();
const apiRouter = require('./api/index');
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, () => {
    console.log('Server is listening');
})