const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users.route')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/users', userRouter);

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/views/index.html"));
});


// Client error handler
app.use('*', (req, res, next) => {
    res.status(404).json({message: "route not found"});
    next();
})

// Server error handler
app.use('*', (err, req, res, next) => {
    console.error(err);

    // Respond with an error message
    res.status(500).json({ error: 'Server Error' });
})

module.exports = app;