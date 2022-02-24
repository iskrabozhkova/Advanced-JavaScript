import express from 'express';
import { connectApi } from './api';
import { connect } from './database/connect';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:9000'],
    optionsSuccessStatus: 200
  })
);

app.use(express.static(path.resolve(__dirname, '..', 'public')));

connectApi(app);

connect()
  .then(() => {
    app.listen(8080, () => {
      console.log('Server is listening on :8080');
    });
  });
