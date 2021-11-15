const express = require('express');
const router = express.Router()
const CreateDevedores = require('../Controllers/Devedor/Create.Devedores')
const SelectDevedores = require('../Controllers/Devedor/Select.Devedores')

router.route("/devedores")
    .post(CreateDevedores.CreateDevedores)

router.route("/devedores/:id")
.get(SelectDevedores.SelectByIdDevedores)

router.route("/devedores")
.get(SelectDevedores.SelectallDevedores)

module.exports = router