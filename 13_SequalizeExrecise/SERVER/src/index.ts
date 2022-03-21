import express from 'express';
import {connect} from './database';
import {models} from './database/models'

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from backend');
})


connect().then(() => {
    models.user.create({
        email: 'test@abv.bg',
        name: 'Ivan',
        password: '1234'
    }).then(user => {
        user.email = 'best@abv.bg'
    })

    app.listen(8080, () => {
        console.log('Server is listening on :8080');
    })
})

