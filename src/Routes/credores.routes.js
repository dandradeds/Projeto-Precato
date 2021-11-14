const express = require('express');
const router = express.Router()
const CreateCredores = require('../Controllers/Credor/Create.Credores')

router.route("/credores")
    .post(CreateCredores.CreateCredores)

module.exports = router