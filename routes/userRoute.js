const router = require("express").Router()
const { createUser, fetchUsers, fetchUser } = require("../controllers/userController")

// create user
router.post("/", createUser)

// fetch all users
router.get("/", fetchUsers)

// fetch one user
router.get("/:id", fetchUser)

module.exports = router
