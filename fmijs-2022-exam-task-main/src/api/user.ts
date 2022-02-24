import { Router } from "express";
import { models } from "../database/models";

const router = Router();
// NOTE: you can use this for help - https://sequelize.org/master/manual/model-querying-basics.html
// TODO: GET ALL USERS
router.get('/', (req, res, next) => {
  models.user.findAll()
  .then(users => {
    res.send(users);
  });
});

// TODO: GET SPECIFIC USER
router.get('/:id', (req, res, next) => {
  const id = +req.params.id;
  models.user.findByPk(id)
  .then(user => {
    res.send(user);
  });
});

// TODO: UPDATE SPECIFIC USER
router.put('/:id', (req, res, next) => {
  const id = +req.params.id;
  const { password, name, email, info } = req.body;

  models.user.findByPk(id)
  .then(user => {
    return user?.update({ email, password, name, info });
  }).then(updatedUser => res.send(updatedUser));
});

// TODO: CREATE USER
router.post('/', (req, res, next) => {  
  const { password, name, email, info } = req.body;

  models.user.create({ email, password, name, info })
    .then(createdUser => res.send(createdUser))
});

export { router };