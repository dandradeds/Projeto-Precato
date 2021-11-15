const express = require('express');
const router = express.Router()
const CreateCredores = require('../Controllers/Credor/Create.Credores')
const SelectCredores = require('../Controllers/Credor/Select.Credores')


router.route("/credores")
    .post(CreateCredores.CreateCredores)

router.route("/credores/:id")
.get(SelectCredores.SelectByIdCredores)

router.route("/credores")
.get(SelectCredores.SelectAllCredores)

module.exports = router