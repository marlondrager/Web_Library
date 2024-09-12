const express = require('express');
const mongoose = require('mongoose');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1:27017/MyLibrary")

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', pageRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});