const asyncHandler = require('express-async-handler')


// Gets Workouts
const getWorkout = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `got workouts`
    })
})


//Creates workouts
const createWorkout = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a workout')
    }

    res.status(200).json({
        message: `created workout`
    })
})


const updateWorkout = asyncHandler(async (req, res) =>{
    res.status(200).json({
        message: `update workout ${req.params.id}`
    })
})


const deleteWorkout = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `deleted workout ${req.params.id}`
    })
})

module.exports = {
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}