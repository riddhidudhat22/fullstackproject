const express = require('express')
const route = require('./routes/api/v1/index');
const connectDB = require('./db/mongoosedb');
const cors = require('cors')
const  cookieParser = require('cookie-parser');
const passport = require('passport');
// const { fecebookprovider } = require('./utils/provider');
const {goggleprovider} = require('./utils/provider');

const app = express()
 
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(require('express-session')({ secret: 'riddhi22', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

connectDB();
goggleprovider();
// fecebookprovider()

app.use("/api/v1/", route);

app.listen(8000, () => {
    console.log("server start at port 8000.");
});
