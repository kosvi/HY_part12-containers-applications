const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

/* GET index data. */
router.get('/', async (req, res) => {
  visits = await redis.getAsync('visits') 
  visits++
  await redis.setAsync('visits', visits)

  res.send({
    ...configs,
    visits
  });
});

module.exports = router;
