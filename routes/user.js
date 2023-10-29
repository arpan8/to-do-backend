const express = require('express');
const router = express.Router();

const { addUser } = require('../controllers/user');
const { createUser } = require('../validation/user');

router.post('/sign-up', createUser, addUser);


module.exports = router;