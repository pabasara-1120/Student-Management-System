const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    
});

const studentRouter = require('./routes/students.js');

app.use("/students",studentRouter);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB connection success!");
})

app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})