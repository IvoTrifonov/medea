const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.saltroom.get.saltroom);

module.exports = router;