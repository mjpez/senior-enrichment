const router = require('express').Router()
const Student = require('../db/models/Student')

router.get('/', (req, res, next) => {
  return Student.findAll({
    include: [{
      all: true
    }]
  })
    .then(studentList => {
      res.send(studentList)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  return Student.create(req.body)
    .then(student => {
    res.send(student)
    })
    .catch(next)
})

router.get('/:studentId', (req, res, next) => {
  return Student.findById(req.params.studentId)
    .then(student => {
      res.send(student)
    })
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
  return Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(numRows => Student.findAll())
    .then(campuses => {
      res.send(students)
    })
    .catch(next)
})


module.exports = router
