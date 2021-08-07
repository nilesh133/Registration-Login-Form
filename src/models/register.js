const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },

        lastname: {
            type: String,
            required: true
        },

        username: {
            type: String,
            required: true,
            unique: true
        },

        phone: {
            type: Number,
            required: true,
            unique: true
        },

        email: {
            type: String,
            required: true,
        },

        age:{
            type: Number,
            required: true
        },

        password: {
            type: String,
            required: true,
        },

        confirmpassword: {
            type: String,
            required: true,
            unique: true
        }
    }
)

const Register = new mongoose.model("Register", studentSchema);
module.exports = Register;
