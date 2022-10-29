const User = require("../model/User")
const CryptoJS = require("crypto-js")

// create new user
const createUser = async (req, res) => {
    const { password } = req.body

    // enctypt password
    const encryptedPass = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
    req.body.password = encryptedPass

    res.status(201).json(req.body)
    return
    // new user
    const newUser = new User(req.body)

    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

// fetch one user
const fetchUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

// fetch users
const fetchUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createUser,
    fetchUsers,
    fetchUser
}
