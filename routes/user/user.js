const express = require('express');
const router = express.Router();

const user = require('../../controllers/user/user');
const validateUser = require('../../controllers/user/validateUser');

router.post('/addupdate', validateUser.validate, user.addUser);


module.exports = router;