const express = require('express');
const router = require('../router/router');
const app = express();

// use middleware
app.use(express.json()); // req.body.firstName
app.use(express.urlencoded({ extended: true })); 

//use middleware for cors
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
    }
    next();
});

//default actuator - http://localhost:3001
app.get("/", (req,res,next) => {
    res.status(200).json({message: 'Service is up'});
});

// http://localhost:3001/example
app.use('/example', router);
//app.use('/users', userRouter);
//app.use('/inventory', inventoryRouter);
//Routers shouldn't be the same

//use middleware to handle errors or bad paths
app.use((req,res,next) => {
    const error = new Error("Url Not Found");
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

module.exports = app;
