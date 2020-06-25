const css = require('../controllers/css.controller');
const express = require('express')

module.exports = app => {
    let router = express.Router()


    router.get('/', css.getAllCss)
    // router.get('/:id', css.getCssById)
    // router.get('/tags', css.getTags)
    // router.get('/tags/:id', css.getTagsById)
    // router.get('/values', css.getvalues)
    // router.get('/values/:id', css.getvaluesById)

    app.use('/css', router)
}