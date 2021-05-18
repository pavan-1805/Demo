const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true
        
    },
    password : {
        type : String,
        required : true
    }
});
const User = new mongoose.model('user', userSchema);

module.exports = User;