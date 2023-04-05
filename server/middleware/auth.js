const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token from header and uses split to get the token (the token is the 2nd index)
            token = req.headers.authorization.split(' ')[1]

            // verify the token uses json web token verify method
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Finds user using decoded object and uses select to exclude the password
            req.user = await User.findById(decoded.id).select('-password')

            next()


        }catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    // if token doesn't exist
    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { protect }