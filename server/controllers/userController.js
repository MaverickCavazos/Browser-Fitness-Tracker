const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const createUser = asyncHandler(async (req, res) => {

    //check input to make sure all fields have a value
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }


    //checks if user already exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }


    // Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        username,
        email,
        password: hashedPass
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user information')
    }

})



const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

const getUser = asyncHandler(async (req, res) => {

    const { _id, username, email } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        username,
        email
    })
})


//Make JWT token
const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    )
}

module.exports = {
    createUser,
    loginUser,
    getUser

}