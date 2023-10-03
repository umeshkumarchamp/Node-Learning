const controller = require('../controller/UserController');
const router = require('express').Router();

router.get('/users', controller.getUsers);
router.get('/users/:id', controller.getUserById);
router.post('/users/add', controller.createUser);
router.put('/users/update/:userId', controller.updateUser);
router.delete('/users/delete/:userId', controller.deleteUser);