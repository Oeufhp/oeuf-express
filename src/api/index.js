// Main router
const express = require('express');
const router = express.Router();
const route_v1 = require('./v1')

router.use('/v1', route_v1);

module.exports = router;