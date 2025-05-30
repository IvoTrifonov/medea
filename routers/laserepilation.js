const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.laserepilation.get.laserepilation);

module.exports = router;