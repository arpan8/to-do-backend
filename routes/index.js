const express = require('express');
const router = express.Router();

router.use('/user', require('./user/user'));

module.exports = router;