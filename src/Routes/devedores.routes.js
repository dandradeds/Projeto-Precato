const express = require('express');
const router = express.Router()
const CreateDevedores = require('../Controllers/Devedor/Create.Devedores')

router.route("/devedores")
    .post(CreateDevedores.CreateDevedores)

module.exports = router