const express=  require('express');
const router = express.Router()
const { getUser, createUser, loginUser } = require('../controllers/userController')


router.post('/', createUser)

router.post('/login', loginUser)

router.get('/me', getUser)







module.exports = router