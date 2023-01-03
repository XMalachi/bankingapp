const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express()

const PORT =  process.env.PORT || 5000

// connect to DBB and start server
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on Port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})
