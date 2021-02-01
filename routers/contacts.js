const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.contacts.get.contacts);

module.exports = router;