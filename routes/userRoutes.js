const express = require('express');
const router = express.Router();
const User = require('../models/user');

// TO GET ALL THE USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// TO POST A NEW USER
router.post('/', async (req, res) => {
    
});

// PUT A NEW USER USING AN ID
router.put('/:id', async (req, res) => {
    
});

// DELTE A USER USING AN ID
router.delete('/:id', async (req, res) => {
    
});

module.exports = router;
