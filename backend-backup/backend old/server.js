/*
HomeHub Server
Author: Vincent Nguyen
Updated: Jan 13th 2018
*/

const express = require('express');
const bodyParser = require('body-parser');

//initialize express app
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("Port is listening to port #" + port)
});

