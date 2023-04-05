const express=  require('express');
const router = express.Router()
const { getUser, createUser, loginUser } = require('../controllers/userController')
const { protect } = require('../middleware/auth')


router.post('/', createUser)

router.post('/login', loginUser)

router.get('/me', protect, getUser)







module.exports = router