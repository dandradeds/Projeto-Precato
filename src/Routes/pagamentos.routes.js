const express = require('express');
const router = express.Router()
const CreatePagamentos = require('../Controllers/Pagamentos/Create.Pagamentos')

router.route("/pagamentos")
    .post(CreatePagamentos.CreatePagamentos)

module.exports = router
