const controllers = require('../controllers');
const auth = require('../utils/auth');
const router = require('express').Router();

router.get('/apiURLandSecret', auth(), controllers.cloudinary.get.cloudinaryUrlAndSecret);

module.exports = router;
