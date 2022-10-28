const router = require("express").Router()
const { createUser } = require("../controllers/userController")

// create user
router.post("/", createUser)

//

module.exports = router
