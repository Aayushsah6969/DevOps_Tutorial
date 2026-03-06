const express = require('express');
const router = express.Router();
const config = require('../config/env');

router.get('/', (req, res) => {
  res.status(200).json({
    version: config.version,
    environment: config.nodeEnv,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;