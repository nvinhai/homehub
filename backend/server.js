/*
HomeHub Server
Author: Vincent Nguyen
*/

const url = '';

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(url);
mongoose.connection.on('error', console.error.bind(console,'Connection error: '));
mongoose.connection.once('open', function(){
    console.log("Connected.")
});

var userSchema = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    rating: Number
});

userSchema.methods.getName = () => this.name;

var User = mongoose.model('User', userSchema)

var Jeff = new User({
    name: "Jeff",
    username: "Jeffy",
    password: "imjeff1",
    admin: true,
    rating: 5
});

console.log(Jeff.getName());
module.exports = User;

