const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.news.get.news);
router.get('/:id', controllers.news.get.postById);

module.exports = router;