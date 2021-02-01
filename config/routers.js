const routers = require('../routers');

module.exports = (app) => {
  app.use('/', routers.home);
  app.use('/photoepilation', routers.photoepilation);
  app.use('/contacts', routers.contacts);
  app.use('/procedures', routers.procedures);
  app.use('/saltroom', routers.saltroom);
  app.use('/news', routers.news);
  app.use('/admin', routers.admin);
  app.use('/cloudinary', routers.cloudinary);
  
  app.use('*', (req, res, next) => {
    res.render('404', { pageTitle: '404 - Страницата не е открита' });
  });
}