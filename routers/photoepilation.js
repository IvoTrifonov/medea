const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.photoepilation.get.photoepilation);

module.exports = router;