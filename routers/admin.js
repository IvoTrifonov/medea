const controllers = require('../controllers');
const auth = require('../utils/auth');
const router = require('express').Router();

router.get('/', auth(), controllers.admin.get.admin);
router.get('/login', controllers.admin.get.login);
router.get('/logout', auth(), controllers.admin.get.logout);
router.get('/posts', auth(), controllers.admin.get.posts);
router.get('/posts/create', auth(), controllers.admin.get.createPost);
router.get('/posts/edit/:id', auth(), controllers.admin.get.editPost);
router.get('/posts/delete/:id', auth(), controllers.admin.get.deletePost);
router.get('/promotion/create', auth(), controllers.admin.get.createPromotion);

router.post('/login', controllers.admin.post.login);
// router.post('/register', controllers.admin.post.register);
router.post('/posts/create', auth(), controllers.admin.post.createPost);
router.post('/posts/edit/:id', auth(), controllers.admin.post.editPost);
router.post('/promotion/create', auth(), controllers.admin.post.createPromotion);

module.exports = router;
