var path = require('path');
var moment = require('moment-timezone');
const router = require('express').Router();

// ********** WARNING: DO NOT CHANGE THE ORDER OF THE CODE BELOW, IT MATTERS HERE **********

// Routing to the entry point for the entire webpage
router.get('*', 
    (req, res) => {
        res.sendFile(path.resolve(__dirname, '../index.html'));
    }
);

module.exports = router;
