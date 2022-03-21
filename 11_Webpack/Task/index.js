const express = require('express');
const path = require('path');
const app = express();
const jwt = require('./jwt');

const users = [
    {
        email: 'test@test.test',
        password: '123',
        firstName: 'Test',
        lastName: 'Test'
    }
]

app.use(express.static('public'));
app.use(express.json());

app.get('/authenticate', (req, res) => {
   res.send({user: null});
  });
app.post('/login', (res,req)=>{
    const {email, password} = req.body;
    const user = users.find((user) => user.email === email && user.password === password);
    const ops = user ? jwt.createToken(user).then(token => [user,token]) : Promise.resolve([user,null]);
    ops.then(([user, token]) => {
        res.send({user}); 
    })
   
})

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
  });

  app.listen(8080, () => {
    console.log('Server is listening on :8080');
  });  