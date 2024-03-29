const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            lowercase: true,
            required: [true, 'Please enter a userName'],
            match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: [true, 'Please enter an email'],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            trim: true,
            unique: true,
        },
        photoURL: {
            type: String,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password.'],
        },
        deviceToken: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;