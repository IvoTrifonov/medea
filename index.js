require('./config/database')().then(() => {
  const config = require('./config/config');
  const app = require('express')();

  require('./config/express')(app);
  require('./config/routers')(app);

  app.listen(config.port, console.log(`App running on port ${config.port}`));
})