const User = require("../model/User")
const CryptoJS = require("crypto-js")

const INTERNAL_ERROR_MESSAGE = "Internal server error. Please contact engineering team."
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
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
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
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
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
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
        console.log(err)
    }
}

// fetch users
const fetchUsers = async (req, res) => {
    // Fetch
    try {
        const users = await User.find()
        console.log(users)
        res.status(201).json(users)
    } catch (err) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
        console.log(err)
    }
}

const updareUser = async (req, res) => {
    const { firstName, email, password } = req.body
    const { id } = req.params

    // check required fields
    if (!firstName) {
        return res.status(400).json({ message: "firstName and email are rquired fields." })
    }

    // check existing user
    if (email) {
        try {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                return res
                    .status(400)
                    .json({ message: "A user with same email address is already exist!" })
            }
        } catch (error) {
            res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
            console.log(error)
        }
    }

    if (password) {
        const encryptedPass = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
        req.body.password = encryptedPass
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
        console.log(error)
    }
}

// delete user
const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const response = await User.findByIdAndDelete(id)
        res.status(201).json({ message: "User had been deleted successfully!", response })
    } catch (error) {
        res.status(500).json({ message: INTERNAL_ERROR_MESSAGE })
        console.log(error)
    }
}

module.exports = {
    createUser,
    fetchUsers,
    fetchUser,
    updareUser,
    deleteUser
}
