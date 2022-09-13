const express = require('express')
const hbs = require('hbs')
const userRoute = require('./routes/user.route')

const PORT = 3004
const app = express()


app.use(express.urlencoded({extended:true}))


app.set('view engine', 'hbs')
app.set('views', './frontend/views')
hbs.registerPartials('./frontend/layouts')

app.use(userRoute)

app.listen(PORT, ()=>console.log(`Starting at http://localhost:${PORT}`))