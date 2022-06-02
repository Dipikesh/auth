const express = require('express');
const router = express.Router();




router.use('/api/auth', require('./auth.routes'));


module.exports = router;