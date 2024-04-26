const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const userRoute = require('./routes/users')
const blockRoute = require('./routes/blocks')
const mongoose = require('mongoose'); 

dotenv.config({path : './config.env'});
app.use(express.json())

app.use(cors())
//MongoDB Setup
mongoose.connect(process.env.DATABASE ,{useUnifiedTopology : true , useNewUrlParser : true,useCreateIndex: true})

const db = mongoose.connection

db.on('error',error => console.error(error))
db.once('open',()=>{console.log('Database is connected')})

app.use(userRoute)
app.use('/blockchain',blockRoute)

app.listen(process.env.PORT,()=>{
    console.log("Server is listening");
})