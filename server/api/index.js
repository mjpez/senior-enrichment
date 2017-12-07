'use strict'
const apiRouter = require('express').Router()
const {Campus, Student} = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

apiRouter.get('/campuses', (req, res, next) => {
  return Campus.findAll()
    .then(CampusList => {
      res.send(CampusList)
    })
    .catch(next)
})

apiRouter.get('/students', (req, res, next) => {
  return Student.findAll()
    .then(StudentList => {
      res.send(StudentList)
    })
    .catch(next)
})
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
