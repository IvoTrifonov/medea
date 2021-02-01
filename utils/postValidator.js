const { body } = require('express-validator');

module.exports = [
    body('title', 'Title should be at least 3 symbols!')
    .isLength({
        min: 3
    })
    .isAlphanumeric(),
    body('description', 'Description should be alphanumeric and min 50 characters!')
    .isLength({
        min: 50
    })
    .isAlphanumeric(),
    body('imageUrl')
    .custom((value) => {
        if (!value.startsWith('https')) {
            throw new Error('Image url should start with https!')
        }
        return true;
    })
];