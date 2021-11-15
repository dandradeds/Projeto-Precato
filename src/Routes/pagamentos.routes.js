const express = require('express');
const router = express.Router()
const CreatePagamentos = require('../Controllers/Pagamentos/Create.Pagamentos')
const SelectPagamentos = require('../Controllers/Pagamentos/Select.Pagamentos')

router.route("/pagamentos")
    .post(CreatePagamentos.CreatePagamentos)

router.route("/Pagamentos/:id")
.get(SelectPagamentos.SelectByIdPagamentos)

router.route("/Pagamentos")
.get(SelectPagamentos.SelectallPagamentos)

module.exports = router
