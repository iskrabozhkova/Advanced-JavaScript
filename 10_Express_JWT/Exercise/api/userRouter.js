const Router = require('express').Router;
const {createToken, verify} = require('../jwt');
const router = Router();


const users = [{
    id: 0,
    email: 'test',
    password: '1234'
}];

function withToken(req,res,next){
    const token = req.cookies['auth-token'];
    if(token){
        verify(token)
        .then(() => next())
        .catch(() => {
            res.status(401).send();
        });
    }else{
        res.status(401).send();
    }
}
function* idGenerator(){
    let i = 1;
    while(true){
        yield i++;
    }
}

router.post('/registration', (req,res) => {
    const {email, password} = req.body;
    if(users.some(user => user.email === email)){
        res.status(400).send('User with such email already exists!');
        return;
    }
    const gen = idGenerator();
    users.push({id: gen.next().value,email, password});
    res.status(201).send('User created');
})
router.post('/login', (req,res) => {
    const {email, password} = req.body;
    if(users.some(user => user.email === email && user.password === password)){
        createToken(email).then(token => {
            res.cookie('auth-token', token, {httpOnly: true});
            res.send();
        });
    }else{
        res.status(401).send();
    }
})
router.get('/', withToken, (req,res) => {
    res.json(users);
})

module.exports = router;