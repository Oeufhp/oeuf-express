// Main v1 router
const express = require('express');
const router = express.Router();
const user_router = require('./user_router');

router.use('/user', user_router)

module.exports = router;