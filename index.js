const express = require('express')
const badyParse = require('body-parser')
const userRoute = require('./routes/userRoutes')

const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(badyParse.urlencoded({ extended: false }))
const port = 3000

userRoute(app)
app.get('/', (req, res) => res.send('acessando api'))

app.listen(port, () => console.log('API rodando na porta ' + port))