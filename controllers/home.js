const models = require('../models');
const getFormattedDate = require('../static/helpers/getFormattedDate');

module.exports = {
  get: {
    home: (req, res) => {
      models.Post.find().sort({
          createdAt: -1
        }).limit(1)
        .then(data => {
          const latestPost = data[0];

          const post = {
            title: latestPost.title,
            description: latestPost.description.split(/\n\s*\n/),
            imageURL: latestPost.imageURL
          }

          models.Promotion.find()
            .then(promotions => {
              let promotion = promotions[0];

              promotion = {
                title: promotion.title,
                oldPrice: promotion.oldPrice,
                newPrice: promotion.newPrice,
                validFrom: getFormattedDate(promotion.validFrom, '.'),
                validTo: getFormattedDate(promotion.validTo, '.')
              }
            
              res.render('home', {
                pageTitle: 'Начало',
                post,
                promotion
              });
            })
        })
    }
  }
}
