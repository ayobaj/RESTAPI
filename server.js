const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,})

.then(()=> {
    console.log('mongodb connected')
})
.catch(err => console.log('error, try again!', err));


// CREATING OF THE REQUIRED ROUTES
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
