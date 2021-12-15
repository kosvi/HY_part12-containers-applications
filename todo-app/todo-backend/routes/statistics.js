const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  const counter = await redis.getAsync('todoCounter') || 0
  res.json({added_todos: counter});
});

module.exports = router;
