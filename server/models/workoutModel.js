const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user"
        },
        exercise: {
            type: String,
            required: [true, "please add a exercise"]
        },
        weight: {
            type: Number,
            required: [true, "please add weight"]
        },
        reps: {
            type: Number,
            required: [true, "please add reps"]
        }
        
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('workout' , workoutSchema)