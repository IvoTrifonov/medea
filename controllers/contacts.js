module.exports = {
  get: {
    contacts: (req, res) => res.render('contacts.hbs', { pageTitle: 'Контакти' })
  }
}