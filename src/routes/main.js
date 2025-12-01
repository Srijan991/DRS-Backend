const express = require("express");
const router = express.Router()


const controllerRoute = require("../controllers/controller")

router.get("/", controllerRoute.getHealth)

module.exports = router