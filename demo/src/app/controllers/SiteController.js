const Course = require('../models/Course')

class SiteController {
  // [GET] /news
  async index(req, res, next) {
    try {
      const courses = await Course.find({}) // Không cần callback nữa
      res.render('home', {
        title: 'Home Page',
        courses: courses.map((course) => course.toObject()),
      })
    } catch (err) {
      next(err)
      res.status(400).json({ error: 'ERROR!!!', message: err.message })
    }
  }

  // [GET] /news/:slug
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
