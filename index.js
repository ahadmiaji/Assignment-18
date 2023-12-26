const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: "./dotenv.config" });


const app = require('./app');
const PORT = process.env.PORT || 5000;




let URI = `mongodb://127.0.0.1:27017/Assignment_18`
let OPTION = { user: "", pass: "", autoIndex: true }
mongoose
    .connect(URI, OPTION)
    .then(() => console.log("Database is Connected ."))
    .catch((err) => console.log(err))

