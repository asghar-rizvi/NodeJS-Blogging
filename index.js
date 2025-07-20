const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkAuthentication } = require('./middleware/authentication');

const app = express();
const PORT = 8000;


//DB SETUP
mongoose.connect('mongodb://127.0.0.1:27017/BlogForAll').then(()=>{console.log('MONGO DB CONNECTED')})

//EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

//middleWares
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(express.urlencoded({ urlencoded:false }));
app.use(cookieParser());
app.use(checkAuthentication("token"));
app.use(express.static(path.resolve('./public')));

//Routes
const routerBlog = require('./routes/blog');
const routerUser = require('./routes/users');

app.use('/', routerBlog);
app.use('/user', routerUser);



app.listen(PORT, ()=>{console.log('Server Started')})