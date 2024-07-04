const router = require('./routes');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const post = 5000;
const { MongoClient } = require('mongodb');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));
app.use(cors())
app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/BANKING-SYSTEM',{
    // useNewUrlParses: true,
    // serverSelectionTimeoutMS: 30000,
})

app.listen(post, () => {
    console.log(`Example app listening at http://localhost:${post}`)
})

