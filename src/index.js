const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const connection = require('./Database/config')

const Pagamentos = require('./Model/Pagamentos')
const PagamentosRoutes = require('./Routes/pagamentos.routes')

const Devedor = require('./Model/Devedor')
const DevedorRoutes = require('./Routes/devedores.routes')

const Credores = require('./Model/Credor')
const CredoresRoutes = require('./Routes/credores.routes')

const db = require('./Model')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', PagamentosRoutes)
app.use('/', CredoresRoutes)
app.use('/', DevedorRoutes)

 
app.listen(8080, () => {
    console.log('rodou')
})
