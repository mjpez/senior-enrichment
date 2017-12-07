const studentRouter = require('express').Router()
const Student = require('../db/models/Student')

module.exports = studentRouter

studentRouter.get('/', (req, res, next) => {
  return Student.findAll()
    .then(StudentList => {
      res.send(StudentList)
    })
    .catch(next)
})
