const express = require('express');
const router = express.Router();
const user = require('../models/user');

// TO GET ALL THE USERS
router.get('/', async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// THE POST METHOD FOR A NEW USER
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new user({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    });


// PUT A NEW USER USING AN ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
        } catch (err) {
        res.status(400).json({ message: err.message });
        }
    });


// DELTE A USER USING AN ID

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {

        const deletedUser = await user.findByIdAndDelete(id);

    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
    } catch (err) {
      // Handle errors
    res.status(500).json({ message: err.message });
    }
});


module.exports = router;
