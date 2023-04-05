const express=  require('express');
const router = express.Router()
const { getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController')
const { protect } = require('../middleware/auth')

router.route('/').get(protect, getWorkout).post(protect, createWorkout)

router.route('/:id').delete(protect, deleteWorkout).put(protect, updateWorkout)



module.exports = router