import express from 'express';
import { ModuleResolutionKind } from 'typescript';
import { connect } from './database/connect';
import { models } from './database/models';
// import { models } from './database/models';

const app = express();

app.get('/', (req, res) => {
  res.send('HELLO FROM BACKEND!');
});

connect().then(() => {
models.user.create({
    email: 'test@abv.bg',
    password: '123456',
    firstName: 'test',
    lastName: 'testov',
    username: 'test123'

})

  app.listen(8080, () => {
    console.log('Server is listening on :8080');
  });
});