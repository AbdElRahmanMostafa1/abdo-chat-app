require('dotenv').config();
require('./config/db');
const express = require("express")
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require("cors");
var bodyParser = require('body-parser');
const Chat = require('./models/Chat');
const { sendChatNotification } = require('./services/sendChatNotification');
require('./firebase/index')

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(cors());
app.use(bodyParser.json())

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/messages', require('./routes/chatRoutes'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Event Name
    socket.on("chat message", async (chatMsg) => {
        console.log({ chatMsg });
        const newChat = new Chat(chatMsg)
        try {
            await newChat.save();
            await sendChatNotification(newChat.receiverId, "NEW MESSAGE", newChat.textMessage)
        } catch (error) {
            console.log("error");
        }

        // Emit Event
        io.emit('chat message', newChat);
    })
});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`))