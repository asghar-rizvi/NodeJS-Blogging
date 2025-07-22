require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkAuthentication } = require('./middleware/authentication');

const app = express();
const PORT = process.env.PORT || 8000;

//DB SETUP
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

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

app.get('/checkInstnace/checkContainerInstance', (req, res) => {
  res.send(`Hello from ${process.env.HOSTNAME || "unknown instance"}!`);
});




app.listen(PORT, ()=>{console.log('Server Started at ',PORT)})