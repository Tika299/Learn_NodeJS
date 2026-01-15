const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
  app.get('/', siteRouter)

  app.get('/news', newsRouter)
}

module.exports = route
