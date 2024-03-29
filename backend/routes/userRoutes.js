const router = require('express').Router()
const {
    registerUser,
    loginUser,
    getAllUsers,
    getMe,
    getUser
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// Routes 
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', protect, getAllUsers)
router.get('/me', protect, getMe)
router.get('/:userName', protect, getUser)

module.exports = router;