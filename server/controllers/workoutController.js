const asyncHandler = require('express-async-handler')
const Workout = require('../models/workoutModel')


// Gets Workouts
const getWorkout = asyncHandler(async (req, res) => {
    const workouts = await Workout.find()
    res.status(200).json(workouts)
})


//Creates workouts
const createWorkout = asyncHandler(async (req, res) => {


    if (!req.body.exercise) {
        res.status(400)
        throw new Error('Please add a exercise')
    }else if (!req.body.weight){
        res.status(400)
        throw new Error('Please add a weight')
    }else if (!req.body.reps){
        res.status(400)
        throw new Error('Please add reps')
    }

    const workout = await Workout.create({
        exercise: req.body.exercise,
        weight: req.body.weight,
        reps: req.body.reps
    })

    res.status(200).json({
        workout
    })
})


const updateWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400)
        throw new Error('Workout not found')
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedWorkout)
})


const deleteWorkout = asyncHandler(async (req, res) => {
    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400) 
        throw new Error('Workout not found')
    }

    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedWorkout)
})

module.exports = {
    getWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}