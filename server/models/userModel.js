const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add a Username"]
        },
        email: {
            type: String,
            required: [true, "Please add a email"],
            unique: true 
        },
        password: {
            type: String,
            required: [true, "please add a password"]
        }
        
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('user' , userSchema)