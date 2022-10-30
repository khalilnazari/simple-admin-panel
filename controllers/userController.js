const User = require("../model/User")
const CryptoJS = require("crypto-js")

// create new user
const createUser = async (req, res) => {
    const { password, email, firstName } = req.body

    // check required fields
    if (!firstName || !email) {
        return res.status(400).json({ message: "firstName and email are rquired fields." })
    }

    // check existing user
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "A user with same email address is already exist!" })
        }
    } catch (error) {
        console.log(error)
    }

    // enctypt password
    const encryptedPass = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
    req.body.password = encryptedPass

    // save new user
    try {
        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
}

// fetch one user
const fetchUser = async (req, res) => {
    // Get id from URL
    const { id } = req.params

    // Fetch
    try {
        const user = await User.findById(id)
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

// fetch users
const fetchUsers = async (req, res) => {
    // Fetch
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
