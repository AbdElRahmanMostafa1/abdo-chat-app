const router = require('express').Router({ mergeParams: true });
const {
    createMessage, getMessages, getConnectedUser, getOldMsg
} = require('../controllers/chatController')
const { protect } = require('../middleware/authMiddleware')

// Routes
router.route('/')
    .get(protect, getMessages)
    .post(protect, createMessage)
router.post("/getOldMsg", protect, getOldMsg);
module.exports = router;