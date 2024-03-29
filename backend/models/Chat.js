const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        receiverId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        textMessage: {
            type: String,
            required: true
        },
        isRead: {
            type: Boolean,
            default: false,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;