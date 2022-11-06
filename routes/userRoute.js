const router = require("express").Router()
const {
    createUser,
    fetchUsers,
    fetchUser,
    updareUser,
    deleteUser
} = require("../controllers/userController")

// create user
router.post("/", createUser)

// fetch all users
router.get("/", fetchUsers)

// fetch one user
router.get("/find/:id", fetchUser)

// update user
router.put("/:id", updareUser)

// delete user
router.delete("/:id", deleteUser)

module.exports = router
