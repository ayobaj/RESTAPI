const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: 'bowwow442@gnail.com',
    email: 'lotteryticket',
});

const user = mongoose.model('user', userSchema);

module.exports = user;
