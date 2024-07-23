
const express = require('express')
const route = require('./routes/api/v1/index');
const connectDB = require('./db/mongoosedb');
const cors = require('cors')
const  cookieParser = require('cookie-parser')

const app = express()
 
app.use(cors())
app.use(express.json());
app.use(cookieParser())

connectDB();

app.use("/api/v1/", route);

app.listen(8000, () => {
    console.log("server start at port 8000.");
});

