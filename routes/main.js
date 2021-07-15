const express = require('express');
const { Server } = require('http');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('main')
});

module.exports = router;