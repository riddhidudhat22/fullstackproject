const mongoose = require('mongoose');

const usersScheema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
            unique: true,
            lowercase: true
        },
        Address: {
            type: String,
            require: true
        },
        phone_no: {
            type: Number,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        role: {
            type: String,
            require: true
        },
        // refreshtoken: {

        // },
        isActive: {
            type: Boolean,
            default: true,

        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Users = mongoose.model('Users', usersScheema);

module.exports = Users;