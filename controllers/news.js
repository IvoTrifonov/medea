const models = require('../models');
const getFormattedDate = require('../static/helpers/getFormattedDate');

module.exports = {
  get: {
    news: (req, res) => {
     models.Post.find().sort({ createdAt: -1 }).then(data => {
      
      const posts = data.map(post => {
        const shortDesc = post.description.substring(0, 230);
      
        return {
          id: post._id,
          title: post.title,
          description: shortDesc.substring(0, shortDesc.lastIndexOf('.') + 1),
          imageURL: post.imageURL.replace(/^http:\/\//i, 'https://'),
          createdAt: getFormattedDate(post.createdAt, '/')
        }
      })

      res.render('news', { pageTitle: 'Актуално', posts });
     }) 
      
    },
    postById: (req, res) => {
      const id = req.params.id;

      models.Post.findOne({ _id: id })
        .then(data => {
          const post = {
            title: data.title,
            description: data.description.split(/\n\s*\n/),
            imageURL: data.imageURL.replace(/^http:\/\//i, 'https://'),
          }

          res.render('post', { pageTitle: 'Новина', post });
        }).catch(err => res.render('404', { pageTitle: '404 - Страницата не е открита' }))
    }
  }
}