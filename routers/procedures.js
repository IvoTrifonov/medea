const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.procedures.get.procedures);
router.get('/facetherapies', controllers.procedures.get.faceTherapies);
router.get('/bodyTherapies', controllers.procedures.get.bodyTherapies);
router.get('/eyelashes', controllers.procedures.get.eyelashes);
module.exports = router;