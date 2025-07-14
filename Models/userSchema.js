const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    dateOfBirth: {type: String, required: true},
    stateOfOrigin: {type: String, required: true}
//  role: {}

}, {timeStamps: true })



const User = mongoose.model("User", userSchema)




module.exports = User