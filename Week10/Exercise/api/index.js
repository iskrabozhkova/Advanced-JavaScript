const Router = require('express').Router;

const router = Router();
const userRouter = require('./userRouter');

router.use('/users', userRouter);

module.exports = router;





