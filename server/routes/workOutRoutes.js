const express=  require('express');
const router = express.Router()
const { getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../controllers/workoutController')


router.route('/').get(getWorkout).post(createWorkout)

router.route('/:id').delete(deleteWorkout).put(updateWorkout)



module.exports = router