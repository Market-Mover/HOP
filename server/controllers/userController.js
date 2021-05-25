const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);
router.post('/order', userModel.saveOrder);
router.post('/orders', userModel.getOrder);




module.exports = router;