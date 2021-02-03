const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const compression = require('compression')
const cors = require('cors');

module.exports = (app) => {
  app.engine('hbs', handlebars({
    layoutsDir: 'views',
    defaultLayout: 'main-layout',
    partialsDir: 'views/partials',
    extname: 'hbs',
  }));

  app.set('view engine', 'hbs');
  app.use(express.static(path.join(__dirname + '/../static')));
  app.use(cookieParser());

  // if (process.env.NODE_ENV === 'production') {
  //   app.use((req, res, next) => {
  //     if (req.header('x-forwarded-proto') !== 'https')
  //       res.redirect(`https://${req.header('host')}${req.url}`)
  //     else
  //       next()
  //   })
  // }

  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
}