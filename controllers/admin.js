const models = require('../models');
const jwt = require('../utils/jwt');
const config = require('../config/config');
const getFormattedDate = require('../static/helpers/getFormattedDate');

module.exports = {
  get: {
    admin: (req, res) => res.redirect('/admin/posts'),
    login: (req, res) => res.render('login', { pageTitle: 'Вход'}),
    logout: (req, res) => {
      res.clearCookie("x-auth-token");
      res.redirect('/');
    },
    posts: (req, res) => {
      models.Post.find().sort({ createdAt: -1 })
        .then(posts => {

          posts = posts.map(post => {
            return {
              title: post.title,
              description: post.description.split(/\n\s*\n/),
              imageURL: post.imageURL,
              createdAt: getFormattedDate(post.createdAt, '/'),
              id: post._id
            }
          })

          res.render('adminPosts', {
            pageTitle: 'Статии',
            posts,
            postsLength: posts.length
          });
        })
    },
    createPost: (req, res) => res.render('createPost', { pageTitle: 'Статия' }),
    editPost: (req, res) => {
      const id = req.params.id;

      models.Post.findOne({ '_id': id })
        .then(post => {
          res.render('editPost', {
            pageTitle: 'Редактирай',
            post: {
              title: post.title,
              description: post.description,
              imageURL: post.imageURL,
              createdAt: post.createdAt,
              id: post._id
            }
          })
        }).catch(err => res.render('404', { pageTitle: '404 - Страницата не е открита' }))
    },
    deletePost: (req, res) => {
      const id = req.params.id;

      models.Post.findByIdAndRemove(id)
        .then(() => {
          res.redirect('/admin/posts');
        }).catch(err => res.render('404', { pageTitle: '404 - Страницата не е открита' }));
    },
    createPromotion: (req, res) => res.render('createPromotion', { pageTitle: 'Промоция' })
  },
  post: {
    login: (req, res) => {
      const {
        username,
        password
      } = req.body;

      models.User.findOne({
        username
      }).then(user => {
        user.matchPassword(password).then(match => {
          if (!match) {
            throw new Error('wrong password');
          }

          const token = jwt.createToken({
            id: user._id
          });

          res.clearCookie("x-auth-token");
          res.cookie(config.cookie, token).redirect('/admin');

        }).catch(err => res.render('login.hbs', {
          username,
          message: 'Грешни инициали!'
        }))
      }).catch(err => res.render('login.hbs', {
        username,
        message: 'Грешни инициали!'
      }));
    },
    register: (req, res) => {
      const {
        username,
        password
      } = req.body;

      models.User.create({
        username,
        password
      }).then(res.redirect('/admin'));
    },
    createPost: (req, res) => {
      const {
        title,
        description,
        imageURL
      } = req.body;

      models.Post.create({
        title,
        description,
        imageURL,
        createdAt: new Date()
      }).then(res.redirect('/admin/posts'));
    },
    editPost: (req, res) => {
      const id = req.params.id;

      models.Post.updateOne({
          '_id': id
        }, req.body)
        .then(res.redirect('/admin/posts'));
    },
    createPromotion: (req, res) => {
      const { title, oldPrice, newPrice, validFrom, validTo} = req.body;
      +oldPrice;
      +newPrice;

      models.Promotion.remove({}, function() {});

      models.Promotion.create({
        title,
        oldPrice,
        newPrice,
        validFrom,
        validTo
      }).then(res.redirect('/admin'));
    }
  }
}