const express = require('express')
const indexRoutes = require('./routes/index.routes')
const app = express()



app.use('/', indexRoutes)



module.exports = app