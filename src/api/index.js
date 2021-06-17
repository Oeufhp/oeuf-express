// Main router
const express = require('express');
const router = express.Router();
const route_v1 = require('./v1');
const error_handler_middleware = require('./middlewares/error_handler');

router.use('/v1', route_v1);
router.use(error_handler_middleware);

module.exports = router;