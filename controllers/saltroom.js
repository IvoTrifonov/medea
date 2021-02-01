module.exports = {
  get: {
    saltroom: (req, res, next) => res.render('saltroom', { pageTitle: 'Солна стая' })
  }
}