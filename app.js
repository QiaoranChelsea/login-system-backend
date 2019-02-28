const express = require('express');
const app = express();
const mongoose = require('mongoose');
const accountRoutes = require('./api/routes/account');


// This is the minimum needed to connect the myapp database running locally on the default port (27017). 
// for more infomation: check doc https://mongoosejs.com/docs/connections.html
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.use('/account', accountRoutes);

module.exports = app;