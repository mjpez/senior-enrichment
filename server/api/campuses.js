const campusRouter = require('express').Router()
const Campus = require('../db/models/Campus')

module.exports = campusRouter

campusRouter.get('/', (req, res, next) => {
  return Campus.findAll()
    .then(CampusList => {
      res.send(CampusList)
    })
    .catch(next)
})
