module.exports = {
  get: {
    procedures: (req, res) => res.render('procedures', { pageTitle: 'Процедури' }),
    faceTherapies: (req, res) => res.render('faceTherapies', { pageTitle: 'Лице' }),
    bodyTherapies: (req, res, next) => res.render('bodyTherapies', { pageTitle: 'Тяло' }),
    eyelashes: (req, res) => res.render('eyelashes', { pageTitle: 'Мигли' }),
  }
}