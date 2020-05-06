//database user : zhichengchen
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');

//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//connect to mongoDB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true },
    () => console.log('connected to DB')
);

// middleware
app.use(express.json());
//route middleware
app.use('/api/user', authRoute); //means everything in the authRoute has '/api/user' prefix
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log('Server Up and Running!'));

