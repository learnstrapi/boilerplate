/**
 * Parameterized Routing with next-route
 *
 * Benefits: Less code, and easily handles complex url structures
 **/
let routes = (module.exports = require('next-routes')())

routes.add('blog/entry', '/blog/:id')
