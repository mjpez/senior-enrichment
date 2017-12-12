const router = require('express').Router()
const Campus = require('../db/models/Campus')

router.get('/', (req, res, next) => {
  return Campus.findAll()
  .then(CampusList => {
    res.send(CampusList)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  return Campus.create(req.body)
    .then(campus => {
      res.send(campus)
    })
    .catch(next)
})

router.get('/:campusId', (req, res, next) => {
  return Campus.findById(req.params.campusId)
    .then(campus => {
      res.send(campus)
    })
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
  return Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
    .then(numRows => Campus.findAll())
    .then(campuses => {
      res.send(campuses)
    })
    .catch(next)
})

module.exports = router
