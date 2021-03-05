// Dependencies
const express = require('express')
const methodOverride = require('method-override')


//config
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3333


// middleware
// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))


//home route
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})
