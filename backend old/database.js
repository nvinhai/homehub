/*
HomeHub Database
Author: Vincent Nguyen
Updated: Jan 13th 2018
*/


const url = 'mongodb://nvinhai:starterhacks2019@ds155714.mlab.com:55714/homehub';

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

var User = mongoose.model('User', userSchema)

module.exports = User;
