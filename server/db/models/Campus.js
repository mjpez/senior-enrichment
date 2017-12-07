const db = require('../index');
const Sequelize = require('sequelize')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_mars.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus
