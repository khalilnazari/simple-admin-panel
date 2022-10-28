// create new user
const createUser = (req, res) => {
    console.log(req.body)
    setTimeout(() => {
        res.status(200).json(req.body)
    }, 2000)
}

module.exports = {
    createUser
}
