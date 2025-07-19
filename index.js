const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;


//DB SETUP
mongoose.connect('mongodb://127.0.0.1:27017/BlogForAll').then(()=>{console.log('MONGO DB CONNECTED')})

//EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

//middleWares
app.use(express.urlencoded({ urlencoded:false }));

//Routes
const routerBlog = require('./routes/blog');
const routerUser = require('./routes/users');

app.use('/', routerBlog);
app.use('/user', routerUser);



app.listen(PORT, ()=>{console.log('Server Started')})