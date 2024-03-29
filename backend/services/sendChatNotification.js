const admin = require("firebase-admin");
const User = require("../models/User");

const sendChatNotification = async (receiverId, title, body) => {
    try {
        const receiver = await getUserById(receiverId);
        const message = {
            notification: {
                title: title,
                body: body,
            },
            android: {
                notification: {
                    sound: "default",
                },
                data: {
                    title: title,
                    body: body,
                },
            },
            token: receiver.deviceToken,
        };
        const response = await admin.messaging().send(message);
        console.log("Successfully sent message:", response);
    } catch (error) {
        console.error("Error sending message:", error.message);
        throw error;
    }
}

const getUserById = async (userId) => {
    try {
        const user = await User.findById({ _id: userId })
        return user;
    } catch (error) {
        console.log({ error });
        throw new Error("Error in getting FCM Token")
    }
}

module.exports = {
    sendChatNotification
}