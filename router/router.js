const express = require('express');
const router = express.Router();

// http://localhost:3000/example/get
router.get("/get", (req, res) =>{
    res.status(200).json({
        message: "Using GET", 
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

//by ID
router.get("/get/:id", (req, res) =>{
    const id = req.params.id;

    res.status(200).json({
        message: "Using GET by ID", 
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});
//postman 
//GET localhost:3001/example/get/id
//send
//should return status above
//same for POST or PATCH

//post returns 201 status NOT 200




module.exports = router;